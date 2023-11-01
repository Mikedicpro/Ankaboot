package com.miu.eventtrackerapi.integration;

import java.time.Duration;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Properties;
import java.util.UUID;
import java.util.function.Predicate;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.serializer.JsonDeserializer;


public class KafkaChannel<T> {
    @Value("${spring.kafka.bootstrap-servers:localhost:9092}")
    private String bootstrapServer;
    private String topic;
    private Duration duration;
    @Autowired
    private KafkaTemplate<String, T> kafkaTemplate;  
    KafkaConsumer<String, T> consumer;

    public KafkaChannel(String topic, Duration duration){
        this.topic = topic;
        this.duration = duration;
        
    }
    public List<T> getAll(){       
        Properties consumerProperties = new Properties();
        consumerProperties.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        consumerProperties.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        consumerProperties.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
        consumerProperties.put(ConsumerConfig.GROUP_ID_CONFIG, UUID.randomUUID().toString());
        consumerProperties.put(JsonDeserializer.TRUSTED_PACKAGES, "*");
        consumerProperties.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");
        consumer = new KafkaConsumer<>(consumerProperties);
        consumer.subscribe(Arrays.asList(topic)); 
        consumer.seekToBeginning(consumer.assignment());
        List<T> payloads = new ArrayList<>();
        while (true) {
            ConsumerRecords<String, T> records = consumer.poll(duration);
            for (ConsumerRecord<String, T> record : records) {
                payloads.add(record.value());
            }
            if(records.isEmpty())
            break;
        }
        consumer.close();
        Collections.reverse(payloads);
        return payloads;
    }

    public void send(T record){
        kafkaTemplate.send(topic, record);
    }

    public T findBy(Predicate<T> predicate){
        var records = getAll();  
        return records.stream().filter(predicate).findFirst()
                .orElseThrow(() -> new EntityNotFoundException());
    }
}

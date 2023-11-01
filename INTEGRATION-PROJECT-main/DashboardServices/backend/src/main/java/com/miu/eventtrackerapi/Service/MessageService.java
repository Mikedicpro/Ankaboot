// package com.miu.eventtrackerapi.Service;


// import com.fasterxml.jackson.core.JsonProcessingException;
// import com.fasterxml.jackson.databind.JsonNode;
// import com.fasterxml.jackson.databind.ObjectMapper;
// import com.miu.eventtrackerapi.entities.DataApi;
// import org.apache.kafka.clients.consumer.Consumer;
// import org.apache.kafka.clients.consumer.ConsumerRecords;
// import org.springframework.boot.json.JsonParserFactory;
// import org.springframework.kafka.core.ConsumerFactory;
// import org.springframework.stereotype.Service;

// import java.time.Duration;
// import java.util.*;

// @Service
// public class MessageService {

//     private final ConsumerFactory<String, String> consumerFactory;

//     public MessageService(ConsumerFactory<String, String> consumerFactory) {
//         this.consumerFactory = consumerFactory;
//     }

//     public Collection<DataApi> getMessagesFromTopic(String topicName) {
//         try {
//             return retriever.getAllFromTopic(topicName, Duration.ofSeconds(1));
//         } catch (Exception e) {
//             e.printStackTrace();
//             return null;
//         }
//     }
// }

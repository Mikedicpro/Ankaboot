package com.miu.eventtrackerapi.integration;

import java.time.Duration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.miu.eventtrackerapi.entities.DataApi;

@Component
public class HealthyApiChannel extends KafkaChannel<DataApi> {
    @Value("${integration.channel.healthy:healthyapi}")
    private static String topic;
    @Value("${integration.channel.duration:1000}")
    private static int duration; // in milliseconds

    // application is not picking the above properties from application.properties

    public HealthyApiChannel() {
        super("healthyapi", Duration.ofMillis(1000));
    }
}

package com.miu.eventtrackerapi.integration;

import java.time.Duration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.miu.eventtrackerapi.entities.DataApi;

@Component
public class UnsureApiChannel extends KafkaChannel<DataApi> {
    @Value("${integration.channel.unsureapi:unsureapi}")
    private static String topic;
    @Value("${integration.channel.duration:1000}")
    private static int duration; // in milliseconds

    public UnsureApiChannel() {
        super("unsureapi", Duration.ofMillis(1000));
    }
}

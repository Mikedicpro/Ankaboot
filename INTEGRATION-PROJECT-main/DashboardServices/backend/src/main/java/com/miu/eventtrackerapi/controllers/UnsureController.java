package com.miu.eventtrackerapi.controllers;

import com.miu.eventtrackerapi.Service.DataApiService;
import com.miu.eventtrackerapi.entities.DataApi;
import com.miu.eventtrackerapi.entities.Message;
import com.miu.eventtrackerapi.integration.HealthyApiChannel;
import com.miu.eventtrackerapi.integration.UnsureApiChannel;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.PageImpl;

import java.time.Duration;
import java.util.Arrays;
import javax.xml.crypto.Data;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@RestController
@RequestMapping("/unsure")
public class UnsureController {
    @Autowired
    private DataApiService service;

    @GetMapping
    public Page<DataApi> getAll(Pageable pageable) {
        var items = service.getUnsureApiList();
        PageRequest pageRequest = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize()); 
        Page<DataApi> page = new PageImpl<>(items, pageRequest, items.size());
        return page;
    }

    @GetMapping("/{id}")
    DataApi getOne(@PathVariable int id) {
        var api = service.findHealthyById(id);  
        return api;
    }

    @PutMapping("/{id}/allow")
    DataApi update(@PathVariable int id){
        var api = service.findUnsureById(id); 
        api.setHealthy(true);
        service.post(api);
        return api;
    }

    @PostMapping
    DataApi create(@RequestBody DataApi api) {
        service.post(api);
        return api;
    }
}

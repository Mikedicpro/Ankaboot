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
@RequestMapping("/healthy")
public class HealthyController {
    @Autowired
    private DataApiService service;

    @GetMapping
    public Page<DataApi> getAll(Pageable pageable){
        int pageNum = pageable.getPageNumber();        
        int pageSize = pageable.getPageSize();
        var list = service.getHealthyApiList();
        var items = service.getHealthyApiList().stream()
            .skip(pageNum * pageSize)
            .limit(pageSize)
            .toList();
        PageRequest pageRequest = PageRequest.of(pageNum, pageSize); 
        Page<DataApi> page = new PageImpl<>(items, pageRequest, list.size());
        return page;
    }

    @GetMapping("/{id}")
    DataApi getDataApi(@PathVariable int id) {
        var healthyList = service.getHealthyApiList();  
        return healthyList.stream().filter(api->api.getId()==id).findFirst()
                .orElseThrow(() -> new EntityNotFoundException("DataApiService id="+id));
    }

    @PutMapping("/{id}/disallow")
    DataApi updateDataApi(@PathVariable int id){
        var api = service.findHealthyById(id);
        api.setHealthy(false);
        service.post(api);
        return null;
    }

    @PostMapping
    DataApi addDataApi(@RequestBody DataApi api) {
        return service.post(api);
    }
}


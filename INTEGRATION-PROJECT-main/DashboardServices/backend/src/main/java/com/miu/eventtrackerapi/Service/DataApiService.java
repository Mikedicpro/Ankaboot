package com.miu.eventtrackerapi.Service;

import com.miu.eventtrackerapi.entities.DataApi;
import com.miu.eventtrackerapi.integration.HealthyApiChannel;
import com.miu.eventtrackerapi.integration.UnsureApiChannel;

import jakarta.persistence.EntityNotFoundException;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DataApiService {
    @Autowired
    private HealthyApiChannel healthyChannel;
    @Autowired
    private UnsureApiChannel unsureChannel;

    public List<DataApi> getHealthyApiList(){
        var list = healthyChannel.getAll();
        var distinct = list.stream().collect(Collectors.toMap(DataApi::getUrl, p -> p, (p, q) -> p)).values();
        return distinct.stream().toList();
    }

    public DataApi findHealthyById(int id){
        var list = getUnsureApiList(); 
        return list.stream().filter(api->api.getId()==id).findFirst()
                .orElseThrow(() -> new EntityNotFoundException("Healthy API id="+id));
    }

    public DataApi findUnsureById(int id){
        var list = getUnsureApiList(); 
        return list.stream().filter(api->api.getId()==id).findFirst()
                .orElseThrow(() -> new EntityNotFoundException("Unsure API id="+id));
    }
 
    public List<DataApi> getUnsureApiList(){
        var excludedList = getHealthyApiList();
        var list = unsureChannel.getAll();
        var remaining = list.stream()
            .filter(e->!excludedList.stream().anyMatch(o->o.getUrl().equals(e.getUrl())))
            .collect(Collectors.toMap(DataApi::getUrl, p -> p, (p, q) -> p)).values()
            .stream().toList();
        return remaining;
    }

    public DataApi post(DataApi api) {
        api.setId(api.getUrl().hashCode());
        if(api.getId() == null)
            api.setId(api.getUrl().hashCode());
        if(api.isHealthy())
            healthyChannel.send(api);
        else
            unsureChannel.send(api);
        return api;
    }
}

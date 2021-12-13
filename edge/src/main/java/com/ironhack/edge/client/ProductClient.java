package com.ironhack.edge.client;

import com.ironhack.edge.dto.NewDto;
import com.ironhack.edge.model.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@FeignClient("product-service")
public interface ProductClient {

    @GetMapping("/all")
    List<Product> getAll();

    @GetMapping("/all/available")
    List<Long> getAllAvailable();

    @PostMapping("/addproduct")
    void addNewProduct(@RequestBody NewDto newDto);
}

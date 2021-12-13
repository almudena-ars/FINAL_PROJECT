package com.ironhack.edge.client;

import com.ironhack.edge.dto.CartDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@FeignClient("cart-service")
public interface CartClient {

    @PostMapping("/addcart")
    void addToCart(@RequestBody CartDTO cartDTO);
}

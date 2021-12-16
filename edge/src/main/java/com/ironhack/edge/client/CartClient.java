package com.ironhack.edge.client;

import com.ironhack.edge.dto.CartDTO;
import com.ironhack.edge.model.Cart;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient("cart-service")
public interface CartClient {

    @PostMapping("/addcart")
    void addToCart(@RequestBody CartDTO cartDTO);

    @GetMapping("/cartbyuser")
    List<Cart> getByUser(@RequestParam Long userId);

    @DeleteMapping("/deletebyuser")
    void deleteByUser(@RequestParam Long userId);
}

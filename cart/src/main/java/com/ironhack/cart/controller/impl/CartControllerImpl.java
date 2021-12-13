package com.ironhack.cart.controller.impl;

import com.ironhack.cart.controller.interfaces.CartController;
import com.ironhack.cart.dto.CartDTO;
import com.ironhack.cart.service.interfaces.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class CartControllerImpl implements CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/addcart")
    @ResponseStatus(HttpStatus.OK)
    public Long addToCart(@RequestBody CartDTO cartDTO){
        return cartService.addToCart(cartDTO);
    }

    /*@DeleteMapping("/deleteproduct")
    @ResponseStatus(HttpStatus.OK)
    public void deleteProduct(@Request)*/
}

package com.ironhack.edge.controller.imple;


import com.ironhack.edge.controller.interfaces.CartController;
import com.ironhack.edge.dto.CartDTO;
import com.ironhack.edge.service.interfaces.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CartControllerImpl implements CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/addcart")
    @ResponseStatus(HttpStatus.OK)
    public void addToCart(@RequestBody CartDTO cartDTO){
        cartService.addToCart(cartDTO);
    }
}

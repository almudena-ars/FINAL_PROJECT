package com.ironhack.edge.service.impl;


import com.ironhack.edge.client.CartClient;
import com.ironhack.edge.dto.CartDTO;
import com.ironhack.edge.service.interfaces.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartClient cartClient;

    public void addToCart(CartDTO cartDTO){
        cartClient.addToCart(cartDTO);
    }

}

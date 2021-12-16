package com.ironhack.edge.service.impl;


import com.ironhack.edge.client.CartClient;
import com.ironhack.edge.dto.CartDTO;
import com.ironhack.edge.model.Cart;
import com.ironhack.edge.service.interfaces.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartClient cartClient;

    public void addToCart(CartDTO cartDTO){
        cartClient.addToCart(cartDTO);
    }

    public List<Cart> getByUser(Long userId) {
        return cartClient.getByUser(userId);
    }

    public void deleteByUser(Long userId) {
        cartClient.deleteByUser(userId);
    }

}

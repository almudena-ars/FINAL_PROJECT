package com.ironhack.cart.service.impl;

import com.ironhack.cart.dto.CartDTO;
import com.ironhack.cart.model.Cart;
import com.ironhack.cart.repository.CartRepository;
import com.ironhack.cart.service.interfaces.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    public Long addToCart(CartDTO cartDTO){
        Cart cart = new Cart(cartDTO.getUserId(), cartDTO.getProductId());
        cartRepository.save(cart);
        return cart.getId();
    }

}

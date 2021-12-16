package com.ironhack.cart.service.interfaces;

import com.ironhack.cart.dto.CartDTO;
import com.ironhack.cart.model.Cart;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface CartService {
    Long addToCart(CartDTO cartDTO);
    List<Cart> getByUser(Long userId);
    void deleteByUser(Long userId);
}

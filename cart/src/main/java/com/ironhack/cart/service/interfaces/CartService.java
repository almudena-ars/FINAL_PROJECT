package com.ironhack.cart.service.interfaces;

import com.ironhack.cart.dto.CartDTO;
import org.springframework.web.bind.annotation.RequestBody;

public interface CartService {
    Long addToCart(CartDTO cartDTO);
}

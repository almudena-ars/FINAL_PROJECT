package com.ironhack.edge.service.interfaces;


import com.ironhack.edge.dto.CartDTO;
import com.ironhack.edge.model.Cart;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;

public interface CartService {
    void addToCart(CartDTO cartDTO);
    List<Cart> getByUser(Long userId);
    void deleteByUser(Long userId);
}

package com.ironhack.product.service.interfaces;

import com.ironhack.product.dto.NewDto;
import com.ironhack.product.dto.ProductDTO;
import com.ironhack.product.model.Product;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface ProductService {

    List<Product> getAll();
    List<Long> getAllAvailable();
    void addNewProduct(NewDto newDto);
}

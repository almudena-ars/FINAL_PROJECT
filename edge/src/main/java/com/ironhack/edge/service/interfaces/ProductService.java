package com.ironhack.edge.service.interfaces;

import com.ironhack.edge.dto.NewDto;
import com.ironhack.edge.dto.ProductDTO;
import com.ironhack.edge.model.Product;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface ProductService {

    List<Product> getAll();
    List<Long> getAllAvailable();
    void addNewProduct(NewDto newDto);
}

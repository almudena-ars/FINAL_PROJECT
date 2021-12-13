package com.ironhack.edge.service.impl;

import com.ironhack.edge.client.ProductClient;
import com.ironhack.edge.dto.NewDto;
import com.ironhack.edge.dto.ProductDTO;
import com.ironhack.edge.model.Product;
import com.ironhack.edge.service.interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductClient productClient;

    public List<Product> getAll() {
        return productClient.getAll();
    }

    public List<Long> getAllAvailable() {
        return productClient.getAllAvailable();
    }

    public void addNewProduct(NewDto newDto) {
        productClient.addNewProduct(newDto);
    }
}

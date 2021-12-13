package com.ironhack.product.service.impl;

import com.ironhack.product.dto.NewDto;
import com.ironhack.product.dto.ProductDTO;
import com.ironhack.product.model.Product;
import com.ironhack.product.repository.ProductRepository;
import com.ironhack.product.service.interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;
    public List<Product> getAll() {
        return productRepository.findAll();

    }

    public List<Long> getAllAvailable() {
        List<Product> available = productRepository.findByQuantityGreaterThan(0);
        List<Long> availableIds = new ArrayList<>();
        for(int i = 0; i < available.size(); i++){
            availableIds.add(available.get(i).getId());
        }
        return availableIds;
    }

    public void addNewProduct(NewDto newDto) {
        Optional<Product> optionalProduct = productRepository.findById(newDto.getId());
        Product product;
        product = optionalProduct.map(value -> new Product(value.getId(), value.getQuantity() + 1)).orElseGet(() -> new Product(newDto.getId(), 1));
        productRepository.save(product);

    }
}

package com.ironhack.product.controller.impl;

import com.ironhack.product.controller.interfaces.ProductController;
import com.ironhack.product.dto.NewDto;
import com.ironhack.product.dto.ProductDTO;
import com.ironhack.product.model.Product;
import com.ironhack.product.service.interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductControllerImpl implements ProductController {

    @Autowired
    private ProductService productService;


    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<Product> getAll(){
        return productService.getAll();
    }

    @GetMapping("/all/available")
    @ResponseStatus(HttpStatus.OK)
    public List<Long> getAllAvailable(){
        return productService.getAllAvailable();
    }

    @PostMapping("/addproduct")
    @ResponseStatus(HttpStatus.OK)
    public void addNewProduct(@RequestBody NewDto newDto){
        productService.addNewProduct(newDto);
    }
}

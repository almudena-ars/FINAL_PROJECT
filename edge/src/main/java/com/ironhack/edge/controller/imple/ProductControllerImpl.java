package com.ironhack.edge.controller.imple;

import com.ironhack.edge.controller.interfaces.ProductController;
import com.ironhack.edge.dto.NewDto;
import com.ironhack.edge.dto.ProductDTO;
import com.ironhack.edge.model.Product;
import com.ironhack.edge.service.interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProductControllerImpl implements ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/all")
    public List<Product> getAllProducts(){
        return productService.getAll();
    }

    @GetMapping("/all/available")
    public List<Long> getAllAvailableProducts(){
        return productService.getAllAvailable();
    }

    @PostMapping("/addproduct")
    public void addNewProduct(@RequestBody NewDto newDto){
        productService.addNewProduct(newDto);
    }
}

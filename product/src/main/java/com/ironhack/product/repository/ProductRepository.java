package com.ironhack.product.repository;

import com.ironhack.product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository <Product, Long> {

    //@Query("SELECT p.id FROM product p WHERE p.quantity >: num")
    //List<Long> findAllAvailable(@Param("num") int number);
    //where x.age > ?1
    //@Query("SELECT id FROM product WHERE quantity > ?0")
    List<Product> findByQuantityGreaterThan(int quantity);
}

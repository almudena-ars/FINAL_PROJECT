package com.ironhack.edge.dto;

public class ProductDTO {
    private Long id;
    private int quantity;

    public ProductDTO() {
    }

    public ProductDTO(Long id, int quantity) {
        this.id = id;
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}

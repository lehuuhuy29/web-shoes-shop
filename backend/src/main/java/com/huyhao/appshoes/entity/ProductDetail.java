package com.huyhao.appshoes.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDetail extends BaseEntity{

    private double originalPrice;
    private double salePrice;
    private int quantity;
    private Boolean status;
    private boolean active;

    @ManyToOne()
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @ManyToOne()
    @JoinColumn(name = "size_id", nullable = false)
    private Size size;

    @ManyToOne()
    @JoinColumn(name = "color_id", nullable = false)
    private Color color;
}
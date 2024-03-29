package com.huyhao.appshoes.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;


@Entity
@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class Product extends BaseEntity{
    private String name;
    @Column(length = 10000)
    private String description;
    private double originalPrice;

    @ManyToOne()
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @OneToMany(mappedBy = "product")
    private List<ProductDetail> productDetailList;

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<WishList> wishList;

    @OneToMany(mappedBy = "product")
    private List<Rate> rateList;

    private boolean active;
}

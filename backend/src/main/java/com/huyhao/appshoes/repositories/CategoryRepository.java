package com.huyhao.appshoes.repositories;

import com.huyhao.appshoes.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {
    Category findByName(String name);

    Optional<Category> findByIdAndActiveTrue(Long id);
}

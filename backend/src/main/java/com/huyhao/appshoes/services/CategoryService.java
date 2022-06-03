package com.huyhao.appshoes.services;

import com.huyhao.appshoes.entity.Category;
import com.huyhao.appshoes.repositories.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public Category createCategory(Category category){
        return categoryRepository.save(category);
    }

    public List<Category> getAllCategoryList(){
        return categoryRepository.findAll();
    }

    public boolean findById(int categoryId) {
        return categoryRepository.findById(categoryId).isPresent();
    }
}
package com.ingeun.web.service;

import java.util.List;

import com.ingeun.web.domain.CategoryDTO;

import org.springframework.stereotype.Component;

/**
 * CustomerService
 */
@Component
public interface CategoryService {
    public void InsertCategory(CategoryDTO category);
    public List<CategoryDTO> selectCategolise();
    public List<CategoryDTO> selectCategoliseByword();
    public CategoryDTO selectcategoryBycategoryID();
    public void updateCategory(CategoryDTO category);
    public void deleteCategory(CategoryDTO category);
    
}
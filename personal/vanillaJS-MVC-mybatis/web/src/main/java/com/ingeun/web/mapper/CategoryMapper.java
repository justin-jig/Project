package com.ingeun.web.mapper;

import java.util.List;
import java.util.Locale.Category;

import com.ingeun.web.domain.CategoryDTO;

import org.springframework.stereotype.Repository;

/**
 * CustomerMapper
 */
@Repository
public interface CategoryMapper {
    public void insertCategory(CategoryDTO category);
    public List<CategoryDTO> selectCategories();
    public List<CategoryDTO> selectCategoriesByWord(CategoryDTO category);
    public CategoryDTO selectCategoryByCategoryId(String categoryId);
    public void updateCategory(CategoryDTO category);
    public void deleteCategory(CategoryDTO category);
    
    
}
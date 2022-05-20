package com.ingeun.web.serviceImql;

import java.util.List;

import com.ingeun.web.domain.CategoryDTO;
import com.ingeun.web.service.CategoryService;
import org.springframework.stereotype.Service;

/**
 * CustomerServiceImpl
 */
 
@Service
public class CategoryServiceImpl implements CategoryService {

    @Override
    public void InsertCategory(CategoryDTO category) {

    }

    @Override
    public List<CategoryDTO> selectCategolise() {
        return null;
    }

    @Override
    public List<CategoryDTO> selectCategoliseByword() {
        return null;
    }

    @Override
    public CategoryDTO selectcategoryBycategoryID() {
        return null;
    }

    @Override
    public void updateCategory(CategoryDTO category) {

    }

    @Override
    public void deleteCategory(CategoryDTO category) {

    }

    
}
package com.ingeun.web.service;

import java.util.List;

import com.ingeun.web.domain.ProductDTO;

import org.springframework.stereotype.Component;

/**
 * CustomerService
 */
@Component
public interface ProductService {
    public void addProduct(ProductDTO product);
    public List<ProductDTO> findProducts();
    public List<ProductDTO> findProductsByOption(ProductDTO option);
    public ProductDTO findProductByProductId(String productId);
    public void updateProduct(ProductDTO product);
    public void deleteProduct(ProductDTO product);
    
}
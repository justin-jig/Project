package com.ingeun.web.serviceImql;

import java.util.List;

import com.ingeun.web.domain.ProductDTO;
import com.ingeun.web.service.ProductService;

import org.springframework.stereotype.Service;

/**
 * CustomerServiceImpl
 */
@Service
public class ProductServiceImpl implements ProductService {

    @Override
    public void addProduct(ProductDTO product) {

    }

    @Override
    public List<ProductDTO> findProducts() {
        return null;
    }

    @Override
    public List<ProductDTO> findProductsByOption(ProductDTO option) {
        return null;
    }

    @Override
    public ProductDTO findProductByProductId(String productId) {
        return null;
    }

    @Override
    public void updateProduct(ProductDTO product) {

    }

    @Override
    public void deleteProduct(ProductDTO product) {

    }

    

   

  
}
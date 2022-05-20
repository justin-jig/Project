
package com.ingeun.web.mapper;

import java.util.List;

import com.ingeun.web.domain.ProductDTO;

import org.springframework.stereotype.Repository;

/**
 * CustomerMapper
 */

@Repository
public interface ProductMapper {

    public void InsertProduct(ProductDTO Product);
    public List<ProductDTO> selectProducts();
    public List<ProductDTO> selectProductsByword(ProductDTO option);
    public ProductDTO selectProductsByProductID(String ProductId);
    public void updateProduct(ProductDTO Product);
    public void deleteProduct(ProductDTO Product);
}
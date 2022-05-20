package com.ingeun.web.service;

import java.util.List;

import com.ingeun.web.domain.SupplierDTO;

import org.springframework.stereotype.Component;

/**
 * CustomerService
 */
@Component
public interface SupplierService {

    public void addSupplier(SupplierDTO supplier);
    public List<SupplierDTO> findSuppliers();
    public List<SupplierDTO> findSuppliersByOption(SupplierDTO option);
    public SupplierDTO findSupplierBySupplierId(String supplierId);
    public void updateSupplier(SupplierDTO supplier);
    public void deleteSupplier(SupplierDTO supplier);
    
}
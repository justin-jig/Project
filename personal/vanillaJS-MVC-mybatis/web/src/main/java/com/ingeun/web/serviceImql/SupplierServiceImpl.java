package com.ingeun.web.serviceImql;

import java.util.List;

import com.ingeun.web.domain.SupplierDTO;
import com.ingeun.web.service.SupplierService;

import org.springframework.stereotype.Service;

/**
 * CustomerServiceImpl
 */
@Service
public class SupplierServiceImpl implements SupplierService {

    @Override
    public void addSupplier(SupplierDTO supplier) {

    }

    @Override
    public List<SupplierDTO> findSuppliers() {
        return null;
    }

    @Override
    public List<SupplierDTO> findSuppliersByOption(SupplierDTO option) {
        return null;
    }

    @Override
    public SupplierDTO findSupplierBySupplierId(String supplierId) {
        return null;
    }

    @Override
    public void updateSupplier(SupplierDTO supplier) {

    }

    @Override
    public void deleteSupplier(SupplierDTO supplier) {

    }

   

    
}

package com.ingeun.web.mapper;

import java.util.List;
import com.ingeun.web.domain.SupplierDTO;
import org.springframework.stereotype.Repository;

/**
 * CustomerMapper
 */
@Repository
public interface SuppliersMapper {
    public void InsertSupplier(SupplierDTO Supplier);
    public List<SupplierDTO> slectSuppliers();
    public List<SupplierDTO> slectSuppliersByword(SupplierDTO option);
    public SupplierDTO slectSuppliersBySupplierID(String SupplierId);
    public void updateSupplier(SupplierDTO Supplier);
    public void deleteSupplier(SupplierDTO Supplier);
    
}


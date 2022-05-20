package com.ingeun.web.mapper;

import java.util.List;

import com.ingeun.web.common.utill.PageProxy;
import com.ingeun.web.domain.CustomerDTO;

import org.springframework.stereotype.Repository;

/**
 * CustomerMapper
 * 

 */
@Repository
public interface CustomerMapper {

    public void insertCustomer(CustomerDTO customer);
    public List<CustomerDTO> selectCustomers(PageProxy pxy);
    public List<CustomerDTO> selectCustomersByOption(CustomerDTO option);
    public CustomerDTO selectCustomerByCustomerId(String customerId);
    public void updateCustomer(CustomerDTO customer);
    public void deleteCustomer(String customer);
    public int selectCount();
    public CustomerDTO login(CustomerDTO customer);
    
}
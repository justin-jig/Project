package com.ingeun.web.serviceImql;

import java.util.List;

import com.ingeun.web.common.utill.PageProxy;
import com.ingeun.web.domain.CustomerDTO;
import com.ingeun.web.mapper.CustomerMapper;
import com.ingeun.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * CustomerServiceImpl
 */
@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    CustomerMapper customerMapper;

    @Override
    public void addCustomer(CustomerDTO customer) {

        customerMapper.insertCustomer(customer);
    }
    @Override
    public List<CustomerDTO> findCustomers(PageProxy pxy) {

        return customerMapper.selectCustomers(pxy);
    }

    @Override
    public List<CustomerDTO> findCustomersByOption(CustomerDTO option) {
        return null;
    }

    @Override
    public CustomerDTO findCustomerByCustomerId(String customerId) {
        return customerMapper.selectCustomerByCustomerId(customerId);
    }

    @Override
    public void updateCustomer(CustomerDTO customer) {
        customerMapper.updateCustomer(customer);
    }

    @Override
    public void deleteCustomer(String customer) {
        customerMapper.deleteCustomer(customer);
    }

    @Override
    public int countAll() {
        return customerMapper.selectCount();
    }

    @Override
    public CustomerDTO login(CustomerDTO customer) {
        System.out.println("컨트롤레어서 넘어온 ID:" + customer.getCustomerId());
        System.out.println("컨트롤레어서 넘어온 PASSWORD:" + customer.getPassword());
        System.out.println(customer);

        return customerMapper.login(customer);
    }

    

    

    

   



}
package com.ingeun.web.serviceImql;

import java.util.List;

import com.ingeun.web.domain.EmployeeDTO;
import com.ingeun.web.service.EmployeeService;

import org.springframework.stereotype.Service;

/**
 * CustomerServiceImpl
 */
@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Override
    public void addEmployee(EmployeeDTO employee) {

    }

    @Override
    public List<EmployeeDTO> findEmployees() {
        return null;
    }

    @Override
    public List<EmployeeDTO> findEmployeesByOption(EmployeeDTO option) {
        return null;
    }

    @Override
    public EmployeeDTO findEmployeeByEmployeeId(String employeeId) {
        return null;
    }

    @Override
    public void updateEmployee(EmployeeDTO employee) {

    }

    @Override
    public void deleteEmployee(EmployeeDTO employee) {

    }

    
    
}
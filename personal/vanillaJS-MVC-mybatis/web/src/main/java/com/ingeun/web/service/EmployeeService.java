package com.ingeun.web.service;

import java.util.List;

import com.ingeun.web.domain.EmployeeDTO;

import org.springframework.stereotype.Component;

/**
 * CustomerService
 */
@Component
public interface EmployeeService {

    public void addEmployee(EmployeeDTO employee);
    public List<EmployeeDTO> findEmployees();
    public List<EmployeeDTO> findEmployeesByOption(EmployeeDTO option);
    public EmployeeDTO findEmployeeByEmployeeId(String employeeId);
    public void updateEmployee(EmployeeDTO employee);
    public void deleteEmployee(EmployeeDTO employee);
}
package com.ingeun.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

/**
 * CustomerMapper
 * 
 * @param <EmployeeDTO>
 */
@Repository
public interface EmployeeMapper<EmployeeDTO> {

    public void insertEmployee(EmployeeDTO employee);
    public List<EmployeeDTO> selectEmployees();
    public List<EmployeeDTO> selectEmployeesByOption(EmployeeDTO option);
    public EmployeeDTO selectEmployeeByemployeeId(String employeeId);
    public void updateEmployee(EmployeeDTO employee);
    public void deleteEmployee(EmployeeDTO employee);
}

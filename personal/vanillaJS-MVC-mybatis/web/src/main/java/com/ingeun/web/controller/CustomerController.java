package com.ingeun.web.controller;

import java.util.HashMap;
import java.util.List;

import com.ingeun.web.common.utill.PageProxy;
import com.ingeun.web.common.utill.Printer;
import com.ingeun.web.domain.CustomerDTO;
import com.ingeun.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
/**
 * Rest 방식
 * 
 */
@RequestMapping("/customers")
@RestController //역활을 준다. 등록한다.  //객체와 객체를 주고받는다.
public class CustomerController{
    @Autowired CustomerService customerService;
    @Autowired CustomerDTO customer;
    @Autowired Printer p;
    @Autowired PageProxy pxy;

    @GetMapping("/page/{pageNum}")
    public List<CustomerDTO> list(@PathVariable String pageNum){
        HashMap<String,Object> map = new HashMap<>();
        map.put("totalCount", customerService.countAll());
        map.put("page_num", pageNum);
        map.put("page_size", "5");
        map.put("block_size", "5");
        pxy.excute(map);
        map.put("list",customerService.findCustomers(pxy));
        map.put("pxy",pxy);

        return (List<CustomerDTO>) map;
    }

    @PostMapping("")
    public HashMap<?,?> join(@RequestBody CustomerDTO param){
        customerService.addCustomer(param);
        HashMap<String,Object> map = new HashMap<>();
        map.clear();
        map.put("result","SUCCESS");
        return map; 
    }
    @GetMapping("/count")
    public String index()
    {
            System.out.println("CustomerController customer() 경로로 들어옴");
            int count = customerService.countAll();
            p.accept("람다가 출력한 고객정보 총인원"+count);
            return count + "";      
    }
    @GetMapping("{customerId}/{password}") //중괄호 해야지.
    public CustomerDTO login(@PathVariable("customerId")String id,@PathVariable("password")String pass)
    {  
        customer.setCustomerId(id);
        customer.setPassword(pass);
        System.out.println(customerService.login(customer));
         return  customerService.login(customer);//DTO값을 넘겨와야함.
    }   
    @GetMapping("/{customerId}") //관리자가 검색
    public CustomerDTO getCustomer(@PathVariable("customerId")String id){
        customer.setCustomerId(id);
        return customerService.findCustomerByCustomerId(id);
    }
    @PutMapping("/{customerId}")    //업데이트
    public CustomerDTO updateCustomer(@RequestBody CustomerDTO param){
        customerService.updateCustomer(param);
        System.out.println(param.toString());
        
        return customerService.findCustomerByCustomerId(param.getCustomerId());
    }
    @DeleteMapping("/{customerId}") // 딜리트
    public HashMap<?,?> deleteCustomer(@PathVariable("customerId")String id){
        customerService.deleteCustomer(id);
        HashMap<String,Object> map3 = new HashMap<>();
        map3.clear();
        map3.put("result","DELETE");
        return map3;

    }

    


    
}
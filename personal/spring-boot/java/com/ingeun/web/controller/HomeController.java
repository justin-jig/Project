package com.ingeun.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller //역활을 준다. 등록한다.
public class HomeController{

    @RequestMapping("/index")
    public String index()
    {
        System.out.println("루트 url 경로로 들어옴");

        return "index";
    }
    
}
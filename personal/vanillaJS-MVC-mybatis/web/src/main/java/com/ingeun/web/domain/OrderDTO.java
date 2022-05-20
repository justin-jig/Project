package com.ingeun.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;


/**
 * ProductsDAO
 */
@Data@Component@Lazy
public class OrderDTO {

    private String orderId,
    customerId,
    employeeId,
    orderDate,
    shipperId;

}
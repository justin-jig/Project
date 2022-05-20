
package com.ingeun.web.mapper;

import java.util.List;

import com.ingeun.web.domain.OrderDTO;

import org.springframework.stereotype.Repository;

/**
 * CustomerMapper
 */


@Repository
public interface OrderMapper {

    public void addOrder(OrderDTO order);
    public List<OrderDTO> selectOrders();
    public List<OrderDTO> selectOrdersByOption(OrderDTO option);
    public OrderDTO selectOrderByOrderId(String orderId);
    public void updateOrder(OrderDTO order);
    public void deleteOrder(OrderDTO order);
    
}

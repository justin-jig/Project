package com.ingeun.web.service;

import java.util.List;

import com.ingeun.web.domain.ShipperDTO;

import org.springframework.stereotype.Component;

/**
 * CustomerService
 * 
 * @param <ShippersDTO>
 */
@Component
public interface ShipperService<ShippersDTO> {

    public void addShipper(ShipperDTO shipper);
    public List<ShipperDTO> findShippers();
    public List<ShipperDTO> findShippersByOption(ShipperDTO option);
    public ShipperDTO findShipperByShipperId(String shipperId);
    public void updateShipper(ShipperDTO shipper);
    public void deleteShipper(ShipperDTO shipper);
}
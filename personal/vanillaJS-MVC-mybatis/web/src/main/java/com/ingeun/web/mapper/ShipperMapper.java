
package com.ingeun.web.mapper;

import java.util.List;

import com.ingeun.web.domain.ShipperDTO;

import org.springframework.stereotype.Repository;

/**
 * CustomerMapper
 * 
 * @param <ShippersDTO>
 */
@Repository
public interface ShipperMapper<ShippersDTO> {

    public void InsertShipper(ShipperDTO Shipper);
    public List<ShipperDTO> selectShippers();
    public List<ShipperDTO> selectShippersByword(ShipperDTO option);
    public ShipperDTO selectShippersByShipperID(String ShipperId);
    public void updateShipper(ShipperDTO Shipper);
    public void deleteShipper(ShipperDTO Shipper);
}
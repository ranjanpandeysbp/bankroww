import React from "react";
import { useParams } from "react-router-dom";
import "./bank-details.css";
function BankDetails() {
  const { ifsc } = useParams();
  console.log(ifsc);
  return (
    <div className="bank-details">
      <div className="bank-details-options">
        <div className="back-button">
          <i class="fi-rr-angle-left"></i>
          Back
        </div>
        <div>
          <i class="fi-rr-star"></i>
        </div>
      </div>

      <div className="bank-info">
        <div className="bank-name">State Bank of India</div>

        <div className="bank-branch">
          <label>Branch:</label>
          <label>Ghatkopar</label>
        </div>
        <div className="bank-ifsc">
          <label>IFSC:</label>
          <label>SBIN018836</label>
        </div>
        <div className="bank-bank-id">
          <label>Bank Id:</label>
          <label>12</label>
        </div>
        <div className="bank-address">
          <label>Address:</label>
          <label>Sainik Colony, Booty More, Ranchi</label>
        </div>
        <div className="bank-city">
          <label>City:</label>
          <label>Mumbai</label>
        </div>
        <div className="bank-district">
          <label>District:</label>
          <label>Shaghai</label>
        </div>
        <div className="bank-state">
          <label>State:</label>
          <label>Goa</label>
        </div>
      </div>
    </div>
  );
}

export default BankDetails;

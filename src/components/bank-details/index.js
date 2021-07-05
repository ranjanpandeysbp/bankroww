import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import "./bank-details.css";
import { connect } from "react-redux";

function BankDetails(props) {
  const { state } = useLocation();
  const bank = state ? state.data : undefined;
  const { goBack } = useHistory();
  const { ifsc } = useParams();
  const { favourites } = props;
  console.log(bank);
  const isFavourite = favourites.includes(ifsc);
  return (
    <div className="bank-details">
      <div className="bank-details-options">
        <div className="back-button " onClick={() => goBack()}>
          <i class="fi-rr-angle-left"></i>
          Back
        </div>
        {bank ? (
          isFavourite ? (
            <i class="fi-sr-star"></i>
          ) : (
            <i class="fi-rr-star"></i>
          )
        ) : null}
      </div>

      <div className="bank-info">
        <div className="details-heading">Bank Details</div>
        <div className="bank-info-card">
          {bank ? (
            <div>
              <div className="bank-name">{bank.bank_name}</div>
              <div className="bank-info-group">
                <div className="bank-branch branch-info-item">
                  <label>Branch:</label>
                  <label className="item-value">{bank.branch}</label>
                </div>
                <div className="bank-ifsc branch-info-item">
                  <label>IFSC:</label>
                  <label className="item-value">{bank.ifsc}</label>
                </div>
                <div className="bank-bank-id branch-info-item">
                  <label>Bank Id:</label>
                  <label className="item-value">{bank.bank_id}</label>
                </div>
              </div>
              <div className="bank-info-group">
                <div className="bank-city branch-info-item">
                  <label>City:</label>
                  <label className="item-value">{bank.city}</label>
                </div>
                <div className="bank-district branch-info-item">
                  <label>District:</label>
                  <label className="item-value">{bank.district}</label>
                </div>
                <div className="bank-state branch-info-item">
                  <label>State:</label>
                  <label className="item-value">{bank.state}</label>
                </div>
              </div>
              <div className="bank-address">
                <label>Address:</label>
                <label>{bank.address}</label>
              </div>
            </div>
          ) : (
            <div className="wrong-ifsc">
              <img
                className="wrong-ifsc-image"
                src="https://cdni.iconscout.com/illustration/premium/thumb/lost-in-space-3428241-2902698.png"
                alt="wrong-ifsc"
              />
              Oops! this bank doesn't exist in our directory. Please check the
              IFSC Code in the url
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ favourites, banks }) => {
  console.log(banks);
  return {
    list: banks.bankList,
    favourites: favourites.favIFSC,
  };
};
export default connect(mapStateToProps)(BankDetails);

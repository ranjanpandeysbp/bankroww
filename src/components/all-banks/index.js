import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllBanks } from "../../reduxstore/action/banks";
import BankTable from "../common/bank-table/bank-table";
import "./all-banks.css";
function AllBanks(props) {
  useEffect(() => {
    props.fetchAllBanks();
  }, []);
  return (
    <div className="all-banks">
      <label>ALl Banks</label>
      <div className="all-banks-table">
        <BankTable />
      </div>
    </div>
  );
}

const mapStateToProps = ({ banks }) => {
  console.log(banks);
  return {
    list: banks.bankList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBanks: () => dispatch(fetchAllBanks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllBanks);

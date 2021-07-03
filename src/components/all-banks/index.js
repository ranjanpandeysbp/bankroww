import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllBanks } from "../../reduxstore/action/banks";
import BankTable from "../common/bank-table/bank-table";
import "./all-banks.css";
function AllBanks(props) {
  const { list, isLoading, isError } = props;
  useEffect(() => {
    props.fetchAllBanks("MUMBAI");
  }, []);
  return (
    <div className="all-banks">
      <label>ALl Banks</label>
      <div className="all-banks-table">
        <BankTable
          list={list.slice(0, 10)}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
    </div>
  );
}

const mapStateToProps = ({ banks }) => {
  return {
    list: banks.bankList,
    isLoading: banks.isLoading,
    isError: banks.isError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBanks: (city) => dispatch(fetchAllBanks(city)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllBanks);

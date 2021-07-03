import React, { useEffect } from "react";
import { connect } from "react-redux";
import { dropdownCategories, dropdownCities } from "../../constants/banks";
import { fetchAllBanks } from "../../reduxstore/action/banks";
import BankTable from "../common/bank-table/bank-table";
import "./all-banks.css";
import Dropdown from "./dropdown/index";
function AllBanks(props) {
  const { list, isLoading, isError } = props;
  useEffect(() => {
    props.fetchAllBanks("MUMBAI");
  }, []);
  return (
    <div className="all-banks">
      <div className="all-banks-options">
        <div className="search">
          <input placeholder="Search banks by Name" />
          <i class="fi-rr-search"></i>
        </div>
        <div className="options-dropdown">
          <Dropdown options={dropdownCategories} />
          <Dropdown options={dropdownCities} />
        </div>
      </div>
      <div className="all-banks-table">
        <BankTable list={list} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  );
}

const mapStateToProps = ({ banks }) => {
  console.log(banks);
  return {
    list: banks.listToShow,
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

import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import {
  criteriaMap,
  dropdownCategories,
  dropdownCities,
} from "../../constants/banks";
import {
  changeCategory,
  fetchAllBanks,
  searchBanks,
} from "../../reduxstore/action/banks";
import BankTable from "./bank-table";
import "./all-banks.css";
import Dropdown from "./dropdown/index";
function AllBanks(props) {
  const {
    list,
    isLoading,
    isError,
    searchBanks,
    changeCategory,
    fetchAllBanks,
    searchCriteria,
    currentCity,
  } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const searchCategory = criteriaMap[searchCriteria];
  useEffect(() => {
    if (!list.length) fetchAllBanks("MUMBAI");
  }, []);
  useEffect(() => {
    setSearchQuery("");
  }, [searchCriteria]);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    searchBanks(e.target.value);
  };
  return (
    <div className="all-banks">
      <div className="all-banks-options">
        <div className="search">
          <input
            placeholder={`Search banks by ${searchCategory}`}
            value={searchQuery}
            onChange={(e) => handleSearch(e)}
          />
          <i class="fi-rr-search"></i>
        </div>
        <div className="options-dropdown">
          <div className="dropdown-parent">
            <label className="dropdown-title-label">Search Criteria</label>
            <Dropdown
              options={dropdownCategories}
              onSelect={changeCategory}
              toShow={searchCategory}
            />
          </div>
          <div className="dropdown-parent">
            <label className="dropdown-title-label">City</label>
            <Dropdown
              options={dropdownCities}
              onSelect={fetchAllBanks}
              toShow={currentCity}
            />
          </div>
        </div>
      </div>
      <div className="all-banks-table">
        <BankTable list={list} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  );
}

const mapStateToProps = ({ banks }) => {
  return {
    list: banks.listToShow,
    isLoading: banks.isLoading,
    isError: banks.isError,
    searchCriteria: banks.searchCriteria,
    currentCity: banks.currentCity,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBanks: (city) => dispatch(fetchAllBanks(city)),
    searchBanks: (query) => dispatch(searchBanks(query)),
    changeCategory: (cat) => dispatch(changeCategory(cat)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllBanks);

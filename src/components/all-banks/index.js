import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllBanks } from "../../reduxstore/action/banks";

function AllBanks(props) {
  useEffect(() => {
    props.fetchAllBanks();
  }, []);
  return <div>Hello</div>;
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

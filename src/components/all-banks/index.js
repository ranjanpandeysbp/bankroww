import React from "react";
import { connect } from "react-redux";

function AllBanks(props) {
  console.log(props);

  return <div>Hello</div>;
}

const mapStateToProps = ({ banks }) => {
  return {
    list: banks.bankList,
  };
};
export default connect(mapStateToProps)(AllBanks);

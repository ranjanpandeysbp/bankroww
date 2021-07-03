import React from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import { updatePage } from "../../../reduxstore/action/banks";
import "./pagination.css";
const PreviousButton = () => {
  return (
    <div className="prev-button button-center">
      <i class="fi-rr-angle-small-left"></i>
      <div className="btn-label">Previous</div>
    </div>
  );
};
const NextButton = () => {
  return (
    <div className="next-button button-center">
      <div className="btn-label">Next</div>
      <i class="fi-rr-angle-small-right"></i>
    </div>
  );
};
function Pagination(props) {
  const { updatePage, total } = props;

  const handlePageChange = (e) => {
    updatePage(e.selected + 1);
    window.scroll(0, 0);
  };
  return (
    <ReactPaginate
      previousLabel={<PreviousButton />}
      nextLabel={<NextButton />}
      breakLabel="..."
      pageCount={total}
      initialPage={0}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={(e) => handlePageChange(e)}
      containerClassName="pagination"
      activeClassName="active"
    />
  );
}
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(null, mapDispatchToProps)(Pagination);

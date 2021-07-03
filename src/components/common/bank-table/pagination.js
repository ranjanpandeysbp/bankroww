import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";
const PreviousButton = () => {
  return (
    <div className="prev-button">
      <i class="fi-rr-angle-small-left"></i>
      <div className="btn-label">Previous</div>
    </div>
  );
};
const NextButton = () => {
  return (
    <div className="next-button">
      <div className="btn-label">Next</div>
      <i class="fi-rr-angle-small-right"></i>
    </div>
  );
};
function Pagination() {
  const handleChange = (e) => {};
  return (
    <ReactPaginate
      previousLabel={<PreviousButton />}
      nextLabel={<NextButton />}
      breakLabel="..."
      pageCount={100}
      initialPage={0}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={(e) => handleChange(e)}
      containerClassName="pagination"
      activeClassName="active"
    />
  );
}

export default Pagination;

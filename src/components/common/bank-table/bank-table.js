import React from "react";
import "./bank-table.css";
import Loader from "./loader";
import ShowDropdown from "./show-dropdown";
import Pagination from "./pagination";
import { connect } from "react-redux";
import { updatePage, updateShowSize } from "../../../reduxstore/action/banks";

function BankTable(props) {
  const { list, isLoading, isError, updateShowSize, updatePage } = props;
  console.log(props);
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table">
          <div className="table-row">
            <div className="table-column add-favourite"></div>

            <div className="table-column bank-head">
              <div className="">BANK</div>
            </div>
            <div className="table-column ifsc-head">
              <div className="">IFSC</div>
            </div>
            <div className="table-column branch-head">
              <div className="">BRANCH</div>
            </div>
            <div className="table-column bank-id-head ">
              <div className="">BANK ID</div>
            </div>
            <div className="table-column address-head">
              <div className="">ADDRESS</div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-body">
        <div className="table">
          {isLoading ? (
            <div className="empty-table">
              <Loader />
            </div>
          ) : (
            <>
              {list.length ? (
                list.map((data) => {
                  return (
                    <div className="table-row">
                      <div className="table-column add-favourite">
                        <i class="fi-rr-star"></i>
                      </div>
                      <div className="table-column bank">
                        <div className="">{data.bank_name}</div>
                      </div>
                      <div className="table-column ifsc">
                        <div className="">{data.ifsc}</div>
                      </div>
                      <div className="table-column branch">
                        <div className="">{data.branch}</div>
                      </div>
                      <div className="table-column bank-id">
                        <div className="">{data.bank_id}</div>
                      </div>
                      <div className="table-column address">
                        <div className="">{data.address}</div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="empty-table">Khaali hai</div>
              )}
            </>
          )}
        </div>
      </div>
      {list.length ? (
        <div className="table-footer">
          <div className="show-container">
            <ShowDropdown updateShowSize={updateShowSize} />
          </div>
          <div className="pagination-container">
            <Pagination updatePage={updatePage} />
          </div>
          <div className="rows-showing">{`Showing 10 - 20 of 200`}</div>
        </div>
      ) : null}
    </div>
  );
}

const mapStateToProps = ({ banks }) => {
  return {
    showCount: banks.showCount,
    currentPage: banks.currentPage,
    totalBanks: banks.totalBanks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateShowSize: (size) => dispatch(updateShowSize(size)),
    updatePage: (page) => dispatch(updatePage(page)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BankTable);

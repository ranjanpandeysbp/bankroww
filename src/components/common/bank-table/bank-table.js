import React from "react";
import "./bank-table.css";
import Loader from "./loader";
import ShowDropdown from "./show-dropdown";
import Pagination from "./pagination";
import { connect } from "react-redux";
import { updatePage, updateShowSize } from "../../../reduxstore/action/banks";
import { Link } from "react-router-dom";

function BankTable(props) {
  const {
    list,
    isLoading,
    isError,
    updateShowSize,
    updatePage,
    showCount,
    totalBanks,
    currentPage,
  } = props;
  const total = Math.ceil(totalBanks / showCount);
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
                      <Link to={`/bank-details/${data.ifsc}`}>
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
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div className="empty-table">
                  <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/searching-in-box-3428236-2902705.png"
                    className="empty-image"
                    alt="Table Empty"
                  />
                  <p>
                    Uh Oh! Looks like the table is empty. Change your search
                    filters or maybe we don't have such a bank :(
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {list.length ? (
        <div className="table-footer">
          <div className="show-container">
            <ShowDropdown
              updateShowSize={updateShowSize}
              showCount={showCount}
            />
          </div>
          <div className="pagination-container">
            <Pagination updatePage={updatePage} total={total} />
          </div>
          <div className="rows-showing">{`Showing ${
            (currentPage - 1) * showCount + 1
          } - ${currentPage * showCount} of ${totalBanks}`}</div>
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

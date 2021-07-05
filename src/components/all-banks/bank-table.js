import React from "react";
import "./bank-table.css";
import Loader from "../common/table-footer/loader";
import ShowDropdown from "../common/table-footer/show-dropdown";
import Pagination from "../common/table-footer/pagination";
import { connect } from "react-redux";
import { updatePage, updateShowSize } from "../../reduxstore/action/banks";
import { Link } from "react-router-dom";
import { addToFav, removeFromFav } from "../../reduxstore/action/favourites";

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
    addToFav,
    removeFromFav,
    favIFSC,
  } = props;

  const total = Math.ceil(totalBanks / showCount);
  const handleFavouriteClick = (data, isFav) => {
    isFav ? removeFromFav(data) : addToFav(data);
  };
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
          {isError ? (
            <div className="error-in-fetch">
              <img
                className="error-in-fetch-image"
                src="https://cdni.iconscout.com/illustration/premium/thumb/search-result-not-found-3428237-2902696.png"
                alt="error-in-fetch"
              />{" "}
              Oops we faced an error, please check your internet connection or
              reload the page.
            </div>
          ) : isLoading ? (
            <div className="empty-table">
              <Loader />
            </div>
          ) : (
            <>
              {list.length ? (
                list.map((data) => {
                  const isFav = favIFSC.includes(data.ifsc);
                  return (
                    <div className="table-row">
                      <div className="table-column add-favourite">
                        {isFav ? (
                          <i
                            className="fi-sr-star"
                            onClick={() => handleFavouriteClick(data, isFav)}
                          ></i>
                        ) : (
                          <i
                            className="fi-rr-star"
                            onClick={() => handleFavouriteClick(data, isFav)}
                          ></i>
                        )}
                      </div>
                      <Link
                        to={{
                          pathname: `/bank-details/${data.ifsc}`,
                          state: { data: data },
                        }}
                      >
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
          {}
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
            <Pagination
              updatePage={updatePage}
              total={total}
              currentPage={currentPage}
            />
          </div>
          <div className="rows-showing">{`Showing ${
            (currentPage - 1) * showCount + 1
          } - ${currentPage * showCount} of ${totalBanks}`}</div>
        </div>
      ) : null}
    </div>
  );
}

const mapStateToProps = ({ banks, favourites }) => {
  return {
    showCount: banks.showCount,
    currentPage: banks.currentPage,
    totalBanks: banks.totalBanks,
    favourites: favourites.favourites,
    favIFSC: favourites.favIFSC,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateShowSize: (size) => dispatch(updateShowSize(size)),
    updatePage: (page) => dispatch(updatePage(page)),
    addToFav: (data) => dispatch(addToFav(data)),
    removeFromFav: (data) => dispatch(removeFromFav(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BankTable);

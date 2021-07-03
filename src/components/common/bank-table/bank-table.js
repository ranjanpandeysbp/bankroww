import React from "react";
import "./bank-table.css";
import Loader from "./loader";

function BankTable(props) {
  const { list, isLoading, isError } = props;
  console.log(list);
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table">
          <div className="table-row">
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
          <div className="show-container">{/* <ShowDropdown /> */}</div>
          <div className="pagination-container">
            {/* <TablePagination /> */}
          </div>
          <div className="rows-showing">{`Showing 10 - 20 of 200`}</div>
        </div>
      ) : null}
    </div>
  );
}

export default BankTable;

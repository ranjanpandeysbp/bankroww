import React from "react";
import "./bank-table.css";
import Loader from "./loader";
const items = [];
function BankTable() {
  const isFetching = true;
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table">
          <div className="table-row">
            <div className="table-column bank ">BANK</div>
            <div className="table-column ifsc ">IFSC</div>
            <div className="table-column branch ">BRANCH</div>
            <div className="table-column bank-id ">BANK ID</div>
            <div className="table-column address address-top">ADDRESS</div>
          </div>
        </div>
      </div>
      <div className="table-body">
        <div className="table">
          {isFetching ? (
            <div className="empty-table">
              <Loader />
            </div>
          ) : (
            <>
              {items.length ? (
                items.map((data) => {
                  return (
                    <div className="table-row">
                      <div className="table-column bank">{data.bank_name}</div>
                      <div className="table-column ifsc">{data.ifsc}</div>
                      <div className="table-column branch">{data.branch}</div>
                      <div className="table-column bank-id ">
                        {data.bank_id}
                      </div>
                      <div className="table-column address">{data.address}</div>
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
      {items.length ? (
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

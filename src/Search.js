import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search" id="searchForm">
        <div className="row">
          <div className="col-10">
            <div className="mb-3">
              <input
                type="search"
                className="form-control shadow-sm"
                placeholder="Enter city name"
                id="city-input"
              />
            </div>
          </div>
          <div className="col-2">
            <button
              typeName="submit"
              className="btn btn-outline-light shadow-sm btn-one"
              id="sumbit-button"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

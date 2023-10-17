import React from "react";
import "../styles/dataTable.css";

const DataTable = ({ columns, data }) => {
  return (
    <table className="data-table">
      <thead>
        <tr className="table-header">
          {columns.map((column, index) => (
            <th className="header-cell" key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody className="table-body">
        {data.map((item, index) => (
          <tr key={index} className={index % 2 === 0 ? 'table-row even' : 'table-row odd'}>
            {columns.map((column, i) => (
              <div key={i} className="table-cell">
              {item[column]}
            </div>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;

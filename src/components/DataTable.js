import React from "react";
import ColumnActions from "./ColumnActions";
import "../styles/dataTable.css";

const DataTable = ({ columns, data, pages }) => {
  return (
      <div className="table-container">
        <div className="table-scroll">
          <table className="data-table">
            <thead>
            <tr className="table-header">
              {columns.map((column, index) => (
                  <th className="header-cell" key={index}>
                    {column}
                  </th>
              ))}
              <th className="header-cell fixed-cell">Actions</th>
            </tr>
            </thead>
            <tbody className="table-body">
            {data.map((item, index) => (
                <tr
                    key={index}
                    className={index % 2 === 0 ? "table-row even" : "table-row odd"}
                >
                  {columns.map((column, i) => (
                      <td key={i} className="table-cell">
                        {item[column]}
                      </td>

                  ))}
                  <td className="table-cell fixed-cell-content">
                    <ColumnActions item={item} pages={pages} />

                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default DataTable;

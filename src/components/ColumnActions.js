import React from "react";
import {handleView, handleDelete, handleEdit} from "../utils/handleColumnActions";

const ColumnActions = ({ item }) => {
    return (
      <div className="table-cell">
        <button onClick={handleView(item)}>
          <img src="/images/icons/icono-view.svg" alt="View" />
        </button>
        <button onClick={handleEdit(item)}>
          <img src="/images/icons/icono-edit.svg" alt="Edit" />
        </button>
        <button onClick={handleDelete(item)}>
          <img src="/images/icons/icono-delete.svg" alt="Delete" />
        </button>
      </div>
    );
  };

export default ColumnActions;
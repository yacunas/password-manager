import React from "react";

const TableHeader = () => {
  return (
    <thead style={{ color: "#b7b7b7", fontSize: "0.9em" }}>
      <tr>
        <td>Item name</td>
        <td>Password Strength</td>
        <td>Category</td>
        <td>Last used</td>
      </tr>
    </thead>
  );
};

export default TableHeader;

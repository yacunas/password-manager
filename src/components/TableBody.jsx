import React from "react";
import { useNavigate } from "react-router-dom";
import { prettyTime } from "../utils/pretty-time";
import { passPercent } from "../utils/pass-strength";
import { Row } from "react-bootstrap";
import { categories } from "../utils/select-category";

const TableBody = ({ item }) => {
  let navigate = useNavigate();

  const header = { margin: "auto", fontWeight: "500" };
  const subHeader = { ...header, fontWeight: "400", fontSize: "0.8em" };
  const nonLeading = {
    fontSize: "0.95em",
    color: "#707070",
  };

  const category = categories.filter((cat) => item.category === cat.value)[0];

  return (
    <tr
      style={{ cursor: "pointer" }}
      className="align-middle"
      onClick={() => navigate(`/detail/${item.id}`)}
    >
      <td>
        <Row style={header}>{item.itemName}</Row>
        <Row style={subHeader}>
          {item.username ? item.username : item.email}
        </Row>
      </td>
      <td style={nonLeading}>{passPercent(item.password)}%</td>
      <td style={nonLeading}>{category.label}</td>
      <td style={nonLeading}>{prettyTime(item.lastUsed)}</td>
    </tr>
  );
};

export default TableBody;

import React from "react";

function DataTable(props) {
  let { data, headers } = props;
  const TableRender = ({ item }) => {
    const columns = Object.keys(item).map((k) => item[k]);
    return columns.map((value, i) => <td key={i}>{value}</td>);
  };

  return (
    <div className="table__container">
      <table className="table table-bordered">
        <thead>
          <tr>
            {headers && headers.map((header) => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <TableRender item={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DataTable;

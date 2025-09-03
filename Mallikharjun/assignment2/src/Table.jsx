import React from "react";
import PropTypes from "prop-types";
import styles from "./Table.module.css";

export default function Table({ columns, data }) {
  // render a table
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {/* render header cells */}
          {columns.map(col => (
            <th key={col.accessor}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* show this if no data */}
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className={styles.noData}>
              No data available.
            </td>
          </tr>
        ) : (
          // render rows
          data.map(row => (
            <tr key={row.id}>
              {/* render cells for each column */}
              {columns.map(col => (
                <td key={col.accessor}>{row[col.accessor]}</td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  // columns prop expects an array of objects with header and accessor strings
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
  // data is an array of row objects
  data: PropTypes.array.isRequired,
};

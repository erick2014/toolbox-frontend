import React from "react";
import { Table } from "react-bootstrap";
import "./styles.css";

function FilesTable(props) {
  const { errorMessage, csvFiles } = props;
  if (errorMessage) {
    return <div className="no-records-found">{errorMessage}</div>;
  }

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text </th>
          <th>Number </th>
          <th>Hex </th>
        </tr>
      </thead>
      <tbody>
        {csvFiles.map(({ file, lines }) =>
          lines.map(({ text, number, hex }, index) => (
            <tr key={index}>
              <td>{file}</td>
              <td>{text}</td>
              <td>{number}</td>
              <td>{hex}</td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}

export default FilesTable;

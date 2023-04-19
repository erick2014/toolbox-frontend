import React, { useState, useEffect } from "react";
import "./App.css";
import FilesTable from "../FilesTable";

function App() {
  const [csvFiles, setCsvFiles] = useState([]);
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const HOST_URL = "http://localhost:3000";
        let url = "";
        if (!text) {
          url = `${HOST_URL}/files/data`;
        } else if (text && text.includes(".csv")) {
          url = `${HOST_URL}/files/data?fileName=${text}`;
        }
        if (url) {
          console.log("url ", url);
          const response = await fetch(url);
          const data = await response.json();
          setCsvFiles(data);
          setErrorMessage(null);
        }
      } catch (error) {
        setErrorMessage("No records Found");
      }
    }
    fetchData();
  }, [text]);

  return (
    <div>
      <div className="title">React Test hot</div>

      <div className="container p-4">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="text">
                Type in here the file name and extension ( test1.csv ){" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          </div>
        </div>
        <FilesTable csvFiles={csvFiles} errorMessage={errorMessage} />
      </div>
    </div>
  );
}

export default App;

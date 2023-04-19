import React from "react";
import { render, screen } from "@testing-library/react";
import FilesTable from "../FilesTable/index";

describe("FilesTable", () => {
  it("Should render the table given some props", () => {
    const csvFiles = [
      {
        file: "file1.csv",
        lines: [
          {
            text: "text1",
            number: 1,
            hex: "d1ee928155ed9a0f4f5323bc35a4cd56",
          },
        ],
      },
    ];
    render(<FilesTable csvFiles={csvFiles} />);

    const fileName = screen.getByText("file1.csv");
    const text = screen.getByText("text1");
    const number = screen.getByText("1");
    const hex = screen.getByText("d1ee928155ed9a0f4f5323bc35a4cd56");
    const table = screen.getByRole("table");

    expect(fileName).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(hex).toBeInTheDocument();
    expect(table).toBeInTheDocument();
  });

  it("Should render an error message", () => {
    const csvFiles = [
      {
        file: "file1.csv",
        lines: [
          {
            text: "text1",
            number: 1,
            hex: "d1ee928155ed9a0f4f5323bc35a4cd56",
          },
        ],
      },
    ];
    render(<FilesTable csvFiles={csvFiles} errorMessage={"No data found"} />);

    const errorMessage = screen.getByText("No data found");

    expect(errorMessage).toBeInTheDocument();
  });
});

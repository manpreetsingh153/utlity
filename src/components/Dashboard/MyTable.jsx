"use client";
import React, { useState } from "react";

const MyTable = () => {
  const [inputs, setInputs] = useState([
    { itemname: "", quantity: "", rate: "", tax: "" },
  ]);

  const addInput = () => {
    setInputs([...inputs, { itemname: "", quantity: "", rate: "", tax: "" }]);
  };

  const arr = [
    { fname: "himanshu", lname: "sharma", age: 1, newText: "" },
    { fname: "Manpreet", lname: "Singh", age: 1, newText: "" },
    { fname: "Manpreet", lname: "Singh", age: 1, newText: "" },
  ];

  const addTextToArr = () => {
    const newArr = arr.map((item) => ({
      ...item,
      newText: "hello",
    }));
    // console.log(newArr);
  };

  const [columns, setColumns] = useState(["Column 1", "Column 2", "Column 3"]);

  const addColumn = () => {
    setColumns([...columns, `Column ${columns.length + 1}`]);
  };

  const removeColumn = (index) => {
    const newColumns = [...columns];
    newColumns.splice(index, 1);
    setColumns(newColumns);
  };
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>
              {column}{" "}
              <button onClick={() => removeColumn(index)}>Remove</button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {columns.map((column, index) => (
            <td key={index}>Data</td>
          ))}
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={columns.length}>
            <button onClick={addColumn}>Add Column</button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default MyTable;

// <>
//   <button onClick={addInput}>button</button>
//   <table className="table">
//     <thead>
//       <tr>
//         <th scope="col">#</th>
//         <th scope="col">First</th>
//         <th scope="col">Last</th>
//         <th scope="col">Age</th>
//         <th scope="col">New Text</th>
//       </tr>
//     </thead>
//     <tbody>
//       {arr.map((index, a) => (
//         <tr key={a}>
//           <th scope="row">{a + 1}</th>
//           <td>{index.fname}</td>
//           <td>{index.lname}</td>
//           <td>{index.age}</td>
//           <td>{index.newText}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
//   <button onClick={addTextToArr}>Add Text to Arr</button>
// </>

import React from "react";
import Spinner from "react-bootstrap/Spinner";

function loading() {
  return (
    <div className="container-fluid h-100 w-100">
      <center>
        <Spinner animation="border" role="status">
          <span className="visually-hidden  bg-danger">Loading...</span>
        </Spinner>
      </center>
    </div>
  );
}

export default loading;

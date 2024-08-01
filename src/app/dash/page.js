"use client";
import React, { useState, useEffect } from "react";
export default function Page() {
  const [user, setuser] = useState([]);

  const doSome = async () => {
    let data = await fetch("http://localhost:3000/api/details");
    data = data.json;
    
    setuser(data.data);
  };
  useEffect(() => {
    doSome();
  }, []);
  return (
    <div>
      {user.map((data) => {
        <div>{data.name} </div>;
      })}
    </div>
  );
}

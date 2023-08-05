import React from "react";

let status = "pending";
let result;

const data = fetchSomthing();

const Test = () => {
  // No need for loading states
  const result = data();
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {result}
    </div>
  );
};

function fetchSomthing() {
  const fetching = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  }).then((res) => {
    status = "fulfilled";
    result = res;
  })
  .catch((error) => {
    status = "rejected";
    result = error;
  });

  return () => {
    if (status === "pending") {
      throw fetching; // Suspend(A way to tell React data is still fetching)
    } else if (status === "rejected") {
      throw result; // Result is an error
    } else if (status === "fulfilled") {
      return result; // Result is a fulfilled promise
    }
  };
}

export default Test;
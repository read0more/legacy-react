import React, { Suspense, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
// import Test from "./Test";
const Test = React.lazy(() => import("./Test"));

function App() {
  const [data, setData] = useState(null);


  return (
    <div className='App'>
      <Suspense fallback={Loading()}>
        <Test text={'asdasd'}/>
      </Suspense>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

function Loading() {
  return <div>Loading...?</div>;
}

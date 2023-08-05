import React, { Suspense, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import Test from "@components/Test";
const LazyFallbackTest = React.lazy(() => import("./LazyFallbackTest"));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={Loading()}>
        <Test text="Hello..." />
        <LazyFallbackTest />
      </Suspense>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

function Loading() {
  return <div>Loading...?</div>;
}

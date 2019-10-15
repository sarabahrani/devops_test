import React, { Suspense } from "react";
import Loader from "./component/Loader";
import Apple from "./component/Apple";

//const Flight = React.lazy(() => import("./component/Flight"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        {setTimeout(
          () => (
            <Apple />
          ),
          3000
        )}
      </Suspense>
    </>
  );
}

export default App;

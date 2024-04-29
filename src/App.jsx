import React, { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import RoutesConfig from "./components/RoutesConfig/RoutesConfig";
import ThemeWrapper from "./components/ThemeWrapper/ThemeWrapper";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ThemeWrapper>
          <Header />
          <RoutesConfig />
          <Footer />
        </ThemeWrapper>
      </Suspense>
    </>
  );
};

export default App;

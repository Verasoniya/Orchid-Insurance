import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Header />
      <div className="min-h-screen">{props.children}</div>
      <Footer />
    </>
  );
}

export default Layout;

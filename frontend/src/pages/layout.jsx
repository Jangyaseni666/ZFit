import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer id="footer"/>
    </>
  );
}

export default Layout;

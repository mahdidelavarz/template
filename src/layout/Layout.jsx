import React from "react";
import Header from "../ui/Header/Header";
function Layout({ children }) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header />
      {children}
    </div>
  );
}

export default Layout;

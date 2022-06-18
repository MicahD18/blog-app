import React from 'react';
import { Header } from "./";

// children are the other components
const Layout = ({ children }) => {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}

export default Layout
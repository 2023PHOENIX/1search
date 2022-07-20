import React from "react";

import { NavLink } from "react-router-dom";





function Links() {
  return (
    <>

    <NavLink to={'/search'} className='m-2 mb-0' activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">search 🔎</NavLink>
    <NavLink to={'/image'} className='m-2 mb-0' activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">image 📷</NavLink>
    </>
  );
}

export default Links;

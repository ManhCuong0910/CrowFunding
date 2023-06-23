import React from "react";
import { Link } from "react-router-dom";

const LayoutAuthentication = (props) => {
  console.log(props);
  const { children, heading = "" } = props;
  return (
    <div className="w-full min-h-screen p-10 bg-lite">
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img srcSet="/logo.png" alt="crowfunding-app"></img>
      </Link>
      <div className="w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default LayoutAuthentication;

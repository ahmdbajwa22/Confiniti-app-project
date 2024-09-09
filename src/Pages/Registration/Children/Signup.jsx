import React  from "react";
import SmSignInSubComp from "./SubComps/SmSignInSubComp";
import SmContentSubComp from "./SubComps/SmContentSubComp";

const Signup = () => {

  return (
    <div className="block px-2 mt-2 lg:ml-52">
      <br />
      <br />
      <div className="w-[90vw] lg:w-[72vw] h-[90vh] transform translate-y-[-25px] bg-gray-300 rounded-lg flex flex-col justify-center items-center m-auto ">
      
        <br />
        <br />
        <br />
        <div className="border-none h-auto flex w-[70vw] justify-between items-center flex-wrap ">
          <div className="left">
                {/* Registration  */}
          </div>

          {/* LOGIN FORM  */}
          <div className="right">
            <SmSignInSubComp />
          </div>
          <div
            className="rounded-r-[155px] p-3 translate-x-[-10vw] lg:translate-x-[-1vw] transform translate-y-[-36px] h-[90vh] absolute w-1/2 text-white shadow-black shadow-2xl bg-gray-800 pb-96">
            <SmContentSubComp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

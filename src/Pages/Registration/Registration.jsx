import React from "react";
import Signup from "./Children/Signup";

const Registration = () => {
 

  return (
    <>
    <div className='flex m-auto p-5'>
      <div className=" registrationContainer">
        <Signup />
      </div>
      <br />
      <hr className="block m-auto my-3"/>
      <br />
    </div>
    </>
  );
};

export default Registration;
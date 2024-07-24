import React from "react";

const demo = () => {
  return (
    <><style jsx global>{`
    footer {
      display: none;
    }
    header {
      display: none;
    }
  `}</style>
      <section className="dark:bg-gray-900">
        <h1 className='bg-white'>Welcome! You are Succesfully Logged In</h1>
      </section>
    </>
  );
};

export default demo;

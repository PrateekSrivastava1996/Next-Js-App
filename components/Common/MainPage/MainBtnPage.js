import React from "react";

const MainBtnPage = () => {
  let main=["Action ","demons" ,"Dub" ,"fantasy"]
  return (
    <div className="flex flex-row justify-center pt-[50px] pb-[50px]  bg-slate-700">
      <div className=" grid grid-cols-1 w-full pr-[20px]  pl-[20px] gap-y-10 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 ">
       
       
       
        <button
          type="button"
          class="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Demons
        </button>
        <button
          type="button"
          class="text-white w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Dub
        </button>
        <button
          type="button"
          class="text-white w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Action
        </button>
        <button
          type="button"
          class="text-white w-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Fantasy
        </button>
       
      </div>
    </div>
  );
};

export default MainBtnPage;

import React from "react";

const ListPage = () => {
  return (
    <>
      <div className="bg-white mt-[100px] ml-[25px] mr-[25px] bg-slate-700 ">
        <div className="mx-auto max-w-2xl    lg:max-w-7xl ">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:gap-x-3 2xl:gap-x-3">
            <div className="group relative">
              <ul className="bg-white rounded-lg border border-gray-200 w-[100%] text-gray-900">
                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-blue-600 text-white">
                  An active item
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  A second item 
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  A third item
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  A fourth item
                </li>
                <li className="px-6 py-2 w-full rounded-b-lg">And a fifth one</li>
              </ul>
            </div>
            <div className="group relative">
              <ul className="bg-white rounded-lg border border-gray-200 w-[100%] text-gray-900">
                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-blue-600 text-white">
                  An active item
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  A second item
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  A third item
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  A fourth item
                </li>
                <li className="px-6 py-2 w-full rounded-b-lg">And a fifth one</li>
              </ul>
            </div>
            <div className="group relative">
              <ul className="bg-white rounded-lg border border-gray-200 w-[100%] text-gray-900">
                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-blue-600 text-white">
                  An active item
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  A second item
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  A third item
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  A fourth item
                </li>
                <li className="px-6 py-2 w-full rounded-b-lg">And a fifth one</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPage;

import React from "react";

export default function Pagination({ page, totelPage, handlePage, pageList }) {
  let active =
    "py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
  let nonactive =
    "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  return (
    <nav aria-label="Page navigation example">
      <ul class="inline-flex -space-x-px">
        <li  
        onClick={()=>{
            if(page-1>0){
                handlePage(page-1)
            }
        }}
        >
          <a
            href="#"
            class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </a>
        </li>
        {pageList?.map((w) => {
          return (
            <li
            onClick={()=>handlePage(w)}
            >
              <a href="#"
              className={w==page ? active:nonactive}
              >{w}</a>
            </li>
          );
        })}

        <li
        onClick={()=>{
            if(page+1<totelPage){
                handlePage(page+1)
            }
        }}
        >
          <a
            href="#"
            className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

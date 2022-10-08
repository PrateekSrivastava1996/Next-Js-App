import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { AutoComplete, Input } from "antd";
import MainBtnPage from '../MainPage/MainBtnPage'

const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: "right",
      }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);

const renderItem = (title, count) => ({
  value: title,
  label: (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  ),
});

const options = [
  {
    label: renderTitle("Libraries"),
    options: [
      renderItem("AntDesign", 10000),
      renderItem("AntDesign UI", 10600),
    ],
  },
  {
    label: renderTitle("Solutions"),
    options: [
      renderItem("AntDesign UI FAQ", 60100),
      renderItem("AntDesign FAQ", 30010),
    ],
  },
  {
    label: renderTitle("Articles"),
    options: [renderItem("AntDesign design language", 100000)],
  },
];

const Navbar = () => {
  return (
    <>
    <div className="bg-slate-700">
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 bg-slate-700">
        <div class="container flex flex-wrap justify-between items-center mx-auto ">
          <a href="https://flowbite.com/" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>

          <div class="w-auto md:block md:w-auto" id="navbar-default bg-slate-700">
            <AutoComplete
              popupClassName="certain-category-search-dropdown"
              dropdownMatchSelectWidth={500}
              style={{
                width: 250,
              }}
              options={options}
            >
              <Input.Search size="large" placeholder="input here" />
            </AutoComplete>
          </div>
        </div>
      </nav>
      <MainBtnPage/>

      </ div>
    </>
  );
};

export default Navbar;

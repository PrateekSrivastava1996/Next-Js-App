import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { AutoComplete, Input } from "antd";
import MainBtnPage from "../MainPage/MainBtnPage";
import { useRouter } from "next/router";
import { searchAnime } from "../../../store/anime/animeaction";
import { useDispatch, useSelector } from "react-redux";

const renderTitle = (title, count) => (
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
);

const optionsss = [
  {
    label: renderTitle("Libraries", 100),
  },
  {
    label: renderTitle("Solutions", 100),
  },
  {
    label: renderTitle("Articles", 100),
  },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre.anime);
  const router = useRouter();
  const [dataOption, setDataOption] = useState([]);
  useEffect(() => {
    dispatch(searchAnime(""));
  }, []);

  useEffect(() => {
    if(selector.searchanime?.length>0){
        let datava= selector.searchanime?.map((e)=>{
          return  {
            label: renderTitle(e.animeTitle , e.status),
          }
        })
        setDataOption(datava)
    }else{
      const options = [
        {
          label: renderTitle("No data Found", 0),
        },
       
      ];

      setDataOption(options)
    }
  }, [selector]);

  const handleOnchage=(e)=>{
    dispatch(searchAnime(e.target.value));
  }

  return (
    <>
      <div className="bg-slate-700">
        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 bg-slate-700">
          <div class="container flex flex-wrap justify-between items-center mx-auto ">
            <span
              class="flex items-center "
              onClick={() => {
                router.push("/");
              }}
            >
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white cursor-pointer	">
                My My Anime
              </span>
            </span>

            <div
              class="w-auto md:block md:w-auto"
              id="navbar-default bg-slate-700"
            >
              <AutoComplete
                popupClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={500}
                style={{
                  width: 250,
                }}
                options={dataOption}
              >
                <Input.Search size="large" placeholder="input here" onChange={(e)=>{
                  handleOnchage(e)
                }} />
              </AutoComplete>
            </div>
          </div>
        </nav>
        <MainBtnPage />
      </div>
    </>
  );
};

export default Navbar;

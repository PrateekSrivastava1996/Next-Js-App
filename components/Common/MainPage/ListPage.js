import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  recentJapTen,
  recentDubTen,
  recentChTen,
} from "../../../store/anime/animeaction";
import { useRouter } from 'next/router'

const ListPage = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const selector = useSelector((pre) => pre.anime);
  const [jap, setJap] = useState([]);
  const [dub, setDub] = useState([]);
  const [ch, setCh] = useState([]);

  useEffect(() => {
    dispatch(recentJapTen());
    dispatch(recentDubTen());
    dispatch(recentChTen());
  }, []);

  useEffect(() => {
    if (selector?.japten?.length > 0) {
      setJap(selector?.japten || []);
    }
    if (selector?.dubten?.length > 0) {
      setDub(selector?.dubten || []);
    }
    if (selector?.chten?.length > 0) {
      setCh(selector?.chten || []);
    }
  }, [selector]);

  return (
    <>
      <div className="bg-white pt-[100px] pl-[25px] pr-[25px] bg-slate-700 ">
        <div className="mx-auto max-w-2xl    lg:max-w-7xl ">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:gap-x-3 2xl:gap-x-3">
            <div className="group relative">
              <ul className="bg-white rounded-lg border border-gray-200 w-[100%] text-gray-900">
                <li className=" text-lg	 px-6 py-2 border-b border-gray-200 w-full rounded-t-lg font-bold  text-slate-100	 bg-yellow-600">
                  Japanese Sub Recent Release
                </li>
                {jap?.map((w) => {
                  return (
                    <li className="px-6 py-2 border-b border-gray-200 w-full bg-slate-300	 cursor-pointer	">
                      <div className="flex justify-between	">
                        <img
                          className="h-[125px] flex-none w-[250px]  rounded-lg"
                          src={w.animeImg}
                        />

                        <h2>{`${w.animeTitle}    (${w.subOrDub})`}</h2>
                      </div>
                    </li>
                  );
                })}

                {jap?.length > 0 && (
                  <li className="px-6 py-2 w-full rounded-b-lg flex flex-row bg-slate-300	justify-end	 pr-[50px]" onClick={()=>{
                    router.push('/episode/japsub')

                  }}>
                    <a> @ View More</a>
                  </li>
                )}
              </ul>
            </div>
            <div className="group relative">
              <ul className="bg-white rounded-lg border border-gray-200 w-[100%] text-gray-900">
                <li className=" text-lg	 px-6 py-2 border-b border-gray-200 w-full rounded-t-lg font-bold  text-slate-100	 bg-yellow-600">
                  English Dub Recent Release
                </li>
                {dub?.map((w) => {
                  return (
                    <li className="px-6 py-2 border-b border-gray-200 w-full bg-slate-300	 cursor-pointer	">
                      <div className="flex justify-between	">
                        <img
                          className="h-[125px] flex-none w-[250px]  rounded-lg"
                          src={w.animeImg}
                        />

                        <h2>{`${w.animeTitle}    (${w.subOrDub})`}</h2>
                      </div>
                    </li>
                  );
                })}
                {dub?.length > 0 && (
                  <li className="px-6 py-2 w-full rounded-b-lg flex flex-row bg-slate-300	justify-end	 pr-[50px]" onClick={()=>{
                    router.push('/episode/dub')
                  }}>
                    <a> @ View More</a>
                  </li>
                )}
              </ul>
            </div>
            <div className="group relative">
              <ul className="bg-white rounded-lg border border-gray-200 w-[100%] text-gray-900">
                <li className=" text-lg	px-6 py-2 border-b border-gray-200 w-full rounded-t-lg font-bold  text-slate-100	 bg-yellow-600">
                  Chinese Dub Recent Release
                </li>

                {ch?.map((w) => {
                  return (
                    <li className="px-6 py-2 border-b border-gray-200 w-full bg-slate-300	 cursor-pointer	">
                      <div className="flex justify-between	">
                        <img
                          className="h-[125px] flex-none w-[250px]  rounded-lg"
                          src={w.animeImg}
                        />

                        <h2>{`${w.animeTitle}    (${w.subOrDub})`}</h2>
                      </div>
                    </li>
                  );
                })}
                {ch?.length > 0 && (
                  <li className="px-6 py-2 w-full rounded-b-lg flex flex-row bg-slate-300	justify-end	 pr-[50px]" onClick={()=>{
                    router.push('/episode/chsub')
                  }}>
                    <a> @ View More</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPage;

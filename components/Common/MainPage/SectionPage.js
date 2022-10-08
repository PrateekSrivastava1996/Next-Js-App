import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { topAirAction } from "../../../store/anime/animeaction";
import { useRouter } from 'next/router'
const SectionPage = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre.anime);
  const [data, setData] = useState([]);
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
  ];

  let demoEpisdoe = [
    {
      animeId: "uzaki-chan-wa-asobitai-double",
      animeImg:
        "https://gogocdn.net/cover/uzaki-chan-wa-asobitai-double-1664394785.png",
      animeTitle: "Uzaki-chan wa Asobitai! Double",
      animeUrl:
        "https://gogoanime.film///category/uzaki-chan-wa-asobitai-double",
      genres: ["Comedy", "Ecchi", "Romantic Subtext"],
      latestEp: "Episode 1",
    },
    {
      animeId: "uzaki-chan-wa-asobitai-double",
      animeImg:
        "https://gogocdn.net/cover/uzaki-chan-wa-asobitai-double-1664394785.png",
      animeTitle: "Uzaki-chan wa Asobitai! Double",
      animeUrl:
        "https://gogoanime.film///category/uzaki-chan-wa-asobitai-double",
      genres: ["Comedy", "Ecchi", "Romantic Subtext"],
      latestEp: "Episode 1",
    },
    {
      animeId: "uzaki-chan-wa-asobitai-double",
      animeImg:
        "https://gogocdn.net/cover/uzaki-chan-wa-asobitai-double-1664394785.png",
      animeTitle: "Uzaki-chan wa Asobitai! Double",
      animeUrl:
        "https://gogoanime.film///category/uzaki-chan-wa-asobitai-double",
      genres: ["Comedy", "Ecchi", "Romantic Subtext"],
      latestEp: "Episode 1",
    },
  ];

  useEffect(() => {
    dispatch(topAirAction());
  }, []);

  useEffect(() => {
    setData(selector.AirThree || demoEpisdoe);
  }, [selector]);
  return (
    <>
      <div className="bg-white pt-[30px]  border-yellow-500 rounded-lg	 border-2 bg-slate-700 ">
        <div className="mx-auto max-w-2xl    lg:max-w-7xl 	 ">
          <h2 className="text-2xl font-bold tracking-tight text-slate-100	 pt-[10px] pl-[13px] pb-[10px] bg-yellow-600 rounded-lg">
            Top-Air Anime
          </h2>

          <div className="mt-6 grid grid-cols-1  ml-[65px] gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-5">
            {data.map((product) => (
              <div key={product.id} className="group relative" 
             
              >
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-[70%] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.animeImg}
                    alt={product.animeId}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full xl:h-full xl:w-full 2xl:h-full 2xl:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between w-[70%]">
                  <div>
                    <h3 className="text-sm text-gray-700 ">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.animeTitle}
                      </a>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">
                      {product.latestEp}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="flex justify-end	 mr-[10px]">
            <div class="flex-none w-34 h-14 cursor-pointer	text-cyan-500	font-semibold	hover:text-amber-600" onClick={()=>{
                router.push(`/episode/topair`)
              }}>
              View More
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionPage;

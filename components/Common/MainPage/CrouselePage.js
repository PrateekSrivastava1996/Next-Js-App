import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { topAirCouusel } from "../../../store/anime/animeaction";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1285 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  smallDesktop:{
    breakpoint: { max: 1285, min: 1024 },
    items: 2,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CrouselePage = () => {
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre.anime);
  const [data, setData] = useState([]);

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
    dispatch(topAirCouusel());
  }, []);

  useEffect(() => {
    setData(selector.TopAirTen || demoEpisdoe);
  }, [selector]);
  return (
    <div className="w-full   pt-[30px] bg-slate-700 flex  flex-row justify-center	">
     <div className="w-full pr-[43px] pl-[43px]" >
     <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data?.map((w) => {
          return (
            <div class="max-w-sm bg-white rounded-lg border  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-[500px]">
              <a href="#">
                <img
                  class="rounded-t-lg h-[300px] w-full  "
                  src={w.animeImg}
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {w.animeTitle}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                 {w.latestEp}
                </p>
                <div className="w-full grid grid-cols-3">

                  {
                    w.genres?.map((q)=>{
                      return(
                        <span class="mt-[10px] bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">{q}</span>
                      )
                    })
                  }
                </div>
             
              </div>
            </div>
          );
        })}
      </Carousel>
     </div>
    </div>
  );
};

export default CrouselePage;

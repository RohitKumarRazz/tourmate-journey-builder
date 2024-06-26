import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import courseData from "../data/features.json";
import { BackgroundGradient2 } from "../components/ui/background-gradient2";
import { Link } from "react-router-dom";
interface Places {
  id: number;
  title: string;
  image?: string;
  link:string;
}

interface Feature {
  id: number;
  title: string;
  description: string;
  isTrending: boolean;
  image?: string;
  link: string;
}

export function IconCards() {
  const featuredCourses = courseData.features.filter(
    (feature: Feature) => feature.isTrending
  );
  const featuredPlaces = courseData.places.filter((place: Places) => place);
  return (
    <div className="w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] overflow-hidden">
      {/* <div className="mt-10 mx-8 w-full"> */}
      <h2 className="mb-8 text-center text-base text-teal-400 font-bold tracking-wide uppercase">
        Trending places in India
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 py-10 gap-6 justify-center">
        {featuredPlaces.slice(0, 10).map((place: Places) => (
          <div key={place.id} className="flex flex-col items-center">
            <BackgroundGradient className="flex flex-col rounded-[15px] bg-white dark:bg-zinc-900 overflow-hidden w-60 h-60">
            <Link to={place?.link}>
              <div className="flex flex-col items-center text-center flex-grow">
                <img
                  src={place.image}
                  alt="states"
                 className="w-full h-60 object-cover rounded-[15px]"
                />
              </div>
              </Link>
            </BackgroundGradient>
            <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {place.title}
            </p>
          </div>
        ))}
        {/* </div> */}
      </div>

      <div className="mt-10 pl-2 pr-2 ">
        <h2 className="text-3xl font-semibold text-center text-white mb-2">
          Features of the website
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-3 lg:gird-cols-6 gap-8 justify-center">
          {featuredCourses.map((feature: Feature) => (
            <div key={feature.id} className="flex justify-center">
              <BackgroundGradient2 className="flex flex-col rounded-[10px] bg-gray-500 dark:bg-gray-800 overflow-hidden  ">
                <Link to={feature?.link}>
                  <div className="p-1 sm:p-2 flex flex-col items-center text-center flex-grow">
                    <img
                      src={feature.image}
                      alt="jordans"
                      style={{
                        width: "30%",
                        height: "30%",
                        objectFit: "cover",
                      }}
                    />
                    <p className="text-lg sm:text-lg text-black mt-1 mb-1 dark:text-neutral-200">
                      {feature.title}
                    </p>
                    <p className="text-xs sm:text-xs text-black mt-1 mb-1 dark:text-neutral-200">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </BackgroundGradient2>
            </div>
          ))}
        </div>
        <h2 className="mt-10 text-center text-base text-teal-400 font-bold tracking-wide uppercase">
          Click on the Places Photos
        </h2>
      </div>
    </div>
  );
}

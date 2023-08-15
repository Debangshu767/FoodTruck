import React from "react";



const CarousalItem = ({imageurl,title,description}) => {
  return (


      <div className="flex flex-col justify-center gap-4 p-4 m-6 md:mx-8 border-[1px] border-slate-700 rounded-3xl">
          <img src={imageurl} className=""  />

          <div className="flex flex-col justify-center gap-2 md:h-[30%]">
                 <h1 className="text-[#0E2368] text-lg font-bold text-center">
                    {title}
                </h1>
                <p className="p-4 text-sm">
                  {description}
                </p>
                <button className=" text-[#0E2368] font-semibold px-4 border-2 border-[#0E2368] m-auto rounded-full ">
                Read More
                </button>
        </div>
      </div>

      
        

  );
};

export default CarousalItem;

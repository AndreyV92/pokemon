import pikachy from "@/images/pikachy.jpg";

const Discover = () => {
  return (
    <div className="flex flex-col min-h-[450px] w-full bg-[blue] px-8 mx-8 rounded-[20px] text-white mb-8 relative">
      <div className="w-[500px]">
        <h1 className="my-10  text-[40px] font-bold leading-[46px] w-[400px]">
          Discover the World of Pokemon
        </h1>
        <p className="mb-20 text-[26px]">
          Изучай покемонов, их типы, способности и статы. Найди своего любимого!
        </p>
        <button className="w-fit bg-[orange] px-10 py-2 rounded-[15px] text-black">
          Перейти к покемонам
        </button>
      </div>
      <div className="absolute right-50 top-15">
        <img className="w-60 h-80" src={pikachy} alt="" />
      </div>
    </div>
  );
};

export default Discover;

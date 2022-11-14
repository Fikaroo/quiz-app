import { Button } from "flowbite-react";
import heroImage from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div className="h-96 relative flex w-full">
      <img
        src={heroImage}
        className="absolute object-cover w-full h-full rounded-xl"
        alt="hero"
      />
      <div className="z-10 flex justify-between w-full p-16 items-center">
        <div className="flex flex-col gap-8 max-w-lg">
          <h1 className="text-5xl font-bold">
            Biliyinizi yoxlamaq istiyirsiniz ?
          </h1>
          <p className="text-3xl font-medium pr-8">
            O zaman testlərimizdən keçərək biliyini test et
          </p>
        </div>
        <div>
          <Button className=" !bg-indigo-800 hover:!bg-indigo-900 px-16 py-1 ">
            <span className="text-xl font-medium">İndi Başla</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

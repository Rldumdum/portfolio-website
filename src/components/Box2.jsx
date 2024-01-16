import { useState } from "react";
import "../App.css";
const Box2 = () => {
  const [isVine, setIsVine] = useState(false);
  const [powerUpUrl, setPowerUpUrl] = useState("/images/powerup.gif");
  const vineHandler = () => {
    setPowerUpUrl("/images/powerup_used.png");
    setIsVine(true);
  };

  return (
    <div className="flex mx-20 mt-10 ">
      <div
        className={
          "box-bg-2 transition-all duration-1000 ease-in-out " +
          (isVine
            ? " bg-gradient-to-r from-green-200 to-green-400 opacity-100 w-[90vw]"
            : " bg-gradient-to-r from-black to-white opacity-0 w-[0vw]")
        }
      />
      <div>
        <div
          className="box w-16 h-16 border-black border relative"
          onClick={vineHandler}
        >
          <img
            src={powerUpUrl}
            className={"absolute top-16 z-50 " + (!isVine ? "cursor-pointer" : "")}
          />
          <img
            src="/images/vine.png"
            className={
              "absolute top-16 -z-10  " + (isVine ? "vine-clicked" : "vine")
            }
          />
        </div>
        <div className="box w-16 h-16 border-black border  relative bottom-16" />
      </div>
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
      <div className="box w-16 h-16 border-black border " />
    </div>
  );
};

export default Box2;

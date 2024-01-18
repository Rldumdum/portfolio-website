import { useState } from "react";
import "../App.css";
const Box = () => {
  const [isMushroom, setIsMushroom] = useState(false);
  const [move, setMove] = useState(false);
  const [powerUpUrl, setPowerUpUrl] = useState("/images/powerup.gif");
  const mushroomHandler = () => {
    setPowerUpUrl("/images/powerup_used.png");
    setIsMushroom(true);
    setTimeout(() => {
      setMove(true);
    }, 600);
  };

  return (
    <div className="flex mx-20 mt-10 justify-center">
      <div className="box-bg bg-gradient-to-r from-black to-white" />
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
      <div>
        <div
          className="box w-16 h-16 border-black border relative"
          onClick={mushroomHandler}
        >
          <img
            src={powerUpUrl}
            className={
              "absolute bottom-16 " + (!isMushroom ? "cursor-pointer" : "")
            }
          />
          <img
            src="/images/mushroom.svg"
            className={
              "absolute bottom-16 -z-10  " +
              (isMushroom ? "mushroom-clicked" : "mushroom") +
              (move ? " mushroom-move" : "")
            }
          />
        </div>
        <div className="box w-16 h-16 border-black border  relative bottom-16" />
      </div>
    </div>
  );
};

export default Box;

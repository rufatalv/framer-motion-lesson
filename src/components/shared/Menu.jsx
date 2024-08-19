import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";
export default function Menu() {
  const [hover, setHover] = useState({
    first: false,
    second: false,
    third: false,
  });
  return (
    <motion.div
      initial={{
        clipPath: "circle(0.3% at 85% 5%)",
      }}
      animate={{ clipPath: "circle(141.4% at 85% 5%)" }}
      exit={{ clipPath: "circle(0.3% at 85% 5%)" }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="h-screen border-b-2 border-white fixed flex flex-col !text-customblack top-0 left-0 w-full bg-white z-[10]"
    >
      {hover.first && (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
          }}
          src="/img.png"
          className="fixed z-[11] opacity-50 w-full h-full object-cover object-bottom"
        />
      )}
      {hover.second && (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
          }}
          src="/img2.png"
          className="fixed z-[11] opacity-50 w-full h-full object-cover object-center"
        />
      )}
      {hover.third && (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
          }}
          src="/img3.png"
          className="fixed z-[11] opacity-50 w-full h-full object-cover object-bottom"
        />
      )}
      <div className="container z-[12] relative h-full flex flex-col items-start py-5">
        <div className="invert">
          <Logo />
        </div>
        <div className="flex mt-24 flex-col gap-12 font-bold">
          <motion.div
            transition={{
              duration: 0.5,
            }}
            whileHover={{
              opacity: 0.7,
              color: "white",
            }}
            onHoverStart={() => {
              setHover({
                first: true,
                second: false,
                third: false,
              });
            }}
            onHoverEnd={() => {
              setHover({
                first: false,
                second: false,
                third: false,
              });
            }}
            className="text-9xl cursor-pointer"
          >
            HOME
          </motion.div>
          <motion.div
            transition={{
              duration: 0.5,
            }}
            whileHover={{
              opacity: 0.7,
              color: "white",
            }}
            onHoverStart={() => {
              setHover({
                first: false,
                second: true,
                third: false,
              });
            }}
            onHoverEnd={() => {
              setHover({
                first: false,
                second: false,
                third: false,
              });
            }}
            className="text-9xl cursor-pointer"
          >
            ABOUT
          </motion.div>
          <motion.div
            transition={{
              duration: 0.5,
            }}
            whileHover={{
              opacity: 0.7,
              color: "white",
            }}
            onHoverStart={() => {
              setHover({
                first: false,
                second: false,
                third: true,
              });
            }}
            onHoverEnd={() => {
              setHover({
                first: false,
                second: false,
                third: false,
              });
            }}
            className="text-9xl cursor-pointer"
          >
            WORKS
          </motion.div>
          <div className="text-9xl cursor-pointer">GET IN TOUCH</div>
        </div>
      </div>
      <div className="h-full left-[20%] w-[1px] bg-black/10 fixed z-[11]"></div>
      <div className="h-full left-[40%] w-[1px] bg-black/10 fixed z-[11]"></div>
      <div className="h-full left-[60%] w-[1px] bg-black/10 fixed z-[11]"></div>
      <div className="h-full left-[80%] w-[1px] bg-black/10 fixed z-[11]"></div>
    </motion.div>
  );
}

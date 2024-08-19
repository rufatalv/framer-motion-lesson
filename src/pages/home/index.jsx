import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="container w-full">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="-mt-14"
        src="/logo-large.svg"
      />
      <motion.div className="flex mt-52 items-end justify-between">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="font-semibold text-[42px] leading-[42px] tracking-[-2%] uppercase max-w-[450px]"
        >
          design studio BASED IN OSAKA — TOKYO{" "}
        </motion.h1>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
          className="flex border-2 w-fit border-white items-center gap-2 rounded-[17px] px-5 py-2"
        >
          <h2>GET IN TOUCH</h2>
          <FiArrowUpRight size={24} />
        </motion.button>
      </motion.div>
    </div>
  );
}

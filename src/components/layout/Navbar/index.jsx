import { useLocation } from "react-router-dom";
import Logo from "../../shared/Logo";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "../../shared/Menu";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="py-8">
      <nav className="flex container justify-between items-center">
        {pathname !== "/" && <Logo />}
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            open: {
              filter: "invert(1)",
            },
            closed: {
              filter: "invert(0)",
            },
          }}
          className="relative ml-auto z-[11] cursor-pointer flex flex-col gap-[9px] h-6 w-[120px]"
        >
          <motion.div
            variants={{
              open: {
                marginLeft: "auto",
                height: "2px",
                width: "100%",
              },
              closed: {
                height: "2px",
                marginLeft: "auto",
                width: "100%",
              },
            }}
            className="h-0.5 bg-white w-full"
          ></motion.div>
          <motion.div
            variants={{
              open: {
                height: "2px",
                marginLeft: "auto",
                width: "75%",
              },
              closed: {
                marginLeft: "auto",
                height: "2px",
                width: "100%",
              },
            }}
            className="h-0.5 bg-white w-full"
          ></motion.div>
          <motion.div
            variants={{
              open: {
                height: "2px",
                width: "50%",
                marginLeft: "auto",
              },
              closed: {
                width: "100%",
                marginLeft: "auto",
                height: "2px",
              },
            }}
            className="h-0.5 bg-white w-full"
          ></motion.div>
        </motion.div>

        <AnimatePresence>{isOpen && <Menu />}</AnimatePresence>
      </nav>
    </header>
  );
}

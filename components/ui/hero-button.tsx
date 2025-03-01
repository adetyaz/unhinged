import Image from "next/image";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

export const HeroButton = () => {
  return (
    <motion.button
      className="rounded-full px-1 py-4 w-48 h-12 overflow-hidden cursor-pointer border border-[#81947C] relative"
      aria-label="Get started"
      whileHover="hover"
    >
      <motion.div
        variants={{
          hover: {
            width: "95%",
            originX: "left right",
            transition: { staggerChildren: 0.5 },
          },
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="bg-[#C1DEBA] py-4 w-16 h-10 rounded-full  z-20 center absolute -translate-y-1/2"
      >
        <motion.svg
          variants={{ hover: { x: 60 } }}
          transition={{ duration: 0.2, ease: "easeIn" }}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2654 3.20511C10.9644 2.92049 10.4897 2.93371 10.2051 3.23464C9.92049 3.53558 9.93371 4.01027 10.2346 4.29489L15.4737 9.25H2.75C2.33579 9.25 2 9.58579 2 10C2 10.4142 2.33579 10.75 2.75 10.75H15.476L10.2346 15.7073C9.93371 15.9919 9.92049 16.4666 10.2051 16.7675C10.4897 17.0684 10.9644 17.0817 11.2654 16.797L17.6826 10.7276C17.8489 10.5703 17.9489 10.3702 17.9826 10.1614C17.994 10.1094 18 10.0554 18 10C18 9.94241 17.9935 9.88633 17.9812 9.83246C17.9462 9.62667 17.8467 9.42976 17.6826 9.27455L11.2654 3.20511Z"
            fill="#212121"
          />
        </motion.svg>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            variants={{
              hover: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="absolute top-2 left-2 text-[#0c100f]"
          >
            {["L", "e", "t", "'", "s", "☀️", "G", "o"].map((letter, index) => (
              <motion.p
                className="inline-block  font-semibold text-base"
                initial={{ y: 100, x: 0 }}
                variants={{
                  hover: {
                    y: 0,
                    transition: {
                      duration: 0.1,
                      type: "spring",
                      bounce: 0.1,
                    },
                  },
                }}
                exit={{
                  y: 80,
                }}
                key={index}
              >
                {letter}
              </motion.p>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="absolute z-10 right-5 -translate-y-1/2 center">
        <Image
          src="/images/button-blob.png"
          height={36}
          width={91}
          alt="button blob"
          className=""
        />
        <span className="inline-block absolute left-0">Get started</span>
      </div>
    </motion.button>
  );
};

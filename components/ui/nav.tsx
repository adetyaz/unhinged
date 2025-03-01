import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

export const Nav = () => {
  return (
    <>
      <header className="text-white center-space relative">
        <>
          <svg
            width="1"
            height="768"
            viewBox="0 0 1 768"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-0 left-[10%]"
          >
            <line
              x1="0.195"
              y1="8.52372e-09"
              x2="0.194966"
              y2="768"
              stroke="url(#paint0_linear_1_2394)"
              stroke-width="0.39"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_2394"
                x1="-0.5"
                y1="-2.18557e-08"
                x2="-0.500034"
                y2="768"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3B5249" />
                <stop offset="0.2" stop-color="#5D8173" stop-opacity="0" />
                <stop offset="0.74" stop-color="#648B7B" stop-opacity="0" />
                <stop offset="1" stop-color="#84B8A4" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="1"
            height="768"
            viewBox="0 0 1 768"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-0 left-[18%]"
          >
            <line
              x1="0.195"
              y1="8.52372e-09"
              x2="0.194966"
              y2="768"
              stroke="url(#paint0_linear_1_2399)"
              stroke-width="0.39"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_2399"
                x1="-0.00579938"
                y1="768"
                x2="-3.2793e-07"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5C6F67" />
                <stop offset="0.276147" stop-color="#5C6F67" stop-opacity="0" />
                <stop offset="0.755265" stop-color="#5C6F67" stop-opacity="0" />
                <stop offset="0.985" stop-color="#5C6F67" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="1"
            height="768"
            viewBox="0 0 1 768"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-[35%]"
          >
            <line
              x1="0.195"
              y1="8.52372e-09"
              x2="0.194966"
              y2="768"
              stroke="#5C6F67"
              stroke-width="0.39"
            />
          </svg>
        </>
        <Image
          src="/images/logo.png"
          alt="Unhinged Logo"
          width={50}
          height={50}
        />
        <nav>
          <ul className="items-center space-x-8 hidden md:flex">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
          </ul>
        </nav>
        <>
          <svg
            width="1"
            height="768"
            viewBox="0 0 1 768"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="right-[40%] absolute"
          >
            <line
              x1="0.195"
              y1="8.52372e-09"
              x2="0.194966"
              y2="768"
              stroke="#5C6F67"
              stroke-width="0.39"
            />
          </svg>

          <svg
            width="1"
            height="768"
            viewBox="0 0 1 768"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-0 right-[18%]"
          >
            <line
              x1="0.195"
              y1="8.52372e-09"
              x2="0.194966"
              y2="768"
              stroke="url(#paint0_linear_1_2396)"
              stroke-width="0.39"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_2396"
                x1="-0.5"
                y1="-2.18557e-08"
                x2="-0.500034"
                y2="768"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5C6F67" />
                <stop offset="0.26736" stop-color="#7D988D" stop-opacity="0" />
                <stop offset="0.797929" stop-color="#96B5A9" stop-opacity="0" />
                <stop offset="1" stop-color="#B0D5C6" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            width="1"
            height="768"
            viewBox="0 0 1 768"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[3%]"
          >
            <line
              x1="0.195"
              y1="8.52372e-09"
              x2="0.194966"
              y2="768"
              stroke="url(#paint0_linear_1_2395)"
              stroke-width="0.39"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_2395"
                x1="-0.5"
                y1="-2.18557e-08"
                x2="-0.500034"
                y2="768"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3B5249" />
                <stop offset="0.32" stop-color="#5C8072" stop-opacity="0" />
                <stop offset="1" stop-color="#84B8A4" />
              </linearGradient>
            </defs>
          </svg>
        </>
        <motion.button
          className="rounded-full w-36 h-10 relative overflow-hidden cursor-pointer hidden md:center"
          aria-label="Get started"
          whileHover="hover"
        >
          <motion.span
            variants={{ hover: { rotate: 180 } }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(to right, #404A3E, #efd8ab1a)",
            }}
          ></motion.span>
          <span className="h-[94%] w-[98%] bg-[#272C25] rounded-full sticky center">
            Get started
          </span>
        </motion.button>
      </header>
      {/* <div className="grid grid-cols-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div
            key={i}
            className={`w-full border border-blue-100 bg-red-${
              i < 10 ? i * 100 : 950
            }`}
          >
            {i}
          </div>
        ))}
      </div> */}
    </>
  );
};

import { useAnimation } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useRef } from "react";

export const GlowPath = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGGElement>(null);

  const controls = useAnimation();

  useEffect(() => {
    const path = pathRef.current;
    const glow = glowRef.current;

    if (!path || !glow) return;

    //get the total length of the path
    const pathLength = path.getTotalLength();

    console.log(pathLength);

    // Function to calculate the angle at a specific point on the path
    const calculateAngle = (length: number) => {
      const point1 = path.getPointAtLength(length);
      const point2 = path.getPointAtLength(length + 1); // Get a point slightly ahead
      const deltaX = point2.x - point1.x;
      const deltaY = point2.y - point1.y;
      return Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Convert radians to degrees
    };

    // Function to animate the glow along the path
    const animateGlow = async () => {
      while (true) {
        // Move forward (top to bottom)
        for (let i = 0; i <= pathLength; i += 2) {
          const point = path.getPointAtLength(i);
          const angle = calculateAngle(i);

          await controls.start({
            x: point.x - 810,
            y: point.y - 23.5,
            rotate: angle - 90,
            transition: { duration: 0.01, ease: "linear" },
          });
        }

        // Move backward (bottom to top)
        for (let i = pathLength; i >= 0; i -= 2) {
          const point = path.getPointAtLength(i);
          const angle = calculateAngle(i);

          await controls.start({
            x: point.x - 810,
            y: point.y - 23.5,
            rotate: angle - 90,
            transition: { duration: 0.01, ease: "linear" },
          });
        }
      }
    };

    animateGlow();
  }, [controls]);

  return (
    <svg
      width="819"
      height="390"
      viewBox="0 0 819 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Path */}
      <motion.path
        d="M809.035 9.1748V371.675C809.035 379.959 802.319 386.675 794.035 386.675H15.0347"
        stroke="#CBE4C6"
        strokeWidth="0.39"
        ref={pathRef}
      />

      {/* Glow Effect */}
      <motion.g ref={glowRef} animate={controls}>
        <g filter="url(#filter0_f_1_660)">
          <rect
            x="811.797"
            y="39.0693"
            width="6"
            height="30"
            rx="3"
            transform="rotate(-180 811.797 39.0693)"
            fill="#E7C481"
          />
        </g>
        <g filter="url(#filter1_d_1_660)">
          <rect
            x="809.498"
            y="39"
            width="1"
            height="30"
            rx="0.5"
            transform="rotate(-180 809.498 39)"
            fill="url(#paint0_linear_1_660)"
          />
        </g>
      </motion.g>

      <defs>
        <filter
          id="filter0_f_1_660"
          x="800.597"
          y="3.86934"
          width="16.4"
          height="40.4"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2.6"
            result="effect1_foregroundBlur_1_660"
          />
        </filter>
        <filter
          id="filter1_d_1_660"
          x="799.798"
          y="0.3"
          width="18.4"
          height="47.4"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4.35" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.752588 0 0 0 0 0.278971 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_660"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_660"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_660"
          x1="810.798"
          y1="57.072"
          x2="809.298"
          y2="57.072"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7C481" />
          <stop offset="0.522522" stopColor="#F8EDD8" />
          <stop offset="1" stopColor="#E7C481" />
        </linearGradient>
      </defs>
    </svg>
  );
};

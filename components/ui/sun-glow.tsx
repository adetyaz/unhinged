export const SunGlow = () => {
  return (
    <svg
      width="799"
      height="799"
      viewBox="0 0 799 799"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-1/2 -translate-x-1/2 -top-24 blur-xl"
    >
      <g filter="url(#filter0_f_1_2461)">
        <rect
          x="245"
          y="245"
          width="308.92"
          height="308.92"
          fill="url(#paint0_radial_1_2461)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_2461"
          x="0.600006"
          y="0.600006"
          width="797.72"
          height="797.72"
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
            stdDeviation="122.2"
            result="effect1_foregroundBlur_1_2461"
          />
        </filter>
        <radialGradient
          id="paint0_radial_1_2461"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(345.394 421.022) rotate(67.8623) scale(143.475 152.61)"
        >
          <stop stopColor="#16C277" />
          <stop offset="1" stopColor="#0A486E" />
        </radialGradient>
      </defs>
    </svg>
  );
};

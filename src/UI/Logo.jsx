const Logo = () => {
  return (
    <div className="flex items-center gap-1 text-white">

      <svg width="40" height="40" viewBox="0 0 100 100">

        <path
          d="M20 70 Q50 10 80 70"
          stroke="white"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />

      </svg>

      <span className="tracking-widest text-lg font-medium">
        SHIK
      </span>

    </div>
  );
};

export default Logo;
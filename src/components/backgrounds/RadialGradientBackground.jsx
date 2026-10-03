const RadialGradientBackground = ({ variant = "hero", gradients = [] }) => {
  const variants = {
    hero: [
      {
        position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
        size: "w-[1400px] h-[1400px]",
        colors: [
          { color: "rgba(124, 92, 191, 0.07)", stop: "100%" },
          { color: "rgba(160, 125, 212, 0.09)", stop: "100%" },
          { color: "rgba(124, 92, 191, 0.06)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.8,
      },
      {
        position: "bottom-0 right-0 translate-x-1/3 translate-y-1/3",
        size: "w-[900px] h-[900px]",
        colors: [
          { color: "rgba(124, 92, 191, 0.06)", stop: "100%" },
          { color: "rgba(160, 125, 212, 0.08)", stop: "100%" },
          { color: "rgba(124, 92, 191, 0.05)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.7,
      },
    ],

    about: [
      {
        position: "bottom-0 left-[70%]",
        size: "w-[700px] h-[700px]",
        colors: [
          { color: "rgba(124, 92, 191, 0.07)", stop: "100%" },
          { color: "rgba(160, 125, 212, 0.09)", stop: "100%" },
          { color: "rgba(124, 92, 191, 0.05)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.6,
      },
    ],
  };

  const activeGradients =
    variant === "custom" ? gradients : variants[variant] || variants.hero;

  const generateGradient = (colors) => {
    const colorStops = colors
      .map(({ color, stop }) => `${color} ${stop}`)
      .join(", ");
    return `radial-gradient(circle at center, transparent 0%, transparent 25%, ${colorStops}, transparent 60%, transparent 100%)`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeGradients.map((gradient, index) => (
        <div
          key={index}
          className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
          style={{
            background: generateGradient(gradient.colors),
            filter: `blur(${gradient.blur})`,
            opacity: gradient.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default RadialGradientBackground;

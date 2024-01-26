function ImageBox({ src, alt, type }) {
  const defaultStyles = {
    primary: "w-14 h-14 bg-zinc-900 rounded-full",
    secondary: "w-12 h-12 bg-zinc-50 rounded-full",
  };

  const imgPosition = {
    primary: "h-10 mt-2",
    secondary: "h-9",
  };
  return (
    <div
      className={`overflow-hidden flex justify-center items-center ${defaultStyles[type]}`}
    >
      <img src={src} alt={alt} className={`w-auto ${imgPosition[type]}`} />
    </div>
  );
}

export default ImageBox;

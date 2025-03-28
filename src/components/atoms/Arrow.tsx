type arrowProps = {
  hexColor?: string;
};

const Arrow = (props: arrowProps) => {
  const { hexColor } = props;

  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="arrowRight">
          <path
            id="Vector"
            d="M12.0832 5.93018L18.1532 12.0002L12.0832 18.0702M6.01367 12.0007L17.9832 12.0002"
            stroke={hexColor ? hexColor : "#015F2"}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </>
  );
};

export default Arrow;

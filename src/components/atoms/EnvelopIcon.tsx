import { svgProps } from "../../types/types";

const EnvelopIcon = (props: svgProps) => {
  const { fill, stroke } = props;

  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M17 20.6299H7C4 20.6299 2 19.1299 2 15.6299V8.62988C2 5.12988 4 3.62988 7 3.62988H17C20 3.62988 22 5.12988 22 8.62988V15.6299C22 19.1299 20 20.6299 17 20.6299Z"
          stroke={stroke}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M17 9.12988L13.87 11.6299C12.84 12.4499 11.15 12.4499 10.12 11.6299L7 9.12988"
          stroke={stroke}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default EnvelopIcon;

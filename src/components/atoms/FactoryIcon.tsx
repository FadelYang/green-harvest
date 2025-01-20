import { svgProps } from "../../types/types";

const FactoryIcon = (props: svgProps) => {
  const { fill, stroke } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
    >
      <path
        d="M12.4987 22.0001H4.07875C2.91875 22.0001 1.96875 21.0701 1.96875 19.9301V5.09011C1.96875 2.47011 3.91875 1.2801 6.30875 2.4501L10.7487 4.63011C11.7087 5.10011 12.4987 6.3501 12.4987 7.4101V22.0001ZM21.9697 15.0621V18.8421C21.9697 21.0021 20.9697 22.0021 18.8097 22.0021H12.4998V10.4221L12.9698 10.5221L17.4697 11.5321L19.4998 11.9821C20.8198 12.2721 21.8997 12.9521 21.9597 14.8721C21.9697 14.9321 21.9697 14.9921 21.9697 15.0621Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        opacity="0.4"
        d="M5.5 9H8.97M5.5 13H8.97"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.4688 11.53V14.75C17.4688 15.99 16.4588 17 15.2188 17C13.9787 17 12.9688 15.99 12.9688 14.75V10.52L17.4688 11.53ZM21.9587 14.871C21.9283 15.4451 21.6793 15.9857 21.2627 16.3818C20.8461 16.778 20.2936 16.9995 19.7188 17.001C18.4787 17.001 17.4688 15.991 17.4688 14.751V11.531L19.4988 11.981C20.8188 12.271 21.8987 12.951 21.9587 14.871Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FactoryIcon;

import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 25 25" {...props}>
      <path
        d="M12.327 13.27c0-.01-.003-.019-.004-.028l-.005-.036-.009-.033-.007-.03-.011-.032-.011-.03-.014-.028-.014-.03c-.005-.01-.01-.019-.016-.027l-.018-.03-.021-.028-.018-.024a.692.692 0 00-.044-.049.674.674 0 00-.049-.044l-.024-.018-.028-.02-.03-.018-.026-.016-.03-.015c-.01-.005-.02-.01-.03-.013l-.03-.011-.03-.011-.031-.008-.033-.008-.035-.006-.03-.004a.689.689 0 00-.065-.003H6.997a.667.667 0 000 1.333h3.057l-4.862 4.862a.667.667 0 10.943.943l4.862-4.862v3.057a.667.667 0 001.333 0v-4.666a.689.689 0 00-.003-.066zM19.862 4.195L15 9.057V6a.667.667 0 10-1.333 0v4.667c0 .022.001.044.003.065l.005.03.005.035.008.033.008.03.01.032.012.03.013.029.015.03.016.027.017.029.021.028.018.024a.692.692 0 00.093.093l.024.018.028.021.03.018.027.015.03.015.029.014.03.01.031.012.03.007.033.008.036.006.029.004a.688.688 0 00.066.003H19A.667.667 0 0019 10h-3.057l4.862-4.862a.667.667 0 00-.943-.943z"
        fill="#8094AE"
      />
    </Svg>
  );
};

export default Icon;

import styled from "styled-components";
import color from "@styled-system/color";
import background from "@styled-system/background";
import layout from "@styled-system/layout";
import flexbox from "@styled-system/flexbox";
import position from "@styled-system/position";
import space from "@styled-system/space";
import border from "@styled-system/border";
import shadow from "@styled-system/shadow";
import typography from "@styled-system/typography";

const boxStyle = {
  boxSizing: "border-box",
};

const Box = styled("div")(
  color,
  background,
  space,
  border,
  shadow,
  layout,
  position,
  flexbox,
  typography,
  boxStyle
);

export default Box;

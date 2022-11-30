import styled from "styled-components";
import color from "@styled-system/color";
import space from "@styled-system/space";
import typography from "@styled-system/typography";

const textStyle = {
  margin: 0,
};

const Text = styled("p")(textStyle, typography, color, space);

export default Text;

import styled from "styled-components";

import { paddingMedium, paddingSmallMedium } from "../../constants/variables";

export const TitleUppercase = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 16px;
`;

export const Title = styled.div`
  margin-bottom: ${({ marginSmall }) =>
    marginSmall ? paddingSmallMedium : paddingMedium};
  font-weight: 600;
  font-size: 32px;
`;

export default Title;

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2023 test Karukan</SFooter>;
};

const SFooter = styled.footer`
  background-color: #11999e;
  padding: 8px;
  color: #fff;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;

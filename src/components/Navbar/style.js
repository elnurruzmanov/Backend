import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0px 40px;
  background-color: #000;
  text-decoration: none;
`;

Container.Logo = styled(Link)`
  font-size: 20px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

Container.Items = styled(Link)`
  font-size: 16px;
  color: white;
  margin-left: 30px;
  cursor: pointer;
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonContainer = styled.div`
  padding: 0px 25px;
`;
const ButtonLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 5px 15px;
  background-color: #fff;
  font-size: 14px;
  color: #515151;
  text-decoration: none;
  border-radius: 10px;
  border: 1px solid #ddd;
  gap: 20px;
  &:hover,
  :focus {
    color: #dddddd;
    background-color: orangered;
  }
`;

export { ButtonContainer, ButtonLink };
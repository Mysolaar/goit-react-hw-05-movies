import styled from 'styled-components';

const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  border-bottom: 2px solid rgb(166 164 164);
  padding-bottom: 25px`;
  
const CastItem = styled.li`
  padding: 5px 10px;
  width: 400px;
  border: 2px solid orangered;
  border-radius: 5%;
  display: flex;
  gap: 10px;
  align-content: center;
  transition: all 0.3s ease;
  &:hover {
    background-color: orangered;
    transform: scale(1.1);
  }
`;

export { CastList, CastItem };

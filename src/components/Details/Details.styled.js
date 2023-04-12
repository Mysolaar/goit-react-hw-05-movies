import styled from 'styled-components';

const DetailsContainer = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-around;
  border-bottom: 2px solid rgb(166 164 164);
  gap: 25px;
  > img {
    width: 300px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export { DetailsContainer };
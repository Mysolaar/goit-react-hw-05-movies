import { HiOutlineArrowLeft } from 'react-icons/hi';
import { ButtonContainer, ButtonLink } from './ReturnButton.styled';

const ReturnButton = ({ locationBack }) => {
  return (
    <ButtonContainer>
      <ButtonLink to={locationBack}>
        <HiOutlineArrowLeft size={15} />
        go back
      </ButtonLink>
    </ButtonContainer>
  );
};
export default ReturnButton;
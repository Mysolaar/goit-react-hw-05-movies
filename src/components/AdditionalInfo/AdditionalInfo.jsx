import { AdditionalContainer, AdditionalLink } from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  return (
    <AdditionalContainer>
      <h3>Addititonal information</h3>
      <ul>
        <li>
          <AdditionalLink to="cast">Cast</AdditionalLink>
        </li>
        <li>
          <AdditionalLink to="reviews">Reviews</AdditionalLink>
        </li>
      </ul>
    </AdditionalContainer>
  );
};

export default AdditionalInfo;
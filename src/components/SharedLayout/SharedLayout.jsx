import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Main } from './SharedLayout.styled';
import { SiThemoviedatabase } from 'react-icons/si';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
          <SiThemoviedatabase size={40} />
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
export default SharedLayout;
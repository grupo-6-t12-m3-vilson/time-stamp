import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import ContainerSprints from '../../components/ContainerSprints';
import ContainerVideosSearch from '../../components/ContainerVideosSearch';
import HeaderComponent from '../../components/HeaderComponent';
import { Container, Main } from './styles';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const DashboardSprint = () => {
  const { sprintId } = useParams();
  const Navigate = useNavigate();



  return (
    <Container>
      <HeaderComponent />
      <TiArrowBack onClick={() => Navigate('/dashboard', { replace: true })} />
      <Main>
        <ContainerSprints sprint={sprintId as string} />
        <ContainerVideosSearch />
      </Main>
    </Container>
  );
};

export default DashboardSprint;

import { useContext } from 'react';
import { ContainerVideoSearch } from './styles';
import CardVideoSearch from '../CardVideoSearch';
import { UserContext } from '../../contexts/UserContext';

const ContainerVideosSearch = () => {
  const { videos, searchedVideosList, searchInput } = useContext(UserContext);

  return (
    <ContainerVideoSearch>
      <ul>
        {searchInput == '' ? (
          <span>Os vídeos pesquisados aparecerão aqui</span>
        ) : (
          searchedVideosList.map((video) => (
            <li key={video.id}>
              <CardVideoSearch video={video} />
            </li>
          ))
        )}
      </ul>
    </ContainerVideoSearch>
  );
};

export default ContainerVideosSearch;

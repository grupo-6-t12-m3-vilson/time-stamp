import { useContext } from 'react';
import { ContainerVideoSearch } from './styles';
import CardVideoSearch from '../CardVideoSearch';
import { UserContext } from '../../contexts/UserContext';

const ContainerVideosSearch = () => {
  const { videos, searchInput } = useContext(UserContext);

  return (
    <ContainerVideoSearch>
      <ul>
        {searchInput ? (
          videos.map((video) => (
            <li key={video.id}>
              <CardVideoSearch video={video} />
            </li>
          ))
        ) : (
          <span>Pesquise por um marcador existente</span>
        )}
        {/*         {filterVideos.length > 0 ? (
          filterVideos.map((video) => (
            <li key={video.id}>
              <CardVideoSearch video={video} />
            </li>
          ))
        ) : (
          <span>Pesquise por um marcador existente</span>
        )} */}
      </ul>
    </ContainerVideoSearch>
  );
};

export default ContainerVideosSearch;

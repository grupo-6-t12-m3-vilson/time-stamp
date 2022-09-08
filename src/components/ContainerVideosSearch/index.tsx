import { ContainerVideoSearch } from './styles';
import CardVideoSearch from '../CardVideoSearch';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';


const ContainerVideosSearch = () => {
 
  const {videos, filterVideos} = useContext(UserContext)

  console.log("videos filttrados",filterVideos)

  return (
  <ContainerVideoSearch>
    <ul>
      {
        filterVideos.length > 0 ?
        filterVideos.map((video) => (
          <li key={video.id}>
            <CardVideoSearch video={video}/>
          </li>
        ))
        :
        <span>Pesquise por um marcador existente</span>
      }
    </ul>
  </ContainerVideoSearch>
  )
  
  };

export default ContainerVideosSearch;

import { useContext } from 'react';
import { GoSearch } from 'react-icons/go';
import { UserContext } from '../../contexts/UserContext';

import { BoxInputSearch } from './styles';

const InputSearchVideos = () => {
  /* const { filterInput } = useContext(UserContext); */
  const { searchVideo, searchInput, setSearchInput, videos } = useContext(UserContext);

/*   const showVideosss = (event: any) => {
    event?.preventDefault();
    const videosFiltrados = videos.filter((video) => video.id > 5);
    console.log('aaaaaaaaaaaa', videosFiltrados);
  }; */

  return (
    <BoxInputSearch>
        <input type='text' placeholder='Pesquise aqui' id='valueInput' onChange={(ev) => setSearchInput(ev.target.value)} />
        <GoSearch />
    </BoxInputSearch>
  );
};

export default InputSearchVideos;

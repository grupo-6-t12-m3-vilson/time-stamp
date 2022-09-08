import { useContext } from 'react';
import { GoSearch } from 'react-icons/go';
import { UserContext } from '../../contexts/UserContext';

import { BoxInputSearch } from './styles';

const InputSearchVideos = () => {
  const { setSearchInput } = useContext(UserContext);

  return (
    <BoxInputSearch>
      <input
        type='text'
        placeholder='Pesquise aqui'
        id='valueInput'
        onChange={(ev) => setSearchInput(ev.target.value)}
      />
      <GoSearch />
    </BoxInputSearch>
  );
};

export default InputSearchVideos;

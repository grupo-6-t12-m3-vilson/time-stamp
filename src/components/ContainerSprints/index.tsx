import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { toast } from 'react-toastify';
import { AsideDate, Container } from './styles';
import ShowPlay from './ShowPlay/index';
import NavDay from './NavDay';

import { api } from '../../services/api';

type IProps = {
  sprint: string;
};

const ContainerSprints = ({ sprint }: IProps) => {
  const [sideBar, setSideBar] = useState(false);
  const [data, setData] = useState([]);

  console.log(data)

  const showSiderBar = () => setSideBar(!sideBar);

  useEffect(() => {
    api
      .get(`/videos/?sprintId=${sprint}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  return (
    <Container>
      <div id='divSprint'>
        <h1>SPRINT {sprint}</h1>
        <div id='divShow'>
          <FaBars
            style={{ display: sideBar === true ? 'none' : 'flex' }}
            onClick={showSiderBar}
          />
        </div>
      </div>
      <section>
        <AsideDate sideBar={sideBar}>
          <div
            id='divClose'
            style={{ display: sideBar === true ? 'flex' : 'none' }}
          >
            <FaTimes onClick={showSiderBar} />
          </div>
          <NavDay props={data} />
        </AsideDate>
        <ShowPlay />
      </section>
    </Container>
  );
};

export default ContainerSprints;

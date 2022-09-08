import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { FilterVideos } from "../../contexts/UserContext/interface";
import { Card, InfosCard } from "./styles";

/* interface IVideo {
  url: string,
	name: string,
	sprintId: number,
	day: string,
	extra: boolean,
	moduleId: number,
	userId: number,
	created_at: string,
	updated_at: string,
	marks?: [
			{
				id: boolean,
				time_video: string,
				title: string
			}
		],
} */

const CardVideoSearch = ({video}: any) => {

  const navigate = useNavigate()

return (
  <>
      <Card key={video.id} onClick={() => navigate("/dashboard/sprint/" + video.sprintId)}>
        <video>
          <source src={video.url} type="video/mp4" />
        </video>
        <h3>{video.name}</h3>
        {video.marks?.map((mark:any) => (
          <InfosCard key={mark.id}>            
            <div>
              <span>{mark.title}</span> - <span>{mark.time_video}</span>
            </div>
          </InfosCard>
          )
          )
        }
      </Card>
  </>

)

 /*  return (
    <Card>
      <video>
        <source src={link} type="video/mp4" />
      </video>
      <InfosCard>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <span>{time}</span> - <span>{description}</span>
        </div>
      </InfosCard>
    </Card>
  ); */
};

export default CardVideoSearch;

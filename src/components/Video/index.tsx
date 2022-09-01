import { IProps } from "./interface";

import { SectionVideo } from "./styles";

const Video = ({ url, day, time_video, title }: IProps) => {
  return (
    <SectionVideo>
      <video controls src={url} />
      <section>
        <h2>Demo - {day}</h2>
        <span>
          {time_video} - {title}
        </span>
      </section>
    </SectionVideo>
  );
};

export default Video;

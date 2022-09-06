import { api } from "./api";
import { GetVideosResponse, Marker } from "./getVideos";

export interface PostVideoProps {
  url: string;
  sprintId: number;
  day: string;
  extra: boolean;
  moduleId: number;
  userId: number;
  created_at: string;
  updated_at: string;
  marks: Marker[];
}

export async function postVideo(
  videoData: PostVideoProps
): Promise<GetVideosResponse> {
  const token = localStorage.getItem("@time-stamp:token");
  const {
    url,
    sprintId,
    day,
    extra,
    moduleId,
    userId,
    created_at,
    updated_at,
    marks,
  } = videoData;
  const { data } = await api.post(
    "/videos",
    {
      url,
      sprintId,
      day,
      extra,
      moduleId,
      userId,
      created_at,
      updated_at,
      marks,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
}

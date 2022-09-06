import { api } from "./api";

export interface Marker {
  id: string;
  time_video: string;
  title: string;
}

export interface GetVideosResponse {
  url: string;
  sprintId: number;
  day: string;
  moduleId: number;
  userId: number;
  created_at: string;
  updated_at: string;
  marks: Marker[];
  id: number;
}

export async function getVideos(): Promise<GetVideosResponse> {
  const { data } = await api.get("/videos");
  return data;
}

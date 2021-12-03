export interface Video {
  id: string;
  title: string;
  videoId: string;
  videoUrl: string;
  channelId: string;
  channelUrl: string;
  channelTitle: string;
  description: string;
  publishedTime: Date;
  thumbnail: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: PageInfo;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

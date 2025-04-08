type Release = {
  tag: string;
  name: string;
  published: string;
  url: string;
  assets: {
    name: string;
    downloadUrl: string;
    downloadCount: number;
    size: number;
  }[];
};

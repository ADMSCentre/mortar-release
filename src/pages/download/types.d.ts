type Release = {
  tag: string;
  name: string;
  published: string;
  assets: {
    name: string;
    downloadUrl: string;
    downloadCount: number;
    size: number;
  }[];
};

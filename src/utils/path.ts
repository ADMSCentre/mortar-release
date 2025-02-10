const BASE = import.meta.env.BASE_URL.replace(/\/$/, ''); // Remove trailing slash

export const withBase = (path: string): string => {
  console.log({ BASE, path });
  if (path.startsWith('/')) {
    console.log('has slash', `${BASE}/${path}`);
    return `${BASE}${path}`;
  }
  console.log('no slash', `${BASE}${path}`);
  return `${BASE}/${path}`;
};

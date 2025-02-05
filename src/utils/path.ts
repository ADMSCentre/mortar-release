const BASE = '/mortar-release';

export const withBase = (path: string): string => {
  if (path.startsWith('/')) {
    return `${BASE}${path}`;
  }
  return `${BASE}/${path}`;
};

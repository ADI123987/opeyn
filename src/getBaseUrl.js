// utils/getBaseUrl.js
export const getBaseUrl = () => {
    if (typeof window !== 'undefined' && window.location && window.location.origin) {
      return window.location.origin;
    } else if (process.env.NEXT_PUBLIC_APP_URL) {
      return process.env.NEXT_PUBLIC_APP_URL;
    } else {
      return 'http://localhost:3000/';
    }
  };
  
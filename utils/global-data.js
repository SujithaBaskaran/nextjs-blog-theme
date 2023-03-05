export const getGlobalData = () => {
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Subas Groups';

  return {
    blogTitle,
  };
};

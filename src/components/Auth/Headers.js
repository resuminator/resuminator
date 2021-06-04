const getHeader = (token) => ({
  Authorization: `Bearer ${token}`,
});

export default getHeader;

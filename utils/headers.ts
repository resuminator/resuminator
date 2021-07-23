const getHeaders = (token: string = null) => {
  return {
    authorization: `Bearer ${token}`,
  };
};

export default getHeaders;

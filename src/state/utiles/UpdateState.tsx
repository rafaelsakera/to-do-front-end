const updateState = (state: any, update: any) => {
  return {
    ...state,
    ...update,
  };
};

export default updateState;

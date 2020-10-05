const initialState = [
  {
    communityName: localStorage.getItem('communityValue'),
  },
];

const userReducer = (state = initialState) => {
  return state;
};

export { userReducer };

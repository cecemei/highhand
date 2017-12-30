

const CREATE_USER = 'CREATE_USER';

const signupapi = user => {
  return $.ajax({
    method: "POST",
    url: "/api_v1/users",
    data: {user}
  });
};

export const signup = user => dispatch => {
  return signupapi(user).then(res => console.log(res), err => console.log(err));

};

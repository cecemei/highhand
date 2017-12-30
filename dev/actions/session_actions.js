

const CREATE_USER = 'CREATE_USER';

const signupapi = user => {
  window.user=user;
  return $.ajax({
    method: "POST",
    url: "/api/v1/users",
    data: user,
    dataType: 'json'
  });
};

export const signup = user => dispatch => {
  return signupapi(user).then(res => console.log(res), err => console.log(err));

};

import AV from 'leancloud-storage';

let APP_ID = 'WiamNEuR1RvvIikVyFhpAbUB-gzGzoHsz';
let APP_KEY = 'ewLqQgvGfn4Hcjs2xxfGxE4L';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export default AV;

export function signUp(username, password, successFn, errorFn) {
  let user = new AV.User();
  user.setUsername(username);
  user.setPassword(password);
  user.signUp().then(function(loginedUser) {
    let user = getUserFromAVUser(loginedUser);
    successFn.call(null, user);
  }, function(error) {
    errorFn.call(null, error);
  });

  return undefined;

}

function getUserFromAVUser(AVUser) {
  return {
    id: AVUser.id,
    ...AVUser.attributes
  };
}

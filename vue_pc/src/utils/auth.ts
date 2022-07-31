import Cookies from "js-cookie";

export const userToken = "User-Token";
export const userID = "User-Id";

export function getToken() {
  return Cookies.get(userToken);
}
export function setToken(token: string) {
  const date = new Date();
  date.setHours(date.getHours() + 24);
  return Cookies.set(userToken, token, { expires: date });
}
export function removeToken() {
  return Cookies.remove(userToken);
}
export function getuserID() {
  return Cookies.get(userID);
}
export function setuserID(id: string) {
  return Cookies.set(userID, id);
}
export function removeuserID() {
  return Cookies.remove(userID);
}

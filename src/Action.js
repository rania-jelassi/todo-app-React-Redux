import { ADD, COMPLETE, DELETE, EDIT, SET_EDIT } from "./ActionTypes";

export function recup(payload) {
  return { type: ADD, payload };
}

export function comp(payload) {
  return { type: COMPLETE, payload };
}
export function del(payload) {
  return { type: DELETE, payload };
}
export function edit(payload) {
  return { type: EDIT, payload };
}
export function setEdit(payload) {
  return { type: SET_EDIT, payload };
}

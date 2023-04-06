import {HttpHeaders} from "@angular/common/http";

export function getAuthHeader() {
  let token = localStorage.getItem('Authorization');
  if (token) {
    return {headers: new HttpHeaders({'Authorization': token})};
  }
  return undefined;
}

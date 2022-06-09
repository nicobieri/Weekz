import { UserData, UserComposition } from '../interfaces/User';

let authenticated = false;
let userName = '';
let userImage = '';

export function useUser(): UserComposition {
  function setUserData(value: UserData): void {
    userName = value.name;
    userImage = value.picture;
    setAuthenticated(true);
  }

  function getUserName(): string {
    return userName;
  }

  function getUserImage(): string {
    return userImage;
  }

  function isAuthenticated(): boolean {
    return authenticated;
  }

  function setAuthenticated(value: boolean): void {
    authenticated = value;
  }

  return {
    setUserData,
    getUserName,
    getUserImage,
    isAuthenticated,
    setAuthenticated,
  };
}
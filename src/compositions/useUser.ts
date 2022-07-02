import { UserData, UserComposition } from '../interfaces/User';

let authenticated = false;
let userName = '';
let userImage = '';
let userMail = '';

export function useUser(): UserComposition {
  function setUserData(value: UserData): void {
    userName = value.name;
    userImage = value.picture;
    userMail = value.email;
    setAuthenticated(true);
  }

  function removeUserData(): void {
    userName = '';
    userImage = '';
    userMail = '';
    setAuthenticated(false);
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
    removeUserData,
    getUserName,
    getUserImage,
    isAuthenticated,
    setAuthenticated,
  };
}

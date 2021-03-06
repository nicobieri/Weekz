declare interface UserData {
  name: string;
  picture: string;
  email: string;
}

declare interface UserComposition {
  setUserData(value: UserData): void;
  removeUserData();
  getUserName(): string;
  getUserImage(): string;
  isAuthenticated(): boolean;
  setAuthenticated(value: boolean): void;
}

export type { UserData, UserComposition };

declare interface UserData {
  name: string;
  picture: string;
}

declare interface UserComposition {
  setUserData(value: UserData): void;
  getUserName(): string;
  getUserImage(): string;
  isAuthenticated(): boolean;
  setAuthenticated(value: boolean): void;
}

export type { UserData, UserComposition };

type APIResponse = {
  user: {
    userId: string;
    friendList: {
      count: number;
      friends: {
        firstName: string;
        lastName: string;
      }[];
    };
  };
};

type FriendList = APIResponse["user"]["friendList"];
type Friends = FriendList["friends"];

type ResponseKeys = keyof APIResponse;
type UserKeys = keyof APIResponse["user"];

type FriendList2 = {
  [K in keyof APIResponse["user"]["friendList"]]?: APIResponse["user"]["friendList"][K];
};

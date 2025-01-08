export type TUser = {
  user: string;
  password: string;
  message?: string;
};

export type TUsers = {
  regular: TUser;
  blocked: TUser;
  invalid: TUser;
  wrongPassword: TUser;
  temporarilyBlocked: TUser;
};

export type TUserMessage = {
  sucess: string;
  blocked: string;
  notFound: string;
  wrongPass: string;
  tempBlock: string;
};

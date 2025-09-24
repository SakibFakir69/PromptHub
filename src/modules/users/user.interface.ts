// name, email , password , photo ?

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface IUser {
  name: string;
  email: string;
  password: string;
  photo?: string;
  bio?: string;
  createAt: Date;
  updateAt: Date;
  followers?: string[];
  following?: string[];
}

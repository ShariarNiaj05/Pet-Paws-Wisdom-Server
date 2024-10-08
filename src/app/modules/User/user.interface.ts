export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  profilePicture?: string;
  bio?: string;
  followers?: string[];
  following?: string[];
  contents?: string[];
  upvotedPosts?: string[];
  downvotedPosts?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IShortUser {
  id: number;
  username: string;
}

  export interface IUser {
    id: number;
    username: string;
    userId: number;
    firstName: string;
    lastName: string;
    image: string;
  }
export interface IPost{
    id: number;
    userid:number;
    title:string;
    body:string;
    tags:string[];
    reactions:number;
    user:IUser;
}

export interface IComment {
  id: number;
  postId: number;
  body: string;
  user: IShortUser;
  userData: IUser;
}


export interface IUsers{

    
  id:number;
  firstName:string;
  lastName:string;
  maidenName:string;
  age:number;
  gender:string;
  emeil:string;
  phone:string;
  Username:string;
  password:string;
  birthDate:string;
  image:string;
  bloodGroup:string;
  height:number;
  weight:number;
  eyeColor:string;
 
  hair: {
    color: string;
    type: string;
  }
}












// export interface IContextProps {
//   state: IState;
//   dispatch: ({type}:{type:string}) => void;
// }




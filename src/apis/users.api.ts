import axios from "axios";
import { IUser, IUsers } from "../type";


type fetchPostFuncType = () => Promise<IUsers[]>;
export const fetchUsers:fetchPostFuncType = async()=>{
    const response = await axios.get("https://dummyjson.com/users")
    if (response.status>=400){
        throw await response
    }
    return response.data.users
}



type fetchUserByIdFuncType = (_: number) => Promise<IUser>;
export const fetchUserById: fetchUserByIdFuncType = async (id: number) => {
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await response.json();
  return data;
};

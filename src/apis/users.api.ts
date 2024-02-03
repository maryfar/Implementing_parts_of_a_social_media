import axios from "axios";
import { IUsers } from "../type";


type fetchPostFuncType = () => Promise<IUsers[]>;
export const fetchUsers:fetchPostFuncType = async()=>{
    const response = await axios.get("https://dummyjson.com/users")
    if (response.status>=400){
        throw await response
    }
    return response.data.users
}
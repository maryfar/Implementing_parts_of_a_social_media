import axios from "axios";
import { IPost } from "../type";

type fetchPostFuncType = () => Promise<IPost[]>;
export const fetchPosts:fetchPostFuncType = async()=>{
    const response = await axios.get("https://dummyjson.com/posts")
    if (response.status>=400){
        throw await response
    }
    return response.data.posts
}
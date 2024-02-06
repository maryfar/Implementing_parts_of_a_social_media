import { useContext, useEffect, useState } from "react"
import { IUsers } from "../type"
import { fetchUsers } from "../apis/users.api";
import { UserInfo } from "../components/user";
import { UserSkeleton } from "../components/user.skeletun";
import { AppContext } from "../App";




export  const UserInfoContainer =()=>{
    const [UsersList,setUserList] =useState <IUsers[]>([]);
    const { setLoading,loading} = useContext(AppContext)
    

const fetchData = async ()=>{
    try {
        let users: IUsers[]=await   fetchUsers();
        setUserList(users);
        setLoading(false);

    } catch (error) {
        console.error("Error fetching posts:", error);
       
    }
}


useEffect(() => {
    if (!loading) return;
    fetchData();
  }, [loading]);

  return (
    <>
      {loading && (
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-2 space-y-2 ">
          <div className="w-[200px]">
            <UserSkeleton />
          </div>
          <div className="w-[200px]">
            <UserSkeleton />
          </div>
          <div className="w-[200px]">
            <UserSkeleton />
          </div>
          <div className="w-[200px]">
            <UserSkeleton />
          </div>
          <div className="w-[200px]">
            <UserSkeleton />
          </div>
          <div className="w-[200px]">
            <UserSkeleton />
          </div>
          <div className="w-[200px]">
            <UserSkeleton />
          </div>
          <div className="w-[200px]">
            <UserSkeleton />
          </div>
        </div>
      )}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-2 space-y-2">
      {UsersList.map((el, index) => (
       <div key={index} className="w-[200px]">
          <UserInfo user={el} />
        </div>
      ))}
       </div>
    </>
  );
}
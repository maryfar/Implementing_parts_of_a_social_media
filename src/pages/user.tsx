import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { UserPage } from "../components/userinfo";
import { IUsers } from "../type";
import { fetchUserById } from "../apis/users.api";




export const UserPages = () => {
    const user = useLoaderData() as IUsers;

    return (
      <section className="bg-slate-200 py-20">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 gap-y-6">
          <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-11/12 w-full flex flex-col items-center justify-center ">
            <h1 className="text-3xl font-bold mb-2">Data of selected user:</h1>
            <UserPage  user={user}/>
          </div>
        </div>
      </section>
    );
  };
  


  export const userPageLoader = async (data: LoaderFunctionArgs) => {
    const user = await fetchUserById(Number(data.params.userId));
    return user;
  };
  
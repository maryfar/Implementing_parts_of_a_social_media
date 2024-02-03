import { UserInfoContainer } from "../containers/user-list";


export const UsersPage = () => {
    return (
      <section className="bg-slate-200 py-20">
      <div className="container mx-auto flex flex-col items-center px-2 gap-y-6">
        <div className="xl:w-5/12 lg:w-7/12 md:w-8/12 sm:w-11/12 w-full">
          <h1 className="text-3xl font-bold">Users</h1>
        </div>
           <UserInfoContainer/>
        </div>
      </section>
    );
  };
  
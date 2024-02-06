import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AppLayout } from "./layouts/app-layout";
import { PostsPage } from "./pages/posts";
import {UsersPage}  from "./pages/users";
import { createContext, useState } from "react";
import { HomePage } from "./pages/home";
import { NotFoundPage } from "./pages/404";
import { PostPage, postPageLoader } from "./pages/post";
import { ErrorBoundary } from "./pages/errorBoundry";
import { PostCommentsContainer, postCommentsContainerLoader } from "./containers/post-comments";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index={true} element={<HomePage/>}/>
      <Route path="posts" element={<PostsPage />} />
      <Route
        path="posts/:postId"
        element={<PostPage />}
        loader={postPageLoader}
        errorElement={<ErrorBoundary />}
      >
        <Route
          path="comments"
          element={<PostCommentsContainer />}
          loader={postCommentsContainerLoader}
        />
      </Route>
      <Route path="users" element={<UsersPage/>} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);



export const AppContext:React.Context<any> = createContext(null)


function App() {
  const [loading, setLoading] = useState<boolean>(true);
 
  return(
  <AppContext.Provider value={{loading,setLoading}}>
    <RouterProvider router={router} />
  </AppContext.Provider>
  
   
   );
}

export default App;

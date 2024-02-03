import {
  Link,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AppLayout } from "./layouts/app-layout";

import { PostsPage } from "./pages/posts";
import {UsersPage}  from "./pages/users";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route
        index={true}
        element={
          <div>
            <p>hello world</p>
            <Link to="posts">Posts</Link>
          </div>
        }
      />
      <Route path="posts" element={<PostsPage />} />
      <Route path="users" element={<UsersPage/>} />
  
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

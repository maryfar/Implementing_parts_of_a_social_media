import { useRouteError } from "react-router-dom";


export interface IServerError {
  message: string;
}

export function ErrorBoundary() {
  let error = useRouteError() as IServerError;
  return <div className="p-5">
    <p>Server error</p>
    <p>{error.message}</p>
  </div>;
}

// import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login/Login'
import Header from './Header';
import Background from './Background';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  return (
    <div className='w-full'>
      <Background />
      <Header></Header>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

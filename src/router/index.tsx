import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ManageLayout from "../layout/ManageLayout";
import QuestionLayout from "../layout/QuestionLayout";
import Home from "../pages/home";
import Register from "../pages/register";
import Login from "../pages/login";
import List from "../pages/manage/list";
import Star from "../pages/manage/star";
import Trash from "../pages/manage/trash";
import Edit from "../pages/question/edit";
import Stat from "../pages/manage/star";
import NotFund from "../pages/not_fund";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "Login",
        element: <Login></Login>,
      },
      {
        path: "manage",
        element: <ManageLayout></ManageLayout>,
        children: [
          {
            path: "list",
            element: <List></List>,
          },

          {
            path: "star",
            element: <Star></Star>,
          },
          {
            path: "trash",
            element: <Trash></Trash>,
          },
        ],
      },
    ],
  },
  {
    path: "/question",
    element: <QuestionLayout></QuestionLayout>,
    children:[
        {
            path:"edit/:id",
            element:<Edit></Edit>
        },
        {
            path:"stat/:id",
            element:<Stat></Stat>
        },
    ]
  },
  {
    path:"*",
    element:<NotFund></NotFund>
  }
]);

export default router;

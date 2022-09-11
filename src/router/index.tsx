import React, {lazy} from "react"
import { useRoutes, Navigate } from "react-router-dom"
import LazyLoad from "@/layout/lazyLoad"

interface Router {
    name?: string;
    path: string;
    children?: Array<Router>,
    element: any
}

export const routers: Array<Router> = [
  {
    name: "Layout",
    path: "/",
    element: LazyLoad(lazy(() => import("@/layout"))),
    children: [
      {
        name: "Editor",
        path: "/editor",
        element: LazyLoad(lazy(() => import("@/pages/videoEditor")))
      },
      {
        name: "Paragraph",
        path: "/paragraph",
        element: LazyLoad(lazy(() => import("@/pages/paragraphEditor")))
      },
      {
        name: "updateData",
        path: "/updateData",
        element: LazyLoad(lazy(() => import("@/pages/updateData")))
      },
      {
        name: "peaks",
        path: "/peaks",
        element: LazyLoad(lazy(() => import("@/pages/peaks")))
      }
    ]
  }
]

const Routers = () => {
  return useRoutes(routers);
}

export default Routers

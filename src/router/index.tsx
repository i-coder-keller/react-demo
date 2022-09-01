import React, {lazy} from 'react'
import { useRoutes, Navigate } from "react-router-dom"
import LazyLoad from '@/layout/lazyLoad'

interface Router {
    name?: string;
    path: string;
    children?: Array<Router>,
    element: any
}

export const routers: Array<Router> = [
  {
    name: 'Layout',
    path: '/',
    element: LazyLoad(lazy(() => import('@/layout'))),
    children: [
      {
        name: 'Editor',
        path: '/editor',
        element: LazyLoad(lazy(() => import('@/pages/videoEditor')))
      }
    ]
  }
]

const Routers = () => {
  return useRoutes(routers);
}

export default Routers

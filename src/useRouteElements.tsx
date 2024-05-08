import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import path from './constants/path'
import Discover from './pages/Discover'
import Roadmap from './pages/Roadmap'
import PageNotFound from './pages/PageNotFound'
import LessonDetails from './pages/LessonDetails'
import LessonsOfTopic from './pages/LessonsOfTopic'
import Results from './pages/Results'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='*' />
}

export default function useRouteElements() {
  const element = useRoutes([
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.roadmap,
          element: (
            <MainLayout>
              <Roadmap />
            </MainLayout>
          )
        },
        {
          path: path.results,
          element: (
            <MainLayout>
              <Results />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <AuthLayout>
              <Login />
            </AuthLayout>
          )
        }
      ]
    },
    {
      path: path.home,
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: path.discover,
      element: (
        <MainLayout>
          <Discover />
        </MainLayout>
      )
    },
    {
      path: `${path.lessons}/:lessonId`,
      element: (
        <MainLayout>
          <LessonDetails />
        </MainLayout>
      )
    },
    {
      path: `${path.topics}/:topicId`,
      element: (
        <MainLayout>
          <LessonsOfTopic />
        </MainLayout>
      )
    },

    {
      path: '*',
      element: (
        <MainLayout>
          <PageNotFound />
        </MainLayout>
      )
    }
  ])
  return element
}

import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import path from './constants/path'
import Discover from './pages/Discover'
import Roadmap from './pages/Roadmap'
import PageNotFound from './pages/PageNotFound'
import Recorder from './pages/Recorder'
export default function useRouteElements() {
  const element = useRoutes([
    {
      path: path.recorder,
      element: (
        <MainLayout>
          <Recorder />
        </MainLayout>
      )

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
      index: true,
      element: (
        <MainLayout>
          <Discover />
        </MainLayout>
      )
    },
    {
      path: path.roadmap,
      index: true,
      element: (
        <MainLayout>
          <Roadmap />
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

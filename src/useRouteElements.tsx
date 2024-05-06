import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import path from './constants/path'
import Discover from './pages/Discover'
import Roadmap from './pages/Roadmap'
import PageNotFound from './pages/PageNotFound'
import LessonDetails from './pages/LessonDetails'
import LessonsOfTopic from './pages/LessonsOfTopic'
import Results from './pages/Results'

export default function useRouteElements() {
  const element = useRoutes([
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
      path: path.roadmap,
      element: (
        <MainLayout>
          <Roadmap />
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
      path: path.results,
      element: (
        <MainLayout>
          <Results />
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

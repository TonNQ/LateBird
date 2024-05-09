import { ErrorResponse } from 'react-router-dom'
import http from '../utils/http'
import { Lesson, LessonDetail } from '../types/lessons.type'

const lessonsApi = {
  getAllLessons() {
    return http.get<LessonDetail[]>('/lesson/getAll')
  },
  getLessonsByTopicId(topicId: string) {
    return http.get(`/lesson/getAllByTopicId/${topicId}`)
  },
  getLessonById(lessonId: string) {
    return http.get<Lesson | ErrorResponse>(`/lesson/get/${lessonId}`)
  }
}

export default lessonsApi

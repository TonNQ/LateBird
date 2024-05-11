import { LessonResults, Score, UserResults } from '../types/results.type'
import http from '../utils/http'

const resultsApi = {
  getStatisticLesson(params: { userId: string; lessonId: string }) {
    return http.get<LessonResults>(`/results/statisticLesson/${params.userId}}/${params.lessonId}`)
  },
  getStatisticOfUser() {
    return http.get<UserResults>(`/results/statistic`)
  },
  getCountUserByLessson(lessonId: string) {
    return http.get<{
      countUser: number
    }>(`/results/countUser/${lessonId}}`)
  },
  createResult(body: { lessonId: string; content: Score }) {
    return http.post('/results/create', body)
  }
}

export default resultsApi

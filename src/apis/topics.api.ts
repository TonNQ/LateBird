import { Topic } from '../types/topics.type'
import http from '../utils/http'

const topicsApi = {
  getAllTopics() {
    return http.get<Topic[]>('/topics/allInformation')
  },
  getInformationOfTopic(topicId: string) {
    return http.get<Topic>(`/topics/information/${topicId}`)
  },
  getAllTopicsByUserId() {
    return http.get<Topic[]>('/topics/allTopicByUserId')
  }
}

export default topicsApi

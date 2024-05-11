import { Score } from "./results.type"

export interface Lesson {
  lessonId: string
  word: string
  linkVideo1: string
  linkVideo2: string
  topicName: string
  photos: Photo[]
}

export interface Photo {
  photoId: string
  linkPhoto: string
}


export interface LessonDetail {
  lessonId: string
  word: string
  linkVideo1: string
  linkVideo2: string
  topicId: string 
  photos: Photo[]
  topicName?: string
  LearnedPeople?: number 
  studiedTimes?: number 
  maxScore?: Score | string
}


export interface LessonsOfTopic {
  count: number 
  nameTopic: string 
  countUser: number 
  lessons: LessonDetail[]
}
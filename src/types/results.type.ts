export interface Score {
  accuracyScore: number
  pronunciationScore: number
  completenessScore: number
  fluencyScore: number
}

export interface LessonResults {
  count: number
  content: Score
}

export interface UserResults {
  passedLessons: number
  maxAccuracyofPass: number
  failedLessons: number
  maxAccuracyofFail: number
  completedTopics: number
  process: number
}

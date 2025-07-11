'use client'
import {useChat} from '@ai-sdk/react'
import { useDeepResearchStore } from "@/store/deepResearch"
import QuestionForm from "./QuestionForm"
import { useEffect } from 'react'

const QnA = () => {

    const {questions, isCompleted, topic, answers} = useDeepResearchStore()

const { append, data} =useChat({
    api: "/api/deep-research",
})
console.log('DATA: ', data)

useEffect(() => {
if (isCompleted && questions.length > 0) {
    const clarifications = questions.map((question, index) => ({
        question: question,
        answer: answers[index],
    }))

    append({
        role: "user",
        content: JSON.stringify({
            topic: topic,
            clarifications: clarifications,
        }),
    })
}

}, [isCompleted, questions, answers, topic, append])

    // if (questions.length===0) return null
  return (
    <div className="flex gap-4 w-full flex-col items-center mb-16"><QuestionForm/></div>
  )
}
export default QnA
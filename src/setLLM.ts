import { ChatGoogleGenerativeAI } from '@langchain/google-genai'
import { HarmBlockThreshold, HarmCategory } from '@google/generative-ai'
import { HumanMessage, MessageContent } from 'langchain/schema'
import { marked } from 'marked'

const model = new ChatGoogleGenerativeAI({
  modelName: 'gemini-pro',
  maxOutputTokens: 2048,
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
  ],
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
})

const textChain: MessageContent = []

export const setLLM = async (element: HTMLButtonElement) => {
  element.addEventListener('click', async () => {
    try {
      const text = document.getElementById('text') as HTMLInputElement

      textChain.push({ type: 'text', text: text.value })

      const input = [
        new HumanMessage({
          content: textChain,
        }),
      ]

      const message = await model.invoke(input)

      if (message && document) {
        const board = document.getElementById('board')
        const md = await marked(message.content as string)

        if (md) {
          const body = document.createElement('div')

          body.innerHTML = md

          board && md && board.appendChild(body)
        }
      }
    } catch (e) {
      console.error(e)
    }
  })
}

import { ChatOpenAI } from '@langchain/openai'

const chatModel = new ChatOpenAI({
  openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
})

export const setLLM = async (element: HTMLButtonElement) => {
  element.addEventListener('click', async () => {
    const message = await chatModel.invoke('what is LangSmith?')

    console.log(message)
  })
}

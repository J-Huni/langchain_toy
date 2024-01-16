import { setLLM } from './setLLM'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Chat With AI</h1>
    <p class="read-the-docs">
      This Is Daniel's LangChain Toy Project
    </p>
    <div id='board'>
    </div>
    <div class="card">
      <input id='text' />
      <button id="chat" type="button">
        GO
      </button>
    </div>
  </div>
`

setLLM(document.querySelector<HTMLButtonElement>('#chat')!)

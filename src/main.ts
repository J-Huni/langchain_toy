import { setLLM } from './setLLM'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p class="read-the-docs">
      This Is Daniel's LangChain Toy Project
    </p>
    <div class="card">
      <button id="counter" type="button">
        Start LLM
      </button>
    </div>
  </div>
`

setLLM(document.querySelector<HTMLButtonElement>('#counter')!)

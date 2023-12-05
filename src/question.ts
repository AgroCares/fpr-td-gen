export class Question {
  id: string
  type: types
  ask: string
  placeholder: string
  help: string
  options: string[]
  constructor (id: string, type: types, ask: string, options: string[]) {
    this.id = id
    this.type = type
    this.ask = ask
    this.placeholder = ''
    this.help = ''
    this.options = options
  }

  getQuestion (): question {
    return {
      id: this.id,
      type: this.type,
      ask: this.ask,
      placeholder: this.placeholder,
      help: this.help,
      options: this.options
    }
  }
}

type types = 'text' | 'select' | 'checkbox'

interface question {
  id: string
  type: types
  ask: string
  placeholder: string
  help: string
  options: string[]
}

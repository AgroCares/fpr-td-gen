class FprTdGen {
  name: string
  constructor (name: string) {
    this.name = name
  }

  getName (): string {
    return this.name
  }

  getTd (): object {
    return {
      name: this.name,
      version: 'FPR/2022'
    }
  }
}

export default FprTdGen

function completeName(name: string, ...manyParams: string[]): string {
  return `${name} ${manyParams.join(' ')}`
}

let superman: string = completeName('Clark', 'Joseph', 'Kent')
let ironman: string = completeName('Anthony', 'Edward', 'Tony')

console.log(superman)
console.log(ironman)

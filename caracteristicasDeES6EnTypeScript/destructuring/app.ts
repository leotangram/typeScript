let avengers = {
  nick: 'Samuel Jackson',
  ironman: 'Robert Downey Jr',
  vision: 'Paul Bettany'
}

let { nick, ironman: warmachine, vision, thor = 'Thor' } = avengers

console.log(nick)
console.log(warmachine)
console.log(vision)
console.log(thor)

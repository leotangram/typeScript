let thor = {
  name: 'Thor',
  weapon: 'Mjolnir'
}

let ironman = {
  name: 'Ironman',
  weapon: 'Armorsuit'
}

let captain = {
  name: 'Capitan América',
  weapon: 'Escudo'
}

let avengers = [thor, ironman, captain]

for (const avenger of avengers) {
  console.log(avenger.name, avenger.weapon)
}

for (let index = 0; index < avengers.length; index++) {
  const avenger = avengers[index]
  console.log(avenger.name, avenger.weapon)
}

avengers.forEach(avenger => {
  console.log(avenger.name, avenger.weapon)
})

avengers.map(avenger => {
  console.log(avenger.name, avenger.weapon)
})

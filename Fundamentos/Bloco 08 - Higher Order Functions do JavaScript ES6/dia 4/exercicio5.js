const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA(array) {
  return array.reduce((acc, nome) => {
    return (acc += nome.split('').filter((char) => char === 'a' || char === 'A').length);
  }, 0);
}

console.log(containsA(names));

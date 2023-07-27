const firstArray = ['La vie', 'Croire en sa destinee', 'Rester positif'];
const secondArray = ['Croire en Dieu', 'Dire merci', 'Dire bonjour'];
const thirdArray = ['Travailler', 'manger', 'Jeuner et beaucoup manger apres'];

const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  };

const message = `${firstArray[getRandomIndex(firstArray)]}, ${secondArray[getRandomIndex(secondArray)]}, ${thirdArray[getRandomIndex(thirdArray)]}.`;

console.log(message);
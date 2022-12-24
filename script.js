const oneNum = +prompt(`Введіть перше число:`)
const twoNum = +prompt(`Введіть друге число:`)
const threeNum = +prompt(`Введіть третє число:`)

const result = !isNaN(oneNum,twoNum,threeNum) ? (oneNum+twoNum+threeNum)/3 : 'Erorr!'
alert(`Середнє арифметичне: ${result}`)
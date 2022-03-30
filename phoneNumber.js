const createPhoneNumber = (arr) => {
    return (`(${arr.splice(0, 3.).join('')}) ${arr.splice(0, 3).join('')}-${[...arr].join('')}`)
};

const numArray = [1,2,3,4,5,6,7,8,9,1];
console.log(createPhoneNumber(numArray));
const arrObj = [
    { id: 1, name: 'Вася'},
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
];

const setId = [...new Set(arrObj.map((item) => item.id))];

const uniqueObj = setId
                .map(id => arrObj.find(obj => obj.id === id));

console.log(uniqueObj);
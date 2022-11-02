let array=[2,4,5,8];

let element = 0;
function sumarArray(array){
    for (let index = 0; index < array.length; index++) {
        element = element + array[index];
        console.log(element)
    };
};
sumarArray(array);
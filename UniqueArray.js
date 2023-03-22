// Având un array de numere, să se elimine duplicatele, astfel încât fiecare număr 
// să apară o singură dată.

const eliminareDuplicate = (nums) => {
    let result = [];

    for (const num of nums){
        if (result.includes(num) === false){
            result.push(num);
        }
    }
    return result;
}


console.log(eliminareDuplicate([1,2,3,4,1,2,6,8,2,7,3]));

// Având două stringuri, să se determine dacă unul din ele este o anagramă a celuilalt


const checkAnagram = (str1, str2) => {
    
    if (str1.length !== str2.length){
        return `${str1} nu este anagrama a ${str2}`;
    }
    
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");

    return (sortedStr1 === sortedStr2)? `${str1} este anagrama a ${str2}`:`${str1} nu este anagrama a ${str2}`;
}

console.log(checkAnagram("deabcfgh","bacdegfh"));
console.log(checkAnagram("stromae","maestro"));
console.log(checkAnagram("stromae","mae"));
console.log(checkAnagram("stromae","maestri"));


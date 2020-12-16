let numbers = [10, 20, 30, 40, 4, 3, 0, 1, 7, 14];

for (let index = 0; index < numbers.length; index++) {
    let karekok = Math.sqrt(numbers[index]);
    console.log("Dizi icindeki " + (index + 1) + ". sayinin karekokü  " + karekok);
}

for (let index = 0; index < numbers.length; index++) {                  
    let kare = Math.pow(numbers[index], 2);
    console.log("Dizi icindeki " + (index + 1) + ". sayinin karesi " + kare);
}

let toplam = 0                                                           
for (let index = 0; index < numbers.length; index++) {
    toplam += numbers[index];                                         
}
console.log("Dizi icindeki sayilarin toplami = " + toplam);

let average = toplam / numbers.length;                                 
console.log("Dizi icindeki sayilarin  ortalamasi = " + average);

let min = numbers[0];                                                   
let max = numbers[0];                                        

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > max) {                                         
        max = numbers[index];                                           
    }                                                                   
    if (numbers[index] < min) {                                         
        min = numbers[index];                                           
    }
}

console.log("Dizi icindeki en buyuk sayi " + max);           
console.log("Dizi icindeki en kucuk sayi " + min);            
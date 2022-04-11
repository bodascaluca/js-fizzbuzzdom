
// colorare i numeri in base se è pari o dispari
const rowWrapper = document.querySelector(".row");

// Stampa nella console
for(let i = 1; i<=100; i++){

    // Deffinire se è pari o dispari 
    let oddOrEven;

    if (i % 15 === 0){
        oddOrEven ="fizzbuzz";
    } else if(i % 3 === 0){
        oddOrEven = "fizz";
    } else if (i % 5 === 0) {
        oddOrEven = "buzz";
    } else {
        oddOrEven = i;
    }


    // 2 OUTPUT
    rowWrapper.innerHTML += `<div class="box ${oddOrEven} "> ${oddOrEven}</div>`;
    // console.log(i,oddOrEven);
}

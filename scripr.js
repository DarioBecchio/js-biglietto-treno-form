/*Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

const full_name = document.getElementById ( 'fullName' ).value
document.getElementById('fullName').addEventListener('click' , function (){
    console.log(document.getElementById('fullName').value);
})


const total_distance = document.getElementById ( 'distance' ).value
console.log(total_distance);

const your_age = document.getElementById ( 'age' ).value
console.log(your_age);

let gross_total =  (total_distance * 0.21).toFixed(2);
console.log(gross_total);

document.getElementById('result').addEventListener('click' , function (){
    if (your_age <= 18){
        const total_price = ( gross_total - (gross_total * 0.20) ).toFixed(2);
        document.getElementById('result').innerHTML = (`Il tuo totale è ${total_price} €`) ;
    } else if (your_age >= 65){
        const total_price = ( gross_total - (gross_total * 0.40) ).toFixed(2);
        document.getElementById('result').innerHTML = (`Il tuo totale è ${total_price} €`) ;
    } else{
    
        document.getElementById('result').innerHTML = (`Il tuo totale è ${gross_total} €`) ;
    }
})



/*Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/
//Creo le costanti che mi serviranno
const name_surname = document.getElementById('nomeCognome');
const travel_lenght = document.getElementById('tot_km');
const my_age = document.getElementById('Età');
const save_input = document.getElementById('saveInput');
const km_price = 0.21
//Creo un evento per calcolare il totale e stampare sul documento i dettagli di pagamento
save_input.addEventListener('click' , function (){

  console.log('clicked'); 
  const saved_age = parseInt(my_age.value)
  const saved_km = parseInt(travel_lenght.value)
  const saved_name = (name_surname.value)
  //console.log(saved_age , saved_km , saved_name);
  const gross_total = ( saved_km * km_price ) ;
  let my_coach = Math.floor((Math.random() * 10) + 1);
  let my_code = Math.floor((Math.random() * 100000) + 1);
  //console.log(my_coach , my_code);
  //console.log(gross_total);
  document.querySelector('.passengerDetail').innerHTML = `${saved_name}` ;
  ;
//applico gli sconti al totale in base all'età utente e stampo il totale
if (saved_age < 18){
  const total_price = ( gross_total - (gross_total * 0.20) ).toFixed(2);
  console.log(total_price);
  document.querySelector('.passengerPrice').innerHTML = `€ ${total_price}`;
  document.querySelector('.passengerOffer').innerHTML = `Sconto young 20%`
} else if (saved_age > 65){
  const total_price = ( gross_total - (gross_total * 0.40) ).toFixed(2);
  document.querySelector('.passengerPrice').innerHTML = `€ ${total_price}`;
  document.querySelector('.passengerOffer').innerHTML = `Sconto senior 40%`
} else{

  document.querySelector('.passengerPrice').innerHTML = `€ ${gross_total}`;
  document.querySelector('.passengerOffer').innerHTML = `Biglietto standard`
}
document.querySelector('.passengerCoach').innerHTML = `${my_coach}`;
document.querySelector('.passengerCode').innerHTML = `${my_code}`;
}
)

const delete_input = document.getElementById('deleteButton');
delete_input.addEventListener('click' , function(){
  document.getElementById('Età').value = ""
  document.getElementById('tot_km').value = ""
  document.getElementById('nomeCognome').value = ""
})
/*
//Creo una costante con il valore del nome e cognome
const full_name = document.getElementById('fullName').value
console.log(full_name);


//Creo una costante con il valore dei km da percorrere

const total_distance = document.getElementById('distance').value
console.log(total_distance);

document.getElementById('save').addEventListener('click' , function () {
  console.log(full_name);  
}

)


const my_age = document.getElementById('age').value
console.log(my_age);

document.getElementById('save').addEventListener('click' , function () {
  console.log(full_name);  
}

)
*/

/*
- Creare variabile per id=password
- Creare variabile per numero da aggiungere
- Chiedere all’utente il nome
- Chiedere all’utente il nome cognome
- Chiedere all’utente il nome il colore preferito
- Stampare output nomecognomecolorepreferito21 sulla pagina
*/

// Creare variabile per id=password

const password = document.getElementById('password');

// Creare variabile per numero da aggiungere

const randomNumber = '21';

// Chiedere all’utente il nome

const firstName = prompt('Qual è il tuo nome?');

// Chiedere all’utente il nome cognome

const lastName = prompt('Qual è il tuo cognome?');

// Chiedere all’utente il nome il colore preferito

const color = prompt('Qual è il tuo colore preferito?');

// Stampare output nomecognomecolorepreferito21 sulla pagina

const passwordGenerator = firstName + lastName + color + randomNumber;
password.innerHTML=`<strong>${passwordGenerator}</strong>`;
/*
- Creare variabile per id=password
- Creare variabile per numero da aggiungere
- Chiedere all’utente il nome
- Chiedere all’utente il nome cognome
- Chiedere all’utente il nome il colore preferito
- Stampare output nomecognomecolorepreferito21 sulla pagina
*/

// *** Long script ***

const password = document.getElementById('password');

const randomNumber = '21';

const firstName = prompt('Qual è il tuo nome?');

const lastName = prompt('Qual è il tuo cognome?');

const color = prompt('Qual è il tuo colore preferito?');

const passwordGenerator = firstName + lastName + color + randomNumber;
password.innerHTML=`<strong>${passwordGenerator}</strong>`;

// *** Short script ***

/*
const firstName = prompt('Qual è il tuo nome?');

const lastName = prompt('Qual è il tuo cognome?');

const color = prompt('Qual è il tuo colore preferito?');

document.getElementById('password').innerHTML=`<strong>${firstName}${lastName}${color}21</strong>`;
*/
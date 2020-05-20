document.getElementById('cta').innerHTML='Ecco la password più sicurisssima al mondo che neanche la cia con il suo squadrone di ingegnieri e haker riuscirà mai a scoprire e decriptare:'';

 //richiesta nome
var nome = prompt('Inserisci il tuo nome');
console.log (nome);

// richiesta cognome
var cognome = prompt('Inserisci il tuo cognome');
console.log (cognome);

// richiesta colore preferito
var colorePreferito = prompt('inserisci il tuo colore preferito');
console.log (colorePreferito);

// risultato
var passwordGenerator = nome + cognome + colorePreferito + '19';
console.log (passwordGenerator);

var passwordResult = passwordGenerator;
document.getElementById('password').innerHTML=passwordResult;

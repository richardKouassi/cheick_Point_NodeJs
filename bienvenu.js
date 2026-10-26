const fs = require('fs');

// Lecture et affichage de hello.txt
try {
  const data = fs.readFileSync('welcome.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Erreur lors de la lecture du fichier :', err.message);
}

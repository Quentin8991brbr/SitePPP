
document.addEventListener('DOMContentLoaded', function() {

    const bouton = document.getElementById('btn-details');
    const details = document.getElementById('details-cachees');


    bouton.addEventListener('click', function() {

        if (details.style.display === 'none') {

            details.style.display = 'block';
            bouton.textContent = 'Masquer le Petit Secret'; // On change le texte du bouton
        } else {

            details.style.display = 'none';
            bouton.textContent = 'Afficher un petit secret';
        }
    });
});
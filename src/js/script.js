document.addEventListener('DOMContentLoaded', 
    function() {
    const cards = document.querySelectorAll('.cards');

    cards.forEach(card => {
        card.addEventListener('click', 
            function() {
              this.classList.toggle('expanded');
              
              document.querySelectorAll('.cards.expanded').forEach(openCard => {
                if (openCard !== this) {
                    openCard.classList.remove('expanded');
                }
            });
        });
    });
});
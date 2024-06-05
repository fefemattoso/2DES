document.getElementById('characterTypeSelect').addEventListener('change', function() {
    var selectedValue = this.value;
    var cards = document.querySelectorAll('.card-item');

    cards.forEach(function(card) {
        if (selectedValue === 'all') {
            card.style.display = 'block';
        } else {
            if (card.classList.contains(selectedValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
});
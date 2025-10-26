const closeBtn = document.getElementById('closeOffer');

if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        const offerSection = document.querySelector('.section-one_offerheading');
        offerSection.style.display = 'none';
    });
}
 
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    const products = document.querySelectorAll('.collectionimg');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            filterProducts();
        });
    });

    function filterProducts() {
        // Get all checked values for each filter
        const checkedOccasion = Array.from(document.querySelectorAll('input[name="occasion"]:checked')).map(cb => cb.value);
        const checkedColor = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(cb => cb.value);
        const checkedArrival = Array.from(document.querySelectorAll('input[name="arrival"]:checked')).map(cb => cb.value);

        products.forEach(product => {
            const productOccasion = product.getAttribute('data-occasion');
            const productColor = product.getAttribute('data-color');
            const productArrival = product.getAttribute('data-arrival');

            // Show if matches all selected filters or no filter selected
            const show =
                (checkedOccasion.length === 0 || checkedOccasion.includes(productOccasion)) &&
                (checkedColor.length === 0 || checkedColor.includes(productColor)) &&
                (checkedArrival.length === 0 || checkedArrival.includes(productArrival));

            product.style.display = show ? 'block' : 'none';
        });
    }


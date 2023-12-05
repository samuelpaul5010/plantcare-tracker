document.addEventListener('DOMContentLoaded', function () {
    const plantList = document.getElementById('plantList');
    const addPlantBtn = document.getElementById('addPlantBtn');
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close');

    addPlantBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    function openModal() {
        // Clear previous modal content
        modalContent.innerHTML = '';

        // Create input fields for plant details
        const nameInput = createInput('text', 'plantName', 'Plant Name');
        const lastWateredInput = createInput('date', 'lastWatered', 'Last Watered');
        const addButton = document.createElement('button');
        addButton.textContent = 'Add Plant';
        addButton.addEventListener('click', addPlant);

        // Append input fields and button to modal
        modalContent.appendChild(nameInput);
        modalContent.appendChild(lastWateredInput);
        modalContent.appendChild(addButton);

        // Display the modal
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function addPlant() {
        const name = document.getElementById('plantName').value;
        const lastWatered = document.getElementById('lastWatered').value;

        if (name && lastWatered) {
            // Create a new plant card
            const plantCard = document.createElement('div');
            plantCard.className = 'card';
            plantCard.innerHTML = `<h3>${name}</h3><p>Last Watered: ${lastWatered}</p>`;

            // Append the new plant card to the plant list
            plantList.appendChild(plantCard);

            // Close the modal
            closeModal();
        } else {
            alert('Please fill in all fields.');
        }
    }

    function createInput(type, id, placeholder) {
        const input = document.createElement('input');
        input.type = type;
        input.id = id;
        input.placeholder = placeholder;
        return input;
    }

    // Close the modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});

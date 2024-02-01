document.addEventListener('DOMContentLoaded', function () {
    const circle = document.querySelector('.circle');
    const diceImg = document.querySelector('.dice-img');

    // Function to handle rotation and fetch random advice
    const handleUserClick = async () => {
        try {
            // Fetch random advice from the API
            const response = await fetch('https://api.adviceslip.com/advice');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Update the text content using the data from the API
            const adviceIdElement = document.getElementById('advice-id');
            const adviceTextElement = document.getElementById('advice-text');

            adviceIdElement.innerText = data.slip.id;
            adviceTextElement.innerText = `"${data.slip.advice}"`;

            // Rotate elements to 60 degrees
            circle.style.transform = 'rotate(60deg)';
            diceImg.style.transform = 'rotate(60deg)';

            // Delay the second rotation for 3 seconds
            setTimeout(() => {
                // Rotate elements back to 0 degrees
                circle.style.transform = 'rotate(0deg)';
                diceImg.style.transform = 'rotate(0deg)';
            }, 500);
        } catch (error) {
            // Handle errors
            console.error('There was a problem:', error);
        }
    };

    // Function to load advice initially
    const loadInitialAdvice = async () => {
        try {
            // Fetch advice from the API
            const response = await fetch('https://api.adviceslip.com/advice');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Update the text content using the data from the API
            const adviceIdElement = document.getElementById('advice-id');
            const adviceTextElement = document.getElementById('advice-text');

            adviceIdElement.innerText = data.slip.id;
            adviceTextElement.innerText = `"${data.slip.advice}"`;
        } catch (error) {
            // Handle errors
            console.error('There was a problem:', error);
        }
    };

    // Call the function to load initial advice when the page loads
    loadInitialAdvice();

    // Add click event listeners to trigger rotation and fetch random advice
    circle.addEventListener('click', handleUserClick);
    diceImg.addEventListener('click', handleUserClick);
});

function openTabs() {
    const tabCount = document.querySelector('.main-left-tabs input').value;
    const url = document.querySelector('.main-right-links input').value;

    for (let i = 0; i < tabCount; i++) {
        window.open(url, '_blank');
    }
}

// Function to trigger button click on Enter key press
function handleKeyPress(event) {
    if(event.key == "Enter") {
        document.querySelector('.main-bottom-button button').click();
    }
}

// Add event listeners to both input fields
document.querySelector('.main-left-tabs input').addEventListener("keydown", handleKeyPress);
document.querySelector('.main-right-links input').addEventListener("keydown", handleKeyPress);

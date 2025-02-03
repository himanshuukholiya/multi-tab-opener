function openTabs() {
    const tabCount = document.querySelector('.main-left-tabs input').value;
    const url = document.querySelector('.main-right-links input').value;

    for (let i = 0; i < tabCount; i++) {
        window.open(url, '_blank');
    }
}

document.querySelector('.email-link').addEventListener("click", () => {
    setTimeout(() => {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=himanshukholiya.work@gmail.com", '_blank')
    }, 500);
})
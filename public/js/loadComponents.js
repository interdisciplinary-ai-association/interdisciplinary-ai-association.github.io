async function loadComponent(selector, url) {
    const element = document.querySelector(selector);
    if (element) {
        const response = await fetch(url);
        const html = await response.text();
        element.innerHTML = html;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('#header', '../includes/header.html');
    loadComponent('#footer', '../includes/footer.html');
});
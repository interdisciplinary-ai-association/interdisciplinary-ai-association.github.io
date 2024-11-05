AOS.init({
    once: true,
    disable: 'phone',
    duration: 500,
    easing: 'ease-out-cubic',
});


// function loadComponent(id, file) {
//     fetch(file)
//         .then((response) => {
//             if (!response.ok) throw new Error(`Error loading ${file}: ${response.statusText}`);
//             return response.text();
//         })
//         .then((data) => {
//             document.getElementById(id).innerHTML = data;
//         })
//         .catch((error) => console.error(error));
// }

// loadComponent('header-placeholder', '../components/header.html');
// loadComponent('footer-placeholder', '../components/footer.html');
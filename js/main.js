AOS.init({
    once: true,
    disable: 'phone',
    duration: 500,
    easing: 'ease-out-cubic',
});

/** Render user profile */

const founderData = [
    {
        name: "Charmaine Hung",
        role: "Founder",
        bio: "Medical Student @ HKU",
        image: "../assets/founder-images/Charmaine-Hung.png",
    },
    {
        name: "Adrian So",
        role: "Founder",
        bio: "Medical Student @ HKU",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Marco Lee",
        role: "Founder",
        bio: "Law Student @ HKU",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Anson Chan",
        role: "Founder",
        bio: "Engineering PhD Candidate @ Cambridge",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Koni Lau",
        role: "Founder",
        bio: "Psychology @ CUHK",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Connie Wong",
        role: "Founder",
        bio: "Property Management @ PolyU",
        image: "https://via.placeholder.com/150",
    },
];

function renderStaffCards(staff) {
    const container = document.getElementById("founder-container");
    staff.forEach(({ name, role, bio, image }) => {
        const staffCard = document.createElement("staff-card");
        staffCard.setAttribute("name", name);
        staffCard.setAttribute("role", role);
        staffCard.setAttribute("bio", bio);
        staffCard.setAttribute("image", image);
        container.appendChild(staffCard);
    });
}

// Render the staff cards in the 3-column grid
renderStaffCards(founderData);


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
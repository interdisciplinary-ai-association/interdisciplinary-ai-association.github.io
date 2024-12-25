AOS.init({
    once: true,
    disable: 'phone',
    duration: 500,
    easing: 'ease-out-cubic',
});

/** Render user profile */

const staffData = [
    {
        name: "Jane Doe",
        role: "CEO",
        bio: "Jane has 15 years of experience leading AI startups and loves building innovative solutions.",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "John Smith",
        role: "CTO",
        bio: "John is a tech visionary with expertise in machine learning and cloud infrastructure.",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Alice Johnson",
        role: "COO",
        bio: "Alice is an expert in operational strategies and excels in team management.",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Bob Brown",
        role: "Lead Data Scientist",
        bio: "Bob specializes in data-driven AI solutions and has a decade of experience in the field.",
        image: "https://via.placeholder.com/150",
    },
];

function renderStaffCards(staff) {
    const container = document.getElementById("staff-container");
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
renderStaffCards(staffData);


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
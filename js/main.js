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
        url: "#",
    },
    {
        name: "Adrian So",
        role: "Founder",
        bio: "Medical Student @ HKU",
        image: "../assets/founder-images/So_Ching_Hei.jpg",
        url: "#",
    },
    {
        name: "Marco Lee",
        role: "Founder",
        bio: "Law Student @ HKU",
        image: "../assets/founder-images/Marco Lee.jpg",
        url: "#",
    },
    {
        name: "Anson Chan",
        role: "Founder",
        bio: "Engineering PhD Candidate @ Cambridge",
        image: "https://via.placeholder.com/150",
        url: "#",
    },
    {
        name: "Koni Lau",
        role: "Founder",
        bio: "Psychology @ CUHK",
        image: "../assets/founder-images/Lau Wing Tung.jpeg",
        url: "#",
    },
    {
        name: "Connie Wong",
        role: "Founder",
        bio: "Property Management @ PolyU",
        image: "https://via.placeholder.com/150",
        url: "#",
    },
];

const directorData = [
    {
        name: "Connie Wong",
        role: "Founder",
        bio: "Property Management @ PolyU",
        image: "https://via.placeholder.com/150",
        url: "#",
    },
];

const advisorData = [
    {
        name: "Dr. Christopher SEE",
        role: "Honor Advisor",
        bio: "Lecturer in Anatomy, School of Biomedical Sciences @ CUHK",
        image: "../assets/advisor-images/Dr. Christopher See.jpg",
        url: "../advisor-page/Dr-Christopher-Yew-Hong-SEE.html",
    },
    {
        name: "Dr. Jack Tsao",
        role: "Honor Advisor",
        bio: "Associate Director / Senior Lecturer, Common Core Office @ HKU",
        image: "../assets/advisor-images/Dr. Jack Tsao (HKU).PNG",
        url: "../advisor-page/Dr-Jack-Tsao.html",
    },

    {
        name: "Prof. CS Lau",
        role: "Honor Advisor",
        bio: "Vice-President & Pro-Vice-Chancellor (Health) (Interim) and Dean of Medicine @ HKU",
        image: "../assets/advisor-images/Prof. CS Lau.jpg",
        url: "../advisor-page/Prof-Cs-Lau.html",
    },
    {
        name: "Prof. Daniel Lee",
        role: "Honor Advisor",
        bio: "Associate Vice-President, Office of Innovation and Enterprise @ CUHK",
        image: "../assets/advisor-images/Prof. Daniel Lee.png",
        url: "../advisor-page/Prof-Daniel-Lee.html",
    },
    {
        name: "Prof. Gary Lau",
        role: "Honor Advisor",
        bio: "Assistant Dean (Education Innovations), Li Ka Shing Faculty of Medicine @ HKU",
        image: "../assets/advisor-images/Prof. Gary Lau.jpg",
        url: "../advisor-page/Prof-Gary-Lau.html",
    },
    {
        name: "Prof. Joshua Ho",
        role: "Honor Advisor",
        bio: "Assistant Dean (Innovation & Technology Transfer), Li Ka Shing Faculty of Medicine @ HKU",
        image: "../assets/advisor-images/Prof. Joshua Ho.jpeg",
        url: "../advisor-page/Prof-Joshua-Ho.html",
    },
    {
        name: "Prof. Samson Tse",
        role: "Honor Advisor",
        bio: "Dean of Student Affairs @ HKU",
        image: "../assets/advisor-images/Prof. Samson Tse.png",
        url: "../advisor-page/Prof-Samson-Tse.html",
    },
];

function renderStaffCards(data, containerId) {
    console.log("Container ID passed:", containerId); // Debug
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID "${containerId}" not found`);
        return;
    }
    if (!Array.isArray(data)) {
        console.error("Provided data is not an array");
        return;
    }
    data.forEach(({ name, role, bio, image, url }) => {
        const staffCard = document.createElement("staff-card");
        staffCard.setAttribute("name", name);
        staffCard.setAttribute("role", role);
        staffCard.setAttribute("bio", bio);
        staffCard.setAttribute("image", image);
        staffCard.setAttribute("url", url);
        container.appendChild(staffCard);
    });
}

// Render the staff cards in the 3-column grid
if (founderData.length > 0) {
    renderStaffCards(founderData, "founder-container");
}

if (directorData.length > 0) {
    renderStaffCards(directorData, "director-container");
}

const advisor_container = document.getElementById("advisor-container");

if (advisor_container && advisorData.length > 0) {
renderStaffCards(advisorData, "advisor-container");
}

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const slider = document.getElementById("slider");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();

            // Remove active class from all tabs
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");

            // Slide the content
            slider.style.transform = `translateX(-${index * 100}%)`;
        });
    });
});


document.getElementById("founder-tab").addEventListener("click", () => {
    document.getElementById("director-container").style.display = "none";
    document.getElementById("founder-container").style.display = "grid";
    renderStaffCards("founder-container" , founderData);
});

document.getElementById("director-tab").addEventListener("click", () => {
    document.getElementById("founder-container").style.display = "none";
    document.getElementById("director-container").style.display = "grid";
    renderStaffCards("director-container", directorData );
});


// Advisor page share same js function







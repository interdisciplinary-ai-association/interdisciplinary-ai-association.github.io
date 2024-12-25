const svg = document.getElementById("circuit");
const width = window.innerWidth;
const height = window.innerHeight;
const pathCount = 50; // Number of random paths

// Function to generate a random color
function getRandomColor() {
    const colors = ["#41FFD3", "#73E2FE", "#757EFF", "#B477FF"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to create a path with multiple turns
function createDiversePath(startX, startY) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    // Start position
    let currentX = startX;
    let currentY = startY;

    // Build the path data with random turns
    let pathData = `M ${currentX} ${currentY}`;
    const segmentCount = Math.floor(Math.random() * 4) + 2; // 2 to 5 segments

    for (let i = 0; i < segmentCount; i++) {
        const direction = Math.floor(Math.random() * 4); // 0: right, 1: left, 2: up, 3: down
        const length = Math.random() * 100 + 50; // Segment length (50 to 150px)

        switch (direction) {
            case 0: currentX += length; break; // Right
            case 1: currentX -= length; break; // Left
            case 2: currentY -= length; break; // Up
            case 3: currentY += length; break; // Down
        }
        pathData += ` L ${currentX} ${currentY}`;
    }

    // Base Path (static background)
    const basePath = path.cloneNode();
    basePath.setAttribute("d", pathData);
    basePath.classList.add("base-path");
    svg.appendChild(basePath);

    // Animated Path (on top)
    const animatedPath = path.cloneNode();
    animatedPath.setAttribute("d", pathData);
    animatedPath.classList.add("animated-path");

    // Randomize color and speed
    const randomColor = getRandomColor();
    const randomDuration = Math.random() * 5 + 2; // Random duration between 2s and 7s
    const delay = Math.random() * 3; // Random delay (0 to 3s)

    animatedPath.style.stroke = randomColor;
    animatedPath.style.animationDuration = `${randomDuration}s`;
    animatedPath.style.animationDelay = `${delay}s`;

    svg.appendChild(animatedPath);
}

// Function to generate multiple diverse paths
function generateDiversePaths() {
    for (let i = 0; i < pathCount; i++) {
        const startX = Math.random() * width;
        const startY = Math.random() * height;
        createDiversePath(startX, startY);
    }
}

// Generate paths on load
generateDiversePaths();

// Regenerate paths on window resize
window.addEventListener("resize", () => {
    svg.innerHTML = ""; // Clear existing paths
    generateDiversePaths();
});
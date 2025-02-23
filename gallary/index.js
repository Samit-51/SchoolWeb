// Data for different categories
const categories = {
    "blood-donation": [
        "Volunteers donating blood",
        "Medical staff assisting donors",
        "People waiting for their turn",
        "Blood donation awareness session"
    ],
    "arts-craft": [
        "Students painting murals",
        "Handmade crafts exhibition",
        "Paper origami competition",
        "Live pottery demonstration"
    ],
    "exhibition": [
        "Science fair project showcase",
        "Photography exhibition",
        "Art display by local artists",
        "Technology innovation booth"
    ],
    "presentation": [
        "Guest speaker addressing students",
        "PowerPoint presentation on leadership",
        "Debate competition finals",
        "Award ceremony for top performers"
    ],
    "group-photo": [
        "Graduation group photo",
        "Team-building event picture",
        "Faculty and students posing",
        "End-of-year celebration shot"
    ],
    "modern-walkathon": [
        "Participants walking for a cause",
        "Runners crossing the finish line",
        "Charity fundraising event",
        "Public awareness campaign"
    ],
    "scout": [
        "Outdoor survival training",
        "Fire-making and first aid practice",
        "Team obstacle challenge",
        "Camping under the stars"
    ],
    "rover-rangers": [
        "Community service activities",
        "Adventure sports training",
        "Youth leadership workshop",
        "National-level competition"
    ],
    "municipality-visit": [
        "Students meeting local officials",
        "Tour of the municipal office",
        "Learning about civic administration",
        "Discussion on community development"
    ]
};

// Function to change category and update cards
function changeCategory(category) {
    const container = document.getElementById("cardContainer");
    container.innerHTML = ""; // Clear existing cards

    categories[category].forEach(text => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = text;
        container.appendChild(card);

        // Timeout for animation effect
        setTimeout(() => {
            card.classList.add("show");
        }, 100);
    });

    // Update active state for navigation buttons
    document.querySelectorAll(".nav-links button").forEach(button => {
        button.classList.remove("active");
    });
    document.querySelector(`[onclick="changeCategory('${category}')"]`).classList.add("active");
}

// Initialize with the first category
changeCategory("blood-donation");

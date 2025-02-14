// Select all timeline items
const timelineItems = document.querySelectorAll(".timeline-item");

//Add hover effect
timelineItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.transform ="scale(1.2)";
    });

    item.addEventListener("mouseout", () => {
        item.style.transform ="scale(1)";
    });
});
// Parallax Effect
window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;
    document.querySelector(".parallax").style.transform = `translateY(${scrollTop * 0.5}px)`;
});
// Distributor Modal Logic
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("distributorModal");
    const applyBtn = document.getElementById("applyBtn");
    const closeModal = document.querySelector(".close");
    const applyNow = document.getElementById("applyNow");

    // Open Modal
    applyBtn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Close Modal
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Click Outside Modal to Close
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Redirect Apply Now Button
    applyNow.addEventListener("click", function() {
        window.location.href = "mailto:support@cravingswater.com?subject=Distributor Inquiry&body=I want to become a distributor!";
    });
});
    


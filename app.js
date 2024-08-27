document.addEventListener("DOMContentLoaded", function() {
    const viewDetailsButtons = document.querySelectorAll(".view-details");

    viewDetailsButtons.forEach(button => {
        button.addEventListener("click", function() {
            const fullDetails = this.nextElementSibling;
            const isExpanded = this.getAttribute("aria-expanded") === "true";

            if (isExpanded) {
                fullDetails.hidden = true;
                this.setAttribute("aria-expanded", "false");
                this.textContent = "View Details";
            } else {
                fullDetails.hidden = false;
                this.setAttribute("aria-expanded", "true");
                this.textContent = "Hide Details";
            }
        });
    });
});
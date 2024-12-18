function toggleDropdown(dropdownId) {
    // Hide all dropdowns
    document.querySelectorAll(".dropdowns").forEach((dropdown) => {
        dropdown.style.display = "none";
    });

    // Show the selected dropdown
    document.getElementById(dropdownId).style.display = "block";

    // Reset background and border for all payment options
    document.querySelectorAll(".payment-option").forEach((option) => {
        option.classList.remove("checked");
    });

    // Apply background and border to the selected option
    const selectedOption = document.querySelector(
        `input[name="payment-option"]:checked`
    );
    if (selectedOption) {
        selectedOption.closest(".payment-option").classList.add("checked");
    }
}

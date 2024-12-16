function toggleDropdown(dropdownId) {
	// Hide all dropdowns
	const dropdowns = document.querySelectorAll('.dropdowns');
	dropdowns.forEach(dropdown => dropdown.style.display = 'none');
	
	// Show the selected dropdown
	const selectedDropdown = document.getElementById(dropdownId);
	if (selectedDropdown) {
		selectedDropdown.style.display = 'block';
	}
}
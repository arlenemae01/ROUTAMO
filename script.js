function processForm() {
    var startingPoint = document.getElementById("startingPoint").value;
    var endingPoint = document.getElementById("endingPoint").value;

    // Implement your logic to determine the destination page based on startingPoint and endingPoint
    // For example:
    if (startingPoint === "Marisol" && endingPoint === "Pampang") {
        window.location.href = "Marisol_to_Pampang_page.html";
    } else if (startingPoint === "CityC" && endingPoint === "CityD") {
        window.location.href = "cityC_to_cityD_page.html";
    } else {
        // Default redirection if no specific condition is met
        window.location.href = "default_page.html";
    }

    // Return false to prevent the form from submitting through its default behavior
    return false;
}

document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    processForm();
});

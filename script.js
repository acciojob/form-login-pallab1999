document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload

    let firstName = document.getElementById("fname").value.trim();
    let lastName = document.getElementById("lname").value.trim();

    if (firstName === "" || lastName === "") {
        alert("Please enter both first and last names.");
        return;
    }

    alert(firstName + " " + lastName);
});

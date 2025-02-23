
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload

    let formData = new FormData(this);

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("msg").innerHTML = "Message Sent Successfully!";
            this.reset();
        } else {
            document.getElementById("msg").innerHTML = "Something went wrong!";
        }
    })
    .catch(error => {
        document.getElementById("msg").innerHTML = "Error: " + error;
    });
});

function get() {
            let firstName = prompt(" What is your first name?");
            let email = prompt("What is your email address?");
            let gender = prompt("What is your gender?");
            if (gender === "female") {
                alert("Thank you, " + firstName + " !We'll be in touch by email 😀");
            } else {
                alert("Sorry, " + firstName + " !This perfume is not suitable for you 🙁");
            }
        }
        let getSampleButten = document.querySelector("button");
        getSampleButten.addEventListener("click", get);
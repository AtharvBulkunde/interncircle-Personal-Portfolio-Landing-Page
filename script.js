```javascript
// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


// ===============================
// DARK / LIGHT MODE
// ===============================

const themeToggle =
    document.getElementById("themeToggle");


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const light =
        document.body.classList.contains("light");

    themeToggle.textContent =
        light ? "☾" : "☼";

    localStorage.setItem(
        "portfolioTheme",
        light ? "light" : "dark"
    );

});


// Remember theme

const savedTheme =
    localStorage.getItem("portfolioTheme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeToggle.textContent = "☾";

}


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;


        const subject =
            encodeURIComponent(
                `Portfolio Contact - ${name}`
            );


        const body =
            encodeURIComponent(
                `Name: ${name}

Email: ${email}

Message:
${message}`
            );


        window.location.href =
            `mailto:yourmail@example.com?subject=${subject}&body=${body}`;


        formMessage.textContent =
            "Opening your email application...";

    }
);


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();
```

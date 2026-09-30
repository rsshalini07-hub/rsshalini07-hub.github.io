/* =====================================================
   SHALINI PORTFOLIO JAVASCRIPT
===================================================== */


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 700);

});


/* ================= DOM ELEMENTS ================= */

const body = document.body;

const themeBtn =
    document.getElementById("themeBtn");

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");

const navLinks =
    document.querySelectorAll(".nav-link");

const sections =
    document.querySelectorAll("section");

const backTop =
    document.getElementById("backTop");

const scrollProgress =
    document.getElementById("scrollProgress");


/* ================= MOBILE MENU ================= */

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon =
        menuBtn.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close menu when clicking nav */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon =
            menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* ================= DARK / LIGHT MODE ================= */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    body.classList.add("light-mode");

    themeBtn.innerHTML =
        '<i class="fas fa-sun"></i>';

}


themeBtn.addEventListener("click", () => {

    body.classList.toggle("light-mode");

    const isLight =
        body.classList.contains("light-mode");


    if (isLight) {

        themeBtn.innerHTML =
            '<i class="fas fa-sun"></i>';

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        themeBtn.innerHTML =
            '<i class="fas fa-moon"></i>';

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});


/* ================= TYPING EFFECT ================= */

const typingText =
    document.getElementById("typingText");


const roles = [

    "Full Stack Python Developer",

    "Frontend Developer",

    "Python Developer",

    "Web Developer"

];


let roleIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1800
            );

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) %
                roles.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 55 : 90
    );

}


typeEffect();


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= ACTIVE NAV ================= */

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


/* ================= SCROLL PROGRESS ================= */

function updateScrollProgress() {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage =
        (scrollTop / documentHeight) * 100;

    scrollProgress.style.width =
        `${percentage}%`;

}


window.addEventListener(
    "scroll",
    updateScrollProgress
);


/* ================= BACK TO TOP ================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ================= PROJECT FILTER ================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const filter =
            button.dataset.filter;


        projectCards.forEach(card => {

            const category =
                card.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* ================= PROJECT MODAL ================= */

const projectModal =
    document.getElementById("projectModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalType =
    document.getElementById("modalType");

const modalTech =
    document.getElementById("modalTech");

const modalIcon =
    document.getElementById("modalIcon");


const projectData = {

    resume: {

        title:
            "AI Resume Analyzer & Job Match System",

        type:
            "PYTHON PROJECT",

        description:
            "An AI-powered resume analyzer and job matching system developed using Python and Tkinter. The system takes candidate information and target job role, compares skills with required skills, displays matched and missing skills, calculates an overall match percentage and provides recommendations for improvement.",

        icon:
            "fa-file-circle-check",

        technologies:
            [
                "Python",
                "Tkinter"
            ]

    },


    filesense: {

        title:
            "FileSense – Intelligent File Organization & Duplicate Detection Tool",

        type:
            "FRONTEND PROJECT",

        description:
            "A responsive file-management dashboard developed using HTML, CSS and JavaScript. It provides file selection, categorization, search, filtering, duplicate detection and interactive file statistics.",

        icon:
            "fa-folder-tree",

        technologies:
            [
                "HTML5",
                "CSS3",
                "JavaScript"
            ]

    }

};


function openProject(projectName) {

    const project =
        projectData[projectName];


    if (!project) return;


    modalTitle.textContent =
        project.title;


    modalType.textContent =
        project.type;


    modalDescription.textContent =
        project.description;


    modalIcon.innerHTML =
        `<i class="fas ${project.icon}"></i>`;


    modalTech.innerHTML = "";


    project.technologies.forEach(
        technology => {

            const span =
                document.createElement("span");

            span.textContent =
                technology;

            modalTech.appendChild(span);

        }
    );


    projectModal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


function closeProject() {

    projectModal.classList.remove("show");

    document.body.style.overflow =
        "";

}


/* Close modal with Escape */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProject();

        }

    }
);


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");


const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const subjectInput =
    document.getElementById("subject");

const messageInput =
    document.getElementById("message");


const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const subjectError =
    document.getElementById("subjectError");

const messageError =
    document.getElementById("messageError");


function isValidEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}


function clearErrors() {

    nameError.textContent = "";

    emailError.textContent = "";

    subjectError.textContent = "";

    messageError.textContent = "";

}


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        clearErrors();


        let valid = true;


        /* Name */

        if (
            nameInput.value.trim() === ""
        ) {

            nameError.textContent =
                "Please enter your name.";

            valid = false;

        }


        /* Email */

        if (
            emailInput.value.trim() === ""
        ) {

            emailError.textContent =
                "Please enter your email.";

            valid = false;

        } else if (
            !isValidEmail(
                emailInput.value.trim()
            )
        ) {

            emailError.textContent =
                "Please enter a valid email.";

            valid = false;

        }


        /* Subject */

        if (
            subjectInput.value.trim() === ""
        ) {

            subjectError.textContent =
                "Please enter a subject.";

            valid = false;

        }


        /* Message */

        if (
            messageInput.value.trim() === ""
        ) {

            messageError.textContent =
                "Please enter your message.";

            valid = false;

        }


        if (!valid) {

            return;

        }


        showToast(
            "Message validated successfully!"
        );


        contactForm.reset();

    }
);


/* ================= TOAST ================= */

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");


let toastTimer;


function showToast(message) {

    toastMessage.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

}


/* ================= CURRENT YEAR ================= */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();


/* ================= INPUT EFFECT ================= */

const inputs =
    document.querySelectorAll(
        ".contact-form input, .contact-form textarea"
    );


inputs.forEach(input => {

    input.addEventListener(
        "input",
        () => {

            const errorElement =
                document.getElementById(
                    input.id + "Error"
                );


            if (errorElement) {

                errorElement.textContent =
                    "";

            }

        }
    );

});


/* ================= PAGE LOAD ================= */

window.addEventListener(
    "load",
    () => {

        updateActiveNav();

        updateScrollProgress();

    }
);
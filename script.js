
// script.js
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Contact Form Functionality
document.querySelector(".contact-btn").addEventListener("click", function() {
    document.getElementById("contactModal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("contactModal").style.display = "none";
});

function closeModal() {
    document.getElementById("contactModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target === document.getElementById("contactModal")) {
        closeModal();
    }
}
//counter animation
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".trusted-stats h3");

    const observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute("data-target"));
                    let count = 0;
                    let speed = Math.ceil(target / 50); // Adjust speed

                    const updateCount = () => {
                        if (count < target) {
                            count += speed;
                            // For 40, show "40+" during counting
                            if (target === 40) {
                                entry.target.textContent = `${count}+`;
                            } else {
                                // For 20 and 200, show "> 20" during counting
                                entry.target.textContent = `> ${count}`;
                            }
                            setTimeout(updateCount, 40); // Adjust animation speed
                        } else {
                            // When the counting finishes, append the correct symbol
                            if (target === 40) {
                                entry.target.textContent = `${target}+`;  // For 40, add the "+"
                            } else {
                                entry.target.textContent = `> ${target}`;  // For others, add the ">"
                            }
                        }
                    };

                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        },
        { root: null, threshold: 0.5 }
    );

    counters.forEach((counter) => {
        observer.observe(counter);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove "active" class from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));

        // Add "active" class to the clicked button
        this.classList.add("active");

        // Get the target content ID
        const tabId = this.getAttribute("data-tab");

        // Hide all contents
        contents.forEach((content) => {
          content.classList.remove("active");
        });

        // Show the selected content
        document.getElementById(tabId).classList.add("active");
      });
    });
  });
  




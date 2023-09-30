let menuBtn = document.querySelector(".burger_menu");
      let menu = document.querySelector(".menu");

      menuBtn.addEventListener("click", function () {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("active");
      });

      const back = document.getElementById('back');
      const next = document.getElementById("next");
      const testimonials1 = document.getElementById("testimonials1");
      const testimonials2 = document.getElementById("testimonials2");

      next.addEventListener("click", () => {
        testimonials1.style.display = "none";
        testimonials2.style.display = "flex";
        next.style.backgroundColor = "white";
        back.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
      });
      back.addEventListener("click", () => {
        testimonials1.style.display = "flex";
        testimonials2.style.display = "none";
        back.style.backgroundColor = "white";
        next.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
      });
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //Toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    //Animate links
    navLinks.forEach((link, index) => {
      console.log(index);
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

const changeIMG = () => {
  const banning = document.querySelector(".banning");
  const reservoir = document.querySelector(".reservoir");
  const afton = document.querySelector(".afton");
  const battle = document.querySelector(".battle");

  banning.addEventListener("click", () => {
    document.body.style.backgroundImage = "url(banning2.jpg)";
  });

  reservoir.addEventListener("click", () => {
    document.body.style.backgroundImage = "url(reservoir.jpg)";
  });

  afton.addEventListener("click", () => {
    document.body.style.backgroundImage = "url(afton.jpg)";
  });

  battle.addEventListener("click", () => {
    document.body.style.backgroundImage = "url(battle3.jpg)";
  });
};

changeIMG();

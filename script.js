

// Nav selection---------------------------------------------

const navLinks = document.querySelectorAll(".nav-links")

navLinks.forEach(link => {
   link.addEventListener("click", (e) => {
   

       navLinks.forEach(otherLink => {
        otherLink.classList.remove("nav-link-active");
      });
       
      link.classList.add("nav-link-active")

      localStorage.setItem("activeNavLink", link.getAttribute("href"));
   })
})

const activeNavLink = localStorage.getItem("activeNavLink");
if (activeNavLink) {
    document.querySelector(`[href="${activeNavLink}"]`).classList.add("nav-link-active");
  }

  
  
  //intersection observer---------------------------------------------

  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
   threshold: 0, 
   rootMargin: "0px 0px -250px 0px",
};

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) =>{
      entries.forEach((entry) => {
         entry.target.classList.toggle("appear", entry.isIntersecting)
      })
  }, appearOptions)



faders.forEach(fader => {
    
   appearOnScroll.observe(fader);
   
   
});




//run the percentage algorithm to make the intersection observer fire at the right time


const texte="YUMMY NOUILLES"
    let yummy=document.getElementById('yummynouilles');
    const speed=100;

    let index=0;

    function typeWriter(){
        if(index<texte.length){
            yummy.textContent+=texte.charAt(index);
            index++;
            setTimeout(typeWriter,speed);
        }
    }
    typeWriter();


    const links = document.querySelectorAll(".nav-link");
   const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if(link.getAttribute("href") === currentPage){
      link.classList.add("active");
    }
  });
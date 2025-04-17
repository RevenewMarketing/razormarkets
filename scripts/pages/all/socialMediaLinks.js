const socialLinks = 
[ 
  {
    href: "#",
    img: "../../../assets/svg/social-media/instagram.svg",
    alt: "instagram icon"
  },

  {
    href: "https://x.com/RazorMarketsSA",
    img: "../../../assets/svg/social-media/x.svg",
    alt: "x twitter icon"
  },
  {
    href: "https://www.linkedin.com/company/razor-markets-pty-ltd",
    img: "../../../assets/svg/social-media/linkedIn.svg",
    alt: "linkedin icon"
  },
 {
    href: "#",
    img: "../../../assets/svg/social-media/facebook.svg",
    alt: "facebook icon"
  },
  {
    href: "#",
    img: "../../../assets/svg/social-media/instagram.svg",
    alt: "instagram icon"
  },


]

const container = document.querySelector('.social-icons');

if (container) {
  container.innerHTML = '';

  socialLinks.forEach(({ href, img, alt }) => {

    console.log('img', img)
    return container.innerHTML += `
       <span class="icon">
              <a href=${href}>
                <img src=${img} alt=${alt}>
              </a>
  
        </span>
    `;
  });
}





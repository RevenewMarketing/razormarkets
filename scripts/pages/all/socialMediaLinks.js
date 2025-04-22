const socialLinks = 
[ 
  {
    href: "https://www.facebook.com/razormarkets",
    img: "../../../assets/svg/social-media/facebook.svg",
    alt: "facebook icon"
  },
  {
    href: "https://www.instagram.com/razormarkets/",
    img: "../../../assets/svg/social-media/instagram.svg",
    alt: "instagram icon"
  },
  {
    href: "http://www.youtube.com/@RazorMarkets",
    img: "../../../assets/svg/social-media/youtube.svg",
    alt: "YouTube Link"
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




]

const container = document.querySelector('.social-icons');

if (container) {
  container.innerHTML = '';

  socialLinks.forEach(({ href, img, alt }) => {
    return container.innerHTML += `
       <span class="icon">
              <a href=${href} title=${alt}>
                <img src=${img} alt=${alt}>
              </a>
        </span>
    `;
  });
}





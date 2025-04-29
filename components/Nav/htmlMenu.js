// htmlMenu.js
const url = window.location.pathname.toLowerCase();
let active = '';
 
// Determine if the current URL matches any of the pages
function action(path) {
  return url.includes(path) ? 'active' : '';
}
 
let navigation = `
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <img src="../assets/svg/logo.svg" alt="Razor Markets Logo" />
    </a>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
 
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item ${url.endsWith('/index.html') ? 'active' : ''}" href="../index.html">Home</a>
      <a class="navbar-item ${action('/about')}" href="/pages/about.html">About</a>
 
      <div class="navbar-item has-dropdown">
        <a class="navbar-link">Markets</a>
        <div class="navbar-dropdown">
          <a class="navbar-item ${action('/forex')}" href="/pages/forex.html">Forex</a>
          <a class="navbar-item ${action('/indices')}" href="/pages/indices.html">Indices</a>
          <a class="navbar-item ${action('/metals')}" href="/pages/metals.html">Metals</a>
          <a class="navbar-item ${action('/energies')}" href="/pages/energies.html">Energies</a>
        </div>
      </div>
 
      <div class="navbar-item has-dropdown">
        <a class="navbar-link">Trading</a>
        <div class="navbar-dropdown">
          <a class="navbar-item ${action('/deposits-and-withdrawals')}" href="/pages/deposits-and-withdrawals.html">Deposits & Withdrawals</a>
          <a class="navbar-item ${action('/accounttypes')}" href="/pages/accountTypes.html">Account Types</a>
        </div>
      </div>
 
      <a class="navbar-item ${action('/partners')}" href="/pages/partners.html">Partners</a>
 
      <div class="navbar-item has-dropdown">
        <a class="navbar-link">Knowledge Hub</a>
        <div class="navbar-dropdown">
          <a class="navbar-item ${action('/blogs')}" href="/pages/blogs.html">Blogs</a>
          <a class="navbar-item ${action('/risk')}" href="/pages/risk.html">Risk Management</a>
          <a class="navbar-item ${action('/glossary')}" href="/pages/glossary.html">Trading Glossary</a>
        </div>
      </div>
 
      <div class="navbar-item has-dropdown">
        <a class="navbar-link">Support</a>
        <div class="navbar-dropdown">
          <a class="navbar-item ${action('/faqs')}" href="/pages/faqs.html">FAQs</a>
          <a class="navbar-item ${action('/legaldocs')}" href="/pages/legalDocs.html">Legal Documents</a>
          <a class="navbar-item ${action('/contact')}" href="/pages/contact.html">Contact</a>
        </div>
      </div>
    </div>
 
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="nav-buttons">
          <a href="#signup"><button class="signup-button">Sign Up</button></a>
          <a href="#login"><button class="button is-success">Login</button></a>
        </div>
      </div>
    </div>
  </div>
</nav>
`;
 
document.querySelector('header').innerHTML = navigation;
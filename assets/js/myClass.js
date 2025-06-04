class Navbar extends HTMLElement {
  constructor() {
    super();
    
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
        <a class="logo" href="index.html">WasteWise</a>
        <ul class="nav-links">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="uploads.html">Uploads</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div class="nav-auth">
         <a href="login.html">Login</a>
         <a href="signup.html" class="sign-up">Sign Up</a>
        </ul>
      </nav>
    `;
  }
}


class Footers extends HTMLElement {
  constructor() {
    super()

    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <div class="row">
          <div class="footer-desc">
              <h4>Tentang Kami</h4>
              <span>
                Satu langkah kecil untuk lingkungan yang lebih baik.
              </span>
          </div>

          <div class="footer-contact">
              <h4>Follow Us</h4>
              <a href="#"><i class="fab fa-youtube contact"></i></a>
              <a href="#"><i class="fab fa-twitter contact"></i></a>
              <a href="#"><i class="fab fa-facebook contact"></i></a> 
          </div>
        </div>
        <div class="copyright">
          <hr>
          <span>
              wastewise.com &#169; 2025. All rigths reserved.
          </span> 
        </div>
      </footer>
    `;
  }
}

customElements.define('nav-bar', Navbar);
customElements.define('my-footer', Footers);
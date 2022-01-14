class NavbarService {
  constructor(toggleBtn, navbar, body, overlay) {
    this.toggleBtn = toggleBtn;
    this.navbar = navbar;
    this.body = body;
    this.overlay = overlay;
  }
  toggle() {
    this.navbar.classList.toggle("active");
    let navbarStatus = this.navbar.classList.contains("active");
    if (navbarStatus === true) {
      this.body.classList.add("overlay--active");
      this.overlay.classList.add("active");
    } else {
      this.body.classList.remove("overlay--active");
      this.overlay.classList.remove("active");
    }
  }
}

export default NavbarService;

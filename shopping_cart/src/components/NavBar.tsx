import style from "../styles/NavBar.module.css"

const NavBar = () => {
  return (
    <nav>
      <div className={style.nav}>
        <div className={style.left}>
          <h1 className={style.logo}>FakeStore</h1>
        </div>
        <div className={style.right}>
          <ul className={style.link}>
            <li>home</li>
            <li>My Cart</li>
            <li>Support</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

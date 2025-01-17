import "../../assets/CSS/Header.css"
import logo from "../../assets/logo.jpg"
import Button from "../button/Button"

export default function Header() {
  return (
    <header id="main-header">
        <div id="title">
            <img src={logo}/>
            <h1 >Order Food</h1>
        </div>
        <div>
            <Button textOnly> Cart(0)</Button>
        </div>
    </header>
  )
}

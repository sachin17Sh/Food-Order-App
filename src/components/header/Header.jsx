import "../../assets/CSS/Header.css"
import logo from "../../assets/logo.jpg"

export default function Header() {
  return (
    <header id="main-header">
        <div id="title">
            <img src={logo}/>
            <h1 >Order Food</h1>
        </div>
        <div>
            <button>Cart (0)</button>
        </div>
    </header>
  )
}

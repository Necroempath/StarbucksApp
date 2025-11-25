import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <div className='container flex justify-between'>
                <nav>
                    <div id="logo">
                        <img src="https://logo-teka.com/wp-content/uploads/2025/07/starbucks-sign-logo.svg"></img>
                    </div>
                    <NavLink className={'text-transform: uppercase font-bold'}>Menu</NavLink>
                    <NavLink>Rewards</NavLink>
                    <NavLink>Gift cards</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header
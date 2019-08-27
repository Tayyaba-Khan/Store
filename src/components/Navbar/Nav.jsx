import React from "react";

const Nav = (props) => {
    let nav_html = props.navy.map((navObj,i) => {
        let nav_inner1 = navObj.nav_links.map((navinner1Obj,i) => {
            return(
                <li className="nav-item pl-3">
                    <a className="nav-link" href="#">
                        <i class="material-icons">{navinner1Obj.nav_iconic}</i>
                        {navinner1Obj.nav_items}
                    </a>
                </li>
            )
        })
        let nav_inner2 = navObj. nav_drops.map((navinner2Obj,i) => {
            return(
                <a className="dropdown-item" href="#">{navinner2Obj.nav_drop_item}</a>
            )
        })
        return(
            <nav className="navbar navbar-expand-lg py-4">
                    <a className="navbar-brand font-weight-bold navLogo" href="#">{navObj.nav_logo}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto navList">
                            {/* <li className="nav-item pl-3">
                                <a className="nav-link" href="#">Home</a>
                            </li> */}
                            <li className="nav-item dropdown pl-3">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Shop
                                </a>
                                <div className="dropdown-menu mt-2 drop-list" aria-labelledby="navbarDropdownMenuLink">
                                    <span class="dropdown-menu-arrow"></span>
                                    {nav_inner2}
                                </div>
                            </li>
                            { nav_inner1 }
                            {/* <li className="nav-item pl-3">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item pl-3">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item pl-3">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item pl-3">
                                <a className="nav-link" href="#">
                                    <i class="material-icons">shopping_cart</i>
                                    Cart[0]
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </nav>
        )
    })
    return(
        <div className="mainNav">
            <div className="container">
                {nav_html}
            </div>
        </div>
    );
};

export default Nav;
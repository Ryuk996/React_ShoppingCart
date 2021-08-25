import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import Cartcontext from "./cartcontext"

export default function Header1() {
    const [disabled, setDisabled] = useState(true)
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Shopping Cart</a>

                    <div class="d-flex flex-wrap align-items-center justify-content-left justify-content-lg-start">

                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li class="nav-item">
                                <Link to="/"><a class="nav-link active" aria-current="page" href="#">Home</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/cart"><a class="nav-link active" aria-current="page" href="#">Cart</a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
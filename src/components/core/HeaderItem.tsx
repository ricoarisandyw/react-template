import React, { useState } from 'react'
import './HeaderItem.scss'

interface HeaderItemProps {
    text: string
    link: string
    active?: boolean
    children?: React.ReactNode
}

const HeaderItem: React.FC<HeaderItemProps> = (props: HeaderItemProps) => {
    if(props.children){
        const [show, setShow] = useState(false)

        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" onClick={() => setShow(!show)}>
                  {props.text}
                </a>
                <ul className={["dropdown-menu",show ? "show":""].join(" ")}>
                  {props.children}
                </ul>
            </li>
        )
    } else {
        return (
            <li className={["nav-item",props.active && "active"].join(" ")}>
                <a className="nav-link" href="#">{props.text} <span className="sr-only"></span></a>
            </li>
        )
    }
}

export default HeaderItem
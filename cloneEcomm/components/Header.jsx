import React from 'react'
import "../styles/header.css"
const Header = () => {
  return (
    <div className='header_container'>
            <ul>
                <li>
                    BuyMore
                    <div></div>
                </li>
                <li >
                    <span>37</span>
                    <div>
                        <h2>Order</h2>
                        <p>Last 7 days</p>
                    </div>
                </li>
                <li>
                    <button class="active">Dashboard</button>
                    <button>Website</button>
                </li>
                <li>Cart</li>
            </ul>
    </div>
  )
}

export default Header

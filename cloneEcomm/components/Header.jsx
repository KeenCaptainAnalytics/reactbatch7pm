import React from 'react'
import "../styles/header.css"
import Cart from './Cart'
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
// import { PlusOne } from '@mui/icons-material';
const Header = () => {
  return (
    <div className='header_container'>
            <ul>
                <li>
                    {/* <PlusOne/> */}
                    BuyMore
                    <div></div>
                </li>
                <li >
                {/* <AccessAlarm/> */}
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
                <li style={{display:"flex", alignItems:"flex-end"}}>
                    <Cart/>
                <span>Cart</span>
                    
                </li>
            </ul>
    </div>
  )
}

export default Header

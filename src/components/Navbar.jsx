import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons/lib/icons'
import icon from '../images/cryptocurrency.png'



const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={ icon } size='large'></Avatar>
                {/* <Typography.Title level={2} className='logo'> 
                    <Link to='/'>Coin-Tracker</Link>
                </Typography.Title> */}
                {/* <Button className='menu-control-container'>

                </Button> */}
            </div>
            <h1>Navbar</h1>
            

        
            
        </div>
    )
}

export default Navbar
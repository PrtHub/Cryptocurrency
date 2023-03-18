import React, {useState,useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import icon from '../image/cryptocurrency.png'

const Navbar = () => {
   const [activeMenu, setActiveMenu] = useState(true);
   const [screenSize, setScreenSize] = useState(undefined);
 
   useEffect(() => {
     const handleResize = () => setScreenSize(window.innerWidth);
 
     window.addEventListener('resize', handleResize);
 
     handleResize();
 
     return () => window.removeEventListener('resize', handleResize);
   }, []);
 
   useEffect(() => {
     if (screenSize <= 800) {
       setActiveMenu(false);
     } else {
       setActiveMenu(true);
     }
   }, [screenSize]);
 

  return (
    <div className='nav-container'>
      <div className="logo-container">
        <Avatar src={icon} size='large'/>
        <Typography.Title level={2} className="logo">
           <Link to='/'>CryptoVerse</Link>
        </Typography.Title>
        <Button style={{}} className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}> <MenuOutlined /> </Button>
      </div>
      {activeMenu && (
      <Menu theme='dark' >
          <Menu.Item key={'item1'} icon={ <HomeOutlined/> }>
             <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key={'item2'} icon={ <FundOutlined/> }>
             <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item key={'item4'} icon={ <BulbOutlined/> }>
             <Link to='/news'>News</Link>
          </Menu.Item>
      </Menu>
      )}
    </div>
  )
}

export default Navbar

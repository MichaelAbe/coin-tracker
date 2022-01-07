import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar, Exchanges, Cryptocurrencies, News, CryptoDetails, Homepage } from './components'
import './App.css'


const App = () => {
    return (
        <div className='app'>

            <div className='navbar'>
                <Navbar />
            </div>

            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path='/' element={<Homepage/>} />
                            <Route path='/exchanges' element={<Exchanges/>} />
                            <Route path='/cryptocurrnecies' element={<Cryptocurrencies />} />
                            <Route path='/news' element={<News/>} />
                            <Route path='/crypto/:coinId' element={<CryptoDetails />} />
                        </Routes>
                    </div>
                </Layout>

            <div className='footer' >
                <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                    Coin-Tracker <br />
                    All Rights Reserved 2022
                </Typography.Title>
                <Space>
                    <Link to='/'>Home</Link>
                    <Link to='/exchanges'>Exchanges</Link>
                    <Link to='/news'>News</Link>
                </Space>
            </div>
            </div>
         
        </div>
    )
}

export default App


import "./App.css";
import { Layout, Typography, Space } from "antd";

import {Link, Route, Routes } from "react-router-dom";

import {
  Navbar,
  HomePage,
  Cryptocurrencies,

  News,
} from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage/>}></Route>
              <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}></Route>

              <Route path="/news" element={<News/>}></Route> 
            </Routes> 
          </div>
        </Layout>

       <div className="footer">
         <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}> 
         Cryptoverse &copy; 2023 <br />
          All Rights Reserved.
         </Typography.Title>
         <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
       </div>
      </div>
    </div>
  );
}

export default App;

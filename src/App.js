import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import DemoHook from './pages/DemoHook/DemoHook';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      {/* <Header/> dể ngoài root mặc định luôn luôn hiển thị*/}
      {/* để trong root là gõ chính xác mới hiển thị */}
      <Switch>
        <Route exact path='/home' component={Home} ></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/detail/:id' component={Detail}></Route>
        <Route exact path='/profile' component={Profile}></Route>

        <Route exact path='/demohook' component={DemoHook} ></Route>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='*' component={PageNotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


{/* <Route exact path='/' component={Home} ></Route> */}
// mặc định vào trang web là trang home

{/* <Route exact path='*' component={PageNotFound}></Route> */}
// ngoài những trang đã tạo, gõ đại 1 trang chưa có tạo thì sẽ vào trang pagenotfound
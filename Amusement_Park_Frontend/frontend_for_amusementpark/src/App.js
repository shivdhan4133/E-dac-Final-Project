import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComp from './components/HeaderComp'
import Navbar from './components/Navbar';
import Attractions from './components/Attractions';
import SignupComp from './components/UserComponents/SignupComp';
import LoginComp from './components/UserComponents/loginComp';
import AdminPageComp from './components/AdminComponents/AdminPageComp'
import AdminLoginComp from './components/AdminComponents/AdminLoginComp';
import AdminLoginPage from './components/AdminComponents/AdminLoginPage';
import RideListComp from './components/AdminComponents/RideListComp';
import React, { Component } from 'react';
import UserAuthService from './components/UserComponents/services/UserAuthService';
import AdminAuthService from './components/AdminComponents/Services/AdminAuthService';
import ServicesComp from './components/RidesComponent/ServicesComp';
import UserCartComp from './components/UserComponents/UserCartComp';
import BookingFormComp from './components/UserComponents/BookingFormComp';
import PaymentComponent from './components/UserComponents/PaymentComponent';
import UserNavComp from './components/UserComponents/UserNavComp';
import MyBookingComp from './components/UserComponents/MyBookingComp';
import HomeCorouselCOmp from './components/HomeCorouselCOmp';
import TourComp from './components/TourComp';
import FooterComp from './components/FooterComp';
import UserListComp from './components/AdminComponents/UserListComp';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      admin: "",
      adminReady: false,
      user: "",
      userReady: false

    }
  }

  componentDidMount() {
    const cuser = UserAuthService.getCurrentUser();
    if (cuser) {
      this.setState({ userReady: true, user: cuser })
    }

    const cadmin = AdminAuthService.getCurrentAdmin();
    if (cadmin) this.setState({ adminReady: true, admin: cadmin })

  }


  render() {
    return (
      <div>
        {(!this.state.adminReady) ?
          <div>
            <Router>
              <div style={{ position:'static' }}>
                <HeaderComp />
                <Navbar />
              </div>
              {/* <HomeCorouselCOmp /> */}
              <Switch>
                <Route path='/' exact component={HomeCorouselCOmp}/>
                <Route path='/adminlogin12345' exact component={AdminPageComp} />
                <Route path='/Alogin' exact component={AdminLoginComp}></Route>
                {/* <Route path="/" exact component={HeaderComp} />
          <Route path="/" exact component={Navbar} /> */}
                <Route path="/attractions" exact component={Attractions} />
                <Route path='/signup' exact component={SignupComp} />
                <Route path='/login' exact component={LoginComp} />
                <Route path='/ServiceList' exact component={ServicesComp} />
                <Route path='/showUserCart' exact component={UserCartComp} />
                <Route path='/bookingForm' exact component={BookingFormComp}></Route>
                <Route path="/payment" exact component={PaymentComponent}></Route>
                <Route path='/myBooking' exact component={MyBookingComp}></Route>

                <Route path='/tour' exact component={TourComp}></Route>


              </Switch>
              <FooterComp/>
            </Router>
          </div>
          : null}

        {(this.state.adminReady) ?
          <div style={{ position: 'relative' }}>
            <Router>
              <Switch>
                {/* <Route path='/adride' exact component={AddRideComp} /> */}

                <Route path='/admincontrol' exact component={AdminLoginPage} />
                <Route path='/userlist' exact component={UserListComp}></Route>
                <Route path='/admincontrol/showall' exact component={RideListComp} />
                {/* <Route path="/" exact component={HeaderComp} />
      <Route path="/" exact component={Navbar} /> */}
                <Route path='/adminlogin12345' exact component={AdminPageComp} />
              </Switch>
              <FooterComp/>
            </Router>
          </div>
          : null}


      </div>
    );
  }
}

export default App;

<div style={{ position: 'relative' }}>
  <Router>
    <HeaderComp />
    <Navbar />
    <Switch>
      <Route path='/adminlogin12345' exact component={AdminPageComp} />
      <Route path='/adminlogin12345/login' exact component={AdminLoginComp} />
      <Route path='/admincontrol' exact component={AdminLoginPage} />
      <Route path='/admincontrol/showall' exact component={RideListComp} />
      {/* <Route path="/" exact component={HeaderComp} />
          <Route path="/" exact component={Navbar} /> */}
      <Route path="/attractions" exact component={Attractions} />
      <Route path='/signup' exact component={SignupComp} />
      <Route path='/login' exact component={LoginComp} />
    </Switch>
    <FooterComp/>
  </Router>
</div>
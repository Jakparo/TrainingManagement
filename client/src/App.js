import React, { useState } from 'react';
import{ Collapse, Navbar, NavbarToggler,
        NavbarBrand, Nav, NavItem,
        Dropdown, DropdownToggle, 
        DropdownMenu, DropdownItem, Container
} from 'reactstrap';  
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link} from 'react-router-dom';

// Import Screen Components
import ProductsScreen from './Screens/ProductsScreen';
import FirstScreen from './Screens/FirstScreen';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

import SigninScreen from './Screens/SigninScreen';

import ProfileScreen from './Screens/ProfileScreen';

import TrainersScreen from './Screens/TrainersScreen'
import TrainerScreen from './Screens/TrainerScreen'
import CreateTrainer from './Screens/CreateTrainer'


function App() {
    
    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    
    return (
    <BrowserRouter>
        <div>
            <Navbar light expand="sm" style={{backgroundColor: 'ffffff'}}>
                <Container fluid>
                    { userInfo ? (
                        <NavbarBrand className="brand">
                            <Link to="/home">F P T</Link>
                        </NavbarBrand> 
                                                
                    ):
                        <NavbarBrand className="brand">
                            <Link to="/">F P T</Link>
                        </NavbarBrand>
                    }
                    
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar className="ml-sm-auto">
                            <NavItem className='header-links btn'>
                            {
                                userInfo ? 
                                <Link to="/profile">{userInfo.name}
                                </Link>:
                                <Link to ="/signin">Log in</Link>
                                
                            }
                            </NavItem>

                                { 
                                userInfo && userInfo.isTraining && (
                                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                        <DropdownToggle caret>
                                            Course
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>
                                                <Link to="/orders">Orders</Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link to="/products">Products</Link>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                )}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <main>
                <Container fluid style={{marginTop: '2rem', height: '80vh'}} >
                    
                    <Route path="/profile" component={ProfileScreen} />
                    
                    <Route path="/products" component={ProductsScreen} />
                   
                    <Route path="/createTrainer" exact component={CreateTrainer}/>
                    <Route path="/signin" component={SigninScreen}/>
                    <Route path="/trainer/:id" exact component={TrainerScreen}/>
                    <Route path="/product/:id" exact component={ProductScreen}/>
                    <Route path="/home" exact component={HomeScreen}/>
                    <Route path="/trainers" exact component={TrainersScreen}/>
                    <Route path="/" exact component={FirstScreen}/>

                </Container>
            </main>
            {/* <footer>
                <div className='b-0'>
                    Copyright © 2020 ETravel
                </div>
            </footer> */}
                
        </div>
    </BrowserRouter>
    );
}

export default App;
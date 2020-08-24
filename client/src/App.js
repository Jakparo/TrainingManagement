import React, { useState, useEffect } from 'react';
import{ Collapse, Navbar, NavbarToggler,
        NavbarBrand, Nav, NavItem,
        Dropdown, DropdownToggle, 
        DropdownMenu, DropdownItem, Container
} from 'reactstrap';  
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { listCategories } from './actions/staffActions';



// Import Screen Components
import FirstScreen from './Screens/FirstScreen';
import HomeScreen from './Screens/HomeScreen';

import SigninScreen from './Screens/SigninScreen';

import ProfileScreen from './Screens/ProfileScreen';

import TrainersScreen from './Screens/TrainersScreen'
import TrainerScreen from './Screens/TrainerScreen'
import CreateTrainer from './Screens/CreateTrainer'

import StaffsScreen from './Screens/StaffsScreen'
import StaffScreen from './Screens/StaffScreen'
import CreateStaff from './Screens/CreateStaff'

import TraineeScreen from './Screens/TraineeScreen';
import TraineesScreen from './Screens/TraineesScreen';
import CreateTrainee from './Screens/CreateTrainee';

import CategoryScreen from './Screens/CategoryScreen';
import CategoriesScreen from './Screens/CategoriesScreen';
import CreateCategory from './Screens/CreateCategory';

import PersonalCourseScreen from './Screens/PersonalCourseScreen';
import CoursesScreen from './Screens/CoursesScreen';
import CourseScreen from './Screens/CourseScreen';
import CreateCourse from './Screens/CreateCourse';

import CreateTopic from './Screens/CreateTopic';
import TopicsScreen from './Screens/TopicsScreen';
import TopicScreen from './Screens/TopicScreen';

import CourseCategoryScreen from './Screens/CourseCategoryScreen';

function App() {
    const dispatch = useDispatch();
    const categoryList =  useSelector(state => state.categoryList);
    const {categories, loading, error} = categoryList;
    
    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    
    useEffect(()=>{
        dispatch(listCategories());
        return () => {
            //
        };
    },[])

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
                                            {
                                                categories.map (category =>
                                                    <DropdownItem>
                                                        <Link to={"/courseCategory/" + category._id} >{category.name}</Link>
                                                    </DropdownItem>
                                                )
                                            }
                                        </DropdownMenu>
                                    </Dropdown>
                                )}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <main>
                <Container fluid style={{marginTop: '2rem', height: '80vh'}} >
                    
                    <Route path="/myCourse" component={PersonalCourseScreen}/>
                    <Route path="/profile" component={ProfileScreen} />
                    <Route path="/signin" component={SigninScreen}/>
                    <Route path="/createTrainer" exact component={CreateTrainer}/>
                    <Route path="/trainer/:id" exact component={TrainerScreen}/>
                    <Route path="/trainers" exact component={TrainersScreen}/>
                    <Route path="/home" exact component={HomeScreen}/>
                    <Route path="/" exact component={FirstScreen}/>
                    <Route path="/createStaff" exact component={CreateStaff}/>
                    <Route path="/staff/:id" exact component={StaffScreen}/>
                    <Route path="/staffs" exact component={StaffsScreen}/>
                    <Route path="/createTrainee" exact component={CreateTrainee}/>
                    <Route path="/trainee/:id" exact component={TraineeScreen}/>
                    <Route path="/trainees" exact component={TraineesScreen}/>
                    <Route path="/createCategory" exact component={CreateCategory}/>
                    <Route path="/category/:id" exact component={CategoryScreen}/>
                    <Route path="/categories" exact component={CategoriesScreen}/>
                    <Route path="/courses" exact component={CoursesScreen}/>
                    <Route path="/createCourse" exact component={CreateCourse}/>
                    <Route path="/course/:id" exact component={CourseScreen}/>
                    <Route path="/createTopic" exact component={CreateTopic}/>
                    <Route path="/topics" exact component={TopicsScreen}/>
                    <Route path="/topic/:id" exact component={TopicScreen}/>
                    <Route path="/courseCategory/:id" exact component={CourseCategoryScreen}/>

                </Container>
            </main>
                
        </div>
    </BrowserRouter>
    );
}

export default App;

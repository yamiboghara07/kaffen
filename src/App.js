import './App.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaStar, FaLocationDot, FaComments } from "react-icons/fa6";
import { IoIosArrowForward,IoIosArrowDown } from "react-icons/io";
import { LuUtensils } from "react-icons/lu";
import { GiCoffeeCup } from "react-icons/gi";
import { LiaGlassCheersSolid } from "react-icons/lia";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

function App() {
    return (
        <header>
            <div class="kf_header">
                <div class="kf_topline ">
                    <div class="container">
                        <div class="top_header flex space-between">
                            <div class="time flex">
                                <i><IoMdTime></IoMdTime></i>
                                <p>opening hours :</p>
                                <span> 08:00 am - 09:00 pm</span>
                            </div>
                            <div class="top_icon">
                                <i><FaFacebookF></FaFacebookF></i>
                                <i><FaTwitter></FaTwitter></i>
                                <i><FaInstagram></FaInstagram></i>
                                <i><FaYoutube></FaYoutube></i>
                            </div>
                            <div class="location flex">
                                <i><FaLocationDot></FaLocationDot></i>
                                <p>location :</p>
                                <span> 55 main street, new york</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="kf_btmline">
                    <div class="container">
                        <div class="header flex space-between">
                            <div class="logo">
                                <img src={require('./image/logo.png')} alt=""></img>
                            </div>
                            <div class="kf_menu">
                                <div class="main_menu">
                                    <ul class=" kf_menu flex">
                                        <li>
                                            <a href="#">home</a>
                                            <i><IoIosArrowDown></IoIosArrowDown></i>
                                            <ul className='sub_menu'>
                                                <li><a href='#'>Coffee House</a></li>
                                                <li><a href='#'>Restaurant</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">about</a></li>
                                        <li>
                                            <a href="#">menu</a>
                                            <i><IoIosArrowDown></IoIosArrowDown></i>
                                            <ul className='sub_menu'>
                                                <li><a href='#'>Menu Coffee</a></li>
                                                <li><a href='#'>Menu Restaurant</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">pages</a>
                                            <i><IoIosArrowDown></IoIosArrowDown></i>
                                            <ul className='sub_menu'>
                                                <li><a href='#'>Service</a></li>
                                                <li><a href='#'>Reservation</a></li>
                                                <li><a href='#'>History</a></li>
                                                <li><a href='#'>Our Chefs</a></li>
                                                <li><a href='#'>Gallery</a></li>
                                                <li><a href='#'>Gallery</a></li>
                                                <li><a href='#'></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">blog</a>
                                            <i><IoIosArrowDown></IoIosArrowDown></i>
                                            <ul className='sub_menu'>
                                                <li><a href='#'>Blog Grid</a></li>
                                                <li><a href='#'>Blog Standard</a></li>
                                                <li><a href='#'>Blog Single</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">contacts</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="b_btn">
                                <a href="#">book a table</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ----------------- slider ----------------- */}

            <section>
                <div className='slider_item'>
                    <div className='slider'>
                        <div className='container1'>
                            <div className='s_desc'>
                                <div className='sub_title flex'>
                                    <p className='kf_line'></p>
                                    <h4>Welcome to the Kaffen</h4>
                                </div>
                                <h1>the london coffee house</h1>
                                <div className='kf_btn'>
                                    <a href='#' className='explore'>
                                        <span>explore more</span>
                                        <i><IoIosArrowForward></IoIosArrowForward></i>
                                    </a>
                                    <a href='#' className='get'>
                                        <span>get delivery</span>
                                        <i><IoIosArrowForward></IoIosArrowForward></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* -------------------- organic ------------------------ */}

            <section class="about_organic">
                <div class="container1">
                    <div class="about_us">
                        <div class="organic">
                            <div class="about_heading">
                                <h6>about us</h6>
                                <h1>
                                    Organic & Fresh Coffee Provider Center
                                </h1>
                            </div>
                            <div class="about_p">
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione
                                </p>
                            </div>
                            <div class="about_quote flex">
                                <img src={require('./image/quote.png')}></img>
                                <p>
                                    Quis autem vel eum iure reprehenderit in ealuptate velit esse molestiae
                                </p>
                            </div>
                        </div>
                        <div class="about_img">
                            <img src={require('./image/about_img.png')}></img>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------- service ---------------------- */}
            <section class="about_organic">
                <div class="container1">
                    <div class="kf_service">
                        <div class="service_item flex">
                            <div class="service1">
                                <div class="kf_service_hv">
                                    <a href="#">
                                        <img src={require('./image/service1.jpg')}></img>
                                    </a>
                                    <div className='desc'>
                                        <i><LuUtensils></LuUtensils></i>
                                        <h5>Restaurant Menu</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="service1">
                                <div class="kf_service_hv">
                                    <a href="#">
                                        <img src={require('./image/service2.jpg')}></img>
                                    </a>
                                    <div className='desc'>
                                        <i><GiCoffeeCup></GiCoffeeCup></i>
                                        <h5>Coffee Menu</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="service1">
                                <div class="kf_service_hv">
                                    <a href="#">
                                        <img src={require('./image/service3.jpg')}></img>
                                    </a>
                                    <div className='desc'>
                                        <i><LiaGlassCheersSolid></LiaGlassCheersSolid></i>
                                        <h5>Food Services</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------------- kaffen popular -------------------- */}

            <section className='popular'>
                <div className='container1'>
                    <div className='popular_head'>
                        <h5>Choose Best Coffee</h5>
                        <h1>Kaffen Popular Coffee Menu</h1>
                    </div>
                    <div className='popular_item'>
                        <div className='p_item'>
                            <div className='items flex'>
                                <div className='item1 flex'>
                                    <div className='p_image'>
                                        <a>
                                            <img src={require('./image/menu1.jpg')}></img>
                                        </a>
                                    </div>
                                    <div className='p_desc'>
                                        <h5>Americano Coffee</h5>
                                        <b>2/3 espresso, 1/3 streamed milk</b>
                                        <div className='price flex'>
                                            <p className='p_border'></p>
                                            <h6>$4.9</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='item1 flex'>
                                    <div className='p_image'>
                                        <a>
                                            <img src={require('./image/menu2.jpg')}></img>
                                        </a>
                                    </div>
                                    <div className='p_desc'>
                                        <h5>Espresso Coffee</h5>
                                        <b>2/3 espresso, 1/3 streamed milk</b>
                                        <div className='price flex'>
                                            <p className='p_border'></p>
                                            <h6>$4.9</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='items flex'>
                                <div className='item1 flex'>
                                    <div className='p_image'>
                                        <a>
                                            <img src={require('./image/menu3.jpg')}></img>
                                        </a>
                                    </div>
                                    <div className='p_desc'>
                                        <h5>Barista Pouring Syrup</h5>
                                        <b>2/3 espresso, 1/3 streamed milk</b>
                                        <div className='price flex'>
                                            <p className='p_border'></p>
                                            <h6>$3.5</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='item1 flex'>
                                    <div className='p_image'>
                                        <a>
                                            <img src={require('./image/menu4.jpg')}></img>
                                        </a>
                                    </div>
                                    <div className='p_desc'>
                                        <h5>Cold - Coffee</h5>
                                        <b>2/3 espresso, 1/3 streamed milk</b>
                                        <div className='price flex'>
                                            <p className='p_border'></p>
                                            <h6>$6.0</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='items flex'>
                                <div className='item1 flex'>
                                    <div className='p_image'>
                                        <a>
                                            <img src={require('./image/menu5.jpg')}></img>
                                        </a>
                                    </div>
                                    <div className='p_desc'>
                                        <h5>Cappuccino Arabica</h5>
                                        <b>2/3 espresso, 1/3 streamed milk</b>
                                        <div className='price flex'>
                                            <p className='p_border'></p>
                                            <h6>$2.8</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='item1 flex'>
                                    <div className='p_image'>
                                        <a>
                                            <img src={require('./image/menu6.jpg')}></img>
                                        </a>
                                    </div>
                                    <div className='p_desc'>
                                        <h5>Milk Cream Coffee</h5>
                                        <b>2/3 espresso, 1/3 streamed milk</b>
                                        <div className='price flex'>
                                            <p className='p_border'></p>
                                            <h6>$7.5</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------- New London ---------------------- */}

            <section className='nex_landon'>
                <div className='container1'>
                    <div className='kr_parallax1'>
                        <div className='parallax_img'></div>
                    </div>
                    <div className='parallax'>
                        <div className='par_image'>
                            <div className='par_img'>
                                <img src={require('./image/choose_img.jpg')}></img>
                            </div>
                        </div>
                        <div className='parallax_tilte'>
                            <div className='par_heading'>
                                <h6>WHY CHOOSE US</h6>
                                <h5>New London Coffee Founded For Extraordinary Test</h5>
                            </div>
                            <div className='par_txt'>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis
                                </p>
                            </div>
                            <div className='choose_list'>
                                <div className='kf_lists'>
                                    <div className='list1'>
                                        <div className='list_icon'>
                                            <img src={require('./image/choose_icon1.png')}></img>
                                        </div>
                                        <div className='list_desc'>
                                            <h5>Natural Coffee Beans</h5>
                                            <p>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                                        </div>
                                    </div>
                                    <div className='list1'>
                                        <div className='list_icon'>
                                            <img src={require('./image/choose_icon2.png')}></img>
                                        </div>
                                        <div className='list_desc'>
                                            <h5>100% ISO Certification</h5>
                                            <p>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                                        </div>
                                    </div>
                                    <div className='kf_btn list_btn'>
                                        <a href='#' className='explore'>
                                            <span>explore more</span>
                                            <i><IoIosArrowForward></IoIosArrowForward></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='kr_parallax2'>
                        <div className='parallax_image'></div>
                    </div>
                </div>
            </section>

            {/* ----------------------- kf-grid ------------------------ */}

            <section className='kf_grid'>
                <div className='container1'>
                    <div className='grid_swap flex'>
                        <div className='grid_item'>
                            <div className='grid_img'>
                                <img src={require('./image/grid_gal2.jpg')}></img>
                            </div>
                            <div className='grid_desc'>
                                <h5>Latte</h5>
                            </div>                      
                        </div>
                        <div className='grid_item sec_grid'>
                            <div className='grid_img'>
                                <img src={require('./image/grid_gal3.jpg')}></img>
                            </div>
                            <div className='grid_desc'>
                                <h5>Cappuccino</h5>
                            </div>                      
                        </div>
                        <div className='grid_item'>
                            <div className='grid_img'>
                                <img src={require('./image/grid_gal4.jpg')}></img>
                            </div>
                            <div className='grid_desc'>
                                <h5>Iced Coffee</h5>
                            </div>                      
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------------------- client say ---------------- */}

            <section className='say'>
                <div className='container1'>
                    <div className='say_heading'>
                        <p>CUSTOMER FEEDBACK</p>
                        <h4>What Our Clients Say</h4>
                    </div>
                    <div className='client_slider'>
                        <div className='clients'>
                            <div className='carousel flex'>
                                <div className='client_one'>
                                    <div className='c_say'>
                                        <div className='say_img'>
                                            <img src={require('./image/rev1.jpg')}></img>
                                        </div>
                                        <div className='say_desc'>
                                            <div className='cc_icon'>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                            </div>
                                            <p>
                                                Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque laudantium
                                                totam remriam eaque quae abillo
                                            </p>
                                            <h5>Frederick S. France </h5>
                                            <h6>Web Deigner</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='client_one'>
                                    <div className='c_say'>
                                        <div className='say_img'>
                                            <img src={require('./image/rev2.jpg')}></img>
                                        </div>
                                        <div className='say_desc'>
                                            <div className='cc_icon'>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                            </div>
                                            <p>
                                                Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque laudantium
                                                totam remriam eaque quae abillo
                                            </p>
                                            <h5>James M. London </h5>
                                            <h6>Lawyer</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='client_one'>
                                    <div className='c_say'>
                                        <div className='say_img'>
                                            <img src={require('./image/rev3.jpg')}></img>
                                        </div>
                                        <div className='say_desc'>
                                            <div className='cc_icon'>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                            </div>
                                            <p>
                                                Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque laudantium
                                                totam remriam eaque quae abillo
                                            </p>
                                            <h5>Olivia D. New York</h5>
                                            <h6>Dentist</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='client_one'>
                                    <div className='c_say'>
                                        <div className='say_img'>
                                            <img src={require('./image/rev1.jpg')}></img>
                                        </div>
                                        <div className='say_desc'>
                                            <div className='cc_icon'>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                            </div>
                                            <p>
                                                Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque laudantium
                                                totam remriam eaque quae abillo
                                            </p>
                                            <h5>Frederick S. France </h5>
                                            <h6>Web Deigner</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------------ kf number --------------------- */}

            <section className='number'>
                <div className='container1'>
                    <div className='number_item flex'>
                        <div className='num_item'>
                            <div className='num flex'>
                                <div className='n_plus'>256+</div>
                                <div className='num_desc'>
                                    <h5>Premium Clients</h5>
                                    <p>Sed ut perspiciatis unde</p>
                                </div>
                            </div>
                        </div>
                        <div className='num_item'>
                            <div className='num flex'>
                                <div className='n_plus'>362+</div>
                                <div className='num_desc'>
                                    <h5>Expert Members</h5>
                                    <p>Sed ut perspiciatis unde</p>
                                </div>
                            </div>
                        </div>
                        <div className='num_item'>
                            <div className='num flex'>
                                <div className='n_plus'>753+</div>
                                <div className='num_desc'>
                                    <h5>Winning Awards</h5>
                                    <p>Sed ut perspiciatis unde</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --------------------------- blog/news ------------------------- */}
            <section className='blog'>
                <div className='container1'>
                    <div className='blog_news'>
                        <p>GET EVERY SINGLE UPDATE</p>
                        <h2>Read Some Latest Blog & News</h2>
                    </div>
                    <div className='my_bolg'>
                        <div className='blog_news'>
                            <div className='news_img1'>
                                <img src={require('./image/latest_blog1.jpg')}></img>
                            </div>
                            <div className='news_desc'>
                                <h5>SWR React Hooks With Next Increm Ental Static Regeneration</h5>
                                <div className='blog_icon flex'>
                                    <div className='date flex'>
                                        <i><SlCalender></SlCalender></i>
                                        <p>25 Sep 2021</p>
                                    </div>
                                    <div className='comment flex'>
                                        <i><FaComments></FaComments></i>
                                        <p>Comments (7)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='blog_news'>
                            <div className='news_img1'>
                                <img src={require('./image/latest_blog2.jpg')}></img>
                            </div>
                            <div className='news_desc'>
                                <h5>Decisions For Building Flexible Components DevTools Browser</h5>
                                <div className='blog_icon flex'>
                                    <div className='date flex'>
                                        <i><SlCalender></SlCalender></i>
                                        <p>25 Sep 2021</p>
                                    </div>
                                    <div className='comment flex'>
                                        <i><FaComments></FaComments></i>
                                        <p>Comments (7)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='blog_news'>
                            <div className='news_img1'>
                                <img src={require('./image/latest_blog3.jpg')}></img>
                            </div>
                            <div className='news_desc'>
                                <h5>Decisions For Building Flexible Components DevTools Browser</h5>
                                <div className='blog_icon flex'>
                                    <div className='date flex'>
                                        <i><SlCalender></SlCalender></i>
                                        <p>25 Sep 2021</p>
                                    </div>
                                    <div className='comment flex'>
                                        <i><FaComments></FaComments></i>
                                        <p>Comments (7)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='blog_btn'>
                        <a className='blog1'>
                            <span>view all</span>
                            <i><IoIosArrowForward></IoIosArrowForward></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* ------------------------------- booking ----------------------------- */}

            <section className='booking'>
                <div className='container1'>
                    <div className='book_txt'>
                        <p>NEED A TABLE ON COFFEE HOUSE</p>
                        <h2>Booking Table For Your & Family Members</h2>
                    </div>
                </div>
            </section>

            {/* -------------------------- footer ---------------------------- */}
            <section className='footer'>
               <div className='container1'>
                    <div className='footer_lines flex'>
                        <div className='footer_logo ff_items'>
                            <a href='#'>
                                <img src={require('./image/logo.png')}></img>
                            </a>
                        </div>   
                        <div className='working ff_items'>
                            <h2>Working Hours</h2>
                            <ul>
                                <li className='hed'>
                                    <h5>Sunday - Thursday</h5>
                                    <p>08:00 am - 09:00pm</p>
                                </li>
                                <li className='hed'>
                                    <h5>Only Friday</h5>
                                    <p>03:00 pm - 09:00pm</p>
                                </li>
                                <h6>Saturday Close</h6>
                            </ul>
                        </div>
                        <div className='contact_us'>
                            <h2>Contact Us</h2>
                            <ul>
                                <li className='flex con'>
                                    <i><FaLocationDot></FaLocationDot></i>
                                    <div className='f_loc'>
                                        <p>Location :</p>
                                        <h5>55 Main Street, New York</h5>
                                    </div>
                                </li>
                                <li className='flex con'>
                                    <i><HiOutlineMailOpen></HiOutlineMailOpen></i>
                                    <div className='f_email'>
                                        <p>Email Address :</p>
                                        <h5>kaffendev@gmail.com</h5>
                                    </div>
                                </li>
                                <li className='flex con'>
                                    <i><FiPhone></FiPhone></i>
                                    <div className='f_phone'>
                                        <p>Phone Number :</p>
                                        <h5>+012 (345) 678 99</h5>
                                    </div>
                                </li>
                            </ul>
                        </div> 
                        <div className='f_galler'>
                            <h2>Gallery</h2>
                            <div className='fot_img flex'>
                                <img src={require('./image/grid_gal1 (1).jpg')}></img>
                                <img src={require('./image/grid_gal2 (1).jpg')}></img>
                                <img src={require('./image/grid_gal3 (1).jpg')}></img>
                            </div>
                            <div className='fot_img flex'>
                                <img src={require('./image/grid_gal4 (1).jpg')}></img>
                                <img src={require('./image/grid_gal5 (1).jpg')}></img>
                                <img src={require('./image/grid_gal1 (1).jpg')}></img>
                            </div>
                        </div>  
                    </div>
                    <div className='f_border'>
                        <div className='footer_bor'>
                            <p>Copyright © 2022 Kaffen. All Rights Reserved.</p>
                        </div>
                    </div>
                </div> 
            </section>
        </header>
    )
}
export default App
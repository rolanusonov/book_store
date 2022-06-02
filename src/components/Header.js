import React from 'react';
import {Link, NavLink} from "react-router-dom";
import { useSelector} from "react-redux";
import log from "../BOOKShop.png";



const Header = () => {




    const {basket} = useSelector((store) => store)
    return (
        <header className="Header">
            <div className="container">
                <nav className="headerMENU py-2.5">
                    <div className="header">
                        <Link to="/" className="text-3xl my-10 header-log ml-16 "
                              style={{
                                  fontFamily: 'Inter',
                                  fontWeight: "700",
                                  fontSize: "20px",
                                  lineHeight: " 24px",
                                  color: "#FFFFFF",}}>


                            <img src={log} alt=""/>
                        </Link>
              
                        <div className=" Hidden  w-full md:block  md:w-auto" id="mobile-menu">
                            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 headerRod ">

                                <li style={{position: "relative"}}>
                                    {basket.length === 0 ? null : <div className="circle ml-10" style={{
                                            background: "white",
                                            borderRadius: "50%"}}>
                                            {basket.length}
                                        </div>
                                    }
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0.995751V1.9915L1.00254 2.00194L2.00508 2.01237L3.70782 5.60767C4.64434 7.58506 5.45269 9.29417 5.50417 9.40561L5.59778 9.6083L4.89534 10.8136C4.27006 11.8866 4.1831 12.0574 4.10344 12.369C3.8928 13.1926 4.06328 13.8774 4.61383 14.4197C4.7354 14.5394 4.93968 14.6932 5.06777 14.7615C5.54617 15.0166 5.1822 15.0036 11.9052 15.0043L18.0092 15.0048V14.0084V13.012H12.1972C5.82443 13.012 6.21142 13.0265 6.21142 12.7885C6.21142 12.7325 6.40917 12.3123 6.6509 11.8545L7.09035 11.0223L10.9774 11.0105L14.8644 10.9987L15.1184 10.9119C15.5728 10.7564 15.9077 10.4886 16.1471 10.0892C16.2205 9.96669 17.0674 8.44218 18.029 6.70138C18.9908 4.96058 19.8092 3.50113 19.8479 3.45815C20.0189 3.26805 20.048 2.94064 19.9235 2.60772C19.8347 2.37014 19.6625 2.18512 19.4351 2.08274C19.2866 2.01585 18.9042 2.01186 11.7376 2.00213L4.19634 1.99185L3.74869 0.995985L3.30104 7.81502e-05L1.65052 3.90751e-05L0 0V0.995751ZM5.39014 16.1097C4.33963 16.468 3.76603 17.5924 4.10473 18.6294C4.32334 19.2988 4.98089 19.8557 5.69325 19.9749C6.70923 20.1448 7.73513 19.4338 7.95225 18.4091C8.02593 18.0614 8.02222 17.8848 7.93409 17.54C7.7545 16.8376 7.22337 16.2878 6.5266 16.0831C6.212 15.9907 5.70431 16.0026 5.39014 16.1097ZM15.3909 16.1097C14.3404 16.468 13.7668 17.5924 14.1055 18.6294C14.3241 19.2988 14.9817 19.8557 15.694 19.9749C16.71 20.1448 17.7359 19.4338 17.953 18.4091C18.0267 18.0614 18.023 17.8848 17.9349 17.54C17.7553 16.8376 17.2241 16.2878 16.5274 16.0831C16.2128 15.9907 15.7051 16.0026 15.3909 16.1097Z" fill="white"/>
                                    </svg>

                                    <NavLink to="basket"
                                             className="block shotin py-2 pr-4 pl-3 text-xl my-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                    >Корзина</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};
export default Header;
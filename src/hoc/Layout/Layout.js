import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";

const Layout = ({children}) => {
    return (
        <div className="h-full w-full">
            <nav className="h-12 bg-gray-900">
                <NavLink to="/boards/1" className="text-white">Board</NavLink>
            </nav>

            <main>{children}</main>

            <footer className="flex justify-center items-center w-full h-12 text-center text-white bg-gray-900 absolute bottom-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, quae.
            </footer>
        </div>
    );
};

export default Layout;
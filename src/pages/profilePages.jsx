import React from "react";
import './../assets/style.css'

import { Link, Outlet } from "react-router-dom";

const ProfilPages = () => {
    return(
        <>
            <div className="wrapperProfile">
                <div className="header">
                    <h1>about My Profile</h1>
                </div>
                <div className="about">
                    <div className="content">
                        <div className="about">
                            <span>Praesent cursus tortor faucibus, rutrum tortor a, pulvinar magna. Aenean in purus ut erat pulvinar tempus luctus pulvinar sem. Donec nisl urna, vestibulum ut mollis et, tincidunt at orci. Sed sagittis faucibus est. Cras vel turpis eget erat vehicula dictum. Fusce sed commodo ex. Integer rhoncus ex tortor, id tincidunt odio lacinia et. Aenean pharetra enim egestas eros euismod suscipit. Sed laoreet egestas urna nec tempus. Ut enim lectus, aliquam eget magna facilisis, lobortis gravida lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam a metus interdum, sagittis sapien et, iaculis massa. Vivamus dignissim vitae risus in tempor.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilPages
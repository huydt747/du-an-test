import React from 'react';
import '../css/headerworld.css';

function HeaderWorld(){
    return(
        <div className="header">
            <div className="list-menu">
                <div className="list-tilte">
                    <a href=""><img src="https://icons.iconarchive.com/icons/colebemis/feather/48/list-icon.png" alt="" /></a>
                    <a href="/"><img src="" alt="" /></a>
                    <a href="/africa">Africa</a>
                    <a href="/world">American</a>
                    <a href="/politics">Asian</a>
                    <a href="/business">Australia</a>
                    <a href="/health">China</a>
                    <a href="/entertainment">Europe</a>
                    <a href="style">India</a>
                    <a href="/travel">Middle East</a>
                    <a href="">
                        <div className="more">More
                            <img src="https://icons.iconarchive.com/icons/icons8/ios7/48/Arrows-Down-4-icon.png" alt="" />
                            <ul className="more-menu">
                                <li>United KingDom</li>
                            </ul>
                        </div>
                    </a>
                </div>
                <div className="login">
                    <div id="login">
                        <img src="https://icons.iconarchive.com/icons/iconsmind/outline/48/Video-5-icon.png" alt="" />
                        <a href="/watch">Watch</a>
                    </div>
                    <div id="login">
                        <img src="https://icons.iconarchive.com/icons/iconsmind/outline/48/Headphones-icon.png" alt="" />
                        <a href="/listen">Listen</a>
                    </div>
                    <div id="login">
                        <img src="https://icons.iconarchive.com/icons/github/octicons/72/dot-fill-24-icon.png" alt="" />
                        <a href="/livetv">LiveTV</a>
                    </div>
                    <div id="login">
                        <a href=""><img src="https://icons.iconarchive.com/icons/iconoir-team/iconoir/72/search-icon.png" alt="" /></a>
                    </div>
                    <div id="login">
                        <a href="/login">Sign in</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default HeaderWorld;
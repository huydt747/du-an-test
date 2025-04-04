import React from 'react';
import '../css/header.css';

function Header(){
    return(
        <div className="header">
            <div className="list-menu">
                <div className="list-tilte">
                    <a href=""><img src="https://icons.iconarchive.com/icons/colebemis/feather/48/list-icon.png" alt="" /></a>
                    <a href="/"><img src="" alt="" /></a>
                    <a href="/us">US</a>
                    <a href="/world">World</a>
                    <a href="/politics">Politics</a>
                    <a href="/business">Business</a>
                    <a href="/health">Health</a>
                    <a href="/entertainment">Entertainment</a>
                    <a href="style">Style</a>
                    <a href="/travel">Travel</a>
                    <a href="sports">Sports</a>
                    <a href="">
                        <div className="more">More
                            <img src="https://icons.iconarchive.com/icons/icons8/ios7/48/Arrows-Down-4-icon.png" alt="" />
                            <ul className="more-menu">
                                <li>Sports</li>
                                <li>Science</li>
                                <li>Climate</li>
                                <li>Weather</li>
                                <li>Ukraine-Russia War</li>
                                <li>Israel-Hamas War</li>
                                <li>Game</li>
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
export default Header;
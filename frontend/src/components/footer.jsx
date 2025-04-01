import React from "react";
import  "../css/home.css"
import  "../css/footer.css"
function Footer() {
    return (
        <div className="footer">
            <h1>In Case You Missed It</h1>
            <article>
                <div>
                    <img 
                        src="https://media.cnn.com/api/v1/images/stellar/prod/230808141753-simone-biles-mental-health-break-wellness.jpg?c=16x9&q=h_438,w_780,c_fill" 
                        alt="Simone Biles mental health break"
                    />
                    <h1>What we can learn from Simone Biles’ mental health break</h1>
                </div>
                <ul>
                    <li><a href="#">Great Barrier Reef stays off UNESCO ‘in danger’ list but hot El Niño summer looms</a></li>
                    <li><a href="#">Italian fugitive’s love of soccer gets him caught in Greece</a></li>
                    <li><a href="#">Foo Fighters and Alanis Morissette pay tribute to Sinéad O’Connor</a></li>
                    <li><a href="#">The UK will drill for more oil and gas in the North Sea</a></li>
                    <li><a href="#">The minority who back Netanyahu to the hilt</a></li>
                    <li>
                        <a href="#">
                            <i className="bi bi-camera" style={{ paddingRight: "1ch" }}></i>
                            Haunting images of abandoned sites overrun by nature
                        </a>
                    </li>
                    <li><a href="#">Elon Musk reactivates Kanye West’s Twitter account following X rebrand</a></li>
                    <li><a href="#">The world’s most dramatic saltwater ‘sea pools’</a></li>
                    <li><a href="#">Colombian president’s son arrested</a></li>
                    <li><a href="#">Bear cools off in a California pool during heat wave</a></li>
                    <li><a href="#">Fall asleep faster with mental tricks that calm your racing mind</a></li>
                </ul>
            </article>

            
            <article>
            <form method="post">
                <input type="text" placeholder="Search CNN..." />
                <button type="submit">Search →</button>
            </form>

            <div>
                <img src="" alt="User Avatar" />
                <h3>Log In</h3>
            </div>

            <div>
                <h3 role="link">World</h3>
                <a href="#">Africa</a>
                <a href="#">Americas</a>
                <a href="#">Asia</a>
                <a href="#">Australia</a>
                <a href="#">China</a>
                <a href="#">Europe</a>
                <a href="#">India</a>
                <a href="#">Middle East</a>
                <a href="#">United Kingdom</a>
            </div>

            <div>
                <h3 role="link">US Politics</h3>
                <a href="#">The Biden Presidency</a>
                <a href="#">Facts First</a>
                <a href="#">US Elections</a>
            </div>

            <div>
                <h3 role="link">Business</h3>
                <a href="#">Markets</a>
                <a href="#">Tech</a>
                <a href="#">Media</a>
                <a href="#">Calculators</a>
                <a href="#">Videos</a>
            </div>

            <div>
                <h3 role="link">Health</h3>
                <a href="#">Life, But Better</a>
                <a href="#">Fitness</a>
                <a href="#">Food</a>
                <a href="#">Sleep</a>
                <a href="#">Mindfulness</a>
                <a href="#">Relationships</a>
            </div>

            <div>
                <h3 role="link">Entertainment</h3>
                <a href="#">Movies</a>
                <a href="#">Television</a>
                <a href="#">Celebrity</a>
            </div>

            <div>
                <h3 role="link">Tech</h3>
                <a href="#">Innovate</a>
                <a href="#">Gadget</a>
                <a href="#">Foreseeable Future</a>
                <a href="#">Mission: Ahead</a>
                <a href="#">Upstarts</a>
                <a href="#">Work Transformed</a>
                <a href="#">Innovative Cities</a>
            </div>

            <div>
                <h3 role="link">Style</h3>
                <a href="#">Arts</a>
                <a href="#">Design</a>
                <a href="#">Fashion</a>
                <a href="#">Architecture</a>
                <a href="#">Luxury</a>
                <a href="#">Beauty</a>
                <a href="#">Video</a>
            </div>

            <div>
                <h3 role="link">Travel</h3>
                <a href="#">Destinations</a>
                <a href="#">Food & Drink</a>
                <a href="#">Stay</a>
                <a href="#">News</a>
                <a href="#">Videos</a>
            </div>

            <div>
                <h3 role="link">Sports</h3>
                <a href="#">Football</a>
                <a href="#">Tennis</a>
                <a href="#">Golf</a>
                <a href="#">Motorsport</a>
                <a href="#">US Sports</a>
                <a href="#">Olympics</a>
                <a href="#">Climbing</a>
                <a href="#">Esports</a>
                <a href="#">Hockey</a>
            </div>

            <div>
                <h3 role="link">Videos</h3>
                <a href="#">Live TV</a>
                <a href="#">Digital Studios</a>
                <a href="#">CNN Films</a>
                <a href="#">HLN</a>
                <a href="#">TV Schedule</a>
                <a href="#">TV Shows A-Z</a>
                <a href="#">CNNVR</a>
            </div>

            <div>
                <h3 role="link">Features</h3>
                <a href="#">As Equals</a>
                <a href="#">Call to Earth</a>
                <a href="#">Freedom Project</a>
                <a href="#">Impact Your World</a>
                <a href="#">Inside Africa</a>
                <a href="#">2 Degrees</a>
                <a href="#">CNN Heroes</a>
                <a href="#">All Features</a>
            </div>

            <div>
                <h3 role="link">Weather</h3>
                <a href="#">Climate</a>
                <a href="#">Wildfire Tracker</a>
                <a href="#">Video</a>
            </div>

            <div>
                <h3 role="link">More</h3>
                <a href="#">Photos</a>
                <a href="#">Longform</a>
                <a href="#">Investigations</a>
                <a href="#">CNN Profiles</a>
                <a href="#">CNN Leadership</a>
                <a href="#">CNN Newsletters</a>
                <a href="#">Work for CNN</a>
            </div>
            </article>

            
            {/* Phần 1: Live TV & Audio */}
            <article>
                <a href="#">Live TV</a>
                <a href="#">Audio</a>
            </article>

            {/* Phần 2: Danh mục chính */}
            <article>
                <a href="#">World</a>
                <a href="#">US Politics</a>
                <a href="#">Business</a>
                <a href="#">Health</a>
                <a href="#">Entertainment</a>
                <a href="#">Tech</a>
                <a href="#">Style</a>
                <a href="#">Travel</a>
                <a href="#">Sports</a>
                <a href="#">Videos</a>
                <a href="#">Features</a>
                <a href="#">Weather</a>
                <a href="#">More</a>
            </article>

            {/* Phần 3: Mạng xã hội và đăng nhập */}
            <article>
                <div>
                <img src="placeholder" alt="US Logo" />
                <a href="#">US</a>
                </div>
                <div>
                <a href="#">Audio</a>
                <a href="#">Live TV</a>
                <p>|</p>
                <p>FOLLOW CNN</p>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-instagram"></i>
                <button>Log In</button>
                </div>
            </article>

            {/* Phần 4: Chính sách & Bản quyền */}
            <article>
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookie Settings</a>
                <a href="#">Ad Choices</a>
                <a href="#">Accessibility & CC</a>
                <a href="#">About</a>
                <a href="#">Newsletters</a>
                <a href="#">Transcripts</a>
                <p>
                &copy; 2023 Cable News Network. A Warner Bros. Discovery Company. All
                Rights Reserved. <br />
                CNN Sans &trade; & &copy; 2016 Cable News Network.
                </p>
            </article>
        </div>
    );
}

export default Footer;
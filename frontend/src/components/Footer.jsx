import React from "react";
import  "../css/footer.css"
function Footer() {
    return (
        <div className="footer">
            <h1>In Case You Missed It</h1>
                <article>
                     <div className="news-feature">
                        <a 
                            href="/article/the-worlds-largest-architectural-model-captures-new-york-city-in-the-90s-1745808799" 
                            className="featured-link"
                            >
                            <img 
                            src="https://media.cnn.com/api/v1/images/stellar/prod/mt25-161213-13-52-09-5dsr7989.jpg?q=w_2000,c_fill" 
                            alt="The world’s largest architectural model captures New York City in the ’90s"
                            className="featured-image"
                            />
                            <h1 className="featured-title">
                            The world’s largest architectural model captures New York City in the ’90s
                            </h1>
                        </a>
                </div>

                <ul className="news-list">
                    <li><a href="/article/attacks-on-harvard-by-trump-administration-have-built-for-months-a-timeline-of-the-dispute-1745804464" className="news-link">Attacks on Harvard by Trump administration have built for months. A timeline of the dispute</a></li>
                    <li><a href="/article/trumps-firstterm-pick-to-run-the-national-science-foundation-quits-i-have-done-all-i-can-1745765218" className="news-link">Trump’s first-term pick to run the National Science Foundation quits: ‘I have done all I can’</a></li>
                    <li><a href="/article/united-airlines-plane-engine-shoots-out-fire-after-hitting-an-animal-on-takeoff-1745808911" className="news-link">United Airlines plane engine shoots out fire after hitting an animal on takeoff</a></li>
                    <li><a href="/article/pakistani-astronaut-will-become-first-foreign-national-to-enter-chinese-space-station-1745765218" className="news-link">Pakistani astronaut will become first foreign national to enter Chinese space station</a></li>
                    <li><a href="/article/amy-poehler-and-jack-black-hilariously-bond-over-their-sexy-cpap-machines-1745808638" className="news-link">Amy Poehler and Jack Black hilariously bond over their sexy CPAP machines</a></li>
                    <li><a href="/article/with-some-athletes-suffering-financially-michael-johnson-hopes-his-new-league-can-bring-value-to-track-and-field-1745809152" className="news-link">With some athletes ‘suffering financially,’ Michael Johnson hopes his new league can bring value to track and field</a></li>
                    <li><a href="/article/fossilized-footprints-reveal-unprecedented-insight-into-prehistoric-animal-behavior-in-oregon-1745808523" className="news-link">Fossilized footprints reveal unprecedented insight into prehistoric animal behavior in Oregon</a></li>
                    <li><a href="/article/why-mango-sticky-rice-is-one-of-thailands-most-beloved-summer-dishes-1745808911" className="news-link">Why mango sticky rice is one of Thailand’s most beloved summer dishes</a></li>
                    <li><a href="/article/an-ancient-terror-crocodile-became-a-dinosaureating-giant-scientists-say-they-now-know-why-1745765218" className="news-link">An ancient ‘terror crocodile’ became a dinosaur-eating giant. Scientists say they now know why</a></li>
                    <li><a href="/article/investors-got-hosed-when-trumps-tariffs-tanked-markets-some-of-americas-billionaires-managed-to-sell-before-the-plunge-1745807994" className="news-link">Investors got hosed when Trump’s tariffs tanked markets. Some of America’s billionaires managed to sell before the plunge</a></li>
                </ul>
            </article>  

               
                    <article className="footer-categories">
                        <form method="Titlr">
                            <h1>RELETED CATEGORIES</h1>
                        </form>
                        <a href="/categories/us" className="category-link">US</a>
                        <a href="/categories/world" className="category-link">WORLD</a>
                        <a href="/categories/politics" className="category-link">POLITICS</a>
                        <a href="/categories/business" className="category-link">BUSINESS</a>
                        <a href="/categories/entertainment" className="category-link">ENTERTAINMENT</a>
                        <a href="/categories/health" className="category-link">HEALTH</a>
                        <a href="/categories/style" className="category-link">STYLE</a>
                        <a href="/categories/travel" className="category-link">TRAVEL</a>
                        <a href="/categories/sports" className="category-link">SPORTS</a>
                        <a href="/categories/science" className="category-link">SCIENCE</a>
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
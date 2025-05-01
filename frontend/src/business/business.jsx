import "./business.css";

function Business() {
    return(
        <div className="business">
            <div className="list-business">
                <a href="/business">Business</a>
                <a href="/tech">Tech</a>
                <a href="/media">Media</a>
                <a href="/calculators">Calculators</a>
                <a href="/videos">Videos</a>
            </div>
            <div className="markets">
                <div id="markets">
                    <div className="title">
                        <a href="">Markets</a>
                        <img src="https://icons.iconarchive.com/icons/icons8/ios7/48/Arrows-Right-icon.png" alt="" />
                    </div>
                    <div className="stock-market">
                        <div className="name-stock">
                            <a href="">DOWS</a>
                            <a href="">S&P 500</a>
                            <a href="">NASDAQ</a>
                        </div>
                        <div className="shares">
                            <a href="">41,642.70</a>
                            <a href="">5,547.18</a>
                            <a href="">17,047.56</a>
                        </div>
                        <div className="bull-market">
                            <a href="">0,08%
                                <img src="https://icons.iconarchive.com/icons/icons8/ios7/48/Arrows-Up-4-icon.png" alt="" />
                            </a>
                            <a href="">0,64%
                                <img src="https://icons.iconarchive.com/icons/icons8/ios7/48/Arrows-Up-4-icon.png" alt="" />
                            </a>
                            <a href="">1,64%
                                <img src="https://icons.iconarchive.com/icons/icons8/ios7/48/Arrows-Down-4-icon.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="fear">
                    <div className="title">
                        <a href="">Fear & Greed Index</a>
                        <img src="https://icons.iconarchive.com/icons/icons8/ios7/48/Arrows-Right-icon.png" alt="" />
                    </div>
                    <div className="extreme">
                        <img src="https://cdn-icons-png.flaticon.com/128/15794/15794255.png" alt="" />
                        <a href=""><b>Extreme fear</b> is driving the US <br />market</a>
                    </div>
                    
                </div>
                <div className="latest">
                    <div className="title">
                        <a href="">Latest Market News</a>
                        <img src="https://icons.iconarchive.com/icons/icons8/ios7/48/Arrows-Right-icon.png" alt="" />
                    </div>
                    <div className="title-latest">
                        <a href="">Trump signs executive order targeting ticket price-gouging</a>
                        <a href="">Hooters files for bankruptcy</a>
                        <a href="">Trump is now planning a splashy ‘Liberation Day’ announcement. What he’ll say is sti...</a>
                    </div>

                </div>
            </div>
            <div className="news">
                <div className="news-left">
                    <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/ap25090591251020.jpg?c=original" alt="" /></a>
                    <div className="newsmax">
                    <a href="">Newsmax stock surges after its IPO</a>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2205051172.jpg?c=original" alt="" />
                            <a href="">The AI bubble may not be bursting, but tariff chaos is sure helping to deflate it</a>
                        </div>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/ap25043796290593.jpg?c=original" alt="" />
                            <a href="">The American consumer is on the ropes. Tariffs — and anxiety — could deliver the knockout blow</a>
                        </div>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/2025-01-18t222417z-1242060379-rc2lccaobdn2-rtrmadp-3-usa-tiktok.jpg?c=original" alt="" />
                            <a href="">TikTok is almost out of time to find a buyer. Here’s what we know</a>
                        </div>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2206723782.jpg?c=original" alt="" />
                            <a href="">Americans are scrambling to buy cars ahead of tariffs</a>
                        </div>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2207372316.jpg?c=original" alt="" />
                            <a href="">Trump’s ‘Liberation Day’ tariffs will go into effect immediately, White House says</a>
                        </div>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2191153056.jpg?c=original" alt="" />
                            <a href="">US embassies to contractors worldwide: Cancel any diversity programs or risk going unpaid</a>
                        </div>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2148007766.jpg?c=original" alt="" />
                            <a href="">Trump doesn’t seem to understand how car prices work</a>
                        </div>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2202939985.jpg?c=original" alt="" />
                            <a href="">Job opportunities are shrinking and layoffs in the federal government just hit their highest level in four years</a>
                        </div>
                    </div>
                </div>
                <div className="news-right">
                    <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/shutterstock-editorial-15232825f.jpg?c=original" alt="" /></a>
                    <a href="">Europe warns Trump: We have ‘a strong plan’ for retaliation against tariffs</a>
                    <div className="news-right-title">
                        <a href="">OpenAI plans to raise $40 billion to boost its AI efforts</a>
                        <a href="">With markets on edge, a top Wall Street influencer tiptoes around politics</a>
                        <a href="">Trump signs executive order targeting ticket price-gouging</a>
                        <a href="">Hooters files for bankruptcy</a>
                        <a href="">Trump is now planning a splashy ‘Liberation Day’ announcement. What he’ll say is still up in the air</a>
                        <a href="">Wall Street is fed up with Trump’s tariffs. Stocks are off to their worst start to a year since 2022</a>
                        <a href="">Looming car tariffs have some Americans rushing to dealerships to avoid sticker shock</a>
                        <a href="">White House Correspondents Association says Trump administration is trying to pressure reporters</a>
                        <a href="">Trump aide says tariffs will raise $6 trillion, which would be largest tax hike in US history</a>
                        <a href="">American auto jobs could be lost quickly in tariff war</a>
                        <a href="">Recession odds are rising as Trump’s trade war escalates, Goldman Sachs says</a>
                        <a href="">Primark CEO resigns after ‘error of judgment’</a>
                        <a href="">Trump is about to test whether the Fed learned its inflation lesson</a>
                    </div>
                </div>
                <div className="advertise">
                    <div className="text">
                        <a href="">Quote Search</a>
                    </div>
                    <div className="button">
                        <input type="text" placeholder="Search tickers or companies" className="search-input"/>
                        <button className="search-button"><img src="https://icons.iconarchive.com/icons/iconoir-team/iconoir/48/search-icon.png" alt="" /></button>
                    </div>
                </div>
            </div>
            <div className="what-to-watch">
                <div className="name-title">What to watch</div>
                <div className="what-news">
                    <div className="news">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/videothumbnails/35711911-79393767-generated-thumbnail.jpg?c=original" alt="" /></a>
                        <a href="">American wine industry paralyzed by sweeping tariffs</a>
                    </div>
                    <div className="news">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/videothumbnails/32362642-29082890-generated-thumbnail.jpg?c=original" alt="" /></a>
                        <a href="">Sen. Banks: Reciprocal tariffs are ‘so good’ for Indiana</a>
                    </div>
                    <div className="news">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/videothumbnails/90296464-54210991-generated-thumbnail.jpg?c=original" alt="" /></a>
                        <a href="">Oman eyes coastline for economic opportunity</a>
                    </div>
                    <div className="news">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/mark-zandi.jpg?c=original" alt="" /></a>
                        <a href="">Top economist gives the best and worst case scenarios for Trump’s tariff...</a>
                    </div>
                </div>
            </div>
            <div className="in-case-you-missed-it">
                <div className="text">In case you missed it</div>
                <div className="in-case-you-missed-it-news">
                    <div className="left">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2202811836.jpg?c=original" alt="" /></a>
                        <a href="">Canada’s snowbirds reconsider calling the US their second home</a>
                        <a href="">How Trump’s car tariffs will impact Americans, in 3 charts</a>
                        <a href="">Canada warns Trump on tariffs: Retaliation is coming April 2</a>
                        <a href="">Over 200 ‘Tesla Takedown’ protests take place throughout US on ‘Global Day of Action’ against Elon Musk’s role with DOGE</a>
                    </div>
                    <div className="right">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1246961846.jpg?c=original" alt="" /></a>
                        <a href="">Disney and ABC hit with FCC investigation over DEI policies</a>
                        <a href="">Are you looking to buy a car before the tariffs go into effect?</a>
                        <a href="">Dow closes more than 700 points lower and the S&P 500 is on track for its worst quarter since 2022</a>
                        <a href="">Apple needs a new reason to get you to buy a new iPhone. It may have one</a>
                    </div>
                </div>
            </div>
            <div className="more-video">
                <div className="text">More video</div>
                <div className="more-video-news">
                    <div className="left">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/barnett.jpg?c=original" alt="" /></a>
                        <a href="">GOP mayor explains what effects Trump’s tariffs could have on his city</a>
                    </div>
                    <div className="between">
                        <div className="b1">
                            <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/mark-zandi.jpg?c=original" alt="" /></a>
                            <a href="">Top economist gives the best and worst case scenarios for Trump’s tariff...</a>
                        </div>
                        <div className="b2">
                            <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/stewart-late-night-laugh-still-v2.png?c=original" alt="" /></a>
                            <a href="">Jon Stewart pokes fun at Trump’s third term talk</a>
                        </div>
                    </div>
                    <div className="right">
                        <div className="r1">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/deinfluencingshopping-v6-00-00-14-03-still002.jpg?c=original" alt="" /></a>
                            <a href="">TikTok made you buy it? Try these 5 tips to cut back on social spending</a>
                        </div>
                        <div className="r2">
                            <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/brewery-cans-02.jpg?c=original" alt="" /></a>
                            <a href="">Still recovering from Hurricane Helene, NC breweries face a new challenge with Trump’s tariffs</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="success">
                <div className="text">Success</div>
                <div className="success-news">
                    <div className="news">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1471886598-crop.jpg?c=original" alt="" /></a>
                        <a href="">Not using these job interview tips can reduce your chances of getting that job</a>
                    </div>
                    <div className="news">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1397496424.jpg?c=original" alt="" /></a>
                        <a href="">Smart moves to make when the Fed starts cutting rates</a>
                    </div>
                    <div className="news">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2147536598.jpg?c=original" alt="" /></a>
                        <a href="">Early signs of dementia can show in your finances</a>
                    </div>
                    <div className="news">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1363688385.jpg?c=original" alt="" /></a>
                        <a href="">Steps you can take now to avoid college sticker shock</a>
                    </div>
                </div>
            </div>
            <div className="tech">
                <div className="text">Tech</div>
                <div className="tech-news">
                    <div className="news">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/2025-01-18t222417z-1242060379-rc2lccaobdn2-rtrmadp-3-usa-tiktok.jpg?c=original" alt="" /></a>
                        <a href="">TikTok is almost out of time to find a buyer. Here’s what we know</a>
                    </div>
                    <div className="news">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2201185379.jpg?c=original" alt="" /></a>
                        <a href="">Apple’s AI isn’t a letdown. AI is the letdown we feared.</a>
                    </div>
                    <div className="news">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1235715147.jpg?c=original" alt="" /></a>
                        <a href="">What is Signal? The private chat app is only private if you use it right</a>
                    </div>
                    <div className="news">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1255975567-copy.jpg?c=original" alt="" /></a>
                        <a href="">How to keep your private conversations private</a>
                    </div>
                </div>
            </div>
            <div className="media">
            <div className="text">Media</div>
                <div className="media-news">
                    <div className="news">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/ap25090591251020.jpg?c=original" alt="" /></a>
                        <a href="">Newsmax stock surges after its IPO</a>
                    </div>
                    <div className="news">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/c-gettyimages-2205902569.jpg?c=original" alt="" /></a>
                        <a href="">White House Correspondents Association says Trump administration is trying to pressure reporters</a>
                    </div>
                    <div className="news">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2201329309.jpg?c=original" alt="" /></a>
                        <a href="">Trump White House plans to shake up briefing room seating, flexing power over press corps
                        </a>
                    </div>
                    <div className="news">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/220430231320-23-white-house-correspondents-dinner.jpg?c=original" alt="" /></a>
                        <a href="">White House Correspondents’ Association cancels plans to have a comedian headline annual dinner</a>
                    </div>
                </div>
            </div>
            <div className="last">
                <div className="last-news">
                    <div className="left">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/240419114813-nasa-01-fix.jpg?c=original" alt="" /></a>
                        <a href="">Streaming and texting on the Moon: Nokia and NASA are taking 4G into space</a>
                        <a href="">The electric car revolution is on track, says IEA</a>
                        <a href="">Digital humans: the relatable face of artificial intelligence?</a>
                        <a href="">Top soccer clubs are using an AI-powered app to scout future stars</a>
                    </div>
                    <div className="between">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2205298801-20250321220959607-20250321221152380.jpg?c=original" alt="" /></a>
                        <a href="">The big problem for investors: This time around, Trump may not care about market dives</a>
                        <a href="">Southwest is getting rid of its most recognizable perk</a>
                        <a href="">401(k)s did well in 2024, but not just due to market gains. You deserve credit, too</a>
                        <a href="">OpenAI’s wild week. How the Sam Altman story unfolded</a>
                    </div>
                    <div className="right">
                        <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/artemis-still-1.jpg?c=original" alt="" /></a>
                        <a href="">Is it a bird? Is it a boat? This vessel ‘flies’ above the water</a>
                        <a href="">American wine industry paralyzed by sweeping tariffs</a>
                        <a href="">Sen. Banks: Reciprocal tariffs are ‘so good’ for Indiana</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business;
import React from "react";
import "../css/home.css";

function TrangChu() {
    return (
        <div className="trangchu">
            <main>
                <section id="news1">
                    <article>
                        <a href=""><b>Officials: Over 2,600 rescued from flooded Ukrainian-controlled areas of Kherson</b></a>
                        <div style={{ position: "relative" }}>
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/97ff8560-8c09-4bfb-8d40-86f8ea671d18.jpg?c=16x9&q=h_720,w_1280,c_fill" className="bigImg" alt="News" />
                            <div style={{ padding: ".4rem 1rem", width: "130px", position: "absolute", bottom: 0, left: 0, backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <i className="bi bi-dot" style={{ fontSize: "3rem", color: "red", margin: "-1.5rem -.8rem" }}></i>
                                <b style={{ fontSize: ".7rem" }}>LIVE UPDATES</b>
                            </div>
                        </div>
                        <a href=""><b>Water level at the Nova Kakhovka reservoir ‘continues to decline,’ minister says, after collapse of major dam in southern Ukraine</b></a>
                        <ul>
                            <li><a href="">Ukrainians in battered southern town hopeful about counter offensive</a></li>
                            <li><a href=""><i className="bi bi-play-circle" style={{ color: "red", paddingRight: "5px", borderBottom: "1px solid white" }}></i>Video shows Western donated equipment destroyed by Russia</a></li>
                            <li><a href=""><b>Analysis:</b> What’s happening along the frontline? It’s too early to tell</a></li>
                        </ul>
                    </article>
                    <article>
                        <div>
                            <div style={{ position: "relative" }}>
                                <img src="https://media.cnn.com/api/v1/images/stellar/prod/230613205742-05-donald-trump-bedminster-061323.jpg?c=16x9&q=h_720,w_1280,c_fill" className="smallImg" alt="Trump" />
                                <div style={{ padding: ".4rem 1rem", width: "130px", position: "absolute", bottom: 0, left: 0, backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <i className="bi bi-dot" style={{ fontSize: "3rem", color: "red", margin: "-1.5rem -.8rem" }}></i>
                                    <b style={{ fontSize: ".7rem" }}>LIVE UPDATES</b>
                                </div>
                            </div>
                            <a href=""><b>Trump’s chilling remarks reveal a deeper, emerging reality about the 2024 campaign</b></a>
                            <ul>
                                <li><a href="">Takeaways from Trump’s historic court appearance</a></li>
                                <li><a href=""><i className="bi bi-play-circle" style={{ color: "red", paddingRight: "5px", borderBottom: "1px solid white" }}></i>Trump’s pit stop after his arrest was a key play. Here’s why</a></li>
                                <li><a href=""><b>Opinion:</b> Trump’s case is a crucial test for justice in America</a></li>
                            </ul>
                        </div>
                        <div>
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/230531134142-india-new-parliament-house-building-0524.jpg?c=16x9&q=h_720,w_1280,c_fill" className="smallImg" alt="India Parliament" />
                            <a href=""><b>A map in India’s new Parliament is making its neighbors nervous</b></a>
                        </div>
                    </article>
                    <article className="SArticle">
                        <img src="https://media.cnn.com/api/v1/images/stellar/prod/230615155632-01-pittsburgh-synagogue-trial-0615-bowers.jpg?c=16x9&q=h_438,w_780,c_fill" className="smallImg" alt="Pittsburgh" />
                        <a href=""><b>Pittsburgh synagogue gunman found guilty on all 63 charges</b></a>
                        <ul>
                            <li><a href="">Cyclist Gino Mäder dies aged 26 after high-speed Tour de Suisse crash</a></li>
                            <li><a href="">Thousands of dead fish wash up on Thai beach</a></li>
                            <li><a href=""><i className="bi bi-play-circle" style={{ color: "red", paddingRight: "5px", borderBottom: "1px solid white" }}></i>Video shows key Russian supply bridge knocked out by missile</a></li>
                            <li><a href="">Alleged Russian diplomat squatter is just ‘some bloke standing on a blade of grass’, Australian PM says</a></li>
                            <li><a href="">Beijing records its hottest ever June day</a></li>
                            <li><a href=""><i className="bi bi-play-circle" style={{ color: "red", paddingRight: "5px", borderBottom: "1px solid white" }}></i>CNN’s Amanpour asks Obama about ‘spectacle’ of Trump. Hear his answer</a></li>
                            <li><a href="">Teenager killed by exploding fire extinguisher during school drill</a></li>
                        </ul>
                    </article>
                </section>

                <section id="news2">
                    <article className="SArticle">
                        <img 
                            src="https://media.cnn.com/api/v1/images/stellar/prod/230622192324-01-how-repel-mosquitos-scientifically-wellness-scn.jpg?c=16x9&q=h_438,w_780,c_fill" 
                            className="smallImg" 
                            alt="Mosquito repellent"
                        />
                        <a href="#"><b>What scientists say keeps mosquitoes at bay</b></a>
                        <ul>
                            <li><a href="#">Train derailment on Montana bridge sends multiple rail cars into the Yellowstone River</a></li>
                            <li><a href="#">Orca pod attacks Ocean Race boats</a></li>
                            <li><a href="#"><b>CNN Exclusive:</b> GOP fake electors given immunity as Jan. 6 probe heats up</a></li>
                            <li><a href="#"><i className="bi bi-play-circle" style={{ color: "red", paddingRight: "5px", borderBottom: "1px solid white" }}></i>New Marvel TV show uses AI and fans are upset</a></li>
                            <li><a href="#">Tina Turner to be honored by Patti LaBelle during the BET Awards on Sunday</a></li>
                            <li><a href="#">6 amazing facts about the deepest point known on Earth</a></li>
                        </ul>
                    </article>

                    <article className="SArticle">
                        <img 
                            src="https://media.cnn.com/api/v1/images/stellar/prod/230622161002-01-us-tourists-hot-commodity-restricted.jpg?c=16x9&q=h_438,w_780,c_fill" 
                            className="bigImg" 
                            alt="US Tourists"
                        />
                        <a href="#"><b>‘Everybody loves Americans’: Why US tourists are a hot commodity</b></a>
                        <ul>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/230621115243-dr-james-gill-cranial-nerve-screengrab.jpg?c=16x9&q=h_438,w_780,c_fill" 
                                    className="vSmallImg" 
                                    alt="Accidental stars"
                                />
                                <a href="#">These ordinary people became accidental stars thanks to this niche video genre</a>
                            </li>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/230516112548-01-crossroads-maldives-aerial.jpg?c=16x9&q=h_438,w_780,c_fill" 
                                    className="vSmallImg" 
                                    alt="Maldives"
                                />
                                <a href="#">This country is 99% water. But the 1% is paradise</a>
                            </li>
                        </ul>
                    </article>

                    <article className="SArticle">
                        <ul style={{ marginTop: 0 }}>
                            <li style={{ borderTop: "none", paddingTop: 0 }}>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/220107151943-restricted-black-lego-sculpture-14.jpg?c=16x9&q=h_144,w_256,c_fill" 
                                    className="vSmallImg" 
                                    alt="Lego sculptor"
                                />
                                <a href="#">Meet the Ghanaian Canadian Lego sculptor building a Black universe</a>
                            </li>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/230621133729-past-lives-still-2.jpg?c=16x9&q=h_144,w_256,c_fill" 
                                    className="vSmallImg" 
                                    alt="Past Lives Movie"
                                />
                                <a href="#">The first serious Oscar contender of the year is here</a>
                            </li>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/230623141311-01-us-drive-thrus-urban-planning-restricted.jpg?c=16x9&q=h_144,w_256,c_fill" 
                                    className="vSmallImg" 
                                    alt="Drive-thrus"
                                />
                                <a href="#">Why cities want to ban new drive-thrus</a>
                            </li>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/230624134353-alligator-hilton-head-fisherman-1.jpg?c=16x9&q=h_144,w_256,c_fill" 
                                    className="vSmallImg" 
                                    alt="Alligator chasing fisherman"
                                />
                                <a href="#">Watch: Alligator chases fisherman</a>
                            </li>
                        </ul>
                    </article>
                </section>

                <section id="news3">
                    <article className="SArticle">
                        <img 
                            src="https://cdn.cnn.com/cnn/interactive/uploads/20230619-cockatoo_image_c.jpg" 
                            className="smallImg" 
                            alt="Endangered bird in Hong Kong"
                        />
                        <a href="#"><b>This endangered bird has found a refuge among Hong Kong’s skyscrapers</b></a>
                        <ul>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/230626113836-jesse-watters-fox-file-restricted.jpg?c=16x9&q=h_438,w_780,c_fill" 
                                    className="vSmallImg" 
                                    alt="Fox News shuffle"
                                />
                                <a href="#">Fox News shuffles prime-time lineup in wake of Tucker Carlson firing and sagging ratings</a>
                            </li>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/230626093100-reynolds-and-mcelhenney-los-angeles-0429.jpg?c=16x9&q=h_438,w_780,c_fill" 
                                    className="vSmallImg" 
                                    alt="Hollywood F1 stake"
                                />
                                <a href="#">Hollywood stars part of group taking 24% stake in F1 team</a>
                            </li>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/230623160908-home-for-rent-ca-file-restricted.jpg?c=16x9&q=h_438,w_780,c_fill" 
                                    className="vSmallImg" 
                                    alt="US Rent decline"
                                />
                                <a href="#">Rent is falling in America for the first time in years</a>
                            </li>
                        </ul>
                    </article>

                    <article className="SArticle">
                        <img 
                            src="https://media.cnn.com/api/v1/images/stellar/prod/230623142929-05-marie-heg-bolette-berg-untold-art-history.jpg?c=16x9&q=h_438,w_780,c_fill" 
                            className="bigImg" 
                            alt="19th-century photo love story"
                        />
                        <a href="#"><b>Lost for decades, these 19th-century photo portraits tell a quietly radical love story</b></a>
                        <ul>
                            <li>
                                <video className="vSmallImg" loop autoPlay muted>
                                    <source src="https://media.cnn.com/api/v1/loops/stellar/prod/desktoploop-2.mp4?q=h_422,w_752,x_0,y_0" type="video/mp4"/>
                                </video>
                                <a href="#">Curious whale follows kayak as Australia revels in bumper annual humpback count</a>
                            </li>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/230627130233-01-jacquemus-fashion-062623.jpg?c=16x9&q=h_438,w_780,c_fill" 
                                    className="vSmallImg" 
                                    alt="Jacquemus fashion show"
                                />
                                <a href="#">Jacquemus’ Versailles show was an ode to Princess Diana</a>
                            </li>
                        </ul>
                    </article>

                    <article className="SArticle">
                        <img 
                            src="https://media.cnn.com/api/v1/images/stellar/prod/230627082417-01-world-arak-day-top.jpg?c=16x9&q=h_438,w_780,c_fill" 
                            className="smallImg" 
                            alt="Arak spirit comeback"
                        />
                        <a href="#"><b>It’s one of the world’s oldest spirits. Now it’s making a comeback</b></a>
                        <ul>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/230627113327-04-jolien-boumkwo.jpg?c=16x9&q=h_438,w_780,c_fill" 
                                    className="vSmallImg" 
                                    alt="Shot putter in hurdles event"
                                />
                                <a href="#">Shot putter enjoys ‘crazy’ fame after competing in hurdles event</a>
                            </li>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/230626110109-01-happy-gilmore-golfer-college.jpg?c=16x9&q=h_438,w_780,c_fill" 
                                    className="vSmallImg" 
                                    alt="Happy Gilmore support"
                                />
                                <a href="#">Adam Sandler sends support to real-life Happy Gilmore</a>
                            </li>
                            <li>
                                <div style={{ position: "relative", cursor: "pointer", height: "60px" }}>
                                    <img 
                                        src="https://media.cnn.com/api/v1/images/stellar/prod/230526163342-watermelon-01.jpg?c=16x9&q=h_438,w_780,c_fill" 
                                        className="vSmallImg" 
                                        alt="Watermelon picking"
                                    />
                                    <div style={{ color: "white", position: "absolute", left: 0, bottom: 0, backgroundColor: "gray", padding: ".1rem .4rem" }}>
                                        <i className="bi bi-play-circle" style={{ paddingRight: "5px" }}></i>Video
                                    </div>
                                </div>
                                <a href="#">How to pick the perfect watermelon in 3 easy steps</a>
                            </li>
                        </ul>
                    </article>
                </section>

                <section id="news4">
                    <h1>Featured Sections</h1>

                    <article className="SArticle">
                        <div style={{ position: "relative" }}>
                            <img 
                                src="https://media.cnn.com/api/v1/images/stellar/prod/230627152404-nyse-file-0609.jpg?c=16x9&q=h_438,w_780,c_fill" 
                                className="smallImg" 
                                alt="US economy live updates"
                            />
                            <div 
                                style={{ 
                                    padding: ".4rem 1rem", 
                                    width: "130px", 
                                    position: "absolute", 
                                    bottom: 0, 
                                    left: 0, 
                                    backgroundColor: "white", 
                                    display: "flex", 
                                    alignItems: "center", 
                                    justifyContent: "space-between" 
                                }}
                            >
                                <i 
                                    className="bi bi-dot" 
                                    style={{ fontSize: "3rem", color: "red", margin: "-1.5rem -.8rem" }}
                                ></i>
                                <b style={{ fontSize: ".7rem" }}>LIVE UPDATES</b>
                            </div>
                        </div>
                        <a href="#"><b>Live updates on a huge day for the US economy: Housing, GDP, jobs and Bidenomics</b></a>
                        <ul>
                            <li><a href="#">Flight problems mostly over — except at United</a></li>
                            <li><a href="#">The Fed is secretly stress testing the US economy against nightmare scenarios</a></li>
                            <li><a href="#">Climate event El Niño could hit the economy from food prices to clothing sales this year</a></li>
                            <li><a href="#">Jesse Watters was invited to speak before a group of executives. His remarks led to an ‘epic meltdown’</a></li>
                            <li><a href="#">World Bank approves $700 million for crisis-hit Sri Lanka</a></li>
                        </ul>
                    </article>

                    <article className="SArticle">
                        <div style={{ fontWeight: "bold", marginBottom: "10px" }}>CNN TRAVEL</div>
                        <img 
                            src="https://media.cnn.com/api/v1/images/stellar/prod/230627100639-icon-of-the-sea-card.jpg?c=16x9&q=h_438,w_780,c_fill" 
                            className="smallImg" 
                            alt="World's biggest cruise ship"
                        />
                        <a href="#"><b>The world’s biggest cruise ship is almost ready</b></a>
                        <ul>
                            <li><a href="#">She stuffed a bra with clothes before boarding a plane. Here’s why</a></li>
                            <li><a href="#">The gigantic tunnels and bridges linking Asia to Europe</a></li>
                            <li><a href="#">She delivered a baby on an airplane. Here’s what happened next</a></li>
                            <li><a href="#">The fire that’s ‘burned for 4,000 years and never gone out’</a></li>
                            <li><a href="#">Qantas reveals economy seats for 19-hour NYC-Sydney ultra long-haul flights</a></li>
                        </ul>
                    </article>
                    
                    <div></div>
                </section>

                <section id="news5">
                    <article className="SArticle">
                        <div style={{ fontWeight: "bold", marginBottom: "10px" }}>SPORT</div>
                        <img 
                            src="https://media.cnn.com/api/v1/images/stellar/prod/230629093850-01-caroline-wozniacki-file.jpg?c=16x9&q=h_438,w_780,c_fill" 
                            className="smallImg" 
                            alt="Caroline Wozniacki returns to tennis"
                        />
                        <a href="#" style={{ fontSize: "1.2rem" }}>
                            <b>Caroline Wozniacki plans return to tennis at US Open three years after retiring from the sport</b>
                        </a>
                        <ul>
                            <li><a href="#">Australian teenager Arisa Trew, 13, becomes first female in skateboarding history to land 720 trick</a></li>
                            <li><a href="#">Ultra runner breaks record of world’s oldest 100-mile race by almost 80 minutes</a></li>
                            <li><a href="#">Summer transfer window: The biggest moves so far as Saudi Arabia becomes major factor</a></li>
                            <li><a href="#">One of the world’s fastest athletes is without a country to run for</a></li>
                            <li><a href="#">Meet the photographer redefining how we view the world of chess</a></li>
                        </ul>
                    </article>

                    <article className="SArticle">
                        <img 
                            src="https://media.cnn.com/api/v1/images/stellar/prod/230616123458-02-bronze-age-sword-germany.jpg?c=16x9&q=h_438,w_780,c_fill" 
                            className="smallImg" 
                            alt="Ancient sword discovery"
                        />
                        <a href="#"><b>Archaeologists find a 3,000-year-old sword so well preserved it’s still gleaming</b></a>
                        <ul>
                            <li><a href="#">Princess Diana’s famous ‘black sheep’ sweater is going up for auction</a></li>
                            <li><a href="#">After 25 years and $185M, Spain’s new Royal Collections Museum is finally opening</a></li>
                            <li><a href="#">The celebrity who epitomized ‘Barbiecore’ two decades before it had a name</a></li>
                            <li><a href="#">These joyful photographs of Scouts show a sense of belonging and freedom</a></li>
                            <li><a href="#">Why the in-flight magazine for an African airline shuttered in 2002 is a must-read today</a></li>
                        </ul>
                    </article>

                    <article className="SArticle">
                        <img 
                            src="https://media.cnn.com/api/v1/images/stellar/prod/230626155240-02-wagner-rostov-062423.jpg?c=16x9&q=h_438,w_780,c_fill" 
                            className="smallImg" 
                            alt="Prigozhin’s mutiny impact in Russia"
                        />
                        <a href="#"><b>How Prigozhin’s mutiny will resonate in Russia</b></a>
                        <ul>
                            <li><a href="#">You might want to rethink taking melatonin as a sleep aid</a></li>
                            <li><a href="#">It wasn’t like this in Moscow in 1991</a></li>
                            <li><a href="#">The Supreme Court rewrites American society once again</a></li>
                            <li><a href="#">We’re in the midst of anti-sex backlash that has ensnared Jennifer Lawrence’s new romcom</a></li>
                            <li><a href="#">DeSantis is trying to climb the Trump wall</a></li>
                        </ul>
                    </article>
                </section>

                <section id="news6">
                    <article className="SArticle">
                        <img 
                            src="https://media.cnn.com/api/v1/images/stellar/prod/230707160356-alexandria-ocasio-cortez-053123.jpg?c=16x9&q=h_438,w_780,c_fill" 
                            className="smallImg" 
                            alt="Rep. Alexandria Ocasio-Cortez"
                        />
                        <a href="#"><b>Rep. Alexandria Ocasio-Cortez supports Biden’s reelection bid</b></a>
                        <ul>
                            <li><a href="#">DOJ has spent over $9 million investigating Trump since special counsel was appointed</a></li>
                            <li><a href="#">White House confirms prisoner swap talks with Russia over reporter Evan Gershkovich but so far there’s no ‘clear pathway’</a></li>
                            <li><a href="#">Biden wants to roll back Trump’s expansion of short-term health insurance plans</a></li>
                        </ul>
                    </article>

                    <article className="SArticle">
                        <img 
                            src="https://media.cnn.com/api/v1/images/stellar/prod/230703122657-01-cambrian-predator-scn.jpg?c=16x9&q=h_438,w_780,c_fill" 
                            className="smallImg" 
                            alt="Ancient shrimplike predator"
                        />
                        <a href="#"><b>New study: Ancient shrimplike predator was misunderstood</b></a>
                        <ul>
                            <li><a href="#">Forget TikTok claims: ‘Nature’s Ozempic’ is no such thing, experts say</a></li>
                            <li><a href="#">Saturn’s rings shine in new Webb telescope photo</a></li>
                            <li><a href="#">Scientists find new clue in what led to megalodon’s demise</a></li>
                            <li><a href="#">Scientists find new clue in what led to megalodon’s demise</a></li>
                        </ul>
                    </article>

                    <article className="SArticle">
                        <img 
                            src="https://media.cnn.com/api/v1/images/stellar/prod/230426220909-samsung-022023.jpg?c=16x9&q=h_438,w_780,c_fill" 
                            className="smallImg" 
                            alt="Samsung quarterly profit drop"
                        />
                        <a href="#"><b>Samsung flags massive drop in quarterly profit as chip glut drags on</b></a>
                        <ul>
                            <li><a href="#">Twitter threatens to sue Meta after rival app Threads gains traction</a></li>
                            <li><a href="#">A flying car prototype just got an airworthiness certificate from the FAA</a></li>
                            <li><a href="#">Meta officially launches Twitter rival Threads. 30 million have joined already</a></li>
                            <li><a href="#">With Twitter in chaos, Mark Zuckerberg looks to pounce</a></li>
                        </ul>
                    </article>
                </section>

                <section id="news7">
                    <h1>Watch it</h1>
                    <h1>Photos You Should See</h1>
                    <article>
                        <ul>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/221123145851-levon-biss-insects-card.jpg?c=16x9&q=h_270,w_480,c_fill" 
                                    alt="Extraordinary close-up images of insects"
                                />
                                <a href="#">Extraordinary close-up images show insects as you’ve never seen them before</a>
                            </li>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/200402101849-17-best-turkish-foods-simit-restricted.jpg?q=x_0,y_0,h_1687,w_2997,c_fill/h_270,w_480" 
                                    alt="Delicious Turkish dishes"
                                />
                                <a href="#">The most delicious Turkish dishes</a>
                            </li>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/210831160530-01-chris-fallows.jpg?q=x_0,y_85,h_900,w_1600,c_crop/h_270,w_480" 
                                    alt="Flying Shark photo"
                                />
                                <a href="#">‘Flying Shark’ photo changed this man’s life</a>
                            </li>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/220517105501-saota-beyond-1.jpg?c=16x9&q=h_270,w_480,c_fill" 
                                    alt="Architects from one end of the world"
                                />
                                <a href="#">The architects from one end of the world</a>
                            </li>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/210313023629-eurasian-lynx-file-2012.jpg?q=x_2,y_32,h_898,w_1596,c_crop/h_270,w_480" 
                                    alt="Extinct animals brought back"
                                />
                                <a href="#">These animals went extinct in the wild. Scientists brought them back</a>
                            </li>
                            <li>
                                <img 
                                    src="https://media.cnn.com/api/v1/images/stellar/prod/230119091917-florian-ledoux-4-story-card.jpg?c=16x9&q=h_270,w_480,c_fill" 
                                    alt="Arctic photographer"
                                />
                                <a href="#">The icy patience of an Arctic photographer</a>
                            </li>
                        </ul>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default TrangChu;
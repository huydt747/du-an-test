
import "./calculators.css";

function Calculators() {
    return(
        <div className="calculators">
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
            <div className="text-calculators">
                <a href="">Financial Calculators</a>
                <a href="">CNN's calculators help you make informed decisions about your personal finances at every stage of life.</a>
            </div>
            <div className="news">
                <div className="news-left">
                    <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/230424094134-financial-calculator-house-affordability.jpg?c=original" alt="" /></a>
                    <div className="newsmax">
                        <a href="">How much house can I afford?</a>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/230424094404-financial-calculator-mortgage-refinance.jpg?c=original" alt="" />
                            <a href="">Should I refinance my mortgage?</a>
                        </div>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/230424094606-financial-calculator-mortgage-payment.jpg?c=original" alt="" />
                            <a href="">What will my monthly mortgage payment be?</a>
                        </div>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/230424094847-financial-calculator-rent-or-buy.jpg?c=original" alt="" />
                            <a href="">Should I rent or buy a home?</a>
                        </div>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/230424100037-financial-calculator-retirement-planning.jpg?c=original" alt="" />
                            <a href="">How much do I need to save for retirement?</a>
                        </div>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/230424095202-financial-calculator-retirement-savings-withdrawal.jpg?c=original" alt="" />
                            <a href="">I’m retired, how long will my savings last?</a>
                        </div>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/230424110845-financial-calculator-credit-card-payoff.jpg?c=original" alt="" />
                            <a href="">How long will it take to pay off my credit cards?</a>
                        </div>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/230424100654-financial-calculator-inflation.jpg?c=original" alt="" />
                            <a href="">How does inflation affect my standard of living?</a>
                        </div>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/230424125921-financial-calculator-take-home-pay.jpg?c=original" alt="" />
                            <a href="">What will my take-home pay be?</a>
                        </div>
                        <div className="newsmax-title">
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/230424100458-financial-calculator-college-savings.jpg?c=original" alt="" />
                            <a href="">How much should I be saving for college?</a>
                        </div>
                    </div>
                </div>
                <div className="news-right">
                   <div className="more-from-cnn-business">
                        <div className="text">
                            <a href="">More From CNN Business</a>
                        </div>
                        <div className="more-title">
                            <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2172411879.jpg?c=original" alt="" /></a>
                            <a href="">Smartphones and computers are now exempt from Trump’s latest tariffs</a>
                        </div>
                        <div className="more-title">
                            <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/dry-brook-sugar-house.jpg?c=original" alt="" /></a>
                            <a href="">Trump’s using tariffs to get you to buy American. For US maple syrup, that’s a sticky situation</a>
                        </div>
                        <div className="more-title">
                            <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2045182242.jpg?c=original" alt="" /></a>
                            <a href="">145% tariffs on China are clobbering the toy industry</a>
                        </div>
                        <div className="more-title">
                            <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/20250411-tariff-timeline-hp.png?c=original" alt="" /></a>
                            <a href="">Timeline: All the twists and turns in the US-China trade war</a>
                        </div>
                   </div>
                   <div className="cnn-business-videos">
                   <div className="text">
                            <a href="">CNN Business Videos</a>
                        </div>
                        <div className="more-title">
                            <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/thumb-1-20250413055550893.png?c=original" alt="" /></a>
                            <a href="">Chinese EV giant BYD overtakes Tesla in the Global EV race </a>
                        </div>
                        <div className="more-title">
                            <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/thumb-1-20250413055550893.png?c=original" alt="" /></a>
                            <a href="">Chinese EV giant BYD overtakes Tesla in the Global EV race</a>
                        </div>
                        <div className="more-title">
                            <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/switch-2-thumb-1.jpg?c=original" alt="" /></a>
                            <a href="">How Trump’s tariffs could impact Nintendo’s Switch 2 </a>
                        </div>
                        <div className="more-title">
                            <a href=""><img src="https://media.cnn.com/api/v1/images/stellar/prod/big-short.jpg?c=original" alt="" /></a>
                            <a href="">‘Big Short’ investor says US is better equipped to handle trade war with China </a>
                        </div>
                   </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Calculators;
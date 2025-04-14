import "../css/business.css";

function Business() {
    return(
        <div className="business">
            <div className="markets">
                <div id="markets">
                    <div className="title">
                        <a href="">Markets</a>
                        <img src="https://icons.iconarchive.com/icons/icons8/ios7/48/Arrows-Right-icon.png" alt="" />
                    </div>
                    <div className="stock-market">
                        <div className="name-stock">
                            <a href="">DOW</a>
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
                        <a href="">Trump is now planning a splashy ‘Liberation Day’ announcement. What he’ll say is sti</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Business;
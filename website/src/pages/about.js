const About = () => {

    return (
        <>
            <div className="sub-header"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('/Images/background2.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "50vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div className="txt-box">
                    <h1>About Us</h1>
                </div>
            </div>

            <div className="about-us">
                <div className="row">
                    <div className="abt-col">
                        <img src="/Images/AIM-Logo.svg" />
                    </div>
                    <div className="abt-col">
                        <h1> About AIM-Partners</h1>
                        <p>Founded in January 2020, AIM Partners is an investment management organization run by UIUC students. We comprise undergraduate and graduate students from diverse backgrounds, which enables us to take a holistic approach to our investment portfolios.
                        </p>
                        <p>Our mission is to provide unique market insights and deliver exceptional investment returns to our members. Through AIM Partners, not only do we hope to provide both educational and practical experience for students who have a passion for investment, but also to continue our ongoing partnerships with our clients.</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScwqNQkE8YHhnvLmvr5jeAgJA5ZqG4LoFVKOxz9rxg-c2_krQ/viewform" className="register-btn red">Apply Team Lead Positions for Fall 2025!</a>
                    </div>
                </div>
            </div>

            <div className="member">
                <div className="txt-box-2">
                    <h1>LeaderShips</h1>
                </div>
                <div className="leaders">
                    <a href="https://www.linkedin.com/in/yunhoc1204/"> <img src="/Images/Chang.jpeg" />
                        <h3>President</h3> <p>Yunho Chang</p></a>
                    <a href="https://www.linkedin.com/in/jacob-lee-a5164734a/"><img src="/Images/No Image from aimpartnersuiuc.png" /><h3>Vice President</h3> <p>Jacob Lee</p></a>
                    <a href="https://www.linkedin.com/in/tonykwon02/"><img src="/Images/No Image from aimpartnersuiuc.png" /><h3>Head of Investment</h3> <p>Tony Kwon</p></a>
                    <a href="https://www.linkedin.com/in/jaeho-lim/"><img src="/Images/No Image from aimpartnersuiuc.png" /><h3>Head of Research</h3> <p>Jaeho Lim</p></a>
                    <a href="https://www.linkedin.com/in/joonyong-um-630489369/"><img src="/Images/No Image from aimpartnersuiuc.png" /><h3>Head of Software</h3> <p>Joonyong Um</p></a>
                </div>
            </div>
        </>
    );
}

export default About;
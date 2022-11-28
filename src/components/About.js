import "./About.css";

const About = () => {
    return (
        <>

            <div className="content">

                <h1>
                    CROWDFUND.
                </h1>
                <br>
                </br>
                <p>
                    it's a sample crowdfund dapp for fund some ether to any business.
                    in this dapp anyone can send ethers in wei to this smartcontract.
                    then the owner of this smartcontract can withdraw this funds.
                </p>

            </div>
            <div className="links">
                <ul id="ul">
                    <li><a href="https://www.instagram.com/_m_h_a_r_i/" target="_blank">instagram</a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100008755717238" target="_blank">facebook</a></li>
                    <li><a href="https://github.com/hariharanmarikrishnan" target="_blank">github</a></li>
                </ul>
            </div>

        </>
    )
}
export default About;
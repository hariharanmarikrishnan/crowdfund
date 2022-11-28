import "./Home.css"

const Home = () => {

    return (
        <>
            <div className="maincontainer">
                < div className="container1">
                    <h1>
                        CrowdFund
                    </h1>
                    
                    <p>
                        it's a sample crowdfund dapp for fund some ether to any business.
                        in this dapp anyone can send ethers in wei to this smartcontract.
                        then the owner of this smartcontract can withdraw this funds.
                        let's go to fund some ethers.
                    </p>

                    <li><a href="./Fund" id="a" >get started</a></li>

                </div>

                <div className="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsXEg4eanTkpaFd3j3WUeXrlXwgbiPKnaeA&usqp=CAU" alt="crowdfund"></img>
                </div>

            </div>
        </>

    )
}
export default Home;
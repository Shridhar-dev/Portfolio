import Achievement from "./Achievement"
import Trophy from "../public/trophy-cup-svgrepo-com 1.svg"

function Achievements() {
    return (
        
        <div className=" mx-10 md:mx-28 text-center flex justify-center items-center flex-col  py-12 mt-5" style={{position:'relative'}}>
            <h1 className="text-5xl text-center mb-5 pb-2" style={{fontWeight:'700',color:'white'}}>Achievements</h1>
            <Achievement svg={Trophy.src} alt={"trophy"} heading={"Google Code to Learn 2018 Finalist"} text={"Was Finalist in Google Code to Learn 2018 competition. Made a game in Scratch that revolved around a detective trying to solve a mystery"}/>
            <Achievement svg={Trophy.src} alt={"trophy"} heading={"Hackathon Winner"} text={"Best Beginner Hack Winner at Hack At Home II Hackathon organized by MLH (Major League Hacking)"}/>
            <Achievement svg={Trophy.src} alt={"trophy"} heading={"TOP 22 in Hackathon"} text={"The Project Promise NFT Marketplace was in the Top 22 at HackNitr Hackathon "}/>

        </div>
    )
}

export default Achievements

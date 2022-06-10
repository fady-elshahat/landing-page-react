import { Box, Flex } from "@chakra-ui/core";
import backg from './assets/img/Ellipse 8.png'
import img2 from "./assets/img/Group 104.png"
import img1 from "./assets/img/dash-total.png"
import img3 from "./assets/img/Cronifi-logo-01.png"

function AboutChroni() {
     return (
          <div className="about-chroni-container">
               <div className="container">
                    <div className="back">
                    <img src={backg} alt="bac"/>
                    </div>
                    <div className="about-chroni">
                    <h3 className="titel">About ChroniFI</h3>
                    <p className="desc">At ChroniFI, we care about your financial future and are rooting for you to live the life of your dreams. To help you plan and reach your goals, we offer you a toolkit to assess your financial picture and play around with a variety of what if scenarios to empower your life choices. </p>
                    <Flex align="center" justify="center" direction={["column" ,"column" , "row" ]}>
                         <Box width={['100%','50%','50%']}>
                              <p>
                                   <span className="one">You can sign up for our basic plan for free and try out a few options. If you love it, like we hope you do, there are opportunities to upgrade to a monthly subscription. </span>
                                   <br />
                                   <br/>
                                   When you subscribe to ChroniFI, you can start to visualize what it will take to become financially independent and how many year you need to remain in the workforce to achieve it. Personal finances are ever evolving and expenses come and go along with desires for small and large purchases. Having ChroniFI in your back pocket makes financial planning a breeze and allows you to focus more clearly on achieving success.
                              </p>
                         </Box>
                         <Box width={['100%','50%','50%']}>
                              <img src={img1} alt="img" />
                         </Box>
                    </Flex>
                    <Flex align="center" justify="center" direction={["column-reverse" ,"column" , "row" ]}>
                         <Box width={['100%','50%','50%']}>
                              <img src={img2} alt="img" />
                         </Box>
                         <Box width={['100%','50%','50%']}>
                              <p>
                                   ChroniFI was founded by Ben Miller who was working long hours at an investment bank and missing out on some of the special moments with his wife and young children as a result. He wanted to better understand what life choices he could make based on his financial picture. However, he couldn’t find an easy place to put all the puzzle pieces together. So he decided to build it himself and share it with the world.
                                   <br />
                                   <br/>
                                   ChroniFI is built around the idea that our time has incredible value and our life planning and choices should revolve around it instead of money. With ChroniFI’s tools, you can understand where your money is going and make adjustments to spend on the things that matter most to you. You learn to forgo other unimportant things to free up more time to do the things you care about and love. Afterall, isn’t happiness the cornerstone of a fulfilled life?
                              </p>
                         </Box>
                    </Flex>
                    <div className="back2">
                         <img src={img3} alt="bac"/>
                    </div>
               </div>
               </div>
               
               
          </div>
     );
}


export default AboutChroni;
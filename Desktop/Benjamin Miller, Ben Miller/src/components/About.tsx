import { Flex } from "@chakra-ui/core";
import background from "./assets/img/Group 80.svg";
import oneImg from "./assets/img/ben2.png";
import twoImg from "./assets/img/tiffany copy 3.png";



function About(){
     return (
          <div className="about">
               <div className="back">
                    <img src={background} alt="bac"/>
               </div>
               <div className="container">
               <p className="desc-about">
                    <span className="one">Ben Miller</span> and <span className="two">Tiffany Joy Basse</span> are both passionate about financial empowerment and offer a wide variety of wit and wisdom that will be sure to delight you. 
               </p>
               <Flex align="center" justify="center" className="card-about first">
                    <p className="desc-card"><span className="two">Ben is the CEO and Founder of ChroniFI</span> who worked in finance for eight years and wants to bring financial education
                             <br/> and tools to the masses.</p>
                         <img src={oneImg} alt="" />
               </Flex>
               <Flex align="center" justify="center" className="card-about seconed">
                    <img src={twoImg} alt="" />
                    <p className="desc-card"><span className="one">Tiffany is a former personal finance TV and Radio personality</span> and author that has educated millions of women (and many men too). </p>
               </Flex>
          </div>
          </div>
          
     );
}

export default About;
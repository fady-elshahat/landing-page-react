import { Flex } from "@chakra-ui/core";
import icon from './assets/img/header.svg'
function Header() {
     return (
          <div className="header">
               <div className="container">
                    <Flex align="center" justify="center" direction="column">
                         <h2 className="titel-header"><span className="custem">Free</span> Financial Freedom Webinar</h2>
                         <p className="desc-header">Are you tired of feeling uncertain or stressed about your financial future?</p>
                         <p>We are here to help you demystify the financial planning process and empower you to make wise money-related choices in your life. Peace of mind is just around the corner.</p>
                    </Flex>
               </div>
               <div className="footer-header">
                         <p>Take your first step by participating in our Financial Freedom Webinar.</p>
               </div>
               <div className="icon">
                         <img src={icon} alt="icon" width="440px"/>
               </div>
          </div>
     );
}

export default Header;

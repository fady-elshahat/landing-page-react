import { Box, Button, Flex } from "@chakra-ui/core";
import {
  FormControl,
  Input
} from "@chakra-ui/core";

import img from './assets/img/Group 90.png';
import img2 from './assets/img/Group 96.png'


function SignUP() {
     return (
          <div className="sign-up">
               <div className="imges">
                    <img src={img2} alt="img" />
                    <img src={img} alt="img" />
                    
               </div>
               <div className="container">
                     <h2 className="titel">Get <span>free</span> access</h2>
               <Flex justify="center" direction={["column" ,"column" , "row" ]}>
                    <Box className="content" width={['100%','50%','50%']}>
                         <p className="desc">to our Financial Freedom Webinars in 2022 <span>(a $89 value)</span> by signing up for our personal finance email newsletter.</p>
                         <span className="desc1">(We email only financial education and ChroniFI info)</span>
                         <div className="btns">
                              <p>Pick your live webinar date:</p>
                              <div>Wednesday June 8th - 5PM to 6PM PDT</div>
                              <div>Thursday June 9th 12pm-1pm PDT</div>
                              <div>I can’t make these 2 dates,
                                                            so please inform me of future webinars</div>
                         </div>
                    </Box>
                    <form className="sign-up-form" action="">
                         <p>Sign up</p>
                              <FormControl>
                                   <Input type="text" id="name" placeholder="Name"/>
                              </FormControl>
                              <FormControl>
                                   <Input type="email" id="Email" placeholder="Email"/>
                              </FormControl>
                              <FormControl>
                                   <Input type="number" id="Age" placeholder="Age"/>
                              </FormControl>
                              <FormControl>
                                   <Input type="number" id="Zipcode" placeholder="Zipcode"/>
                              </FormControl>
                         <Button className="btn-sub">Submit</Button>
                    </form>
               </Flex>
               </div>
          </div>
     );
}

export default SignUP;
import { Flex , Button } from "@chakra-ui/core";
import img from './assets/img/Cronifi-01.svg'
function Quiz(){
     return (
          <div className="quiz-container">
               <div className="container">
                    <Flex align="center" justify="center"  className="quiz" direction={["column-reverse" ,"column" , "row" ]}>
                    <Flex size="557px" className="img-quiz">
                         <img src={img} alt="img" />
                    </Flex>
                    <div className="content-quiz">
                         <p className="desc">Want to have a little fun and see where you stand from a financial health perspective?
                              Take our Financial Heath Quiz and get your results immediately
                         </p>
                         <Button>Take the Quiz</Button>
                    </div>
               </Flex>
               </div>
          </div>
     );
}
export default Quiz;
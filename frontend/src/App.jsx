import axios from 'axios'
import NavigationBar from "./components/NavigationBar.jsx"
import Second from "./components/Second.jsx"
import ThirdPage from "./components/ThirdPage.jsx"
import Fourth from "./components/Fourth.jsx"
import Fifth from "./components/Fifth.jsx"
import Question from "./components/Question.jsx"
const App=()=>{
  return(
    
    <div>
    <div className="bg" >
      <NavigationBar/>
      <div class="header-content">
            <h1>Unlimited movies, TV shows and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="transbox">
              <form action="#" class="email-signup">
                <input type="email" placeholder="Email address" required id="box"/>
               
                 <button type="submit" id="getStartBtn">Get Started{' >'}</button>
            </form>
          </div>
        </div>
    </div>
    <Second/>
    <ThirdPage/>
    <Fourth/>
    <Fifth/>
    <Question/>
    </div> 

  )
}
export default App
import './App.css';
import {BsTelephoneFill, BsFillEnvelopeFill} from "react-icons/bs";
import profilePhoto from './img/fotoPerfil.jpg';
import rudaLogo from './img/logoRuda.png';
import cook from './img/cook.png';
import gym from './img/fittnes.jpg';
import travel from './img/trabel.jpg';
import pokemon from './img/pokemonProject.jpg';
import geoQuizz from './img/geoquizzProject.jpg';
import quoty from './img/quotyProject.jpg';
import toDoList from './img/todolistProject.jpg';

function App() {
  return (
    <div className="App">
      <div className='columna columna1'>
      <div className='presentation'>
       <div className='containerPhoto'><img src= {profilePhoto} className='profilePhoto'/> </div> 
        <p className='name'> <b>Lis Gimena Roa </b> <br></br>
        <span className='position'>Front-end developer</span>
        </p>
        <p className='description'> <BsFillEnvelopeFill/> lisgimenaroa@gmail.com </p>
          <p className='description'> <BsTelephoneFill/> +54 3625 143 030  </p>
          <p className='description'> Self-motivate developer, who is willing to learn and create outstanding UI applications. </p>
      </div>
      <div className='experiences'>
        <img src={rudaLogo} className='logoRuda'/>
        <p className='tittle'> <b> Experience</b></p>
        <p className='ruda'> <b>RUDA</b><br></br> 2020-2022</p>
        <p> I worked as a baker in a bakery called 'Ruda'. Making organic, vegan and sourdough products such as cakes, cookies, puddings and bread.</p>
      </div>
      <div className='containerHobbies'>
        <p className='tittleHobbies'><b>Hobbies</b></p>
        <img src= {cook} className='imagesHobbies'/>
        <p className='hobbies'><b>Cooking</b></p>
        <p className='description'>I really enjoy cooking.</p>
        <img src= {gym} className='imagesHobbies'/>
        <p className='hobbies'><b>Exercise</b></p>
        <p className='description'>Go to the gym or go for a run.</p>
        <img src= {travel} className='imagesHobbies'/>
        <p className='hobbies'><b>Travel</b></p>
        <p className='description'>Know other countries, cultures, landscapes.</p>
      </div>
    </div>
    <div className='columna2'>
    <div className='skills'>
        <h3>FRONT END</h3>
        <div><p>React</p>
          <span className='bar'><span className='react'></span></span>
        </div>
        <div><p>Javascript</p>
          <span className='bar'><span className='javascript'></span></span>
        </div>
        <div><p>HTML</p>
          <span className='bar'><span className='html'></span></span>
        </div>
        <div><p>CSS</p>
          <span className='bar'><span className='css'></span></span>
        </div>
        </div>
      
      
        <div className='tittle2'>Projects </div>
          <div className='projects'>
            <div className='containerProjects1'><img src={pokemon} className='imageProject'/></div>
              <div className='containerProjects2'>
                <div className='description'>
                   <p className='technologies'>React, Javascript, CSS3,HTML</p>
                    <p className='tittleProjects'> <b> Pokemon Guesser</b></p>
                    <p>A game where you have to guess who is the hidden pokemon.</p> </div>
                    <div className='buttons'> 
                      <button className='buttonDemo'>Demo</button>
                      <button className='buttonCode'>Code</button> 
                    </div>
            </div>
      </div>

      <div className='projects'>
        <div className='containerProjects1'><img src={toDoList} className='imageProject'/></div>
          <div className='containerProjects2'> 
           <div className='description'> 
                <p className='technologies'>React, Javascript, CSS3,HTML</p>
                <p className='tittleProjects'> <b> To-Do-List</b></p>
                <p>A web application that allows you to add your pending tasks of the day, complete them and delete them.</p> </div>
                <div className='buttons'> 
                    <button className='buttonDemo'>Demo</button>
                    <button className='buttonCode'>Code</button>
                </div>
          </div>
      </div>

      <div className='projects'>
        <div className='containerProjects1'><img src= {quoty}  className='imageProject'/></div>
          <div className='containerProjects2'>
           <div className='description'> 
               <p className='technologies'>React, Javascript, CSS3, HTML</p>
               <p className='tittleProjects'> <b> Quoty </b></p>
               <p>Quoty is a web that displays a random quote every time you open it, and if you click on it's author, it will show more quotes of the same.</p></div>
                <div className='buttons'> 
                   <button className='buttonDemo'>Demo</button>
                   <button className='buttonCode'>Code</button> 
                </div>
          </div>
      </div>

      <div className='projects'>
        <div className='containerProjects1'><img src={geoQuizz} className='imageProject'/></div>
          <div className='containerProjects2'>
           <div className='description'> 
              <p className='technologies'>React, Javascript, CSS3, HTML</p>
              <p className='tittleProjects'> <b> Geo-Quizz</b></p>
              <p> Ask you random questions about geography and then shows your score.</p></div>
                <div className='buttons'> 
                  <button className='buttonDemo'>Demo</button>
                  <button className='buttonCode'>Code</button> 
               </div>
          </div>
                  
      </div>
     
      
    </div>
    </div>

  );
}

export default App;

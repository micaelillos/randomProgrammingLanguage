import React, {useEffect, useState} from 'react';
import Confetti from 'react-confetti'
import './App.css';


function App() {
    const languages = [
        'angularjs','django','android', 'c','csharp',
        'inkscape','javascript','java','jetbrains','jquery',
        'linux','nodejs','photoshop','python','react',
        'rails','swift','typescript','php'
    ]
   const icons = languages.map(language => `devicon-${language}-plain colored`)
    function random(){
        return Math.floor(Math.random() * (languages.length))
    }

    const [name,setName] = useState("AS")
       const[r,setR] = useState(random());
    const[randomizeCount,setrandomizeCount] = useState(0)
    const[on,seton] = useState(false);



useEffect(()=>{
    if (randomizeCount > 0) {
        setTimeout(() => {
           setrandomizeCount(randomizeCount - 1)
          setR(random())
        }
         ,20);
    }
seton(true)
})
    return (
      <>
          <div className="container text-center">
          <h1 className="display-4 alert-success jumbotron"> Random Programming Language Generator </h1>
    <button className="btn-success" onClick={() => setrandomizeCount(30)}>Randomize</button>
          <i key={r} className={icons[r]}> </i>
              <Confetti
              width={2000}
              height={1000}
              />
          </div>
      </>
  );
}

export default App;

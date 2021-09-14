import './App.css';
import DP from './DP.gif';
import linkedinIcon from './linkedin.png';
import mail from './mail.png';
import Details from './Details/Details.js';
import ContactModal from './ContactModal/ContactModal.js';
import {useState} from 'react';
var name = 'Divyansh Rajput';
var college = 'Student at Indian Institute of Information Technology Guwahati'
var gradDate = 'Expected Grad. April 2023';

function App() {
  const [contact,setContact]=useState(false);
  return (
    <div className="App">
      {contact===true?<ContactModal contact={contact} setContact={setContact}/>:""}
      <div className="window">
        <div className="DP">
          <img className="DPimage" src ={DP}/>
        </div>
        <span className="profileName">
          {name}
        </span>
        <span className='collegeName'>
          {college}
        </span>
        <span className='collegeName'>
          {gradDate}
        </span>
        <div className='socialIcon'>
          <div className='linkedin' onClick={() => window.open('https://www.linkedin.com/in/divyansh-rajput/', '_blank')}><img src ={linkedinIcon}/></div>
          <div className='mail' onClick={() => window.open('mailto:divyansh19r@gmail.com', '_blank')}><img src ={mail}/></div>
        </div>
        <div className="buttonBox">
            <button className="CVbutton" >DOWNLOAD CV</button>
        </div>
        <div className="buttonBox">
            <button className="contactbutton" onClick={()=>setContact(!contact)}>CONTACT</button>
        </div>
      </div>
      <Details/>
    </div>
  );
}

export default App;

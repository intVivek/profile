import './ContactModal.css';
import DetailsBox from '../DetailsBox/DetailsBox.js';
import {useState} from 'react';

function ContactModal(props) {
  const [value,setValue]=useState();
  const fetchData=()=>{
    
    console.log(value);
    fetch('http://localhost:8080/submit', {
      method: "post",
      body: JSON.stringify({email: value}),
      headers: { "Content-type": "application/json" }
    }).then(function (response) {
      return response.json(value);
    }).then(function () {
      
  });
  props.setContact(!props.contact);
  }

  return (
    <div className='contactMain'>
      <div className='contactWindow'>
        <button className='contactClose' onClick={()=>props.setContact(!props.contact)}>x</button>
        <div className='contactWindowinner'>
        <DetailsBox heading={'Contact Details'} desc={['Email : divyansh19r@gmail.com','Phone No. : 9111692482']}/>
        <br/>
        <span className='contactSpan'>Also you can drop your mail</span>
        <br/>
        <div>
        <input className='inputEmail' onChange={(event) => setValue(event.target.value)}></input>
        <button className='submitButton' onClick={fetchData}>Submit</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
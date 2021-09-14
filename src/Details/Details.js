import './Details.css';
import DetailsBox from '../DetailsBox/DetailsBox.js';
var school1 = 'Indian Institute of Information Technology ,Guwahati';
var school1Desc =['B.Tech. in Computer Science and Engineering','Expected Grad. April 2023','C.P.I : 8.36 (until Sem IV)'];
var school2 = 'St. Paul’s Co-Ed School,Bhopal';
var school2Desc = ['Higher secondary','CBSE – XII','Percentage – 83.4%','Passing year – 2018'];
var projectHeading ='PROJECTS';
var projectDetails=['Real-Estate', 'Java based App','An GUI application for managing a real estate','database made using Java and MySQL supporting','retrieval, insertion, deletion and modification of','information in the database .'];
var skillsData=['Languages:','C ', 'C++ ','Python , Java','Databases:','MySQL','Exposure:','Machine Learning','Cloud Computing (AWS)','Soft Skills:','Teamwork','Problem-solving','Leadership qualities']
var courseData =['Algorithms','Data Structures','Discrete Mathematics','Artificial Intelligence','Computer Architecture','Database Management Systems','Operating systems','Object-Oriented Programming','Computer Networks'];
function Details() {
  return (
    <div className ='details'>
      <div className ='detailsWindow'>
      <div className ='leftDetails'>
        <span className ='edu'>EDUCATION</span>
        <DetailsBox heading={school1} desc={school1Desc}/>
        <DetailsBox  heading={school2} desc={school2Desc}/>
        <br/><br/>
        <DetailsBox  heading={projectHeading} desc={projectDetails}/>
      </div>
      <div className ='rightDetails'>
      <DetailsBox  heading={'Skills'} desc={skillsData}/>
      <DetailsBox  heading={'COURSEWORK:'} desc={courseData}/>
      </div>
      </div>
    </div>
  );
}

export default Details;
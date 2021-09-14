import './DetailsBox.css';

function DetailsBox(props) {
  const tray=props.desc&&props.desc.map((element,i)=>{
    return <span className='block'>{element}</span>
  })
  return (
    <div className ='detailsBox'>
      <div className ='detailsHeading'>
        <span>{props.heading}</span>
      </div>
      <div className ='detailsDesc'>
        {tray}
      </div>
    </div>
  );
}

export default DetailsBox;
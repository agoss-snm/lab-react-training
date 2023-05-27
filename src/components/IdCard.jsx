function IdCard(props) {
    return (
      <div className='Content'>
        <div className='Card'>
        <img src={props.picture} alt="" />
        <h1>{props.lastName}, {props.firstName}</h1>
        <h4>{props.gender}</h4>
        <p>height: {props.height}</p>
        <p>birth: {props.birth}</p>
      </div>
      </div>
    );
  }
  
  export default IdCard;
  
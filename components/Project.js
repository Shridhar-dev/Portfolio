
function Project(props) {
    return (
        <>
        <div  className="col-12 col-md-6 my-4"  >
            <a href={props.link}>
            <img src={props.src}  className="img-fluid" alt={"Img of " + props.title}/>
            </a>
        </div>
        <div className="col-12 col-md-6 text-center mb-5 my-md-auto">
            <a href={props.link}>
            <h1 className="mb-4 mt-4" style={{color:'white'}}>{props.title}</h1>
            <h3 style={{color:'white'}}>{props.text}</h3>
            </a>
            
        </div>
        </>
    )
}

export default Project

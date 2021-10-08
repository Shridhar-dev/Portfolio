
function Project(props) {
    return (
        <>
        <div  className="col-12 col-md-6 my-4"  >
            <img src={props.src}  className="img-fluid"/>
        </div>
        <div className="col-12 col-md-6 text-center mb-5 my-md-auto">
            <h1 className="mb-4 mt-4" style={{color:'white'}}>{props.title}</h1>
            <h3 style={{color:'white'}}>{props.text}</h3>
            
        </div>
        </>
    )
}

export default Project

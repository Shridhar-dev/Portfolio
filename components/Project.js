
function Project(props) {
    return (
        <>
        <div className="col-6 my-4">
            <img src={props.src}  className="img-fluid"/>
        </div>
        <div className="col-6 text-center my-auto">
            <h1 className="mb-4" style={{color:'white'}}>{props.title}</h1>
            <h3 style={{color:'white'}}>{props.text}</h3>
        </div>
        </>
    )
}

export default Project

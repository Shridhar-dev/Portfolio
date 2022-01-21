
function Project(props) {
    return (
        <>
        <div  className="col-span-12 md:col-span-6 my-6"  >
            <a href={props.link}>
            <img src={props.src}  className="img-fluid w-full" alt={"Img of " + props.title}/>
            </a>
        </div>
        <div className="col-span-12 md:col-span-6 text-center mb-12 md:my-auto">
            <a href={props.link}>
            <h1 className="mb-6 mt-6 text-4xl" style={{color:'white'}}>{props.title}</h1>
            <h3 style={{color:'white'}} className="text-2xl">{props.text}</h3>
            </a>
            
        </div>
        </>
    )
}

export default Project

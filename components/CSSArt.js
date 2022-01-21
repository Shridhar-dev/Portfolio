
function CSSArt(props) {
    return (
        <div className={` px-10 mx-6 my-4 md:my-0 flex justify-center items-center flip-mover `} style={{background:'black',overflow:'hidden',height:'300px',width:'300px'}}>
            <img src={props.src} className="img-fluid rounded-full" width="600" alt={props.alt}/>         
        </div>
    )
}

export default CSSArt

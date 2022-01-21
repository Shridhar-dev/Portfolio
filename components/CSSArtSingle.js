
function CSSArtSingle(props) {
    return (
        <div className={` mx-6 text-white my-4 md:my-0 flex justify-center items-center flip-mover `} style={{background:'black',overflow:'hidden',height:'300px',minWidth:'300px'}}>
            <img src={props.src} className="img-fluid rounded-full" width="200" alt={props.alt}/>
        </div>
    )
}

export default CSSArtSingle
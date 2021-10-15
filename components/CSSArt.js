
function CSSArt(props) {
    return (
        <div className={`col-12 my-3 my-md-0 col-md-3 d-flex justify-content-center align-items-center flip-mover mx-4 ${props.margins}`} style={{background:'black',overflow:'hidden',height:'calc(300px)',objectFit:'contain'}}>
            <img src={props.src} className="img-fluid rounded-circle" width="200" alt={props.alt}/>         
        </div>
    )
}

export default CSSArt


function CSSArt(props) {
    return (
        <div className={`col-12 my-3 my-md-0 col-md-3 d-flex justify-content-center align-items-center ${props.margins}`}style={{background:'black',overflow:'hidden',height:'calc(20rem + 1vw)'}}>
            <img src={props.src} className="img-fluid" width={props.width}/>         
        </div>
    )
}

export default CSSArt

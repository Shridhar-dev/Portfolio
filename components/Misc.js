import React from 'react'
import NPM from '../public/react-cursors.gif'

function Misc() {
    return (
        <div className="container d-flex justify-content-center py-5 mt-5 " style={{position:'relative',margin:'0% 80%'}}>

            <div className="mx-5 px-5 text-white text-center">
                <h2>Published my First NPM Package</h2>
                <img src={NPM.src} className="img-fluid mt-5" width="700"/>
                <a href="https://www.npmjs.com/package/react-cursors">
                    <h1 className="mt-5" style={{fontWeight:'600',textDecoration:'underline',color:'white'}}>react-cursors</h1>
                </a>
            </div>
        </div>
    )
}

export default Misc

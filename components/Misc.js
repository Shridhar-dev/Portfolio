import React from 'react'
import NPM from '../public/react-cursors.gif'

function Misc() {
    return (
        <div className="container flex justify-center py-32 mt-20 " style={{position:'relative',margin:'0% 80%'}}>

            <div className="mx-12 text-white text-center">
                <h2 className='text-3xl'>Published my First NPM Package</h2>
                <a href="https://www.npmjs.com/package/react-cursors">
                    <img src={NPM.src} className="img-fluid mt-12" width="700" alt="react cursors intro gif"/>
                    <h1 className="mt-12 text-4xl" style={{fontWeight:'600',textDecoration:'underline',color:'white'}}>react-cursors</h1>
                </a>
            </div>
        </div>
    )
}

export default Misc

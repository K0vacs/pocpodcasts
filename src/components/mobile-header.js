import React from "react"
import baked from "../static/images/baked-the-podcast.jpg"
import lesser from "../static/images/lesser-known.jpg"
import pod from "../static/images/pod-off-the-press.jpg"
import son from "../static/images/son-of-a-son.jpg"

// This component renders the header section for mobile
export default function MobileHeader() {

  return (
    
    <main className="container">
        
        <div className="row">
            <div className="col-12 text-white">
              
                <h1 className="text-white">a <strong>podcast company</strong> made under the Africa sky</h1>       
                <img className="mt-5" src={lesser} alt="Lesser Known" width="100%" />
                <img className="mt-5" src={son} alt="Son of a son" width="100%" />
                <img className="mt-5" src={pod} alt="Pod off the press" width="100%" />
                <img className="mt-5" src={baked} alt="Baked the podcast" width="100%" />
             
            </div>
        </div>

    </main>
  )

}
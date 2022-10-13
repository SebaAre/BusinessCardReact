import React from "react"


export default function Info (){
    return (
        <div className="container-info" >
            <img className="info-photo" src="./images/photo.png"/>
            <h1 className="info-name">Sebastian Arellano</h1>
            <h3 className="info-rol">Frontend Developer</h3>
            <div className="btn" >
                <a className="link-mail" href="arellanosebastian5@hotmail.com"><img className="img-mail" src="./images/email.png"/>Email</a>
                <a className="link-linkedin" href="https://www.linkedin.com/in/sebastian-arellano/"><img className="img-linkedin" src="./images/linkedin.png"/>LinkedIn</a>
            </div>
        </div>
    )
}
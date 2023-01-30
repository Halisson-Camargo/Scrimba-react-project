
// import imgProfile from "/src/assets/foto-one-piece.png"

// export default function info(){
//     return (
//         <div className="info-container">
//             <img src={imgProfile} alt="profile picture" className="profile-picutere"/>
//             <h1>Halisson Camargo</h1>
//             <h2>Frontend Developer</h2>
//             <p>halissoncamargo.</p>
//             <div className="social-buttons">
//                 <a href="">
//                     <button>Email</button>
//                 </a>
//                 <a href="">
//                     <button>Linkedin</button>
//                 </a>
//             </div>
//         </div>
//     )
// }


import imgProfile from "/src/assets/foto-one-piece.png"
import {FaLinkedin} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa'


export default function Info(){
    return (
        <div className="info-container">
            <img src={imgProfile} alt="profile picture" className="profile-picture"/>
            <h1>Halisson Camargo</h1>
            <h2>Frontend Developer</h2>
            <p>halissoncamargo.</p>
            <div className="social-buttons"> 
            <a href="#">
                <button className="btn-email">
                    <FaEnvelope className="icon"/> Email
                </button>
            </a>                  
            <a href="#">
                <button className="btn-linkedin">
                    <FaLinkedin className="icon"/> Linkedin
                </button>           
            </a>   
             </div>
        </div>
    )
}
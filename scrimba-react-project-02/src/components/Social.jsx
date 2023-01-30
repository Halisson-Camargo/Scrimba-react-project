import {FaTwitterSquare} from "react-icons/fa"
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'

export default function Social(){
    return (
        <div className="social-section">
            <a href="#">
                <FaTwitterSquare className="social-icons"  />                    
            </a>
            <a href="#">          
                <FaFacebookF className="social-icons" />                       
            </a>
            <a href="#">          
                <FaInstagramSquare className="social-icons" />                                
            </a>
            <a href="#">          
                <FaGithubSquare className="social-icons" />                  
             </a>
        </div>
    )
}
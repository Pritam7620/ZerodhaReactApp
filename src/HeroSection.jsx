
import landing from "./landing.svg";
import "./HeroSection.css"
export default function HeroSection(){

return (

  <>
  <div className="imgdiv">
  <img src = {landing} alt="landingsvg" />

  </div>

  <div className="Invest-coin">
<div className="in1">
  <p className="inp">Invest in everything</p>
<p className="inp2">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
</div>
<div className="in2">
  <div className="btn">
     <button>Sign up for free</button>
  </div>
 
</div>
  </div>
  
  </>
)

}


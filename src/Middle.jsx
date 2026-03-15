import AnchorArrow from "./AnchorArrow";
import "./Middle.css";
import image from "./ecosystem.png";
import Middleimg from "./middleimg";

export default function Middle(){

return (
<>
<div className="Middle-cointainer">

<div className="Middle-left">
  <div>
    <h2>Trust with confidence</h2>
  </div>
  <div className="para">
    <p className="cust">Customer-first always</p>
    <p>That's why 1.6+ crore customers trust Zerodha with ~ <br />₹6  lakh crores of equity investments, making us <br /> India’s largest broker; contributing to 15% of daily <br />retail exchange volumes in India.</p>
  </div>
  <div className="para">
    <p className="cust">No spam or gimmicks</p>
    <p>No gimmicks, spam, "gamification", or annoying push <br /> notifications. High quality apps that you use at your <br /> pace, the way you like. <span>Our philosophies.</span></p>
  </div>

  <div className="para">
    <p className="cust">The Zerodha universe</p>
    <p>Not just an app, but a whole ecosystem. Our <br />investments in 30+ fintech startups offer you tailored <br />services specific to your needs.</p>
  </div>
    <div className="para">
    <p className="cust"> Do better with money</p>
    <p>With initiatives like <span>Nudge</span> and <span>Kill Switch</span> , we don't <br /> just facilitate transactions, but actively help you do <br /> better with your money.</p>
  </div>


</div>
<div className="Middle-right">
<img src={image} alt="" />

<AnchorArrow></AnchorArrow>
</div>

</div>
<Middleimg></Middleimg>
</>

)

}
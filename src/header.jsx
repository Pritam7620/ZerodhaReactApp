import { useState } from "react";
import "./Header.css"

export default function Header(){
 
let [visible , setstrate]  = useState(false);
function ShowMenu(){


visible ?  setstrate(false) : setstrate(true)


}

return(
<>
<div className="Header-Cointainer">
<div className="head-left">
<img src="	https://zerodha.com/static/images/logo.svg" alt="Zerodhalogo" />

</div>
<div className="head-right">

  <a href="">Signup</a>
<a href="">About</a>
<a href="">Products</a>
<a href="">Pricing</a>
<a href="">Support</a>

<i onClick={ShowMenu} className="fa-solid fa-bars"></i>

{visible && (
<div className="Menu">
<div className="Menu1">
<div> <img src="https://zerodha.com/static/images/products/kite-logo.svg" alt="" />
<p>Kite</p>
<p className="para">Trading Plateform</p>
</div>
<div> <img src="	https://zerodha.com/static/images/products/console.svg" alt="" />
<p>Console</p>
<p className="para">BackOffice</p>
</div>
<div> <img src="	https://zerodha.com/static/images/products/kite-connect.svg" alt="" />
<p>Kite Connect</p>
<p className="para">Trading APIs</p>
</div>
<div> <img src="	https://zerodha.com/static/images/products/coin.svg" alt="" />
<p>Coin</p>
<p className="para">Mutual Funds</p>
</div>

</div>
<div className="Menu2">
<div className="box">
  <p>Utilities</p>
  <a href="">Calculators</a><br />
   <a href="">Brokerage Calculator</a><br />
    <a href="">Margin Calculator</a><br />
     <a href="">Sip Calculator</a><br />

</div>
<div className="box">
   <p>Updates</p>
    <a href="">Z-connect blog</a><br />
   <a href="">circular/bulletin</a><br />
    <a href="">IPOs</a><br />
     <a href="">Markets</a><br />
     
</div>
<div className="box">
   <p>Education</p>
 <img src="	https://zerodha.com/static/images/products/varsity.png" alt="" /><br />
 <a >varsity</a>
     
</div>
<div className="box">
   <img id="img2" src="	https://zerodha.com/static/images/products/tqna.png" alt="" /><br /><br/>
   <a href="">Trading  Q&A</a>
     
</div>
</div>
</div>

)


}
</div>

</div>

</>

)

}


import yo from "../public/yo.jpg";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate=useNavigate()

  const goAutor =()=> {
    navigate("/Matematico/Autor");  
    }

return(
<>

<footer className="bg-primary border border-primary">



  <div className="container border rounded-4">

  <div className="d-flex justify-content-center">
      <div className="copyright">
        <p>Developed and maintained by            
        <ul className="list-unstyled">

<li>
  <a onClick={goAutor} href="#" className=" text-info  text-decoration-none">Juan Cruz Oduardo</a>
</li>
</ul>
        </p>
      </div>
    </div>

  
    
  </div>
</footer>

</>
    
);
}
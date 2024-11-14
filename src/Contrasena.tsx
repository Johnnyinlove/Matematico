import { useState } from 'react';  
import { useNavigate } from "react-router-dom";


export default function Segurity () {
  const [password, setPassword] = useState(String);  
  const navigate = useNavigate();  

  const GoEconomia = (e:any) => {  
    e.preventDefault(); // Evita el comportamiento por defecto del formulario  

    if (password === 'Abc123') {  
      navigate("/Matematico/Economia");  
    } else {  
      alert("Contraseña incorrecta.");  
    }  
  };  

  


    return (
<>
<div className="container m-xl-5">

<form className="row g-3">
  <div className="col-auto">
    <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
    <input type="text" title="ss" className="form-control-plaintext" id="staticEmail2" value="Usuario Protegido"/>
  </div>
  <div className="col-auto">
    <label htmlFor="inputPassword2" className="visually-hidden">Contraseña</label>
    <input 
      type="password"
      className="form-control" 
      id="inputPassword2" 
      placeholder="Contraseña"
      value={password}  
      onChange={(e) => setPassword(e.target.value)} // Actualiza el estado  
  /> 
  
  </div>
  <div className="col-auto">
    <button type="submit" onClick={GoEconomia} className="btn btn-primary mb-3">Aceptar</button>
  </div>
</form>
</div>


</>

    );
}
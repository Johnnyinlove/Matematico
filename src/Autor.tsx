import './App.css'
import yo from '../public/yo.jpg';
import { useNavigate } from "react-router-dom";


function Autor() {
  // const [count, setCount] = useState(0)

  const navigate=useNavigate()

  const ReturnHome =()=> {
    navigate("/Matematico/");  
    }




  return (
    <>



    <div className='App'>

    <div className="card mb-3"  >
    <a onClick={ReturnHome} href="#" className="btn btn-primary">Inicio</a>
    <p className="fw-bolder text-center fs-2 ">Sobre mi</p>
    <div className="grid text-center container-sm">
      <img src={yo} className="img-fluid col-md-4 rounded-start" alt="yo"/>
    </div>



  <div className="row g-0">




<div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
    <div className="card-body">
        <h5 className="card-title">Nivel Académico</h5>
        <p className="card-text">
        Licenciado en Matemática, de la Universidad de Oriente, Santiago de 
Cuba.

        </p>

<hr />
        <h5 className="card-title"> Habilidades informáticas </h5>
        <p className="card-text">

Medio: Microsoft Office: Word, PowerPoint, Excel.<br/>

Básico: C++, Linux, Wolfram Mathematica, HTML, CSS, JavaScript, 
Typescript. <br/>

Medio: LATEX, Microsoft Windows, Redes Sociales e Internet.
        </p>
        <a className="btn abc btn-primary" href="https://johnnyinlove.d3i5negfn33i3u.amplifyapp.com/" role="button">Primera Web</a>
        <a className="btn abc btn-primary" href="https://johnnyreact.d3if6eo00snogl.amplifyapp.com/" role="button">Segunda Web</a>


<hr />
        <h5 className="card-title"> Habilidades lingüisticas </h5>
        <p className="card-text">
Materna: Español. <br/>
Básico: English
        </p>

        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>

    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">

      <div className="card-body grid text-center">

    <h5 className="card-title">Contáctame!!</h5>

      <span className=" rounded-pill text-center-min">
    <a href="https://www.facebook.com/juan.cruzoduardo"  rel='noopener' target="_blank">
    <img className="with" src="https://cdn.icon-icons.com/icons2/642/PNG/512/facebook_icon-icons.com_59205.png" alt="img" />
      </a>

      <div className="ms-2 me-auto">
      <div className="fw-bold">Facebook</div>
    </div>
    </span>


      <span className=" rounded-pill text-center-min">
    <a href="https://t.me/Whatwho01"  rel='noopener' target="_blank">
    <img className="with" src="https://cdn.icon-icons.com/icons2/923/PNG/512/telegram_icon-icons.com_72055.png" alt="img" />
      </a>
    <div className="ms-2 me-auto">
    <div className="fw-bold">Telegram</div>
    </div>

    </span>

      <span className=" rounded-pill text-center-min">
    <a href="https://www.linkedin.com/in/john-manito-bb4b02259"  rel='noopener' target="_blank">
    <img className="with img-fluid rounded-circle"  src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" alt="img" />
      </a>

    <div className="ms-2 me-auto">
    <div className="fw-bold">Linkedin</div>
    </div>
    </span>

      <span className=" rounded-pill text-center-min">
    <a href="https://github.com/Johnnyinlove"  rel='noopener' target="_blank">
    <img className="with" src="https://cdn.icon-icons.com/icons2/2368/PNG/96/github_logo_icon_143772.png" alt="img" />
      </a>

    <div className="ms-2 me-auto">
    <div className="fw-bold">GitHub</div>
    </div>
    </span>

      <span className=" rounded-pill text-center-min">
    <a href="https://www.notion.so/Getting-Started-on-Mobile-8d98ea3f4d1441c68f8a9d8bc4e9ba6f?pvs=4"  rel='noopener' target="_blank">
    <img className="with" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/notion_black_logo_icon_147102.png" alt="img" />
      </a>

    <div className="ms-2 me-auto">
    <div className="fw-bold">Notion</div>
    </div>
    </span>
    
      <span className=" rounded-pill text-center-min">
    <a href="mailto:johnmanito3@gmail.com"  rel='noopener' target="_blank">
    <img className="with" src="https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png" alt="img" />
      </a>

    <div className="ms-2 me-auto">
    <div className="fw-bold">Gmail</div>
    </div>
    </span>
  


      </div>
    </div>
  </div>
</div>



    
  </div>




</div>




</div>

    
  

    
    </>
  )
}

export default Autor

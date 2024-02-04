import { useNavigate } from "react-router-dom";

export default function NotFound() {
const navigate=useNavigate()

    const ReturnHome =()=> {
    navigate("/Matematico/Home");  
    }

    return (
        <>
    <div  className='fount grid text-center'>

        <div className='text-warning abc'>
        <h3>404 NotFound</h3>  
    <button type="submit" onClick={ReturnHome} className="btn btn-primary  ">Home</button>
        </div>

        <div className="container-fluid">
         <img className="img-fount" src="https://cdn.pixabay.com/photo/2017/07/14/09/28/matrix-2503236_1280.jpg" alt="404" />
        </div>

        </div>

    </>
    );

}
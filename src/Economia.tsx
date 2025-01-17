import React, { useState } from 'react';  
import Calendar from 'react-calendar';  
import 'react-calendar/dist/Calendar.css'; // Importar estilos del calendario  
import Economiaq from '/Economia.pdf';  

export default function Economia() {  
    const [date, setDate] = useState(new Date());  

    // Fecha de inicio para Juan: 13 de enero de 2025  
    const startDateJuan = new Date(2025, 0, 7); // 0 representa enero  
    
    // Fecha de inicio para Dargelis: 3 de enero de 2025  
    const startDateDargelis = new Date(2025, 0, 3); // 0 representa enero  

    // Función para generar las fechas cada 8 días  
    const generateEventDates = (startDate:any, occurrences:any) => {  
        const eventDates = [];  
        for (let i = 0; i < occurrences; i++) {  
            const eventDate = new Date(startDate);  
            eventDate.setDate(startDate.getDate() + i * 8);  
            eventDates.push(eventDate);  
        }  
        return eventDates;  
    };  

    // Generar las fechas de los eventos para Juan y Dargelis  
    const eventDatesJuan = generateEventDates(startDateJuan, 50); // Cambia el 10 por el número de ocurrencias que deseas  
    const eventDatesDargelis = generateEventDates(startDateDargelis, 50); // Cambia el 10 por el número de ocurrencias que deseas  

    return (  
        <>  
            <div className='container bg-success bg-opacity-25 p-5 border-opacity-75'>  
                <h1>Registro de Inversiones Tecno Turquino</h1>  

                <div className="container-sm color-primary">  
                    <div>  
                        <div className='btn btn-primary'>  
                            <a className="fs-6 text-light" href={Economiaq} target="_blank" rel="noopener noreferrer">   
                                Ver Registro  
                            </a>  
                        </div>  
                    </div>  

                    <div className="margin-top-bottom">  
                        <div className='btn btn-primary'>  
                            <a className="fs-6 text-light" href={Economiaq} target="_blank" rel="noopener noreferrer" download="Registro de Economia TecnoTurquino.pdf">   
                                Descargar Registro  
                            </a>  
                        </div>  
                    </div>  

                    {/* Calendario */}  
                    <div className="margin-top-bottom">  
                        <h2>Selecciona una Fecha:</h2>  
                        <Calendar  
                            // onChange={setDate}  
                            value={date}  
                            tileContent={({ date }) => {  
                                // Verifica si la fecha es una de las fechas de evento para Juan o Dargelis  
                                if (eventDatesJuan.some(eventDate => eventDate.toDateString() === date.toDateString())) {  
                                    return (<p className="text-danger">Lusme</p>);  
                                }  
                                if (eventDatesDargelis.some(eventDate => eventDate.toDateString() === date.toDateString())) {  
                                    return (<p className="text-primary">Darge <p>Margar</p></p>);  
                                }  
                                return null;  
                            }}  
                        />  
                    </div>  
                </div>  
            </div>  
        </>  
    );  
}
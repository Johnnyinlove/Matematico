import React, { useState, useEffect } from 'react';  
import { useNavigate } from "react-router-dom"; 
import { songsData  } from "./Songs"; 

const SongSearch: React.FC = () => {  
    const navigate = useNavigate();  

    const ReturnHome = () => {  
        navigate("/Matematico/Home");  
    }  

    const [query, setQuery] = useState('');  
    const [selectedSongs, setSelectedSongs] = useState<{ title: string; chords: string }[]>([]);  

    // Nuevos estados para el nombre, día de la semana y tipo de culto  
    const [userName, setUserName] = useState('');  
    const [dayOfWeek, setDayOfWeek] = useState('');  
    const [worshipType, setWorshipType] = useState('');  
    const [isInfoSaved, setIsInfoSaved] = useState(false); // Estado para gestionar la información guardada  


    // Ejemplo de recuperación de datos desde el local storage  
// const savedUserName = localStorage.getItem('userName');  
// const savedDayOfWeek = localStorage.getItem('dayOfWeek');  

// // Puedes establecer estos valores en los estados al inicializar el componente:  
// useEffect(() => {  
//     if (savedUserName) {  
//         setUserName(savedUserName);  
//     }  
//     if (savedDayOfWeek) {  
//         setDayOfWeek(savedDayOfWeek);  
//     }  
// }, []);
    
    // Filtrar las canciones que coinciden con la búsqueda del usuario y ordenarlas alfabéticamente  
    const filteredSongs = songsData  
        .filter(song => song.title.toLowerCase().includes(query.toLowerCase()))  
        .sort((a, b) => a.title.localeCompare(b.title));  

    // Manejar la selección de una canción  
    const handleSelectSong = (song: { title: string; chords: string }) => {  
        if (!selectedSongs.some(s => s.title === song.title)) {  
            // Si no está seleccionada, la añadimos  
            setSelectedSongs([...selectedSongs, song]);  
        }  
        setQuery(''); // Limpiar el cuadro de búsqueda  
    };  

    // Manejar la deselección de una canción  
    const handleDeselectSong = (song: { title: string; chords: string }) => {  
        setSelectedSongs(selectedSongs.filter(s => s.title !== song.title));  
    };  

    // Manejar la limpieza de las canciones seleccionadas  
    const handleClearSelectedSongs = () => {  
        setSelectedSongs([]);  
    };  

// Manejar el guardado de información del usuario  
const handleSaveInfo = () => {  
    if (userName && dayOfWeek && worshipType) {  
        // Guardar en local storage  
        // localStorage.setItem('userName', userName);  
        // localStorage.setItem('dayOfWeek', dayOfWeek);  
        // localStorage.setItem('worshipType', worshipType); // Si también quieres guardar esto  
        
        setIsInfoSaved(true);  
    }  
}; 

    return (  
        <div className="container mt-5">  
            <a onClick={ReturnHome} href="#" className="btn btn-primary">Inicio</a>  

            {isInfoSaved ? ( // Mostrar información guardada si está disponible  
                <div className="mb-4 container ">  
                    <div className="row">  
                        <div className="col-6 mx-auto text-center">  
                            <h4>Programa del Culto</h4>  
                            <h5>Levita: {userName}</h5>  
                            <h5>Día: {dayOfWeek}</h5>  
                            <h5>Culto: {worshipType}</h5>  
                        </div>  
                    </div>  
                </div>  
            ) : ( // Cuadro superpuesto para los datos del usuario  
                <div className="overlay rounded p-4 pt-5 bg-light" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 99 }}>  
                    <h3>Ingresar Información</h3>  
                    <input  
                        type="text"  
                        className="form-control mb-2"  
                        placeholder="Tu nombre"  
                        value={userName}  
                        onChange={(e) => setUserName(e.target.value)}  
                    />  
                    <input  
                        type="text"  
                        className="form-control mb-2"  
                        placeholder="Día de la semana"  
                        value={dayOfWeek}  
                        onChange={(e) => setDayOfWeek(e.target.value)}  
                    />  
                    <input  
                        type="text"  
                        className="form-control mb-2"  
                        placeholder="Tipo de culto"  
                        value={worshipType}  
                        onChange={(e) => setWorshipType(e.target.value)}  
                    />  
                    <button className=" btn-gradient" onClick={handleSaveInfo}>  
                        Guardar  
                    </button>  
                </div>  
            )}  

            <h2 className={`mt-5 ${isInfoSaved ? '' : 'd-none'}`}>Buscador de Canciones</h2>  

            {isInfoSaved && ( // Campo de búsqueda visible solo si se guarda la información  
                <div className="mb-3">  
                    <input  
                        type="text"  
                        className="form-control"  
                        placeholder="Buscar canción..."  
                        value={query}  
                        onChange={(e) => setQuery(e.target.value)}  
                    />  
                </div>  
            )}  

            {/* Mostrar sugerencias si hay texto en el campo de búsqueda y si la info está guardada */}  
            {isInfoSaved && (  
                <ul className="list-group mt-2">  
                    {filteredSongs.length > 0 ? (  
                        filteredSongs.map((song, index) => (  
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">  
                                <div>  
                                    <h5>{song.title}</h5>  
                                    <p>{song.chords}</p>  
                                </div>  
                                <button className="btn btn-primary" onClick={() => handleSelectSong(song)}>  
                                    Seleccionar  
                                </button>  
                            </li>  
                        ))  
                    ) : (  
                        <li className="list-group-item">No hay coincidencias</li>  
                    )}  
                </ul>  
            )}  

            <div className="mt-4">  
                <h3>Programa del {dayOfWeek}</h3>  
                <h4>Dirige {userName}</h4>  
                {selectedSongs.length === 0 ? (  
                    <p>No hay canciones seleccionadas.</p>  
                ) : (  
                    <>  
                        <ul className="list-group">  
                            {selectedSongs.map((song, index) => (  
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">  
                                    <div>  
                                        <h5>{song.title}</h5>  
                                        <p>{song.chords}</p>  
                                    </div>  
                                    <button className="btn btn-danger" onClick={() => handleDeselectSong(song)}>  
                                        Deseleccionar  
                                    </button>  
                                </li>  
                            ))}  
                        </ul>  
                        <button className="btn btn-danger mt-2" onClick={handleClearSelectedSongs}>  
                            Limpiar Selección  
                        </button>  
                    </>  
                )}  
            </div>  
        </div>  
    );  
};  

export default SongSearch;
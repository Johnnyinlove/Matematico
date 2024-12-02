import React, { useState } from 'react';   
import { useNavigate } from "react-router-dom";  

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

    // Definimos un objeto con canciones y sus acordes  
    const songsData = [  
        { title: 'Canción 1', chords: 'C, G, Am, F' },  
        { title: 'Canción 2', chords: 'D, A, Bm, G' },  
        { title: 'Canción 3', chords: 'E, B, C#m, A' },  
        { title: 'FIdelidad', chords: 'F, C, Dm, Bb' },  
        { title: 'Alaba a Dios', chords: 'G, Em, Am, D' },
        { title: 'Tu Fidelidad des Grande', chords: 'C, F, G, C, C7, Am, Dm, F, G, C' },  
    ];  

    // Filtrar las canciones que coinciden con la búsqueda del usuario y ordenarlas alfabéticamente  
    const filteredSongs = songsData  
        .filter(song => song.title.toLowerCase().includes(query.toLowerCase()))  
        .sort((a, b) => a.title.localeCompare(b.title));  

    // Manejar la selección de una canción  
    const handleSelectSong = (song: { title: string; chords: string }) => {  
        // Verificar si la canción ya está seleccionada  
        if (!selectedSongs.some((s) => s.title === song.title)) {  
            setSelectedSongs([...selectedSongs, song]);  
        }  
        setQuery(''); // Limpiar el cuadro de búsqueda  
    };  

    // Manejar la limpieza de las canciones seleccionadas  
    const handleClearSelectedSongs = () => {  
        setSelectedSongs([]);  
    };  

    // Manejar el guardado de información del usuario  
    const handleSaveInfo = () => {  
        if (userName && dayOfWeek && worshipType) {  
            setIsInfoSaved(true);  
        }  
    };  

    return (  
        <div className="container mt-5">   
            <a onClick={ReturnHome} href="#" className="btn btn-primary">Inicio</a>  

            {isInfoSaved ? ( // Mostrar información guardada si está disponible  
                <div className="mb-4 container ">   
    <div className="row">  
        <div className="col-6 mx-auto text-center"> {/* Añadir 'text-center' aquí */}  
            <h4>Información Guardada</h4>  
            <h5>Levista: {userName}</h5>  
            <h5>Día: {dayOfWeek}</h5>  
            <h5>Culto: {worshipType}</h5>  
        </div>  
    </div>  
</div>   
            ) : ( // Cuadro superpuesto para los datos del usuario  
                <div className="overlay rounded p-4 bg-light" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 99 }}>  
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
                    <button className="btn btn-primary" onClick={handleSaveInfo}>  
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
            { isInfoSaved && (  
                <ul className="list-group mt-2">  
                    {filteredSongs.length > 0 ? (  
                        filteredSongs.map((song, index) => (  
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">  
                                <div>  
                                    <h5>{song.title}</h5>  
                                    <p>{song.chords}</p>  
                                </div>  
                                <button className="btn btn-info" onClick={() => handleSelectSong(song)}>  
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
    <h3>Canciones Seleccionadas</h3>  
    {selectedSongs.length === 0 ? (  
        <p>No hay canciones seleccionadas.</p>  
    ) : (  
        <>  
            <ul className="list-group">  
                {selectedSongs.map((song, index) => (  // Eliminar sort() para mantener el orden original  
                    <li key={index} className="list-group-item">  
                        <h5>{song.title}</h5>  
                        <p>{song.chords}</p>  
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
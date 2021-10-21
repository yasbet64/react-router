import { useHistory ,useLocation} from "react-router-dom";

const Productos = () => {
    let {search} =useLocation();
    let query = new URLSearchParams(search);

    {/* para capturas las variables del navegador */}
    const LIMIT =20
    let start = parseInt(query.get("inicio")) || 1;
    let end = parseInt(query.get("fin")) || LIMIT;

    {/* creando la funcionalidad de los botones */}
    let history=useHistory();
    
    const handlePrev = (e) => {
        history.push({ search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}` });
    };
    
    const handleNext = (e) => {
        history.push({ search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}` });
    };

    return ( 
        
        <div>
            <h2>Productos</h2>
            <p>Mostrando productos del <b>{start}</b> al <b>{end}</b> </p>
            {start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
            <button onClick={handleNext}>Adelante</button>
        </div>
     );
};
 
export default Productos;
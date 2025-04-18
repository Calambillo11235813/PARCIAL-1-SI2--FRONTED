import Category from '../components/category'
import "../styles/Home.css"
import { useNavigate } from "react-router-dom";
import userIcon from "../assets/user.svg";


/**
 * Página principal Home
 * 
 * Esta vista actúa como la pantalla de inicio del ecommerce.
 * Contiene las categorías de productos y otros posibles componentes.
 */

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <h1 className="title">Digital Dynamo</h1>
      
      {/* Botón que redirige al AdminDashboard */}
      <button
        className="admin-button"
        onClick={() => navigate("/admin")}
      >
        <img src={userIcon} alt="User Icon" className="icon" />
      </button>

      {/* Componente que muestra las categorías */}
      <Category />
    </div>
  )
}

export default Home

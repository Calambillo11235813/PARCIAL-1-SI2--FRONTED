import Category from '../components/category'

/**
 * Página principal Home
 * 
 * Esta vista actúa como la pantalla de inicio del ecommerce.
 * Contiene las categorías de productos y otros posibles componentes.
 */

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Digital Dynamo</h1>
      
      {/* Componente que muestra las categorías */}
      <Category />
    </div>
  )
}

export default Home

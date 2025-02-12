import { useParams } from 'react-router-dom'
interface ParamProps {    
    title?: string; 
    description?: string; 
}
const Param: React.FC<ParamProps> = () => {  // Use React.FC and type the component
    const { id } = useParams(); // Correct placement: inside the component function
  
    return ( // Return the JSX
      <div className="Param">
        <h1>Param {id}</h1> {/* Display the id */}
        <h2>Param {id}</h2>
      </div>
    );
  };

export default Param;
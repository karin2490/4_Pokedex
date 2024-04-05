// Importa los tipos necesarios
import { Pokemon } from "models";
import "../components/equipoPokemon.css";

// Define la interfaz para las props de EquipoPokemon
interface EquipoPokemonProps {
  team: Pokemon[];
  addToTeam: () => void;
  removeFromTeam: (index: number) => void;
}

// Define el componente EquipoPokemon
const EquipoPokemon: React.FC<EquipoPokemonProps> = ({ team, removeFromTeam }) => {
   
    return (
    <div className="team">
      {team.map((pokemon, index) => (
        <div key={index} className="team-member">
          <button className="plusMinus" onClick={() => removeFromTeam(index)}>
            -
          </button>
          <span>{pokemon.name}</span>
        </div>
      ))}
    </div>
  );
};

// Exporta el componente EquipoPokemon
export default EquipoPokemon;


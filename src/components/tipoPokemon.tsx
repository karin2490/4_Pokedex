import {debilidades} from "../utils/debilidades";
import "./tipoPokemon.css";

interface Pokemon{
        name: string;
        types: { type: { name: string } }[];        
}

type Props = {
        selectedPokemon: Pokemon | null;
    };

function TipoPokemon({ selectedPokemon }: Props) {    

    const selectedPokemonTypes: string[] =
        selectedPokemon?.types.map((type) => type.type.name) || [];

    const debilidadList = (type: string): string[] => {
        return debilidades[type]?.weaknesses || [];
    };

        return (
            <div>
                <div className="tipos">
                    <h2>Tipo</h2>
                    <div>
                        <ul>
                            {selectedPokemonTypes.map((type,index) => (
                                <li key={index}>{type}</li>
                            ))}
                        </ul>
                    </div>                   
                </div>
                <div className="debilidades">
                    <h2>Debilidades</h2>
                    <ul>
                        {selectedPokemonTypes.map((type) => (
                             <>
                                {debilidadList(type).map((weakness, index) => (
                                    <li className="items" key={index}>
                                        {weakness}
                                    </li>
                                ))}
                            </>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    export default TipoPokemon;

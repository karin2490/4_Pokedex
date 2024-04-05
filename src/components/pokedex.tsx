import c from "classnames";
import { useTheme } from "contexts/use-theme";
import { usePokemon, usePokemonList, useTextTransition } from "hooks";
import { useState } from "react";
import { randomMode } from "utils/random";
import { Button } from "./button";
import { LedDisplay } from "./led-display";

import "./pokedex.css";
import { Pokemon } from "models";
import TipoPokemon from "./tipoPokemon";
import EquipoPokemon from "./equipoPokemon";

export function Pokedex() {
  const { theme } = useTheme();
  const { ready, resetTransition } = useTextTransition();
  const { pokemonList } = usePokemonList();
  const [i, setI] = useState(0);
  const { pokemon: selectedPokemon } = usePokemon(pokemonList[i]);
  const { pokemon: nextPokemon } = usePokemon(pokemonList[i + 1]);
  const [team, setTeam] = useState<Pokemon[]>([]);

  const addToTeam = () => {
    if (selectedPokemon && team.length < 6) {
      // Verificar si el Pokemon seleccionado ya está en el equipo
      const isDuplicate = team.some(pokemon => pokemon.id === selectedPokemon.id);
  
      if (!isDuplicate) {
        setTeam([...team, selectedPokemon]);
      } else {
        alert("Este Pokémon ya está en tu equipo.");
      }
    } else {
      alert(
        "Has llegado al límite. Elimina un Pokémon para añadir uno nuevo a tu equipo."
      );
    }
  };
  

  const removeFromTeam = (index: number) => {
    const updatedTeam = [...team];
    updatedTeam.splice(index, 1);
    setTeam(updatedTeam);
  };

  const prev = () => {
    resetTransition();
    if (i === 0) {
      setI(pokemonList.length - 1);
    }
    setI((i) => i - 1);
  };

  const next = () => {
    resetTransition();
    if (i === pokemonList.length - 1) {
      setI(0);
    }
    setI((i) => i + 1);
  };

  return (
    <div className={c("pokedex", `pokedex-${theme}`)}>
      <div className="panel left-panel">
        <div className="screen main-screen">
          {selectedPokemon && (
            <img
              className={c(
                "sprite",
                "obfuscated",
                ready && "ready",
                ready && `ready--${randomMode()}`
              )}
              src={selectedPokemon.sprites.front_default}
              alt={selectedPokemon.name}
            />
          )}
        </div>
        <div className="screen name-display">
          <div
            className={c(
              "name",
              "obfuscated",
              ready && "ready",
              ready && `ready--${randomMode()}`
            )}
          >
            {selectedPokemon?.name}           
          </div>         
        </div>        
        <div>
         {selectedPokemon && <TipoPokemon selectedPokemon={selectedPokemon} />}
        </div>        
      </div>
      <div className="panel right-panel">
        <div className="controls leds">
          <LedDisplay color="blue" />
          <LedDisplay color="red" />
          <LedDisplay color="yellow" />
        </div>
        <div className="screen second-screen">
          {nextPokemon && (
            <img
              className={c(
                "sprite",
                "obfuscated",
                ready && "ready",
                ready && `ready--${randomMode()}`
              )}
              src={nextPokemon.sprites.front_default}
              alt={nextPokemon.name}
            />
          )}
        </div>
        <div className="controls">
          <Button label="prev" onClick={prev} />
          <Button label="next" onClick={next} />
        </div>
        <div>
        <h4>Agregar a equipo
            <button className="addToTeam plusMinus" onClick={addToTeam}> +</button>
            </h4>
          </div>
        <div className="equipo">
          <h2>Creando mi equipo</h2>
          <EquipoPokemon
            team={team}
            addToTeam={addToTeam}
            removeFromTeam={removeFromTeam}
          />
        </div>
      </div>
    </div>
  );
}

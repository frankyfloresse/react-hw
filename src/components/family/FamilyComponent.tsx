import CharacterComponent from "../character/CharacterComponent.tsx";
import {simpsons} from "../../data/charactersList.ts";

const FamilyComponent = () => {
    return (
        <div className="bg-blue-500 space-y-5 py-5">
            {simpsons.map((character, index) => (
                <CharacterComponent key={index} character={character}>
                    <p className="text-center italic text-balance">{character.info}</p>
                </CharacterComponent>
            ))}
        </div>

    )
};

export default FamilyComponent;
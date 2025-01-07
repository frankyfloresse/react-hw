import {FC, ReactNode} from "react";
import {ICharacter} from "../../models/ICharacter.ts";

interface IProps {
    character: ICharacter;
    children?: ReactNode;
}

const CharacterComponent: FC<IProps> = ({ character, children }) => {
    return (
        <div className="flex flex-col items-center mx-auto w-1/2 gap-2 bg-white/10 rounded-2xl p-5">
            <div className="text-xl font-bold">{character.name} {character.surname}</div>
            <div className="text-white font-bold">Age: {character.age}</div>
            <img className="w-[200px]" src={character.photo} alt={character.name} />
            <div>{children}</div>
        </div>
    );
};

export default CharacterComponent;
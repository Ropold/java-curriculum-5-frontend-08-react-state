import type { Character } from "../types/RickAndMortyCharacter.ts";
import { ChangeEvent, FormEvent, useState } from "react";

type NewCharacter = Pick<Character, "name" | "status">;

export default function NewCharacter() {

    const [newCharacter, setNewCharacter] = useState<NewCharacter>({ name: "", status: "" });


    function onNewCharacterChange(event: ChangeEvent<HTMLInputElement>) {
        setNewCharacter({ ...newCharacter, [event.target.name]: event.target.value });
    }

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("Neuer Charakter:", newCharacter);
        console.log("Name:", newCharacter.name);
        console.log("Status:", newCharacter.status);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={newCharacter.name} onChange={onNewCharacterChange} />
            </label>
            <label>
                Status:
                <input type="text" name="status" value={newCharacter.status} onChange={onNewCharacterChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

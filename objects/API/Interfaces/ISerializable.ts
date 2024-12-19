import { JSONValue } from "../Types";

/**
 * 
 **/
export interface ISerializable {
    /**
     * 
     **/
    toJSON(): JSONValue;
    /**
     * 
     * @param input 
     **/
    fromJSON(input: JSONValue): void;
}
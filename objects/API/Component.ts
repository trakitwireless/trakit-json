import { int, JSONValue } from './Types';

/**
 * Any derived class can/should be serialized and given to a user.
 **/
export abstract class Component {
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 **/
	public v: int[] = [-1];
}
import { double } from '../Types';

/// <summary>
/// A boundary on the globe
/// </summary>
export class LatLngBounds {
	/// <summary>
	/// Northern latitude
	/// </summary>
	public north: double;
	/// <summary>
	/// Eastern longitude
	/// </summary>
	public east: double;
	/// <summary>
	/// Southern latitude
	/// </summary>
	public south: double;
	/// <summary>
	/// Western longitude
	/// </summary>
	public west: double;
}
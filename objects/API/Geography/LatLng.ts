import { double } from '../Types';

/// <summary>
/// A coordinate on the globe
/// </summary>
export class LatLng {
	/// <summary>
	/// Latitude
	/// </summary>
	public readonly lat: double;
	/// <summary>
	/// Longitude
	/// </summary>
	public readonly lng: double;

	constructor(lat: double, lng: double) {
		this.lat = lat;
		this.lng = lng;
	}
}
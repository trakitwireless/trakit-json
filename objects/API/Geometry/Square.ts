import { double } from '../Types';

/// <summary>
/// A boundary on a flat surface
/// </summary>
export class Square {
	/// <summary>
	/// Highest vertical coordinate
	/// </summary>
	public top: double;
	/// <summary>
	/// Right-most horizontal coordinate
	/// </summary>
	public right: double;
	/// <summary>
	/// Lowest vertical coordinate
	/// </summary>
	public bottom: double;
	/// <summary>
	/// Left-most horizontal coordinate
	/// </summary>
	public left: double;
	/// <summary>
	/// Width
	/// </summary>
	public get width(): double { return this.right - this.left; }
	/// <summary>
	/// Height
	/// </summary>
	public get height(): double { return this.bottom - this.top; }
}
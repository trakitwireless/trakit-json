﻿
	/// <summary>
	/// A base class for Dashcam meta-data.
	/// </summary>
	export abstract class DashcamBase implements IRequestable implements IFileSize {
		/// <summary>
		/// Number bytes in the dashcam media file.
		/// </summary>
		public bytes: ulong;
		/// <summary>
		/// Resolution defined in pixels.
		/// </summary>
		public size: Size;
		/// <summary>
		/// Unique identifier of the provider that sent the data.
		/// </summary>
		/// <seealso cref="Provider.id" />
		public provider: string;
		/// <summary>
		/// Unique identifier of the company of the provider.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong;
		/// <summary>
		/// Unique identifier of the asset tied to the provider at the time.
		/// </summary>
		/// <seealso cref="Asset.id" />
		public asset?: ulong;
		/// <summary>
		/// Number assigned to the camera that took the image/video.
		/// </summary>
		public camera: byte;
		/// <summary>
		/// Latitude of the start of the resource.
		/// </summary>
		public latitude: double;
		/// <summary>
		/// Longitude of the start of the resource.
		/// </summary>
		public longitude: double;
		/// <summary>
		/// Speed of the start of the resource.
		/// </summary>
		public speed: double;
		/// <summary>
		/// Heading of the start of the resource.
		/// </summary>
		public heading: double;
		/// <summary>
		/// Altitude of the start of the resource.
		/// </summary>
		public altitude: double;

		// IRequestable
		/// <summary>
		/// For dashcams, this is either a unique identifier, or a combination of the <see cref="asset"/>, <see cref="provider"/>, and <see cref="camera"/> values.
		/// </summary>
		/// <returns>A string unique for this type of object.</returns>
		public abstract string GetKey();
	}
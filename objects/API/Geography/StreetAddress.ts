
	/// <summary>
	/// A road segment description
	/// </summary>
	export class StreetAddress {
		/// <summary>
		/// House number.
		/// </summary>
		public number: string;
		/// <summary>
		/// Full street name.
		/// </summary>
		public street: string;
		/// <summary>
		/// City name.
		/// </summary>
		public city: string;
		/// <summary>
		/// Region name.
		/// </summary>
		public region: string;
		/// <summary>
		/// Province or state code.
		/// Codes should be a value from ISO 3166-2.
		/// </summary>
		/// <override length="2" />
		public province: string;
		/// <summary>
		/// Country code.
		/// Codes should be a value from ISO 3166-1 alpha-2.
		/// </summary>
		/// <override length="2" />
		public country: string;
		/// <summary>
		/// Postal or zip code.
		/// </summary>
		public postal: string;
		/// <summary>
		/// Indicates that there is a toll for the current road segment.
		/// </summary>
		public isToll: boolean;
	}
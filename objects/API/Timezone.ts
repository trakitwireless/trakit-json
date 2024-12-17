
	/// <summary>
	/// Timezone definition
	/// </summary>
	export class Timezone implements IRequestable {
		/// <summary>
		/// Unique timezone code
		/// </summary>
		public code: string;
		/// <summary>
		/// Common timezone name
		/// </summary>
		/// <override readonly="true" />
		public name: string;
		/// <summary>
		/// Minutes offset from GMT
		/// </summary>
		/// <override readonly="true" />
		public offset: short;
		/// <summary>
		/// Indicates whether this timezone abides by daylight savings
		/// </summary>
		/// <override readonly="true" />
		public dst: boolean;

		/// <summary>
		/// The <see cref="code"/> is the key.
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.code;
	}
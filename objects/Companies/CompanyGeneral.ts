

	/// <summary>
	/// General details about a company.
	/// </summary>
	export class CompanyGeneral extends Component implements IIdUlong, INamed, IAmCompany, IDeletable {
		/// <summary>
		/// Unique identifier of the Company.
		/// </summary>
		/// <seealso cref="Company.id" />
		public id: ulong;
		/// <summary>
		/// The unique identifier of this company's parent organization.
		/// </summary>
		/// <seealso cref="Company.id" />
		public parent: ulong;
		/// <summary>
		/// The organizational name.
		/// </summary>
		/// <override max-length="100" />
		public name: string;
		/// <summary>
		/// Notes.
		/// </summary>
		public notes: string;
		/// <summary>
		/// Name/value collections of custom fields used to refer to external systems.
		/// </summary>
		/// <override max-count="10">
		/// <keys max-length="20" />
		/// <values max-length="100" />
		/// </override>
		public references: Map<string, string>;

		// IRequestable
		/// <summary>
		/// The <see cref="id"/> is the key.
		/// </summary>
		/// <returns></returns>
		public override string GetKey() => this.id.toString();

		// IDeletable
		/// <summary>
		/// Indicates whether this object was deleted.
		/// </summary>
		public deleted?: boolean;
		/// <summary>
		/// Timestamp from the action that deleted or suspended this object.
		/// </summary>
		public since?: Date;
	}
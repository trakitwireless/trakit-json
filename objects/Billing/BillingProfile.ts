

	/// <summary>
	/// A profile used to generate billable orders for a customer.
	/// </summary>
	export class BillingProfile extends Component implements IIdUlong, INamed, IBelongCompany, IDeletable {
		/// <summary>
		/// Unique identifier of this billing profile
		/// </summary>
		public id: ulong;
		/// <summary>
		/// Unique identifier of the Company that owns this profile and is sending the bill.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong;
		/// <summary>
		/// Unique identifier of the Company to which this rule pertains.
		/// </summary>
		/// <seealso cref="Company.id" />
		public target: ulong;
		/// <summary>
		/// Unique identifier of the Company receiving the bill.
		/// Most of the time, this value is the same as the target.
		/// </summary>
		/// <seealso cref="Company.id" />
		public billee: ulong;
		/// <summary>
		/// The name for this profile
		/// </summary>
		/// <override max-length="254" />
		public name: string;
		/// <summary>
		/// Notes about the billing profile for the billee or target.
		/// </summary>
		/// <override max-length="1000" />
		public notes: string;
		/// <summary>
		/// SMS messaging tiers
		/// </summary>
		public messages: BillableSmsProfile[];
		/// <summary>
		/// Repeating cycle used for generating bills
		/// </summary>
		public cycle: BillingCycle;
		/// <summary>
		/// When is the first day of the billing cycle
		/// </summary>
		public cycleStart: Date;
		/// <summary>
		/// When should the cycle end (customer cancelled)
		/// </summary>
		public cycleEnd?: Date;
		/// <summary>
		/// Pro-rated, or post-dated.
		/// </summary>
		public cyclePostDated: boolean;
		/// <summary>
		/// kind of money
		/// </summary>
		public currency: BillingCurrency;
		/// <summary>
		/// Are the Google services available to be proxied by the service?
		/// </summary>
		public googleServicesEnabled: boolean;

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
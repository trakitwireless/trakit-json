

	/// <summary>
	/// Device/hardware information and configuration.
	/// </summary>
	export class ProviderGeneral extends Component implements INamed, IBelongCompany, ISuspendable, IDeletable {
		/// <summary>
		/// Unique identifier of this device.
		/// </summary>
		/// <seealso cref="Provider.id" />
		/// <override min-length="10" max-length="50" />
		public id: string;
		/// <summary>
		/// The company to which this device belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong;
		/// <summary>
		/// A nickname given to the device/hardware.
		/// </summary>
		/// <override max-length="100" />
		public name: string;
		/// <summary>
		/// Notes!
		/// </summary>
		public notes: string;
		/// <summary>
		/// The kind of communication protocol this device uses.
		/// </summary>
		public kind: ProviderType;
		/// <summary>
		/// The asset for which this device provides field data.
		/// </summary>
		/// <seealso cref="Asset.id" />
		public asset?: ulong;
		/// <summary>
		/// The provider's current (or pending) configuration profile.
		/// </summary>
		/// <seealso cref="ProviderConfig.id" />
		/// <seealso cref="ProviderConfiguration.id" />
		public configuration: ulong;

		/// <summary>
		/// The password programmed on the device used to ensure the system is the only client authorized to make changes.
		/// </summary>
		/// <override max-length="50" />
		public password: string;
		/// <summary>
		/// The firmware/application version number.
		/// </summary>
		/// <override max-length="100" />
		public firmware: string;
		/// <summary>
		/// The phone number of this device.
		/// </summary>
		/// <override format="phone" />
		public phoneNumber?: ulong;
		/// <summary>
		/// A list of read-only values about the device like IMEI, ESN, firmware version, hardware revision, etc...
		/// </summary>
		public information: Map<string, string>;
		/// <summary>
		/// ICCID of the SIM card installed in this provider
		/// </summary>
		public sim: string;

		// IRequestable
		/// <summary>
		/// The <see cref="id"/> is the key.
		/// </summary>
		/// <returns></returns>
		public override string GetKey() => this.id.toString();

		// ISuspendable and IDeletable
		/// <summary>
		/// Indicates whether this object was deleted.
		/// </summary>
		public deleted?: boolean;
		/// <summary>
		/// Indicates whether this object is suspended from event processing.
		/// </summary>
		public suspended?: boolean;
		/// <summary>
		/// Timestamp from the action that deleted or suspended this object.
		/// </summary>
		public since?: Date;
	}
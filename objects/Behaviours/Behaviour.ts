

	/// <summary>
	/// The applied behaviour which includes all parameters and targets specific assets.
	/// </summary>
	export class Behaviour extends Component implements IIdUlong, INamed, IBelongCompany, IDeletable {
		/// <summary>
		/// Unique identifier of this behaviour.
		/// </summary>
		public id: ulong;
		/// <summary>
		/// The company to which this behaviour belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong;
		/// <summary>
		/// The script which this behaviour implements.
		/// </summary>
		/// <seealso cref="BehaviourScript.id" />
		public script: ulong;
		/// <summary>
		/// The name of this behaviour.
		/// </summary>
		/// <override max-length="100" />
		public name: string;
		/// <summary>
		/// Notes.
		/// </summary>
		public notes: string;
		/// <summary>
		/// The priority flag allows you to define an execution order for all behaviours for a provider.
		/// </summary>
		public priority: byte;
		/// <summary>
		/// The search pattern used to target the assets which will embed this behaviour in their execution context.
		/// </summary>
		/// <override type="System.String" format="expression" />
		public targets: string;
		/// <summary>
		/// A search pattern used to filter the providers which can implement this behaviour.
		/// </summary>
		/// <override type="System.String" format="expression" />
		public filters: string;
		/// <summary>
		/// The list of defined variable name/value pairs for the script requires.
		/// </summary>
		public parameters: Map<string, BehaviourParameter>;

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
﻿
	/// <summary>
	/// For delete/restore commands, this contains the <see cref="Machine.key"/>, version keys, owning <see cref="Company.id"/>, and deleted state.
	/// </summary>
	export class RespKeyDeleted extends RespKeyCompany {
		/// <summary>
		/// Flag showing if the object is deleted.
		/// </summary>
		public deleted: boolean;
		/// <summary>
		/// Object version keys used to validate synchronization for all object properties.
		/// </summary>
		public v: uint[];
	}
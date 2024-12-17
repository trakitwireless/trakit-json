﻿

	/// <summary>
	/// Gets details of the specified <see cref="Provider"/>.
	/// </summary>
	export class ReqProviderGet extends ReqProvider implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="Provider"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean;
	}
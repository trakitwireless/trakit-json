﻿
	/// <summary>
	/// A container for the <see cref="formResult"/>.
	/// </summary>
	export class RespFormResultMerge extends Response {
		/// <summary>
		/// An object which contains the <c>id</c> and <c>company</c> keys when there is no error.
		/// </summary>
		public formResult: RespIdCompany;
	}
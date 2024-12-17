﻿


	/// <summary>
	/// Gets details of the specified <see cref="formTemplate"/>.
	/// </summary>
	export abstract class ReqFormTemplateList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="FormTemplate"/>s.
		/// </summary>
		public includeDeleted: boolean;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqFormTemplateListByCompany extends ReqFormTemplateList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
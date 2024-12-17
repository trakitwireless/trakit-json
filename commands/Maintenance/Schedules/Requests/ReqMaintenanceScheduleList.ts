﻿

	/// <summary>
	/// Gets details of the specified <see cref="maintenanceSchedule"/>.
	/// </summary>
	export abstract class ReqMaintenanceScheduleList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="MaintenanceSchedule"/>s.
		/// </summary>
		public includeDeleted: boolean;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqMaintenanceScheduleListByCompany extends ReqMaintenanceScheduleList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
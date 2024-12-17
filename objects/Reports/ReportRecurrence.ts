

	/// <summary>
	/// Determines when and how often a report schedule runs automatically.
	/// </summary>
	export class ReportRecurrence {
		/// <summary>
		/// How often the report is automatically run.  Daily, weekly, monthly, etc...
		/// </summary>
		public kind: ReportRecurrenceType;
		/// <summary>
		/// Used only for daily schedules, this 7 item, booleanean array, determines if the schedule should recur on that day of the week.
		/// </summary>
		/// <override count="7" />
		public weekdays: boolean[];
		/// <summary>
		/// Used only for weekly schedules, it's a number between 0 and 6 representing the day of the week, with Sunday being the first day of the week.
		/// </summary>
		public weekday?: byte;
		/// <summary>
		/// The local timezone used to calculate recurring date/time ranges.
		/// </summary>
		/// <seealso cref="Timezone.code" />
		[Obsolete("Use owner.timezone instead")]
		public timezone: Timezone;
		/// <summary>
		/// When the schedule is to begin recurring in local-time (not UTC).
		/// </summary>
		public start: Date;
		/// <summary>
		/// The optional time when the schedule stops recurring in local-time (not UTC).
		/// </summary>
		public end?: Date;

		// keeping track of progress
		/// <summary>
		/// The number of times this schedule has been invoked to generate results.
		/// </summary>
		/// <override readonly="true" />
		public iterations: ushort;
		/// <summary>
		/// The unique identifier of the last ReportResult generated by this schedule.
		/// </summary>
		/// <override readonly="true" />
		public lastResult?: ulong;
		/// <summary>
		/// This date/time is used as the startDate ReportParameter for the next iteration of this recurring report.
		/// This value is null when the schedule is calculated to stop recurring.
		/// </summary>
		/// <override readonly="true" />
		public nextStartDate?: Date;
		/// <summary>
		/// This date/time is used as the endDate ReportParameter for the next iteration of this recurring report.
		/// This value is null when the schedule is calculated to stop recurring.
		/// </summary>
		/// <override readonly="true" />
		public nextEndDate?: Date;
		/// <summary>
		/// The date/time stamp from the last result used to inform the nextStartDate and nextEndDate properties.
		/// This value is null when the schedule has not yet run once.
		/// </summary>
		/// <override readonly="true" />
		public lastStartDate?: Date;
		/// <summary>
		/// The date/time stamp from the last result used to inform the nextStartDate and nextEndDate properties.
		/// This value is null when the schedule has not yet run once.
		/// </summary>
		/// <override readonly="true" />
		public lastEndDate?: Date;
	}
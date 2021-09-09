import {Days, MonthWeeks, Months, CronFlavor} from './enums';

export interface CronEditorLables {
  minutesTab?: string;
  hourlyTab?: string;
  dailyTab?: string;
  weeklyTab?: string;
  monthlyTab?: string;
  yearlyTab?: string;
  advancedTab?: string;

  every?: string;

  // minutes tab
  minutes?: string;
  onSecond?: string;

  // hourly tab
  hoursOnMinute?: string;
  andSecond?: string;

  // daily tab
  daysAt?: string;
  everyWorkingDayAt?: string;

  // weekly tab
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
  at?: string;

  // monthly tab
  OnThe?: string;
  nthDay?: string;
  ofEvery?: string;
  monthsAt?: string;
  firstWeekday?: string;
  lastDay?: string;
  lastWeekday?: string;
  monthWeeks?: typeof MonthWeeks;
  
  // yearly
  onThe?: string;
  of?: string;
  days?: typeof Days;
  months?: typeof Months;

  // advanced
  advanced?: string;
  cronExpression?: string;
}

export interface CronOptions {
  formInputClass: string;
  formSelectClass: string;
  formRadioClass: string;
  formCheckboxClass: string;

  defaultTime: string,

  hideMinutesTab: boolean;
  hideHourlyTab: boolean;
  hideDailyTab: boolean;
  hideWeeklyTab: boolean;
  hideMonthlyTab: boolean;
  hideYearlyTab: boolean;
  hideAdvancedTab: boolean;
  hideSpecificWeekDayTab: boolean;
  hideSpecificMonthWeekTab: boolean;

  use24HourTime: boolean;
  hideSeconds: boolean;

  cronFlavor: CronFlavor;

  customLables?: CronEditorLables;
}

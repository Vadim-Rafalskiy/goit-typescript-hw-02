/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday ",
  sunday = "sunday",
}

function isWeekeng(day: string): boolean {
  if (day === Week.tuesday || Week.wednesday) {
    return true;
  }
  return false;
}

export function buildQueryString(struct: Record<string, any>): string {
  let urlSearchParams = new URLSearchParams();
  
  // Filter out undefined properties, add to search params if defined
  struct.getOwnPropertyNames().forEach((propName: any) => {
    if (struct[propName] !== undefined) {
      // TODO: Force string coercion?
      urlSearchParams.append(propName, struct[propName]);
    }
  });
  
  return urlSearchParams.toString();
}

/**
 * @returns Timecode string with the format HH:MM:SS.xxx,
 *          truncates hours portion if hours is zero
 */
export function buildTimeString(timeInSeconds: number): string {
  if (timeInSeconds <= 0) {
    return "00:00.000";
  }

  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds % 3600) / 60);
  let seconds = Math.floor(timeInSeconds % 60);
  let milliseconds = (timeInSeconds - Math.floor(timeInSeconds)).toFixed(3);

  let timeString = "";

  if (hours > 0) {
    timeString += hours.toString() + ":";
  }
  
  if (minutes > 9) {
    timeString += minutes.toString() + ":";
  }
  else {
    timeString += "0" + minutes.toString() + ":";
  }

  if (seconds > 9) {
    timeString += seconds.toString();
  }
  else {
    timeString += "0" + minutes.toString();
  }

  timeString += milliseconds.substring(1);
  return timeString;
}

import _ from 'lodash';

export const formatPathMovieTitle = (title: string) => _.kebabCase(title);

export const formatToDecimal = (number: number, decimalPoints: number = 1) => {
  return number.toFixed(decimalPoints);
};

export const formatLargeNumber = (number: number) => {
  if (number >= 1e6) {
    return formatToDecimal(number / 1e6) + 'm';
  } else if (number >= 1e3) {
    return formatToDecimal(number / 1e3, 0) + 'k';
  }
  return number.toString();
};

export const convertMintesToHoursAndMinutes = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
};

export const createNewYearDateString = (year: number) => `${year}-01-01`;
export const createOldYearDateString = (year: number) => `${year}-12-31`;

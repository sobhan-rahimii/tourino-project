import dayjs from "dayjs";
import jalaliday from "jalaliday";
import "dayjs/locale/fa";


export const flattenObject = (obj, delimiter = ".", prefix = "") => {
  return Object.keys(obj ?? {}).reduce((acc, k) => {
    const pre = prefix ? `${prefix}${delimiter}` : "";
    const value = obj[k];

    // اگر Date بود، تبدیل به string
    if (value instanceof Date) {
      acc[`${pre}${k}`] = value.toISOString();
      return acc;
    }

    if (
      typeof value === "object" &&
      value !== null &&
      Object.keys(value).length > 0
    ) {
      Object.assign(acc, flattenObject(value, delimiter, `${pre}${k}`));
    } else {
      acc[`${pre}${k}`] = value;
    }

    return acc;
  }, {});
};



dayjs.extend(jalaliday);
dayjs.locale("fa");

export const formatJalaliDate = (dateString) => {
  if (!dateString) return "";
  return dayjs(dateString).calendar("jalali").format("D MMMM YYYY");
};

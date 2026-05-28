export const convertToPersianDate = (isoString) => {
  if (!isoString) return "";

  const date = new Date(isoString);

 
  const dateFormatter = new Intl.DateTimeFormat('fa-IR', {
    calendar: 'persian',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const timeFormatter = new Intl.DateTimeFormat('fa-IR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false 
  });

  
  const toEnglishDigits = (str) => {
    return str.replace(/[۰-۹]/g, (w) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(w));
  };

  const formattedDate = toEnglishDigits(dateFormatter.format(date));
  const formattedTime = toEnglishDigits(timeFormatter.format(date));

  return `  ${formattedTime} - ${formattedDate}`;
};
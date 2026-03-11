type DateFormat = 'dot' | 'slash' | 'dash' | 'jp' | 'ym' | 'y' | 'md' | 'time24' | 'time12' | 'hm24' | 'hm12' | 'iso';

export const formatDate = (date: string, format: DateFormat = 'dot'): string => {
  const dateObject = new Date(date);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const day = String(dateObject.getDate()).padStart(2, '0');
  const hours = String(dateObject.getHours()).padStart(2, '0');
  const minutes = String(dateObject.getMinutes()).padStart(2, '0');
  const seconds = String(dateObject.getSeconds()).padStart(2, '0');
  const hours12 = dateObject.getHours() % 12 || 12;
  const ampm = dateObject.getHours() >= 12 ? 'PM' : 'AM';

  switch (format) {
    case 'dot': {
      return `${year}.${month}.${day}`;
    }
    case 'slash': {
      return `${year}/${month}/${day}`;
    }
    case 'dash': {
      return `${year}-${month}-${day}`;
    }
    case 'jp': {
      return `${year}年${month}月${day}日`;
    }
    case 'ym': {
      return `${year}/${month}`;
    }
    case 'y': {
      return `${year}`;
    }
    case 'md': {
      return `${month}/${day}`;
    }
    case 'time24': {
      return `${hours}:${minutes}:${seconds}`;
    }
    case 'time12': {
      return `${hours12}:${minutes}:${seconds} ${ampm}`;
    }
    case 'hm24': {
      return `${hours}:${minutes}`;
    }
    case 'hm12': {
      return `${hours12}:${minutes} ${ampm}`;
    }
    case 'iso': {
      return dateObject.toISOString();
    }
    default: {
      return `${year}.${month}.${day}`;
    }
  }
};

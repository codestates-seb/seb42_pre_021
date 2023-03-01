export const getTime = date => {
  const dataDate = new Date(date);
  const now = new Date();

  const diff = (now - dataDate) / 1000;

  const formatter = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
    style: 'short',
  });

  const times = [
    { name: 'year', milliSeconds: 60 * 60 * 24 * 365 },
    { name: 'month', milliSeconds: 60 * 60 * 24 * 30 },
    { name: 'day', milliSeconds: 60 * 60 * 24 },
    { name: 'hour', milliSeconds: 60 * 60 },
    { name: 'minute', milliSeconds: 60 },
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      return formatter.format(-betweenTime, value.name);
    }
  }
  return formatter.format(Math.floor(-diff), 'second');
};

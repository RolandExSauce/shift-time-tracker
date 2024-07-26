export const currentDate = () => {
  let today: Date | string = '';
  today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const y = today.getFullYear();
  if (dd < 10) {
    dd = parseInt('0') + dd;
  }
  if (mm < 10) {
    mm = parseInt('0') + mm;
  }
  today = String(mm) + '-' + String(dd) + '-' + String(y);
  return today;
};

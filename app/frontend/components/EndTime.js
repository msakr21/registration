function EndTime(time) {
  let endHour = parseInt(time.slice(0,2)) + 3;
  const meridiemSwitch = {
    "P": "A",
    "A": "P"
  };
  if(endHour > 15) {
    endHour -= 12;
    return `0${endHour}${time.slice(-6)}`;
  } else if(endHour > 12 && endHour <= 15) {
    endHour -= 12;
    return (('0'+`${endHour}`).slice(-2)+`${time.slice(2,6)}`+`${meridiemSwitch[time[6]]}M`);
  } else if(endHour === 12) {
    return (('0'+`${endHour}`).slice(-2)+`${time.slice(2,6)}`+`${meridiemSwitch[time[6]]}M`);
  } else { 
    return `${('0'+ (parseInt(time.slice(0,2))+3)).slice(-2)}${time.slice(-6)}`;
  };
};

export default EndTime;
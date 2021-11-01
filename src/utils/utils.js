import moment from "moment";

export function setSession(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

function getSession(key) {
  const itemStr = sessionStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  return item;
}

export function checkItemFromSessionStorage(key) {
  const item = getSession(key);
  if (item) {
    return item;
  }

  return null;
}

export function getCurrentDate(formatString) {
  return moment().format(formatString);
}

export function formatDateTo(date, formatString) {
  return moment(date).format(formatString);
}

export function addDateBy(date, value, type) {
  if (date) {
    return moment(date).add(value, type);
  }

  return moment().add(value, type);
}

export function getTemperatureStatusImage(status) {
  const temperatureStatuses = {
    sn: "Snow.png",
    sl: "Sleet.png",
    h: "Hail.png",
    t: "Thunderstorm.png",
    hr: "HeavyRain.png",
    lr: "LightRain.png",
    s: "Shower.png",
    hc: "HeavyCloud.png",
    lc: "LightCloud.png",
    c: "Clear.png",
  };

  return temperatureStatuses[status];
}

export function convertTo(unit, value) {
  switch (unit) {
    case "fahrenheit":
      return Math.floor((value * 9) / 5 + 32);
    default:
      return value;
  }
}

// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable(seconds) {
  const twoZeoros = (v) => {
    return v.toString().length < 2 ? "0" + v.toString() : v;
  };

  let hour = Math.floor(seconds / 3600);
  let min = Math.floor((seconds % 3600) / 60);
  let sec = Math.floor((seconds % 3600) % 60);

  return `${twoZeoros(hour)}:${twoZeoros(min)}:${twoZeoros(sec)}`;
}

humanReadable(359999);

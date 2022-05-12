// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  //your code here
  const urlWithoutDot = url.split(".");
  if (urlWithoutDot.length === 2) {
    const firstIndexValue = urlWithoutDot[0];
    const slashRemoved = firstIndexValue.split("/");
    return slashRemoved[slashRemoved.length - 1];
  } else if (urlWithoutDot.length === 3) {
    if (
      urlWithoutDot[1] === "com" ||
      urlWithoutDot[1] === "co" ||
      urlWithoutDot[1].indexOf("/") > 0
    ) {
      const firstIndexValue = urlWithoutDot[0];
      const slashRemoved = firstIndexValue.split("/");
      return slashRemoved[slashRemoved.length - 1];
    } else {
      return urlWithoutDot[1];
    }
  } else if (urlWithoutDot.length === 4) {
    if (urlWithoutDot[0].indexOf("/") > 0) {
      return urlWithoutDot[1];
    } else {
      return urlWithoutDot[0];
    }
  } else if (urlWithoutDot.length === 5) {
    return urlWithoutDot[1];
  }
}

// better solution: ==> but not working with this.domain.com
function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}

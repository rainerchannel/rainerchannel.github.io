function isMobile() {
    return /Mobi/.test(navigator.userAgent);
  }
  
  if (isMobile()) {
    console.log("BLUD WHY ARE YOU ON MOBILE");
    alert("This site is HEAVILY broken on mobile. HEAVILY.")
  } else {
    console.log("you are good to go");
  }
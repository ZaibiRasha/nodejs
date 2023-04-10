const rocks = who => {
  console.log('Hello after ' + who  +" seconds");
};

setTimeout(rocks, 4 * 1000, '4');
setTimeout(rocks, 8 * 1000, '8');

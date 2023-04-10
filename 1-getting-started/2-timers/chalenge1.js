
const intervalId = counter =>setTimeout(() => {
  // counter += 1;
  console.log('Hello World after ' + counter +" seconds delay");
  intervalId(counter+1)
  // if (counter === 5) {
  //   console.log('Done');
  //   // clearInterval(intervalId);
  // }
}, counter * 1000);
intervalId(1);

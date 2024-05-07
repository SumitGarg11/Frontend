1 setTimeout: Executes a function once after a specified delay.

   setTimeout(function() {
    console.log('This message will appear after 2 seconds.');
  }, 2000); // 2000 milliseconds = 2 seconds
  
  2 setInterval: Executes a function repeatedly, with a fixed time delay between each execution.

      setInterval(function() {
     console.log('This message will appear every 3 seconds.');
     }, 3000); 
  3 clearTimeout and clearInterval: These functions are used to stop the execution of setTimeout and setInterval respectively.
     // Using setTimeout
const timeoutId = setTimeout(function() {
    console.log('This message will never appear.');
}, 5000);

// Later, you can cancel the timeout
clearTimeout(timeoutId);

// Using setInterval
const intervalId = setInterval(function() {
    console.log('This message will appear every 1 second.');
}, 1000);

// Later, you can stop the interval
clearInterval(intervalId);

4 RequestAnimationFrame: This function schedules a repaint of the window for the next animation frame. It's often used for animations and can provide smoother performance than using setInterval or setTimeout.
  function animate() {
    // Update animation state

    // Request the next animation frame
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();





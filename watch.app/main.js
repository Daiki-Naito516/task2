
  
  var startButton;
  var stopButton;
  var resetButton;
  var countTime;
  
  var timer;
  var startTime;
  var elapsedTime= 0;
  var holdTime= 0;
  
  window.onload = function () {
    startButton = document.getElementById("start");
    console.log(startButton);
    stopButton = document.getElementById("stop");
    console.log(stopButton);
    resetButton = document.getElementById("reset");
    console.log(resetButton);
    countTime = document.getElementById("count");
    console.log(countTime);
}
  
  
  
  function countTime() {
    const currentTime = new Date(Date.now() - startTime + holdTime);
    const h = String(currentTime.getHours()-1).padStart(1,'0');
    const m = String(currentTime.getMinutes()).padStart(1,'0');
    const s = String(currentTime.getSeconds()).padStart(1,'0');
    const ms = String(currentTime.getMilliseconds()).padStart(1,'0');
    

  }
  
  function start() {
    console.log(countTime.innerHTML);
    startTime =Date.now();
    measureTime();
    
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
  
  }
  
  function stop() {
    clearInterval(timer);
    
    holdTime += Date.now() - startTime;
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
    
  }
  
  function reset() {
    clearInterval(timer);
    
    elapsedTime =0;
    holdTime =0;
    countTime.textContent = "0:0:0:0"
    
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
  }
  
  function measureTime() {
    
    timer =setTimeout(function(){
      
    elapsedTime =Date.now() - startTime + holdTime;
    countTime.textContent = "0:0:0:0"
    countTime.textContent =new Date(elapsedTime).toISOString().slice(12,21);
    
    measureTime();
  },10);
  }
function startCountdown(targetDateTime, containerId) {
    const container = document.getElementById(containerId);
  
    const units = ["days", "hours", "minutes", "seconds"];
    const elements = {};
  
    units.forEach(unit => {
      const div = document.createElement("div");
      div.className = `countdown-${unit}`;
      container.appendChild(div);
      elements[unit] = div;
    });
  
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = new Date(targetDateTime).getTime() - now;
  
      if (distance <= 0) {
        container.textContent = "Time's up!";
        clearInterval(interval);
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);
  
      elements.days.textContent = `${days}d`;
      elements.hours.textContent = `${hours}h`;
      elements.minutes.textContent = `${minutes}m`;
      elements.seconds.textContent = `${seconds}s`;
    }
  
    updateCountdown(); 
    const interval = setInterval(updateCountdown, 1000);
  }



function galleryEffect(){
  const frames = document.querySelectorAll("div.frame-canvas > img")

  let selector = -1
  setInterval(function(){
    selector++
    if(selector == frames.length)
    {
      selector = 0
    }


    frames.forEach(frame => {
      frame.classList.add("animate__fadeOut")
    })

    frames[selector].classList.remove("animate__fadeOut")
    frames[selector].classList.add("animate__fadeIn")
  },1000)
}




  document.addEventListener("DOMContentLoaded",()=>{
    startCountdown("2025-07-02T23:59:00", "countdown");
    galleryEffect();
  })

  
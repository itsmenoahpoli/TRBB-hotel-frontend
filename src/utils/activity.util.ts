const IDLE_TIME: number = 60000;

let idleTimer: any = null;

function resetIdleTimer() {
  if (idleTimer) {
    clearTimeout(idleTimer);
  }

  idleTimer = setTimeout(() => {
    alert("You have been idle for 30 seconds.");
  }, IDLE_TIME);
}

window.addEventListener("mousemove", resetIdleTimer);
window.addEventListener("keydown", resetIdleTimer);
window.addEventListener("click", resetIdleTimer);

resetIdleTimer();

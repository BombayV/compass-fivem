window.addEventListener('load', () => {
  const compass = document.getElementById('compass');
  window.addEventListener('message', (e) => {
    if (e.data.action === 'updateRotation') {
      // Update rotation
      compass.style.transform = `rotate(${e.data.rotation}deg)`;
    }
  });

  if (!window.invokeNative) {
    setInterval(() => {
      window.postMessage({
        action: 'updateRotation',
        rotation: Math.random() * 360
      }, '*');
    }, 1000);
  }
});
window.addEventListener('load', () => {
  const compass = document.getElementById('compass');
  window.addEventListener('message', (e) => {
    switch (e.data.action) {
      case 'updateRotation':
        compass.style.transform = `rotate(${e.data.rotation}deg)`;
        break;
      case 'show':
        compass.style.display = 'block';
        break;
      case 'hide':
        compass.style.display = 'none';
        break;
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
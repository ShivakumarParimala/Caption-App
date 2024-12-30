document.getElementById('loadVideo').addEventListener('click', () => {
    const videoUrl = document.getElementById('videoUrl').value;
    const videoElement = document.getElementById('video');
    if (videoUrl) {
      videoElement.src = videoUrl;
      videoElement.load();
    }
  });
  
  const captions = [];
  document.getElementById('addCaption').addEventListener('click', () => {
    const captionText = document.getElementById('captionText').value;
    const timestamp = parseFloat(document.getElementById('timestamp').value);
    if (captionText && !isNaN(timestamp)) {
      captions.push({ text: captionText, time: timestamp });
      captions.sort((a, b) => a.time - b.time); // Keep captions sorted by time
    }
  });
  
  const videoElement = document.getElementById('video');
  const captionDisplay = document.getElementById('captionDisplay');
  
  videoElement.addEventListener('timeupdate', () => {
    const currentTime = videoElement.currentTime;
    const currentCaption = captions.find(
      (caption) => currentTime >= caption.time && currentTime < caption.time + 2
    );
  
    captionDisplay.textContent = currentCaption ? currentCaption.text : '';
  });
  
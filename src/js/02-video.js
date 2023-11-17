
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const VIDEO_STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle((event) => {
  const time = Math.floor(event.seconds);
  localStorage.setItem(VIDEO_STORAGE_KEY, time);
}, 1000)); // Оновлюємо час не частіше ніж раз на секунду

player.ready().then(() => {
  const savedTime = localStorage.getItem(VIDEO_STORAGE_KEY);

  if (savedTime) {
    player.setCurrentTime(savedTime).catch((error) => {
      if (error.name === 'RangeError') {
        console.error('The time was less than 0 or greater than the video’s duration.');
      } else {
        console.error('Some other error occurred:', error);
      }
    });
  }

  player.play().catch((error) => {
    console.error('There was an error playing the video:', error);
  });
});

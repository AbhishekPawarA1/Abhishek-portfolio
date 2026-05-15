const CLICK_SOUND_URL = "/button-click-high-voiced-soft.mp3";
const POOL_SIZE = 6;
const VOLUME = 0.72;

let pool: HTMLAudioElement[] = [];
let poolIndex = 0;
let warmedUp = false;

function getClickAudio(): HTMLAudioElement {
  if (pool.length === 0) {
    pool = Array.from({ length: POOL_SIZE }, () => {
      const audio = new Audio(CLICK_SOUND_URL);
      audio.preload = "auto";
      audio.volume = VOLUME;
      return audio;
    });
  }

  const audio = pool[poolIndex]!;
  poolIndex = (poolIndex + 1) % POOL_SIZE;
  return audio;
}

export function warmUpClickSound() {
  if (typeof window === "undefined" || warmedUp) return;

  const audio = getClickAudio();
  audio.volume = 0;
  const playPromise = audio.play();

  if (playPromise) {
    playPromise
      .then(() => {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = VOLUME;
        warmedUp = true;
      })
      .catch(() => {
        audio.volume = VOLUME;
      });
  }
}

export function playMouseClickSound() {
  if (typeof window === "undefined") return;

  const audio = getClickAudio();
  audio.currentTime = 0;
  void audio.play().catch(() => {
    warmedUp = false;
  });
}

export const playUiClickSound = playMouseClickSound;

const CLICK_SOUND_URL = "/button-click-high-voiced-soft.mp3";
const VOLUME = 0.72;

let audioContext: AudioContext | null = null;
let clickBuffer: AudioBuffer | null = null;
let loadPromise: Promise<void> | null = null;

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

/** Load and decode MP3 as early as possible for zero-lag playback. */
export function preloadClickSound() {
  if (typeof window === "undefined") return loadPromise;

  if (loadPromise) return loadPromise;

  loadPromise = (async () => {
    const ctx = getAudioContext();
    const response = await fetch(CLICK_SOUND_URL);
    const data = await response.arrayBuffer();
    clickBuffer = await ctx.decodeAudioData(data);
  })().catch(() => {
    loadPromise = null;
  });

  return loadPromise;
}

export function warmUpClickSound() {
  if (typeof window === "undefined") return;

  const ctx = getAudioContext();
  if (ctx.state === "suspended") {
    void ctx.resume();
  }

  void preloadClickSound();
}

/** Plays on the same frame as pointer down — no click-event delay. */
export function playMouseClickSound() {
  if (typeof window === "undefined") return;

  const ctx = getAudioContext();

  if (ctx.state === "suspended") {
    void ctx.resume();
  }

  const playFromBuffer = () => {
    if (!clickBuffer) return;

    const source = ctx.createBufferSource();
    const gain = ctx.createGain();
    source.buffer = clickBuffer;
    gain.gain.value = VOLUME;
    source.connect(gain);
    gain.connect(ctx.destination);
    source.start(0);
  };

  if (clickBuffer) {
    playFromBuffer();
    return;
  }

  void preloadClickSound()?.then(playFromBuffer);
}

export const playUiClickSound = playMouseClickSound;

const POOL_SIZE = 8;
const MASTER_VOLUME = 0.78;

let audioContext: AudioContext | null = null;
let clickBuffers: AudioBuffer[] = [];

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

/**
 * Dual-impulse mechanical click (press + release) — reads closer to a real mouse.
 * Seeded noise keeps the texture consistent per buffer variant.
 */
function buildMouseClickBuffer(ctx: AudioContext, seed: number): AudioBuffer {
  const duration = 0.04;
  const sampleRate = ctx.sampleRate;
  const length = Math.floor(sampleRate * duration);
  const buffer = ctx.createBuffer(1, length, sampleRate);
  const channel = buffer.getChannelData(0);

  let rng = seed;
  const random = () => {
    rng = (rng * 1664525 + 1013904223) >>> 0;
    return (rng / 0xffffffff) * 2 - 1;
  };

  for (let i = 0; i < length; i++) {
    const t = i / sampleRate;

    const pressEnv = Math.exp(-t * 280) * (1 - Math.exp(-t * 3500));
    const releaseEnv = t > 0.004 ? Math.exp(-(t - 0.004) * 340) * (1 - Math.exp(-(t - 0.004) * 3000)) : 0;

    const pressNoise = random() * pressEnv * 0.85;
    const releaseNoise = random() * releaseEnv * 0.55;

    const pressTick = Math.sin(2 * Math.PI * 5200 * t) * Math.exp(-t * 380) * 0.42;
    const releaseTick =
      t > 0.004 ? Math.sin(2 * Math.PI * 4100 * (t - 0.004)) * Math.exp(-(t - 0.004) * 420) * 0.28 : 0;

    const shell = Math.sin(2 * Math.PI * 900 * t) * Math.exp(-t * 120) * 0.1;

    channel[i] = Math.tanh((pressNoise + releaseNoise + pressTick + releaseTick + shell) * 1.05);
  }

  return buffer;
}

function ensureBuffers(ctx: AudioContext) {
  if (clickBuffers.length > 0 && clickBuffers[0]!.sampleRate === ctx.sampleRate) return;

  clickBuffers = Array.from({ length: POOL_SIZE }, (_, index) =>
    buildMouseClickBuffer(ctx, 0x9e3779b9 + index * 2654435761),
  );
}

let poolIndex = 0;

function nextBuffer(ctx: AudioContext): AudioBuffer {
  ensureBuffers(ctx);
  const buffer = clickBuffers[poolIndex]!;
  poolIndex = (poolIndex + 1) % POOL_SIZE;
  return buffer;
}

export function warmUpClickSound() {
  if (typeof window === "undefined") return;

  const ctx = getAudioContext();
  if (ctx.state === "suspended") {
    void ctx.resume();
  }
  ensureBuffers(ctx);
}

/** Loud, crisp mouse-click on every interaction. */
export function playMouseClickSound() {
  if (typeof window === "undefined") return;

  const ctx = getAudioContext();
  if (ctx.state === "suspended") {
    void ctx.resume();
  }

  const source = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  const compressor = ctx.createDynamicsCompressor();

  source.buffer = nextBuffer(ctx);
  source.playbackRate.value = 0.92 + Math.random() * 0.14;

  filter.type = "highpass";
  filter.frequency.value = 180;
  filter.Q.value = 0.5;

  gain.gain.value = MASTER_VOLUME;

  compressor.threshold.value = -18;
  compressor.knee.value = 6;
  compressor.ratio.value = 3;
  compressor.attack.value = 0.001;
  compressor.release.value = 0.05;

  source.connect(filter);
  filter.connect(gain);
  gain.connect(compressor);
  compressor.connect(ctx.destination);

  source.start();
}

export const playUiClickSound = playMouseClickSound;

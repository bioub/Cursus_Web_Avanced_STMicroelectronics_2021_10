function setTimeoutSync(callback: () => void, delayMs: number) {
  // BLOQUE LE THREAD (STUPIDE)
  const debut = Date.now();
  while (debut + delayMs > Date.now());

  callback();
}

setTimeoutSync(() => console.log('TEST'), 1000);

type setTimeoutCallback = () => void;

function setTimeoutSync2(callback: setTimeoutCallback, delayMs: number) {
  // BLOQUE LE THREAD (STUPIDE)
  const debut = Date.now();
  while (debut + delayMs > Date.now());

  callback();
}

setTimeoutSync2(() => console.log('TEST'), 1000);

interface SetTimoutCallback {
  (): void;
}

function setTimeoutSync3(callback: SetTimoutCallback, delayMs: number) {
  // BLOQUE LE THREAD (STUPIDE)
  const debut = Date.now();
  while (debut + delayMs > Date.now());

  callback();
}

setTimeoutSync3(() => console.log('TEST'), 1000);

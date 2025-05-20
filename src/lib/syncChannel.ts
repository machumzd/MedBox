const channel = new BroadcastChannel('pglite-sync');

export function subscribeToSync(onSync: () => void) {
  channel.onmessage = (event) => {
    if (event.data === 'refresh') {
      onSync();
    }
  };
  return () => {
    channel.close();
  };
}

export function notifySync() {
  channel.postMessage('refresh');
}

declare global {
  interface Window {
    _hb?: (options: { widget: string; teamId: string; container: string }) => void;
  }
}
export {};

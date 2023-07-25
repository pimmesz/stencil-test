export interface StoreState {
  isActive: boolean;
}
declare const store: import("@stencil/store").ObservableMap<StoreState>;
declare const onStoreChange: (key: keyof StoreState, cb: (value: string | boolean) => void) => void;
export { store, onStoreChange };

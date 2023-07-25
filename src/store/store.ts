import { createStore } from '@stencil/store';

export interface StoreState {
  isActive: boolean;
}

const store = createStore<StoreState>({
  isActive: true
});

const onStoreChange = (key: keyof StoreState, cb: (value: string | boolean) => void): void => {
  store.onChange(key, (value: any) => {
    cb(value);
  });
};

export { store, onStoreChange };

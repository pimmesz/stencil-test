import { createStore } from "@stencil/store";
const store = createStore({
  isActive: true
});
const onStoreChange = (key, cb) => {
  store.onChange(key, (value) => {
    cb(value);
  });
};
export { store, onStoreChange };
//# sourceMappingURL=store.js.map

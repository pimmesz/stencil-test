import { h } from "@stencil/core";
import { store, onStoreChange } from "../../store/store";
export class MyComponent {
  constructor() {
    this.test = true;
  }
  setTestState() {
    this.test = !this.test;
  }
  componentWillLoad() {
    store.state.isActive = true;
    onStoreChange('isActive', this.setTestState.bind(this));
  }
  render() {
    return h("div", null, "Hello, World! I'm");
  }
  static get is() { return "my-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["my-component.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["my-component.css"]
    };
  }
  static get states() {
    return {
      "test": {}
    };
  }
}
//# sourceMappingURL=my-component.js.map

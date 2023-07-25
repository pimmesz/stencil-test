import { Component, State, h } from '@stencil/core';
import { store, onStoreChange } from '../../store/store';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @State() test = true;

  setTestState() {
    this.test = !this.test;
  }

  componentWillLoad() {
    store.state.isActive = true;
    onStoreChange('isActive', this.setTestState.bind(this));
  }

  render() {
    return <div>Hello, World! I'm</div>;
  }
}

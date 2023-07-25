import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';
import { store } from '../../store/store';

describe('my-component', () => {
   afterEach(() => {
    store.dispose();
  });

  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });

    store.state.isActive = false;

    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
  
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });

    store.state.isActive = false;

    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});


class MyCustomElement extends HTMLElement {


    static get properties() {
        return {
            someProp: { type: String },
        };
    }

    constructor() {
        super();
        console.log("dx----this",this)
        this.someProp = 'Default value';
    }

    _handleClick() {
        this.dispatchEvent(new CustomEvent('custom-event', { detail: 'Hello from LitElement' }));
    }

    render() {
        return `
      <button @click="${this._handleClick}">Click me</button>
      <slot></slot>
    `;
    }
}

customElements.define('my-custom-element', MyCustomElement);

// https://blog.csdn.net/A1215383843/article/details/139308121  参考

// 在 React 中使用 Web Components，需要注意以下几点：
// 属性绑定：React 使用 camelCase 属性，而 Web Components 使用 kebab-case。所以在 React 中，你需要使用 some-prop 而不是 someProp 来绑定属性。
//
// 事件监听：React 使用 JSX 的 @event 语法，但这不会直接映射到 Web Components 的事件监听。React 会将事件监听器添加到 DOM 元素的最外层，所以 @custom-event 实际上是在 React 组件的根元素上监听事件，而不是直接在 Web Component 上。如果 Web Component 不向上冒泡事件，可能需要在 Web Component 本身内处理事件。
//
// 状态管理和更新：React 的状态管理和组件更新机制与 Web Components 不同，因此，Web Component 的状态更新不会触发 React 组件的重新渲染。
//
// 生命周期方法：React 的生命周期方法与 Web Components 的生命周期不完全同步。如果需要在特定生命周期阶段执行操作，可能需要在两者之间进行协调。
//
// 性能考虑：由于 React 不直接管理 Web Components，因此可能需要额外的优化措施，比如使用 shouldComponentUpdate 或 React.memo 来减少不必要的渲染。

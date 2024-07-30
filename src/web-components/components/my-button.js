// main.js
class MyButton extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
        button {
          background-color: #4CAF50;
          border: none;
          color: white;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          padding: 10px 24px;
          border-radius: 4px;
        }
      </style>
      <button>Click Me!</button>
        `;
        shadowRoot.querySelector('button').addEventListener('click', () => {
            alert('按钮被点击啦');
        });
    }
    connectedCallback() {
        // 元素被插入到 DOM 时执行的操作
        console.log('元素被插入到 DOM');
    }
    disconnectedCallback() {
        // 元素从 DOM 中移除时执行的操作
        console.log('元素被移除');
    }
    attributeChangedCallback(name, oldValue, newValue) {
        // 监听的属性发生变化时执行的操作
        console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
    }
    static get observedAttributes() {
        // 返回一个数组，包含需要监听的属性
        return ['my-attribute'];
    }

}
customElements.define('my-button', MyButton);



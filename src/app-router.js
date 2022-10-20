
import { LitElement, css, html } from 'lit'

export class AppRouter extends LitElement {
  static get properties() {
    return {
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <ion-router use-hash="false" id="main">
        <ion-route url="/" component="view-root"></ion-route>
        <ion-route url="/view-home" component="view-home"></ion-route>
        <ion-route url="/view-checklists" component="view-checklists"></ion-route>
      </ion-router>
    `
  }

  static get styles() {
    return css`
      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `
    }
}
customElements.define('app-router', AppRouter)


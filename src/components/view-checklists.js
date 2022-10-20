import { LitElement, css, html } from 'lit'

export class ViewChecklists extends LitElement {
  static get properties() {
    return {
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
            <ion-page> 
                <ion-text>
                    <h1> ✅ Checklists </h1>
                </ion-text>

                <ion-img src="https://jollycontrarian.com/images/6/6c/Rickroll.jpg"></ion-img>
            </ion-page>

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
window.customElements.define('view-checklists', ViewChecklists)


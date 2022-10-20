import { LitElement, css, html } from 'lit'

export class ViewHome extends LitElement {
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
              <ion-accordion-group>
              <ion-accordion value="first">
                <ion-item slot="header" color="light">
                  <ion-label>HOME</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">
                  First Content
                </div>
              </ion-accordion>
              <ion-accordion value="second">
                <ion-item slot="header" color="light">
                  <ion-label>Second Accordion</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">
                  Second Content
                </div>
              </ion-accordion>
              <ion-accordion value="third">
                <ion-item slot="header" color="light">
                  <ion-label>Third Accordion</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">
                  Third Content
                </div>
              </ion-accordion>
            </ion-accordion-group>

              <ion-button>
                <ion-icon name="cloud-upload"></ion-icon>
              </ion-button>
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
customElements.define('view-home', ViewHome)


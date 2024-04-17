export default function H2({ html }) {
  return html`
    <style>
      :host {
        display: block;
        color: var(--primary-800);
      }
    </style>
    <h2 class="font-extrabold italic leading1 text4 tracking-1 mbe2">
      <slot></slot>
    </h2>
  `
}

export default function SiteLayout({ html }) {
  return html`
      <site-container class="pi0">
        <site-header></site-header>
        <slot></slot>
        <site-footer></site-footer>
      </site-container>
    `
}

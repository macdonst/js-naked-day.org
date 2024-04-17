export default function SiteFooter({ html }) {
  return html`
      <style>
        div {
          border-color: var(--gray-300);
          opacity: 0.66;
        }
      </style>
      <footer class='pb6'>
        <div class='mi-auto text-center border-solid border-bs1 pbs3'>
          <p class="italic">
            This page was built with <a href="https://enhance.dev/" class="underline">Enhance</a>. You can view the source code on <a href="https://github.com/macdonst/js-naked-day.org" class="underline">GitHub</a>.
          </p>
        </div>
      </footer>
    `
}

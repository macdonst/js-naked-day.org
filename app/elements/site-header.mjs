export default function SiteHeader({ html }) {
  return html`
    <style>
      p {
        border-block: 0.0625em solid var(--primary-500);
      }
    </style> 
    <header class="text-center pbs8 pbe6">
      <h1 class='text7 font-extrabold leading1 tracking-1 mbe4'>
        <a href='/' class='no-underline'>
          JS Naked Day
        </a>
      </h1>
      <p class='font-light text2 leading2 italic pb4 mb4'>
        The web should work without JavaScript.
      </p>
    </header>
  `
}

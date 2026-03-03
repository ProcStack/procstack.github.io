/* Giscus Comment Manager for procPage's Blog Posts
*
* Giscus Documentation: https://giscus.app/
*
* Possible Color Themes :
*  Default Giscus Theme - preferred_color_scheme
*  Default ProcPages Theme - cobalt

const giscusThemeList = [
  "light", "light_high_contrast", "light_protanopia", "light_tritanopia",
  "dark", "dark_high_contrast", "dark_protanopia", "dark_tritanopia", "dark_dimmed",
  "preferred_color_scheme", "transparent_dark", "noborder_light", "noborder_dark", "noborder_gray",
  "cobalt", "purple_dark", "gruvbox", "gruvbox_dark", "gruvbox_light",
  "catppuccin_latte", "catppuccin_frappe", "catppuccin_macchiato", "catppuccin_mocha", "fro"
];

*/


export class CommentManager {
  constructor({
    repo,
    repoId,
    category,
    categoryId,
    containerId = "comments",
    theme = "cobalt",
    lang = "en",
  }) {
    this.booted = false;
    this.repo = repo;
    this.repoId = repoId;
    this.category = category;
    this.categoryId = categoryId;
    this.containerId = containerId;
    this.theme = theme;
    this.lang = lang;

    this.handleMessage = this.handleMessage.bind(this);
    window.addEventListener("message", this.handleMessage);
  }

  handleMessage(event) {
    if (event.origin !== "https://giscus.app") return;
    if (!(event.data && typeof event.data === "object" && event.data.giscus)) return;

    const giscus = event.data.giscus;
    if (giscus.resizeHeight) {
      const container = document.getElementById(this.containerId);
      if (container) {
        container.style.height = `${giscus.resizeHeight + 30}px`;
      }
    }
  }

  load(postId) {

    const container = document.getElementById(this.containerId);
    if (!container) {
      console.warn("[CommentManager] Container not found:", this.containerId);
      return;
    }

    this.booted = true;
    container.innerHTML = "";

    /* Generated from Giscus.app --
    <script src="https://giscus.app/client.js"
        data-repo="ProcStack/procDiscussions"
        data-repo-id="R_kgDORc_LJw"
        data-category="General"
        data-category-id="DIC_kwDORc_LJ84C3kiH"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="cobalt"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
    </script>
    */

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.dataset.repo = this.repo;
    script.dataset.repoId = this.repoId;
    script.dataset.category = this.category;
    script.dataset.categoryId = this.categoryId;

    script.dataset.mapping = "specific";
    script.dataset.term = postId;

    script.dataset.strict = "0";

    script.dataset.reactionsEnabled = "1";
    script.dataset.emitMetadata = "1";
    script.dataset.inputPosition = "top";
    script.dataset.theme = this.theme;
    script.dataset.lang = this.lang;
    script.dataset.loading = "lazy";



    container.appendChild(script);
  }

  unload() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    container.innerHTML = "";
    this.booted = false;
  }

  setTheme(theme) {
    this.theme = theme;

    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe) return;

    iframe.contentWindow.postMessage(
      {
        giscus: {
          setConfig: { theme },
        },
      },
      "https://giscus.app"
    );
  }

  isBooted() {
    return this.booted;
  }
}
# mmheydari97.github.io

Personal résumé site for Mohammad Heydari, served by GitHub Pages at <https://mmheydari97.github.io>.

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | The résumé site (fixed sidebar on desktop, top bar on mobile) |
| `css/style.css` | All site styles; the design-token block at the top is shared with the blog |
| `js/main.js` | Mobile menu collapse, light/dark toggle, footer year |
| `cv/updated/modern-cv.html` | Single-page printable CV |
| `cv/updated/CV.tex`, `CV.pdf` | LaTeX CV and its PDF |
| `img/` | Profile photo and favicon |

Bootstrap 5.3, Font Awesome 6 and Inter load from CDNs. There is no build step: edit the files and push.

## Local preview

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Theme

The page follows the OS light/dark setting. The sun/moon button overrides it and the choice is saved in `localStorage` (key `theme`, shared with the web CV).

## License

Originally based on Start Bootstrap's Resume template (MIT). See `LICENSE`.

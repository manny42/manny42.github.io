# manny42.github.io

Site de Morgan Faget : formations, conférences et articles, en français et en anglais.
Construit avec Jekyll et publié automatiquement par GitHub Pages à chaque push sur `master`.

## Ajouter du contenu

Un fichier Markdown par élément et par langue. Le dossier fixe la langue et l'adresse de la page.

| Contenu | Français | Anglais | Modèle |
|---|---|---|---|
| Conférence | `_talks/fr/AAAA-MM-JJ-titre.md` | `_talks/en/YYYY-MM-DD-title.md` | `_templates/talk.md` |
| Formation | `_courses/fr/titre.md` | `_courses/en/title.md` | `_templates/course.md` |
| Article | `_posts/fr/AAAA-MM-JJ-titre.md` | `_posts/en/YYYY-MM-DD-title.md` | `_templates/post.md` |

Deux fichiers avec la même `ref` (ex. `T-032`) sont la traduction l'un de l'autre.
Les textes du site et le positionnement par langue sont dans `_data/fr.yml` et `_data/en.yml`.

## Aperçu en local (Docker)

```bash
docker run --rm -it -p 4000:4000 -v "$PWD":/site -v mf-gems:/usr/local/bundle -w /site ruby:3.3 bash -c "bundle install && bundle exec jekyll serve --host 0.0.0.0"
```

Puis ouvrir http://localhost:4000. Le design et le plan sont dans `_design/` (non publiés).

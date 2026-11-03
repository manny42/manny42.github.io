---
layout: page
permalink: /a-propos/
lang: fr
ref: about
title: "À propos"
eyebrow: "MF-42 · Bio et kit intervenant"
description: "Qui je suis, ce que j'enseigne, et comment me faire intervenir."
---
{% assign t = site.data.fr %}

## Bio

{{ t.about.body }}

## En bref

<table class="specs">
{%- for row in t.specs.rows %}{% unless row.stat %}
<tr><th>{{ row.label }}</th><td>{{ row.value }}</td></tr>
{%- endunless %}{% endfor %}
</table>

## Me faire intervenir

{{ t.about.pitch }} {{ t.contact.reply_time }}

<p><a class="btn btn-primary" href="{% include mailto.html subject=t.contact.subject %}">{{ t.about.cta_primary }} →</a></p>

Organisateurs : écrivez-moi si vous avez besoin d'une bio adaptée à votre programme.

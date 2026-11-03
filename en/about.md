---
layout: page
permalink: /en/about/
lang: en
ref: about
title: "About"
eyebrow: "MF-42 · Bio & speaker kit"
description: "Who I am, what I teach, and how to book me."
---
{% assign t = site.data.en %}

## Bio

{{ t.about.body }}

## At a glance

<table class="specs">
{%- for row in t.specs.rows %}{% unless row.stat %}
<tr><th>{{ row.label }}</th><td>{{ row.value }}</td></tr>
{%- endunless %}{% endfor %}
</table>

## Booking

{{ t.about.pitch }} {{ t.contact.reply_time }}

<p><a class="btn btn-primary" href="{% include mailto.html subject=t.contact.subject %}">{{ t.about.cta_primary }} →</a></p>

Organisers: get in touch if you need a bio tailored to your programme.

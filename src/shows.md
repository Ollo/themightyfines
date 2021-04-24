---
layout: layout.njk
title: Brandywine and the Mighty Fines | Event Calendar
---

# Upcoming shows

{% for show in shows | reverse %}

{% if show.active %}

<article class='show'>

{% else %}

<article class='show history'>

{% endif %}

  <h2>{{ show.date }}</h2>
  <a href='{{ show.link }}'>
    <p>{{ show.location }}</p>
  </a>
  <small>{{ show.time }}</small>

</article>

---

{% endfor %}

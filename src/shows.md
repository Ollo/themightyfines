---
layout: layout.njk
title: Brandywine and the Mighty Fines | Event Calendar
---

# Upcoming shows 

{{ collections.shows | log }}

{% for show in shows %}
<article class='show'>
  <h2>{{ show.date }}</h2>
  <a href='{{ show.link}}'>
    <p>{{ show.location }}</p>
  </a>
  <small>{{ show.time }}</small>
  
</article>

---

{% endfor %}

# quicklinks

{% for tag in site.quicklinks %}
  {% assign quicklinks = [] %}
  {% for link in site.links %}
    {% if link.quicklink and (link.tags contains tag) %}
      {% assign quicklinks = quicklinks | push: link %}
    {% endif %}
  {% endfor %}
  <h2>{{ tag }}</h2>
  <ul>
  {% for link in quicklinks %}
    <li>
      <a href="{{ link.weburl }}">{{ link.title }}</a>
    </li>   
  {% endfor %}
  </ul>
{% endfor %}

## other links

<ul>
{% for link in site.links %}
<li>
  <a href="{{ link.weburl }}">{{ link.title }}</a>
</li>
{% endfor %}
</ul>

# [quicklinks](#quicklinks)

{% for tag in site.quicklinks %}
  {% assign quicklinks = "" | split: "" %}
  {% for link in site.links %}
    {% if link.quicklink and (link.tags contains tag) %}
      {% assign quicklinks = quicklinks | push: link %}
    {% endif %}
  {% endfor %}
  <table style="display:block; float:left;"><tr><td>
  <h2>{{ tag }}</h2>
  <ul>
  {% assign sorted_quicklinks = (quicklinks | sort: 'quicklink') %}
  {% for link in sorted_quicklinks %}
    <li>
      <a href="{{ link.weburl }}">{{ link.title }}</a>
    </li>   
  {% endfor %}
  </ul>
  </td></tr></table>
{% endfor %}

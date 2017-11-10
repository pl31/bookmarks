# quicklinks

{% for tag in site.quicklinks %}
  <h2>{{ tag }}</h2>
  <ul>
  {% for link in site.links.sort_by &:quicklink %}
    Test
    {% if (link.quicklink?) and (link.tags contains tag) %}
      <li>
        <a href="{{ link.weburl }}">{{ link.title }}</a>
      </li>   
    {% endif %}
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

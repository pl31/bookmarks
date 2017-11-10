# quicklinks

{% for tag in site.quicklinks %}
  <h2>test</h2>
  <ul>
  {% for link in site.links %}
    {% if link.tags contains "quicklink" && link.tags contains tag %}
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

# quicklinks


{% for tag in ["search", "social"] %}
<h2>{{ tag }}</h2>
<ul>
{% for link in site.links %}
  {% if link.tags contains "quicklink" && link.tags contains "search" %}
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

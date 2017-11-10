# quicklinks


## search
<ul>
{% for link in site.links %}
  {% if link.tags contains "quicklink" && link.tags contains "search" %}
    <li>
      <a href="{{ link.weburl }}">{{ link.title }}</a>
      <a href="{{ link.url }}">.</a>
    </li>   
  {% endif %}
{% endfor %}
</ul>

## other links

<ul>
{% for link in site.links %}
<li>
  <a href="{{ link.weburl }}">{{ link.title }}</a>
  <a href="{{ link.url }}">.</a>
</li>
{% endfor %}
</ul>
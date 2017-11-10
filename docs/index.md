# quicklinks

{% for tag in site.quicklinks %}
  <h2>{{ tag }}</h2>
  <ul>
  {% for link in site.links.sort { |a.quicklink,b.quicklink| a.quicklink && b.quicklink ? a.quicklink <=> b.quicklink : a.quicklink ? -1 : 1 } %}
    {% if link.quicklink and (link.tags contains tag) %}
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

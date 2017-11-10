# [quicklinks](#quicklinks)

{% assign block_toggle = true %}
{% for tag in site.quicklinks %}
  {% assign quicklinks = "" | split: "" %}
  {% for link in site.links %}
    {% if link.quicklink and (link.tags contains tag) %}
      {% assign quicklinks = quicklinks | push: link %}
    {% endif %}
  {% endfor %}
  {% if block_toggle %}
    <div class="blocko">
  {% else %}
    <div class="blocke">
  {% endif %}
  {% assign block_toggle = !block_toggle %} 
      <h2>{{ tag }}</h2>
      <ul>
      {% assign sorted_quicklinks = (quicklinks | sort: 'quicklink') %}
      {% for link in sorted_quicklinks %}
        <li>
          <a href="{{ link.weburl }}">{{ link.title }}</a>
        </li>   
      {% endfor %}
      </ul>
    </div>
{% endfor %}

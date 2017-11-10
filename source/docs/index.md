# quicklinks

## search

- [google](https://www.google.de)


## other links

<ul>
{% for link in site.links %}
<li>
  <a href="{{ link.weburl }}">{{ link.title }}</a>
  <a href="{{ link.url }}">.</a>
</li>
{% endfor %}      
</ul>
# quicklinks

## search

- [google](https://www.google.de)


# other links

{% for links in site.links %}


<a href="{{ links.url | prepend: site.baseurl }}">
        <h2>{{ links.title }}</h2>
</a>

<p class="post-excerpt">{{ links.url | truncate: 160 }}</p>

{% endfor %}      

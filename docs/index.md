# quicklinks

## search

- [google](https://www.google.de)


## other links

{% for link in site.links %}

<a href="{{ link.url | prepend: site.baseurl }}">
        <h2>{{ link.title }}</h2>
</a>

<p class="post-excerpt">{{ link.url }}</p>

{% endfor %}      

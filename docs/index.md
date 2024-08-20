<link rel="icon" type="image/svg+xml" sizes="any" href="assets/favicons/favicon.svg">

# [quicklinks](#quicklinks)

{% for tag in site.quicklinks %}
  <table style="display:inline-block; vertical-align: top; border:0;"><tr><td style="border:0;">
  <h2>{{ tag }}</h2>
  <table style="border:0;">
  {% for link in site.data.quicklinks %}
    {% if link.tags contains tag %}
      <tr>
        <td style="border:0;padding:4px;">
          <img src="https://www.google.com/s2/favicons?domain_url={{ link.href }}" style="all:unset;width:16px;height:16px;margin:0;vertical-align:middle;"/>
        </td>
        <td style="border:0;padding:0px;">
          <a href="{{ link.href }}" style="vertical-align:middle;">{{ link.title }}</a>
        </td>
      </tr>   
    {% endif %}
  {% endfor %}
  </table>
  </td></tr></table>
{% endfor %}

[more bookmarks...]({% link bookmarks/all.md %})

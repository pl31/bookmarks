# [quicklinks](#quicklinks)

{% for tag in site.quicklinks %}
  <table style="display:block; float:left; border:0;"><tr><td style="border:0;">
  <h2>{{ tag }}</h2>
  <table style="border:0;">
  {% for link in site.data.bookmarks %}
    {% if (link.tags contains "quicklink") and (link.tags contains tag) %}
      {% if link.icon %}
        {% assign favicon = link.icon %}
      {% else %}
        {% assign favicon = link.href | append: "/favicon.ico" %}
      {% endif %}
      <tr>
        <td style="border:0;padding:4px;">
          <img src="{{ favicon }}" alt=" " style="all:unset;width:16px;height:16px;margin:0;vertical-align:middle;"/>
        </td>
        <td style="border:0;padding:4px;">
          <a href="{{ link.href }}" style="vertical-align:middle;">{{ link.title }}</a>
        </td>
      </tr>   
    {% endif %}
  {% endfor %}
  </table>
  </td></tr></table>
{% endfor %}
<p style="clear: left;"></p>

# all bookmarks

<table>
<tr>
  <th></th><th>name</th><th>tags</th><th>url</th>
</tr>
{% for link in site.data.bookmarks %}
  {% if link.icon %}
    {% assign favicon = link.icon %}
  {% else %}
    {% assign favicon = link.href | append: "/favicon.ico" %}
  {% endif %}
  <tr>
    <td style="border:0;padding:4px;">
      <img src="{{ favicon }}" alt=" " style="all:unset;width:16px;height:16px;margin:0;vertical-align:middle;"/>
    </td>
    <td style="border:0;padding:4px;">
      <a href="{{ link.href }}" style="vertical-align:middle;">{{ link.title }}</a>
    </td>
    <td style="border:0;padding:4px;">
    </td>
    <td style="border:0;padding:4px;">
      <a href="{{ link.href }}" style="vertical-align:middle;">{{ link.href }}</a>
    </td>
  </tr>   
{% endfor %}
</table>

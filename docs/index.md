# [quicklinks](#quicklinks)

{% for tag in site.quicklinks %}
  <table style="display:block; float:left; border:0;"><tr><td style="border:0;">
  <h2>{{ tag }}</h2>
  <table style="border:0;">
  {% for link in site.data.bookmarks %}
    {% if (link.tags contains "quicklink") and (link.tags contains tag) %}
      {% assign favicon = defined? link.icon ? link.icon : link.href+"/favicon.ico" %}
      <tr>
      {{ defined? link.icon ? link.icon : link.href+"/favicon.ico" }}
        <td style="border:0;padding:4px;">
          <img src="{{ favicon }}" alt=" " style="all:unset;width:16px;height:16px;margin:0;vertical-align:middle;"/>
        </td>
        <td style="border:0;padding:0;">
          <a href="{{ link.href }}" style="vertical-align:middle;">{{ link.title }}</a>
        </td>
      </tr>   
    {% endif %}
  {% endfor %}
  </table>
  </td></tr></table>
{% endfor %}

<p style="clear: left;"></p>

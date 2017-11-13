# [quicklinks](#quicklinks)

{% for tag in site.quicklinks %}
  <table style="display:block; float:left; border:0;"><tr><td style="border:0;">
  <h2>{{ tag }}</h2>
  <table style="border:0;">
  {% for link in site.data.quicklinks %}
    {% if (link.tags contains "quicklink") and (link.tags contains tag) %}
      {% if link.icon %}
        {% assign favicon = link.icon %}
      {% else %}
        {% assign favicon = link.href | append: "/favicon.ico" %}
      {% endif %}
      {% if favicon contains "http://" %}
        {% assign favicon = "assets/img/unprotected.png" %}
      {% endif %}
      <tr>
        <td style="border:0;padding:4px;">
          <img src="{{ favicon }}" alt=" " style="all:unset;width:16px;height:16px;margin:0;vertical-align:middle;"/>
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
<p style="clear: left;"></p>

# all bookmarks

<input type="text" id="tagFilter" onkeyup="filterTable()" placeholder="Search for tags.." />

<table id="allBookmarksTable" style="border:0;">
{% for datafile in site.data %}
  datafileName = datafile[0]
  datafileLinks = datafile[1]
  {% for link in datafileLinks %}
    {% if link.icon %}
      {% assign favicon = link.icon %}
    {% else %}
      {% assign favicon = link.href | append: "/favicon.ico" %}
    {% endif %}
    {% if favicon contains "http://" %}
      {% assign favicon = "assets/img/unprotected.png" %}
    {% endif %}
    <tr>
      <td style="border:0;padding:4px;">
        <img src="{{ favicon }}" alt=" " style="all:unset;width:16px;height:16px;margin:0;vertical-align:middle;"/>
      </td>
      <td style="border:0;padding:4px;">
        <a href="{{ link.href }}" style="vertical-align:middle;">{{ link.title }}</a>
      </td>
      <td style="border:0;padding:4px;">
        {{ link.tags | where_exp: "item", "item != 'quicklink'" | join: " " }}
      </td>
    </tr>   
  {% endfor %}
{% endfor %}
</table>

{% include filterTable.js %}

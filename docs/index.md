<script>
{% include filterTable.js %}
</script>
<script>
{% include loadFavicon.js %}
</script>

# [quicklinks](#quicklinks)

{% for tag in site.quicklinks %}
  <table style="display:block; float:left; border:0;"><tr><td style="border:0;">
  <h2>{{ tag }}</h2>
  <table style="border:0;">
  {% for link in site.data.quicklinks %}
    {% if (link.tags contains "quicklink") and (link.tags contains tag) %}
      <tr>
        <td style="border:0;padding:4px;">
          {% if link.icon %}
            <img src="{{ link.icon }}" style="all:unset;width:16px;height:16px;margin:0;vertical-align:middle;"/>
          {% else %}
            <img src="assets/img/empty.png" onload="loadFavicon(this,'{{ link.href }}')" style="all:unset;width:16px;height:16px;margin:0;vertical-align:middle;"/>
          {% endif %}
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
  {% assign datafileName = datafile[0] %}
  {% assign datafileLinks = datafile[1] %}
  {% for link in datafileLinks %}
    <tr>
      <td style="border:0;padding:4px;">
        {% if link.icon %}
          <img src="{{ link.icon }}" style="all:unset;width:16px;height:16px;margin:0;vertical-align:middle;"/>
        {% else %}
          <img src="assets/img/empty.png" onload="loadFavicon(this,'{{ link.href }}')" style="all:unset;width:16px;height:16px;margin:0;vertical-align:middle;"/>
        {% endif %}
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

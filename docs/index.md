<script>{% include filterTable.js %}</script>

# [quicklinks](#quicklinks)

{% for tag in site.quicklinks %}
  <table style="display:block; float:left; border:0;"><tr><td style="border:0;">
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
<p style="clear: left;"></p>

# all bookmarks

{% assign all_tags = '' | split: '' %}
{% for datafile in site.data %}
  {% assign datafileName = datafile[0] %}
  {% assign datafileLinks = datafile[1] %}
  {% for link in datafileLinks %}
    {% assign all_tags = all_tags | concat: link.tags | uniq %}  
  {% endfor %}
{% endfor %}

<div style="font-size: smaller;">
<form id="tagFilterForm">
{% for tag in all_tags %}
  <label>
    <input type="checkbox" name="cb-{{ tag }}" value="{{ tag }}" onchange="filtertable()">
    {{tag}}
  </label>
{% endfor %}
</form>
</div>

<table id="allBookmarksTable" style="border:0;">
{% for datafile in site.data %}
  {% assign datafileName = datafile[0] %}
  {% assign datafileLinks = datafile[1] %}
  {% for link in datafileLinks %}
    <tr>
      <td style="border:0;padding:4px;">
        <img src="https://www.google.com/s2/favicons?domain_url={{ link.href }}" style="all:unset;width:16px;height:16px;margin:0;vertical-align:middle;"/>
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

# [quicklinks](#quicklinks)

{% for tag in site.quicklinks %}
  {% assign quicklinks = "" | split: "" %}
  {% for link in site.links %}
    {% if link.quicklink and (link.tags contains tag) %}
      {% assign quicklinks = quicklinks | push: link %}
    {% endif %}
  {% endfor %}
  <table style="display:block; float:left; border:0;"><tr><td style="border:0;">
  <h2>{{ tag }}</h2>
  <table style="border:0;">
  {% assign sorted_quicklinks = (quicklinks | sort: 'quicklink') %}
  {% for link in sorted_quicklinks %}
    <tr>
      <td style="border:0;padding:2px;">
        <img src="{{ link.weburl }}/favicon.ico" style="width:16px;height:16px;margin:0;vertical-align:middle;"/>
      </td>
      <td style="border:0;padding:0;">
        <a href="{{ link.weburl }}" style="vertical-align:middle;">{{ link.title }}</a>
      </td>
    </tr>   
  {% endfor %}
  </table>
  </td></tr></table>
{% endfor %}

<p style="clear: left;"></p>

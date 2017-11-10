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
      <td style="border:0;border-spacing:0px;padding:0;">
        <img src="{{ link.weburl }}/favicon.ico" width="16" height="16" style="border:0;padding:0;"/>
      </td>
      <td style="border:0;border-spacing:0px;padding:0;">
        <a href="{{ link.weburl }}">{{ link.title }}</a>
      </td>
    </tr>   
  {% endfor %}
  </table>
  </td></tr></table>
{% endfor %}

<p style="clear: left;"></p>

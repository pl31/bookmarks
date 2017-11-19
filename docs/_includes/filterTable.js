function filterTable() {
  // get tag list
  var form, input, tagList = [];
  form = document.getElementById("tagFilterForm");
  input = form.getElementsByTagName("input");

  for (i = 0; i < input.length; i++) {
    if (input[i].checked) {
        tagList.push(input[i].value.toLowerCase());
    }
  }

  // filter table
  var table, tr, td, i;
  table = document.getElementById("allBookmarksTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    // visible by default
    tr[i].style.display = "";
    // hide it, if one tag is missing
    for (j = 0; j < tagList.length; j++) {
      if (td.innerHTML.toLowerCase().indexOf(tagList[j]) == -1) {
        tr[i].style.display = "none";
      }
    }
  }
}

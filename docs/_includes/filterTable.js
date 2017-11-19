function filterTable() {
  // 1. get tag list
  var form, input, tagList = [];
  form = document.getElementById("tagFilterForm");
  input = form.getElementsByTagName("input");

  for (i = 0; i < input.length; i++) {
    if (input[i].checked) {
        tagList.push(input[i].value.toLowerCase());
    }
  }

  // 2. filter table
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
      linkTags = td.innerHTML.trim().toLowerCase().split(" ");
      if (!linkTags.includes(tagList[j])) {
        tr[i].style.display = "none";
      }
    }
  }

  // 3. filter tag list
  var visibleTags = [];
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    // visible by default
    if (tr[i].style.display != "none") {
      visibleTags = visibleTags.concat(td.innerHTML.trim().toLowerCase().split(" "));
      visibleTags = [...new Set(visibleTags)] // make unique
    }
  }
  // iterate over tags now
  input = form.getElementsByTagName("input");
  
  for (i = 0; i < input.length; i++) {
    if (visibleTags.includes(input[i].value.toLowerCase())) {
      input[i].parentElement.style.display = "";
    } else {
      input[i].parentElement.style.display = "none";
    }
  }
}

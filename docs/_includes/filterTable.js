function filterTable() {
  // Declare variables
  var form, input, tagList = [];
  form = document.getElementById("tagFilterForm");
  input = form.getElementsByTagName("input");


  for (i = 0; i < input.length; i++) {
    if (input[i].checked) {
        tagList.push(input[i].value.toLowerCase());
    }
  }

  return;
  // filter = input.value.toUpperCase();
  // table = document.getElementById("allBookmarksTable");
  // tr = table.getElementsByTagName("tr");

  // // Loop through all table rows, and hide those who don't match the search query
  // for (i = 0; i < tr.length; i++) {
  //   td = tr[i].getElementsByTagName("td")[2];
  //   if (td) {
  //     if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
  //       tr[i].style.display = "";
  //     } else {
  //       tr[i].style.display = "none";
  //     }
  //   }
  // }
}

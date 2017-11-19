function uncheckTags() {
    var form, input = [];
    form = document.getElementById("tagFilterForm");
    input = form.getElementsByTagName("input");

    for (i = 0; i < input.length; i++) {
        if (input[i].checked) {
            input[i].checked = false;
        }
    }

    filterTable();
}
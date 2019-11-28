document.addEventListener('DOMContentLoaded', function () {

  //para las chips
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
  var elems = document.querySelectorAll('.chips');
  var instances = M.Chips.init(elems, {
    data: [],
    limit: 20,
    onChipAdd: () => {

    },
    placeholder: "Add your skills",
    secondaryPlaceholder: "skill",
    autocompleteOptions: {
      data: {
        'javascript': null,
        'javier': null,
      },
      limit: Infinity,
      minLength: 1
    }
  });
});
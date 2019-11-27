document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});


  var elems = document.querySelectorAll('.chips');
  var instances = M.Chips.init(elems, {
    data: [],
    limit: 2,
    onChipAdd: () => {

    },
    placeholder: "Agrega algo",
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
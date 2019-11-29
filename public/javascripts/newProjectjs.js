document.addEventListener('DOMContentLoaded', function () {
  let elements = document.querySelectorAll('.modal');
  let ins = M.Modal.init(elements);
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
});
var elems = document.querySelectorAll('select');
var instances = M.FormSelect.init(elems, {});
//para las chips
var elems = document.querySelectorAll('.chips-m');
var instances = M.Chips.init(elems, {
  data: [],
  limit: 20,
  onChipAdd: () => {},
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
}); <
/script> <
script >
  document.querySelector('input[name="photoURL"]').addEventListener('change', (e) => {
    document.querySelector('label.custom-file-label span').innerText = e.target.files[0].name
  });
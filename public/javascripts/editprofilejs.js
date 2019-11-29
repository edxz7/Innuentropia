document.addEventListener('DOMContentLoaded', function () {


  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
  //para las chips
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
        'drawing': null,
        'realistic drawing': null,
        'digital draw': null,
        'pop artist': null,
        'lofi musician': null,
        'hip hop artist': null,
        'rapper': null,
        'videographer': null,
        'content creator': null,
        'tattoo artist': null,
        'director': null,
        'writter': null,
        'composer': null,
        'paiter': null,
        'visual desing': null,
        'photography': null,
        'photographer': null,
        'guitarist': null,
        'electric guitarist': null,
        'DJ': null,
        'baterist': null,
      },
      limit: 50,
      minLength: 3
    }
  });
});
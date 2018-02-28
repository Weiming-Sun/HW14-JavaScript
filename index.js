// Get references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');
var $datetimeInput = document.querySelector('#datetime');
var $searchBtn = document.querySelector('#search');

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener('click', handleSearchButtonClick);

// Set filtereddata to ufodata initially
// ufodata comes from the ufodata.js file
var filtereddata = ufodata;

// renderTable renders the filtereddata to the tbody
function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < filtereddata.length; i++) {
    // Get get the current data object and its fieldkeys
    var selectufodata = filtereddata[i];
    var fieldkeys = Object.keys(selectufodata);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fieldkeys.length; j++) {
      // For every field in the data object, create a new cell at set its inner text to be the current value at the current data's field
      var fieldkey = fieldkeys[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = selectufodata[fieldkey];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var ufodatadatetime = $datetimeInput.value.trim().toLowerCase();

  // Set filtereddata to an array of all data whose "datetime" matches the filter
  filtereddata = ufodata.filter(function(ufosighting) {
    var ufosightingdatetime = ufosighting.datetime.toLowerCase();

    // If true, add the address to the filtereddata, otherwise don't add it to filtereddata
    return ufosightingdatetime === ufodatadatetime;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();

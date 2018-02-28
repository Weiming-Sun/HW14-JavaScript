// Get references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');
var $datetimeInput = document.querySelector('#datetime');
var $searchBtn = document.querySelector('#search');

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener('click', handleSearchButtonClick);

// Set filteredAddresses to addressData initially
// addressData comes from the addressData.js file
var filtereddata = ufodata;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < filtereddata.length; i++) {
    // Get get the current address object and its fields
    var selectufodata = filtereddata[i];
    var fieldkeys = Object.keys(selectufodata);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fieldkeys.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var fieldkey = fieldkeys[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = selectufodata[fieldkey];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var ufodatadatetime = $datetimeInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filtereddata = ufodata.filter(function(ufosighting) {
    var ufosightingdatetime = ufosighting.datetime.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return ufosightingdatetime === ufodatadatetime;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();

/*
    * LOVELY THINGS
    */

var options = {
  valueNames: [ 'name', 'description', 'category' ]
};

var featureList = new List('lovely-things-list', options);

$('#filter-games').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Scholarships") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-beverages').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Grants") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});
$('#filter-none').click(function() {
  featureList.filter();
  return false;
});


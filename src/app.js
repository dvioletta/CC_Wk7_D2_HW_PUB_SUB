const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const InstrumentsMenuView = require('./views/instruments_menu_view.js');
const InstrumentsInfoView = require('./views/instruments_info_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families'); const instrumentFamilyDropdown = new InstrumentsMenuView(selectElement);
  console.log('hi');
  instrumentFamilyDropdown.bindEvents();
});

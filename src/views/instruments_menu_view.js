const PubSub = require('../helpers/pub_sub.js');

const InstrumentsMenuView = function(element){
  this.element = element;
}

InstrumentsMenuView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:selected-instrument-ready', (evt) => {
    const instrumentsFamilyData = evt.detail;
    console.log(instrumentsFamilyData);
    this.populate(instrumentsFamilyData);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target;
    console.log(selectedIndex);
    PubSub.publish('InstrumentsMenuView:change', selectedIndex);
  });

};

InstrumentsMenuView.prototype.populate = function(instrumentFamilies){
  instrumentFamilies.forEach((instrumentFamilies, index) => {
    const option = document.createElement('option');
    option.textContent = instrumentFamilies.name
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = InstrumentsMenuView;

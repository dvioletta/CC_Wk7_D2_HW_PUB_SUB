const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish ('Instruments:selected-instrument-ready', this.data);
  console.log(this.data);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishInstrumentDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishInstrumentDetail =
function(instrumentName){
  console.log(instrumentName);
  let selectedInstrument

  for (let instrument of this.data) {
    if (instrumentfamily.name === instrumentFamilyName){
      selectedInstrument = instrument
    }
  }
  console.log(selectedInstrument);
  PubSub.publish('Instruments:selected-instrument-ready', selectedInstrument)
};

module.exports = InstrumentFamilies;

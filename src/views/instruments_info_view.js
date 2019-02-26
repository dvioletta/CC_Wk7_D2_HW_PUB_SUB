const PubSub = require('../helpers/pub_sub.js');

const InstrumentsInfoView = function(container){
  this.container = container;
}

InstrumentsInfoView.protoytpe.bindEvents = function(){
  PubSub.subscribe('Instruments:selected-instrument-ready', (evt) => {
    const instrument = evt.detail;
    this.renter(instrument);
  });
};

InstrumentsInfoView.protoytpe.render = function(instrument){
  this.container.innerHTML = ' ';

  const heading = this.createHeading(instrument);
  const infoList = this.createInfoList(instrument);

  this.container.appendChild(heading);
  this.container.appendChild(infoList);
};

PlanetInfoView.prototype.createHeading = function(instrument) {
  const heading = document.createElement('h2');
  heading.textContent = instrumentFamilyData.name;
  return heading;
};




module.exports = InstrumentsInfoView;

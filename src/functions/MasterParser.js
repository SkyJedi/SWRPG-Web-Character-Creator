import * as firebase from 'firebase';
var List = require('./xmlNames');
var parser = require('./xmlParser');

function Build() {
  parser.loadXML('Classes', null, (importXML) => {
    firebase.database().ref().child('master').child('Classes').set(importXML);
  });

  parser.loadXML('Hooks', null, (importXML) => {
    firebase.database().ref().child('master').child('Hooks').set(importXML);
  });

  parser.loadXML('Obligations', null, (importXML) => {
    firebase.database().ref().child('master').child('Obligations').set(importXML);
  });

  parser.loadXML('Skills', null, (importXML) => {
    firebase.database().ref().child('master').child('Skills').set(importXML);
  });

  parser.loadXML('Talents', null, (importXML) => {
    firebase.database().ref().child('master').child('Talents').set(importXML);
  });

  parser.loadXML('Motivations', null, (importXML) => {
    firebase.database().ref().child('master').child('Motivations').set(importXML);
  });

  parser.loadXML('SpecificMotivations', null, (importXML) => {
    firebase.database().ref().child('master').child('SpecificMotivations').set(importXML);
  });

  let listCareer = {};
  List.Careers.forEach((Career) => {
    parser.loadXML('Careers', Career, (importXML) => {
      listCareer[importXML.Key]=importXML;
      firebase.database().ref().child('master').child('Careers').set(listCareer);
    });
  });

  let listSpecializations = {};
  List.Specializations.forEach((Specialization) => {
    parser.loadXML('Specializations', Specialization, (importXML) => {
      listSpecializations[importXML.Key]=importXML;
      firebase.database().ref().child('master').child('Specializations').set(listSpecializations);
    });
  });

  let listSpecies = {};
  List.Species.forEach((Species) => {
    parser.loadXML('Species', Species, (importXML) => {
      listSpecies[importXML.Key]=importXML;
      firebase.database().ref().child('master').child('Species').set(listSpecies);
    });
  });
}

module.exports = {
    Build: Build,
};

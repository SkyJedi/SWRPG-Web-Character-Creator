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

  let list = {};
  List.Careers.forEach((Career) => {
    parser.loadXML('Careers', Career, (importXML) => {
      list[importXML.Key]=importXML;
      firebase.database().ref().child('master').child('Careers').set(list);
    });
  });

  let list1 = {}
  List.Specializations.forEach((Specialization) => {
    parser.loadXML('Specializations', Specialization, (importXML) => {
      list1[importXML.Key]=importXML;
      firebase.database().ref().child('master').child('Specializations').set(list1);
    });
  });

  List.Species.forEach((Species) => {
    parser.loadXML('Species', Species, (importXML) => {
      list[importXML.Key]=importXML;
      firebase.database().ref().child('master').child('Species').set(list);
    });
  });
}

module.exports = {
    Build: Build,
};

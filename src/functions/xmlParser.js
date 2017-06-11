function loadXML(type, file, cb) {



  /*var origin = window.location.origin;
  request(`${origin}/Data/${type}/${file}.xml`, function(error, response, body) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(body, 'application/xml');
      Species(doc);
  });
}*/


  var xhttp = new XMLHttpRequest();
  var importXML = {};
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      switch (type) {
        case 'Species':
          importXML = Species(this.responseXML);
          break;
        default:
          break;
      }
      cb(importXML);
    }
  }
  xhttp.open('GET', `/Data/${type}/${file}.xml`, true);
  xhttp.send();
}


function Species(xmlDoc) {
/*  var topLevel = ['Key', 'Name', 'Description', 'Sources', 'StartingChars', 'StartingAttrs', 'SkillModifiers', 'TalentModifiers'];
  var StartingChars = ['Brawn', 'Agility', 'Intellect', 'Cunning', 'Willpower', 'Presence'];
  var StartingAttrs = ['WoundThreshold', 'StrainThreshold', 'Experience'];
  var SkillModifiers = {SkillModifier: ['Key', 'RankStart', 'RankLimit']};
  var TalentModifiers = {TalentModifier: ['Key', 'RankAdd']};*/
  var data = {};
  data['Key'] = xmlDoc.getElementsByTagName('Key')[0].childNodes[0].nodeValue;
  data['Name'] = xmlDoc.getElementsByTagName('Name')[0].childNodes[0].nodeValue;
  data['Description'] = xmlDoc.getElementsByTagName('Description')[0].childNodes[0].nodeValue;
  data['StartingChars'] = { 'Brawn': xmlDoc.getElementsByTagName('Brawn')[0].childNodes[0].nodeValue,
                            'Agility': xmlDoc.getElementsByTagName('Agility')[0].childNodes[0].nodeValue,
                            'Intellect': xmlDoc.getElementsByTagName('Intellect')[0].childNodes[0].nodeValue,
                            'Cunning': xmlDoc.getElementsByTagName('Cunning')[0].childNodes[0].nodeValue,
                            'Willpower': xmlDoc.getElementsByTagName('Willpower')[0].childNodes[0].nodeValue,
                            'Presence': xmlDoc.getElementsByTagName('Presence')[0].childNodes[0].nodeValue};

  data['StartingAttrs'] = { 'WoundThreshold': xmlDoc.getElementsByTagName('WoundThreshold')[0].childNodes[0].nodeValue,
                            'StrainThreshold': xmlDoc.getElementsByTagName('StrainThreshold')[0].childNodes[0].nodeValue,
                            'Experience': xmlDoc.getElementsByTagName('Experience')[0].childNodes[0].nodeValue};


  data['Description'] = data['Description'].replace(/\[H4\]/g, '<h4>').replace(/\[h4\]/g, '</h4> <p>').replace(/\[P\]/g, '</p> <p>').replace(/\[B\]/g, '<b>').replace(/\[b\]/g, '</b>') + '</p>';

  return data;
}

module.exports = {
    loadXML: loadXML,
    Species: Species,
};

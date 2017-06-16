function loadXML(type, file, cb) {

  var xhttp = new XMLHttpRequest();
  var importXML = {};
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      switch (type) {
        case 'Species':
          importXML = Species(this.responseXML);
          break;
        case 'Classes':
          importXML = Classes(this.responseXML);
          break;
        case 'Hooks':
          importXML = Hooks(this.responseXML);
          break;
        case 'className':
          importXML = getclassNameList(this.responseXML);
          break;
        default:
          break;
      }
      cb(importXML);
    }
  }
  if (file !== null) xhttp.open('GET', `/Data/${type}/${file}.xml`, true);
  else xhttp.open('GET', `/Data/${type}.xml`, true);
  xhttp.send();
}


function formatDescription(object) {
  object['Description'] = object['Description'].replace(/\[H4\]/g, '<h4>').replace(/\[h4\]/g, '</h4> <p>').replace(/\[P\]/g, '</p> <p>').replace(/\[B\]/g, '<b>').replace(/\[b\]/g, '</b>') + '</p>';
  return object;
}

function getclassNameList(xmlDoc) {
}



function Classes(xmlDoc) {
  let final = {};
  let children = ['Key', 'Name', 'Description']
  let x = xmlDoc.getElementsByTagName('Class');
  for(var i=0; i<x.length; i++) {
    let key =  x[i].getElementsByTagName('Key')[0].textContent;
    let childArray = {};
    for(var j=0; j<children.length; j++) {
    childArray[children[j]] = x[i].getElementsByTagName(children[j])[0].textContent;
    }
    childArray['Source'] = x[i].getElementsByTagName('Source')[0].textContent + ' ' +x[i].getElementsByTagName('Source')[0].attributes[0].nodeName + ' ' + x[i].getElementsByTagName('Source')[0].attributes[0].value;
    final[key] = formatDescription(childArray);
  }
  return final;

}

function Hooks(xmlDoc) {
    let final = {};
    let children = ['Key', 'Name', 'Description', 'Source']
    let x = xmlDoc.getElementsByTagName('Hook');
    for(var i=0; i<x.length; i++) {
      let key =  x[i].getElementsByTagName('Key')[0].textContent;
      let childArray = {};
      for(var j=0; j<children.length; j++) {
      childArray[children[j]] = x[i].getElementsByTagName(children[j])[0].textContent;
      }
      childArray['Source'] = x[i].getElementsByTagName('Source')[0].textContent + ' ' +x[i].getElementsByTagName('Source')[0].attributes[0].nodeName + ' ' + x[i].getElementsByTagName('Source')[0].attributes[0].value;
      final[key] = formatDescription(childArray);
    }
    return final;
}


function Species(xmlDoc) {
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
};

function loadXML(type, file, cb) {

  var xhttp = new XMLHttpRequest();
  var importXML = {};
  xhttp.onreadystatechange = function() {
    let basics = ['Key', 'Name', 'Description'];
    if (this.readyState === 4 && this.status === 200) {
      switch (type) {
        case 'Species':
          importXML = Species(this.responseXML, basics);
          break;
        case 'Classes':
          importXML = masterParse(this.responseXML, 'Class', basics);
          break;
        case 'Hooks':
          importXML = masterParse(this.responseXML, 'Hook', basics);
          break;
        case 'Obligations':
          importXML = masterParse(this.responseXML, 'Obligation', basics);
          break;
        case 'Careers':
          importXML = Careers(this.responseXML, basics);
          break;
        case 'Specializations':
          importXML = Specializations(this.responseXML, basics);
          break;
        case 'Skills':
          basics = basics.concat(['CharKey', 'TypeValue'])
          importXML = masterParse(this.responseXML, 'Skill', basics);
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

function masterParse(xmlDoc, type, basics) {
  let final = {};
  let x = xmlDoc.getElementsByTagName(type);
  for(var i=0; i<x.length; i++) {
    let key =  x[i].getElementsByTagName('Key')[0].textContent;
    let childArray = parseBasics(x[i], basics);
    childArray['Source'] = parseSource(x[i]);
    final[key] = childArray;
  }
  return final;
}

function formatDescription(object) {
  object['Description'] = object['Description'].replace(/\[H4\]/g, '<h4>').replace(/\[h4\]/g, '</h4> <p>').replace(/\[P\]/g, '</p> <p>').replace(/\[B\]/g, '<b>').replace(/\[b\]/g, '</b>') + '</p>';
  return object;
}

function parseBasics(xml, basics) {
  let basicsArray = {};
  for(var j=0; j<basics.length; j++) {
    basicsArray[basics[j]] = xml.getElementsByTagName(basics[j])[0].textContent;
  }
  return formatDescription(basicsArray);
}

function parseSource (xml) {
  let source = [];
  if (xml.getElementsByTagName('Sources')[0] === undefined) return xml.getElementsByTagName('Source')[0].textContent;
  xml = xml.getElementsByTagName('Source')
  if (xml.length > 0) {
    for (var k=0; k<xml.length; k++) {
    source.push(xml[0].textContent + ' ' +xml[0].attributes[0].nodeName + ' ' + xml[0].attributes[0].value);
    }
  }
  return source;
}

function parseChildren (xml, parent) {
  let source = [];
  if (xml.getElementsByTagName(parent)[0] === undefined) return xml.getElementsByTagName(parent)[0].textContent;
  xml = xml.getElementsByTagName(parent)[0].children
  if (xml.length > 0) {
    for (var k=0; k<xml.length; k++) {
      source.push(xml[k].textContent)
    }
  }
  return source;
}

function parseSpeciesModifers(xml, mod) {
  if (xml.getElementsByTagName(mod)[0] === undefined)  return '';
  else {
    let modXML = xml.getElementsByTagName(mod.slice(0, -1))
    let Modifiers = [];
    for (var i=0; i<modXML.length; i++) {
      let Modifier = {};
      for (var j=0; j<modXML[i].children.length; j++) {
        Modifier[modXML[i].children[j].tagName] = modXML[i].children[j].textContent;
      }
      Modifiers.push(Modifier);
    }
  return Modifiers;
  }
}

function Species(xml, basics) {
  var final = parseBasics(xml, basics);
  final['Source'] = parseSource(xml);

  final['StartingChars'] = {'Brawn': xml.getElementsByTagName('Brawn')[0].childNodes[0].nodeValue,
                            'Agility': xml.getElementsByTagName('Agility')[0].childNodes[0].nodeValue,
                            'Intellect': xml.getElementsByTagName('Intellect')[0].childNodes[0].nodeValue,
                            'Cunning': xml.getElementsByTagName('Cunning')[0].childNodes[0].nodeValue,
                            'Willpower': xml.getElementsByTagName('Willpower')[0].childNodes[0].nodeValue,
                            'Presence': xml.getElementsByTagName('Presence')[0].childNodes[0].nodeValue};

  final['StartingAttrs'] = {'WoundThreshold': xml.getElementsByTagName('WoundThreshold')[0].childNodes[0].nodeValue,
                            'StrainThreshold': xml.getElementsByTagName('StrainThreshold')[0].childNodes[0].nodeValue,
                            'Experience': xml.getElementsByTagName('Experience')[0].childNodes[0].nodeValue};

  final['SkillModifiers'] = parseSpeciesModifers(xml, 'SkillModifiers');
  final['TalentModifers'] = parseSpeciesModifers(xml, 'TalentModifiers');
  final['WeaponModifers'] = parseSpeciesModifers(xml, 'WeaponModifiers');
  return final;
}

function Careers(xml, basics) {
  var final = parseBasics(xml, basics);
  final['Source'] = parseSource(xml);
  final['CareerSkills'] = parseChildren(xml, 'CareerSkills');
  final['Specializations'] = parseChildren(xml, 'Specializations');
  return final;
}

function Specializations(xml, basics) {
  var final = parseBasics(xml, basics);
  final['Source'] = parseSource(xml);
  final['CareerSkills'] = parseChildren(xml, 'CareerSkills');
  return final;
}

module.exports = {
    loadXML: loadXML,
};

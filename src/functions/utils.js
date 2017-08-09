
function calcStat(currentCharacter, stat) {
  stat = stat.toLowerCase();
  let calcStat = 0
  switch (stat) {
    case 'wounds':
      calcStat = +currentCharacter.selectedSpecies.StartingAttrs.WoundThreshold
      break;
    case 'strain':
      calcStat = +currentCharacter.selectedSpecies.StartingAttrs.StrainThreshold
      break;
    case 'soak':
      calcStat = +currentCharacter.selectedSpecies.StartingChars.Brawn;
      break;
    case 'brawn':
      calcStat = +currentCharacter.selectedSpecies.StartingChars.Brawn;
      break;
    case 'agility':
      calcStat = +currentCharacter.selectedSpecies.StartingChars.Agility;
      break;
    case 'intellect':
      calcStat = +currentCharacter.selectedSpecies.StartingChars.Intellect;
      break;
    case 'cunning':
      calcStat = +currentCharacter.selectedSpecies.StartingChars.Cunning;
      break;
    case 'willpower':
      calcStat = +currentCharacter.selectedSpecies.StartingChars.Willpower;
      break;
    case 'presence':
      calcStat = +currentCharacter.selectedSpecies.StartingChars.Presence;
      break;
    default:
      break;
  }
  return calcStat;
}

module.exports = {
  calcStat: calcStat,
};

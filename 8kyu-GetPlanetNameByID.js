function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
      break;
  }

  console.log(name);
}

getPlanetName(1);
getPlanetName(2);
getPlanetName(3);
getPlanetName(4);
getPlanetName(5);
getPlanetName(6);
getPlanetName(7);
getPlanetName(8);

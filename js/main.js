let history = document.querySelector("#history");
let nav = document.querySelectorAll(".nav");
let sections = document.querySelectorAll("section");
let change = document.querySelector("h2");
let home  = document.querySelector("#home");
let fet = document.querySelector("#fet");
let pen = document.querySelector("#pen");
let ore = document.querySelector("#ore");
let rav = document.querySelector("#rav");
let rot = document.querySelector("#rot");
let lom = document.querySelector("#lom");
let rotateone = document.querySelector('#hisone');
let rotatetwo = document.querySelector('#histwo');
let image = document.querySelector('#sauceone');
let longone= 'images/longone.jpg'
let longtwo = 'images/longtwo.jpg';
let imagetwo = document.querySelector('#saucetwo');
let tubeone= 'images/tubeone.jpg'
let tubetwo = 'images/tubetwo.jpg';
let imagethree = document.querySelector('#saucethree');
let stuffedone= 'images/stuffedone.jpg'
let stuffedtwo = 'images/stuffedtwo.jpg';
let imagefour = document.querySelector('#saucefour');
let shapeone= 'images/shapeone.jpg'
let shapetwo = 'images/shapetwo.jpg';


function hideAllSections(){
  sections.forEach(function(el){
    el.style.display='none';

  });
}


hideAllSections();
document.querySelector('#home').style.display = 'block';

nav.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAllSections();

    switch (e.target.getAttribute('id')) {
      case 'home':
        document.querySelector('#home')
          .style.display = 'block';
          document.querySelector("#heading").textContent="Want to know more about pasta?";
          document.querySelector("h2").textContent="";
        break;
      case 'history':
        document.querySelector('#historyPasta')
        	.style.display = 'block';
          document.querySelector("#heading").textContent="HISTORY OF PASTA";
          document.querySelector("h2").textContent="The amazing history of pasta!";
        break;
        case 'groups':
          document.querySelector('#pastaGroups')
            .style.display = 'block';
            document.querySelector("#heading").textContent="THE FIVE PASTA GROUPS";
            document.querySelector("h2").textContent="Long, Tube, Soup, Stuffed, & Special Shape!";
          break;
          case 'popular':
            document.querySelector('#popularPasta')
              .style.display = 'block';
              document.querySelector("#heading").textContent="THE MOST POPULAR PASTA DISHES";
              document.querySelector("h2").textContent="Below is the most searched pasta dish in each U.S. State!";
            break;
            case 'orign':
              document.querySelector('#pastaOrigin')
                .style.display = 'block';
                document.querySelector("#heading").textContent="WHERE DID YOUR FAVORITE PASTA ORIGINATE?";
                document.querySelector("h2").textContent="In one of the Italy's 20 regions!";
              break;
              case 'paring':
                document.querySelector('#saucePairings')
                  .style.display = 'block';
                  document.querySelector("#heading").textContent="THERE ARE NO DIFINITIVE RULES TO SAUCE PAIRINGS";
                  document.querySelector("h2").textContent="However there are some general guidelines:";
                break;

    }
  }
});


fet.onclick = () => {
  if (fet.getAttribute('src') === 'images/long/fettuccine.jpg')
  {
      fet.setAttribute('src', 'images/long/angelhair.jpg');
  } else if (fet.getAttribute('src') === 'images/long/angelhair.jpg')
  {
      fet.setAttribute('src', 'images/long/spaghetti.jpg');
  } else if (fet.getAttribute('src') === 'images/long/spaghetti.jpg')
  {
      fet.setAttribute('src', 'images/long/pappardelle.jpg');
  } else {
      fet.setAttribute('src', 'images/long/fettuccine.jpg');
  }
}

pen.onclick = () => {
  if (pen.getAttribute('src') === 'images/tube/penne.jpg')
  {
      pen.setAttribute('src', 'images/tube/rigatoni.jpg');
  } else if (pen.getAttribute('src') === 'images/tube/rigatoni.jpg')
  {
      pen.setAttribute('src', 'images/tube/elbow.jpg');
  } else if (pen.getAttribute('src') === 'images/tube/elbow.jpg')
  {
      pen.setAttribute('src', 'images/tube/macaroni.jpg');
  } else {
      pen.setAttribute('src', 'images/tube/penne.jpg');
  }
}


ore.onclick = () => {
  if (ore.getAttribute('src') === 'images/soup/galets.jpg')
  {
      ore.setAttribute('src', 'images/soup/alphabet.jpg');
  } else if (ore.getAttribute('src') === 'images/soup/alphabet.jpg')
  {
      ore.setAttribute('src', 'images/soup/orecchiette.jpg');
  } else if (ore.getAttribute('src') === 'images/soup/orecchiette.jpg')
  {
      ore.setAttribute('src', 'images/soup/orzo.jpg');
  } else {
      ore.setAttribute('src', 'images/soup/galets.jpg');
  }
}


rav.onclick = () => {
  if (rav.getAttribute('src') === 'images/stuffed/ravioli.jpg')
  {
      rav.setAttribute('src', 'images/stuffed/tortelini.jpg');
  } else if (rav.getAttribute('src') === 'images/stuffed/tortelini.jpg')
  {
      rav.setAttribute('src', 'images/stuffed/raviolitwo.jpg');
  } else if (rav.getAttribute('src') === 'images/stuffed/raviolitwo.jpg')
  {
      rav.setAttribute('src', 'images/stuffed/tortelinitwo.jpg');
  } else {
      rav.setAttribute('src', 'images/stuffed/ravioli.jpg');
  }
}


rot.onclick = () => {
  if (rot.getAttribute('src') === 'images/specialshape/rotini.jpg')
  {
      rot.setAttribute('src', 'images/specialshape/rotelle.jpg');
  } else if (rot.getAttribute('src') === 'images/specialshape/rotelle.jpg')
  {
      rot.setAttribute('src', 'images/specialshape/farfalle.jpg');
  } else if (rot.getAttribute('src') === 'images/specialshape/farfalle.jpg')
  {
      rot.setAttribute('src', 'images/specialshape/cavatelli.jpg');
  } else {
      rot.setAttribute('src', 'images/specialshape/rotini.jpg');
  }
}


lom.onclick = () => {
  if (lom.getAttribute('src') === 'images/Lombardy.jpg')
  {
      lom.setAttribute('src', 'images/Lazio.jpg');
  } else if (lom.getAttribute('src') === 'images/Lazio.jpg')
  {
      lom.setAttribute('src', 'images/Campania.jpg');
  } else if (lom.getAttribute('src') === 'images/Campania.jpg')
  {
      lom.setAttribute('src', 'images/Puglia.jpg');
  }  else if (lom.getAttribute('src') === 'images/Puglia.jpg')
  {
      lom.setAttribute('src', 'images/Sicily.jpg');
  }  else if (lom.getAttribute('src') === 'images/Sicily.jpg')
  {
      lom.setAttribute('src', 'images/Tuscany.jpg');
  }  else {
      lom.setAttribute('src', 'images/Lombardy.jpg');
  }
}


rotateone.onmouseenter = (e) => {
	// change image tilt by changing a CSS class
   e.target.classList.remove('rotate-none');
   e.target.classList.add('rotate-left');
};
rotateone.onmouseleave = (e) => {
// change image tilt back by changing a CSS class
   e.target.classList.add('rotate-none');
   e.target.classList.remove('rotate-left');
};

rotatetwo.onmouseenter = (e) => {
	// change image tilt by changing a CSS class
   e.target.classList.remove('rotate-none');
   e.target.classList.add('rotate-right');
};
rotatetwo.onmouseleave = (e) => {
// change image tilt back by changing a CSS class
   e.target.classList.add('rotate-none');
   e.target.classList.remove('rotate-right');
};


image.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', longtwo);
};

image.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', longone);
};

imagetwo.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', tubetwo);
};

imagetwo.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', tubeone);
};

imagethree.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', stuffedtwo);
};

imagethree.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', stuffedone);
};

imagefour.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', shapetwo);
};

imagefour.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', shapeone);
};



// code for annimation from Tobias Ahlin https://tobiasahlin.com/moving-letters/#2
var textWrapper = document.querySelector('.main');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.main .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


// leaflet code
let map = L.map('map').setView([39.603286, 12.429925], 4.32);

L.tileLayer('https://api.mapbox.com/styles/v1/juliarubinelli/ckwy3fs5133nx14lhsfxbcfea/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianVsaWFydWJpbmVsbGkiLCJhIjoiY2t3eTNlZmV6MGg3ODJxcTl2MmpvbzBlaiJ9.tiKKPuHUul9AZ22sZ7QnyA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
}).addTo(map);


var markerOne = L.marker([45.657581, 9.963600]).addTo(map);
var markerTwo = L.marker([41.872429, 12.818070]).addTo(map);
var markerThree = L.marker([40.928490, 14.197450]).addTo(map);
var markerFour = L.marker([41.222500, 16.066030]).addTo(map);
var markerFive = L.marker([37.152390, 13.789310]).addTo(map);
var markerSix = L.marker([43.771049, 11.248621]).addTo(map);

markerOne.bindPopup("<b>Lombardy: Home to Farfalle</b>");
markerTwo.bindPopup("<b>Lazio: Home to Bucatini</b>").openPopup();
markerThree.bindPopup("<b>Campania: Home to Penne</b>");
markerFour.bindPopup("<b>Puglia: Home to Orecchiette</b>");
markerFive.bindPopup("<b>Sicily: Home to Ziti</b>");
markerSix.bindPopup("<b>Tuscany: Home to Gigli</b>");

// highcharts code
Highcharts.chart('chartOne', {
  chart: {
    type: 'tilemap',
    inverted: true,
    height: '80%'
  },

  accessibility: {
    description: 'A tile map represents the states of the USA by population in 2016. The hexagonal tiles are positioned to geographically echo the map of the USA. A color-coded legend states the population levels as below 1 million (beige), 1 to 5 million (orange), 5 to 20 million (pink) and above 20 million (hot pink). The chart is interactive, and the individual state data points are displayed upon hovering. Three states have a population of above 20 million: California (39.3 million), Texas (27.9 million) and Florida (20.6 million). The northern US region from Massachusetts in the Northwest to Illinois in the Midwest contains the highest concentration of states with a population of 5 to 20 million people. The southern US region from South Carolina in the Southeast to New Mexico in the Southwest contains the highest concentration of states with a population of 1 to 5 million people. 6 states have a population of less than 1 million people; these include Alaska, Delaware, Wyoming, North Dakota, South Dakota and Vermont. The state with the lowest population is Wyoming in the Northwest with 584,153 people.',
    screenReaderSection: {
      beforeChartFormat: '<h5>{chartTitle}</h5>' +
        '<div>{chartSubtitle}</div>' +
        '<div>{chartLongdesc}</div>' +
        '<div>{viewTableButton}</div>'
    },
    point: {
      valueDescriptionFormat: '{index}. {xDescription}, {point.value}.'
    }
  },

  title: {
    text: 'The most popular pasta dish in each U.S. state'
  },

  subtitle: {
    text: 'Source:<a href="https://www.shaneco.com/theloupe/uncategorized/popular-pasta-dish/">The Loupe</a>'
  },

  xAxis: {
    visible: false
  },

  yAxis: {
    visible: false
  },

  colorAxis: {
    dataClasses: [{
        from: 'Fettuccine Alfredo',
        color: '#A15D98',
        name: 'Fettuccine Alfredo'
      }, {
        from: 'Gnocchi',
        color: '#C36C5D ',
        name: 'Gnocchi'
      }, {
        from: 'Spaghetti',
        color: '#EEBAB2',
        name: 'Spaghetti'
      }, {
        from: 'Tortellini',
        color: '#A4BEA0',
        name: 'Tortellini'
      }, {
        from: 'Spaghetti with Meatballs',
        color: '#26ABFF',
        name: 'Spaghetti with Meatballs'
      }, {
        from: 'Squid Ink Pasta',
        color: '#F5BFD2',
        name: 'Squid Ink Pasta'
      }, {
        from: 'Cannelloni',
        color: '#A1CDCE',
        name: 'Cannelloni'
      }, {
        from: 'Lasagna',
        color: '#ffe119',
        name: 'Lasagna'
      }, {
        from: 'Lobster Mac N Cheese',
        color: '#C41E3A',
        name: 'Lobster Mac N Cheese'
      }, {
        from: 'Manicotti',
        color: '#008080',
        name: 'Manicotti'
      }, {
        from: 'Linguine with Clam Sauce',
        color: '#22BC22',
        name: 'Linguine with Clam Sauce'
      }, {
        from: 'Macaroni and Cheese',
        color: '#BFEF45',
        name: 'Macaroni and Cheese'
      }, {
        from: 'Pasta Puttanesca',
        color: '#F032E6',
        name: 'Pasta Puttanesca'
      }, {
        from: 'Penne alla Vodka',
        color: '#F27348',
        name: 'Penne alla Vodka'
      }, {
        from: 'Ravioli',
        color: '#AAFFC3',
        name: 'Ravioli'
      }, {
        from: 'Shrimp Scampi',
        color: '#000075',
        name: 'Shrimp Scampi'
      }, {
        from: 'Spaghetti Aglio e Olio',
        color: '#FF69B4',
        name: 'Spaghetti Aglio e Olio'
      }, {
        from: 'Spaghetti Carbonara',
        color: '#F7CE76',
        name: 'Spaghetti Carbonara'
      }, {
        from: 'Trufffle Pasta',
        color: '#9C9358',
        name: 'Truffle Pasta'
      }

    ]
  },

  tooltip: {
    headerFormat: '',
    pointFormat: 'The most poular pasta in <b> {point.name}</b> is <b>{point.value}</b>'
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.hc-a2}',
        color: '#000000',
        style: {
          textOutline: false
        }
      }
    }
  },

  series: [{
    name: '',
    data: [{
      'hc-a2': 'AL',
      name: 'Alabama',
      region: 'South',
      color: '#EEBAB2',
      x: 6,
      y: 7,
      value: 'Spaghetti'
    }, {
      'hc-a2': 'AK',
      name: 'Alaska',
      region: 'West',
      color: '#ffe119',
      x: 0,
      y: 0,
      value: 'Lasagna'
    }, {
      'hc-a2': 'AZ',
      name: 'Arizona',
      region: 'West',
      color: '#A15D98',
      x: 5,
      y: 3,
      value: 'Fettuccine Alfredo'
    }, {
      'hc-a2': 'AR',
      name: 'Arkansas',
      region: 'South',
      color: '#EEBAB2',
      x: 5,
      y: 6,
      value: 'Spaghetti'
    }, {
      'hc-a2': 'CA',
      name: 'California',
      region: 'West',
      color: '#C41E3A',
      x: 5,
      y: 2,
      value: 'Lobster Mac N Cheese'
    }, {
      'hc-a2': 'CO',
      name: 'Colorado',
      region: 'West',
      color: '#C36C5D ',
      x: 4,
      y: 3,
      value: 'Gnocchi'
    }, {
      'hc-a2': 'CT',
      name: 'Connecticut',
      region: 'Northeast',
      color: '#22BC22',
      x: 3,
      y: 11,
      value: 'Linguine with Clam Sauce'
    }, {
      'hc-a2': 'DE',
      name: 'Delaware',
      region: 'South',
      color: '#000075',
      x: 4,
      y: 9,
      value: 'Shrimp Scampi'
    }, {
      'hc-a2': 'DC',
      name: 'District of Columbia',
      region: 'South',
      x: 4,
      y: 10,
      value: 'Pasta Puttanesca'
    }, {
      'hc-a2': 'FL',
      name: 'Florida',
      region: 'South',
      color: '#C41E3A',
      x: 8,
      y: 8,
      value: 'Lobster Mac N Cheese'
    }, {
      'hc-a2': 'GA',
      name: 'Georgia',
      region: 'South',
      color: '#A15D98',
      x: 7,
      y: 8,
      value: 'Fettuccine Alfredo'
    }, {
      'hc-a2': 'HI',
      name: 'Hawaii',
      region: 'West',
      color: '#26ABFF',
      x: 8,
      y: 0,
      value: 'Spaghetti with Meatballs'
    }, {
      'hc-a2': 'ID',
      name: 'Idaho',
      region: 'West',
      color: '#C36C5D ',
      x: 3,
      y: 2,
      value: 'Gnocchi'
    }, {
      'hc-a2': 'IL',
      name: 'Illinois',
      region: 'Midwest',
      color: '#F5BFD2',
      x: 3,
      y: 6,
      value: 'Squid Ink Pasta'
    }, {
      'hc-a2': 'IN',
      name: 'Indiana',
      region: 'Midwest',
      color: '#A15D98',
      x: 3,
      y: 7,
      value: 'Fettuccine Alfredo'
    }, {
      'hc-a2': 'IA',
      name: 'Iowa',
      region: 'Midwest',
      color: '#A4BEA0',
      x: 3,
      y: 5,
      value: 'Tortellini'
    }, {
      'hc-a2': 'KS',
      name: 'Kansas',
      region: 'Midwest',
      color: '#A15D98',
      x: 5,
      y: 5,
      value: 'Fettuccine Alfredo'
    }, {
      'hc-a2': 'KY',
      name: 'Kentucky',
      region: 'South',
      color: '#26ABFF',
      x: 4,
      y: 6,
      value: 'Spaghetti with Meatballs'
    }, {
      'hc-a2': 'LA',
      name: 'Louisiana',
      region: 'South',
      color: '#EEBAB2',
      x: 6,
      y: 5,
      value: 'Spaghetti'
    }, {
      'hc-a2': 'ME',
      name: 'Maine',
      region: 'Northeast',
      color: '#F7CE76',
      x: 0,
      y: 11,
      value: 'Spaghetti Carbonara'
    }, {
      'hc-a2': 'MD',
      name: 'Maryland',
      region: 'South',
      color: '#F5BFD2',
      x: 4,
      y: 8,
      value: 'Squid Ink Pasta'
    }, {
      'hc-a2': 'MA',
      name: 'Massachusetts',
      region: 'Northeast',
      color: '#C36C5D ',
      x: 2,
      y: 10,
      value: 'Gnocchi'
    }, {
      'hc-a2': 'MI',
      name: 'Michigan',
      region: 'Midwest',
      color: '#A15D98',
      x: 2,
      y: 7,
      value: 'Fettuccine Alfredo'
    }, {
      'hc-a2': 'MN',
      name: 'Minnesota',
      region: 'Midwest',
      color: '#C36C5D ',
      x: 2,
      y: 4,
      value: 'Gnocchi'
    }, {
      'hc-a2': 'MS',
      name: 'Mississippi',
      region: 'South',
      color: '#EEBAB2',
      x: 6,
      y: 6,
      value: 'Spaghetti'
    }, {
      'hc-a2': 'MO',
      name: 'Missouri',
      region: 'Midwest',
      color: '#A1CDCE',
      x: 4,
      y: 5,
      value: 'Cannelloni'
    }, {
      'hc-a2': 'MT',
      name: 'Montana',
      region: 'West',
      color: '#A15D98',
      x: 2,
      y: 2,
      value: 'Fettuccine Alfredo'
    }, {
      'hc-a2': 'NE',
      name: 'Nebraska',
      region: 'Midwest',
      color: '#008080',
      x: 4,
      y: 4,
      value: 'Manicotti'
    }, {
      'hc-a2': 'NV',
      name: 'Nevada',
      region: 'West',
      color: '#A1CDCE',
      x: 4,
      y: 2,
      value: 'Cannelloni'
    }, {
      'hc-a2': 'NH',
      name: 'New Hampshire',
      region: 'Northeast',
      color: '#AAFFC3',
      x: 1,
      y: 11,
      value: 'Ravioli'
    }, {
      'hc-a2': 'NJ',
      name: 'New Jersey',
      region: 'Northeast',
      color: '#F27348',
      x: 3,
      y: 10,
      value: 'Penne alla Vodka'
    }, {
      'hc-a2': 'NM',
      name: 'New Mexico',
      region: 'West',
      color: '#A15D98',
      x: 6,
      y: 3,
      value: 'Fettuccine Alfredo'
    }, {
      'hc-a2': 'NY',
      name: 'New York',
      region: 'Northeast',
      color: '#F5BFD2',
      x: 2,
      y: 9,
      value: 'Squid Ink Pasta'
    }, {
      'hc-a2': 'NC',
      name: 'North Carolina',
      region: 'South',
      color: '#A15D98',
      x: 5,
      y: 9,
      value: 'Fettuccine Alfredo'
    }, {
      'hc-a2': 'ND',
      name: 'North Dakota',
      region: 'Midwest',
      color: '#A4BEA0',
      x: 2,
      y: 3,
      value: 'Tortellini'
    }, {
      'hc-a2': 'OH',
      name: 'Ohio',
      region: 'Midwest',
      color: '#A15D98',
      x: 3,
      y: 8,
      value: 'Fettuccine Alfredo'
    }, {
      'hc-a2': 'OK',
      name: 'Oklahoma',
      region: 'South',
      color: '#A15D98',
      x: 6,
      y: 4,
      value: 'Fettuccine Alfredo'
    }, {
      'hc-a2': 'OR',
      name: 'Oregon',
      region: 'West',
      color: '#C36C5D ',
      x: 4,
      y: 1,
      value: 'Gnocchi'
    }, {
      'hc-a2': 'PA',
      name: 'Pennsylvania',
      region: 'Northeast',
      color: '#A4BEA0',
      x: 3,
      y: 9,
      value: 'Tortellini'
    }, {
      'hc-a2': 'RI',
      name: 'Rhode Island',
      region: 'Northeast',
      color: '#FF69B4',
      x: 2,
      y: 11,
      value: 'Spaghetti Aglio e Olio'
    }, {
      'hc-a2': 'SC',
      name: 'South Carolina',
      region: 'South',
      color: '#A15D98',
      x: 6,
      y: 8,
      value: 'Fettuccine Alfredo'
    }, {
      'hc-a2': 'SD',
      name: 'South Dakota',
      region: 'Midwest',
      color: '#A4BEA0',
      x: 3,
      y: 4,
      value: 'Tortellini'
    }, {
      'hc-a2': 'TN',
      name: 'Tennessee',
      region: 'South',
      color: '#A15D98',
      x: 5,
      y: 7,
      value: 'Fettuccine Alfredo'
    }, {
      'hc-a2': 'TX',
      name: 'Texas',
      region: 'South',
      color: '#EEBAB2',
      x: 7,
      y: 4,
      value: 'Spaghetti'
    }, {
      'hc-a2': 'UT',
      name: 'Utah',
      region: 'West',
      color: '#A15D98',
      x: 5,
      y: 4,
      value: 'Fettuccine Alfredo'
    }, {
      'hc-a2': 'VT',
      name: 'Vermont',
      region: 'Northeast',
      color: '#26ABFF',
      x: 1,
      y: 10,
      value: 'Spaghetti with Meatballs'
    }, {
      'hc-a2': 'VA',
      name: 'Virginia',
      region: 'South',
      color: '#BFEF45',
      x: 5,
      y: 8,
      value: 'Macaroni and Cheese'
    }, {
      'hc-a2': 'WA',
      name: 'Washington',
      region: 'West',
      color: '#9C9358',
      x: 2,
      y: 1,
      value: 'Truffle Pasta'
    }, {
      'hc-a2': 'WV',
      name: 'West Virginia',
      region: 'South',
      color: '#A15D98',
      x: 4,
      y: 7,
      value: 'Fettuccine Alfredo'
    }, {
      'hc-a2': 'WI',
      name: 'Wisconsin',
      region: 'Midwest',
      color: '#ffe119',
      x: 2,
      y: 5,
      value: 'Lasagna'
    }, {
      'hc-a2': 'WY',
      name: 'Wyoming',
      region: 'West',
      color: '#008080',
      x: 3,
      y: 3,
      value: 'Manicotti'
    }]
  }]
});

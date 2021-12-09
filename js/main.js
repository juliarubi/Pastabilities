let history = document.querySelector("#history");
let list = document.querySelectorAll(".list");
let sections = document.querySelectorAll("section");
let change = document.querySelector("h2");
let home  = document.querySelector("#home");


function hideAllSections(){
  sections.forEach(function(el){
    el.style.display='none';

  });
}

hideAllSections();
list.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAllSections();
    document.querySelector('#home').style.display = ‘block’;

    switch (e.target.getAttribute('id')) {
      case 'home':
        document.querySelector('#home')
          .style.display = 'block';
          document.querySelector("#changingheader").textContent="Want to know more about pasta?";
          document.querySelector("h2").textContent="";
        break;
      case 'history':
        document.querySelector('#historyPasta')
        	.style.display = 'block';
          document.querySelector("#changingheader").textContent="HISTORY OF PASTA";
          document.querySelector("h2").textContent="the amazing history of pasta";
        break;
        case 'groups':
          document.querySelector('#pastaGroups')
            .style.display = 'block';
            document.querySelector("#changingheader").textContent="THE FIVE PASTA GROUPS";
            document.querySelector("h2").textContent="there are five different types of pasta groups";
          break;
          case 'popular':
            document.querySelector('#popularPasta')
              .style.display = 'block';
              document.querySelector("#changingheader").textContent="THE MOST POPULAR TYPES OF PASTA";
              document.querySelector("h2").textContent="list of the most popular types";
            break;
            case 'orign':
              document.querySelector('#pastaOrigin')
                .style.display = 'block';
                document.querySelector("#changingheader").textContent="WHERE DID YOUR FAVORITE PASTA ORIGINATE?";
                document.querySelector("h2").textContent="The regions that the most popular pastas come from";
              break;
              case 'paring':
                document.querySelector('#saucePairings')
                  .style.display = 'block';
                  document.querySelector("#changingheader").textContent="WHAT SAUCE SHOULD I PAIR WITH MY PASTA?";
                  document.querySelector("h2").textContent="Sauce guide";
                break;

    } // end of switch


  } // end of function for clicking

}); // end of forEach()


// leaflet code
let map = L.map('map').setView([42.418185, 10.130797], 5.01);

L.tileLayer('https://api.mapbox.com/styles/v1/juliarubinelli/ckwy3fs5133nx14lhsfxbcfea/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianVsaWFydWJpbmVsbGkiLCJhIjoiY2t3eTNlZmV6MGg3ODJxcTl2MmpvbzBlaiJ9.tiKKPuHUul9AZ22sZ7QnyA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
}).addTo(map);


var markerOne = L.marker([45.440845, 12.315515]).addTo(map);
var markerTwo = L.marker([45.440845, 12.496365]).addTo(map);
var markerThree = L.marker([43.769562, 11.255814]).addTo(map);
var markerFour = L.marker([40.851799, 14.268120]).addTo(map);

markerOne.bindPopup("<b>Venice</b>");
markerTwo.bindPopup("<b>Rome</b>").openPopup();
markerThree.bindPopup("<b>florence</b>");
markerFour.bindPopup("<b>Naples</b>");

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

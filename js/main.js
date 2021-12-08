let history = document.querySelector("#history");
let list = document.querySelectorAll(".list")
let sections = document.querySelectorAll("section")
let change = document.querySelector("h2")


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


    switch (e.target.getAttribute('id')) {
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
              document.querySelector('#pastaOrign')
                .style.display = 'block';
                document.querySelector("#changingheader").textContent="WHERE DID YOUR FAVORITE PASTA ORIGINATE?";
                document.querySelector("h2").textContent="The regions that the most popular pastas come from";
              break;
              case 'paring':
                document.querySelector('#sauceParings')
                  .style.display = 'block';
                  document.querySelector("#changingheader").textContent="WHAT SAUCE SHOULD I PAIR WITH MY PASTA?";
                  document.querySelector("h2").textContent="Sauce guide";
                break;

    } // end of switch


  } // end of function for clicking

}); // end of forEach()

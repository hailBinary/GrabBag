//customize
var stroke_col = "#f6f5f8";
var cell_col = "#0049b7";
var correct_col = "#00721f";
var incorrect_col = "#A50205";

//sounds

function Cell(i, j, question) {
    this.i = i;
    this.j = j;
    this.check = function () {
      checked = true;
      if (answer[question_select - 1].includes(ans)) {
        correct = true;
      } else {
        correct = false;
      }
    };
    this.show = function () {
      var x = this.i * w;
      var y = this.j * h;
      if (checked) {
        if (correct) {
          fill(correct_col);
        } else {
          fill(incorrect_col);
        }
      } else {
        fill(cell_col);
      }
      stroke(220);
      rect(x, y, w, h);
      //text
      fill(220);
      textAlign(CENTER, CENTER);
      textSize(30);
      text(ans, x + w / 2, y + h / 2);
    };
    var checked = false;
    var correct = false;
    var ans = question[i + j * cols];
  }

  const question = [
    [
      "Istanbul",
      "Dublin",
      "Seoul",
      "Barcelona",
      "Warsaw",
      "Nairobi",
      "Geneva",
      "Oslo",
      "Sydney",
      "Munich",
      "Ottawa",
      "Lagos",
      "Shanghai",
      "Manila",
      "Dubai",
      "Rio de Janeiro",
    ],
    [
      "Logan",
      "Inception",
      "Seven",
      "The Prestige",
      "The Matrix",
      "Batman Begins",
      "Dunkirk",
      "Shutter Island",
      "Interstellar",
      "Tenet",
      "The Martian",
      "John Wick",
      "MI: Fallout",
      "Dune",
      "Blade Runner 2049",
      "Memento",
    ],
    [
      "Andy Murray",
      "Tyrone Woods",
      "Andrew Hales",
      "John Brady",
      "Rivaldo",
      "Stephen Curry",
      "Mark Ozil",
      "Khabib Nurmagomedov",
      "Max Schumacher",
      "David Phelps",
      "Joshua Butler",
      "Paul Stirling",
      "Eliud Kipchoge",
      "Sebastian Vettel",
      "Callum McGregor",
      "Lanis Hamilton",
    ],
    [
      "Isuzu",
      "Fiat",
      "Hyundai",
      "Mitsubishi",
      "Ssangyong",
      "Volvo",
      "Honda",
      "Nissan",
      "Proton",
      "Mazda",
      "Renault",
      "Peugeot",
      "Koenigsegg",
      "Suzuki",
      "BMW",
      "Subaru",
    ],
    [
      "तरुण तपसी",
      "सुलोचना",
      "पागल",
      "बाबु, आमा र छोरा",
      "पृथ्वीराज चौहान",
      "जय भुँडी",
      "शरणार्थी",
      "देवीघाट",
      "भिखारी",
      "मुगलान",
      "जुनकिरी",
      "चम्पा",
      "बल जस्तो",
      "प्रेम पिण्ड",
      "शकुंतला",
      "वसन्त",
    ]
  ];
  const answer = [
    ["Dublin", "Seoul", "Warsaw", "Nairobi", "Ottawa", "Manila", "Oslo"],
    [
      "Inception",
      "The Prestige",
      "Batman Begins",
      "Memento",
      "Dunkirk",
      "Interstellar",
      "Tenet",
    ],
    [
      "Andy Murray",
      "Rivaldo",
      "Khabib Nurmagomedov",
      "Stephen Curry",
      "Sebastian Vettel",
      "Paul Stirling",
      "Eliud Kipchoge",
    ],
    [
      "Honda",
      "Isuzu",
      "Mitsubishi",
      "Mazda",
      "Nissan",
      "Suzuki",
      "Subaru"
    ],
    [
      "सुलोचना",
      "पृथ्वीराज चौहान",
      "बल जस्तो",
      "भिखारी",
      "पागल",
      "चम्पा",
      "शकुंतला",
    ]
  ];
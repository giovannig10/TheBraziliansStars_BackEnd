//Objetos de times
const teams = [
    {   
    "name": "Botafogo",
    "fansbackground": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/fansBackground/torcida_fogao.png?raw=true",
    "shield": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/shields/escudo_botafogo.png?raw=true",
    "foundationYear": 1904,
    "uniformHome": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/uniformes/botafogo.png?raw=true",
    "uniformAway": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/uniformes/botafogo2.png?raw=true",
    "stadiumName": "Estádio Nilton Santos",
    "stadiumImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/stadiums/niltonSantos.png?raw=true",
    "anthem": "Botafogo, Botafogo Campeão desde 1910",
    "lastFive": ""
    },
];

//Objetos de jogadores
const players = [
    {
        "name": "Marlon Freitas",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/marlonfreitasPerson.png",
        "position": "meio-campista",
        "number": 8,
        "birthdayYear": 1995,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Botafogo",
        "height": 1.85
    },
    {
        "name": "Arthur Cabral",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/arthurcabralPerson.png",
        "position": "atacante",
        "number": 9,
        "birthdayYear": 1998,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Botafogo",
        "height": 1.86
    },
    {
        "name": "Igor Jesus",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/igorjesusPerson.png",
        "position": "atacante",
        "number": 99,
        "birthdayYear": 2001,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Botafogo",
        "height": 1.79
    },
    {
        "name": "Artur",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/arturPerson.png",
        "position": "atacante",
        "number": 7,
        "birthdayYear": 1998,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Botafogo",
        "height": 1.68
    },
    {
        "name": "Matheus Martins",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/matheusmartinsPerson.png",
        "position": "atacante",
        "number": 11,
        "birthdayYear": 2003,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Botafogo",
        "height": 1.79
    },
    {
        "name": "Gonzalo Mastriani",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/gonzalomastrianiPerson.png",
        "position": "atacante",
        "number": 39,
        "birthdayYear": 1993,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/uruguaiFlag.png",
        "teamName": "Botafogo",
        "height": 1.80
    },
    {
        "name": "Jefferson Savarino",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/savarinoPerson.png",
        "position": "meio-campista",
        "number": 10,
        "birthdayYear": 1996,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/venezuelaFlag.png",
        "teamName": "Botafogo",
        "height": 1.69
    },
    {
        "name": "Allan",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/allanPerson.png",
        "position": "meio-campista",
        "number": 25,
        "birthdayYear": 1991,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Botafogo",
        "height": 1.75
    },
    {
        "name": "Gregore",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/gregorePerson.png",
        "position": "meio-campista",
        "number": 26,
        "birthdayYear": 1994,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Botafogo",
        "height": 1.81
    },
    {
        "name": "Jeffinho",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/jeffinhoPerson.png",
        "position": "meio-campista",
        "number": 47,
        "birthdayYear": 1999,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Botafogo",
        "height": 1.77
    },
    {
        "name": "Patrick de Paula",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/patrickdepaulaPerson.png",
        "position": "meio-campista",
        "number": 6,
        "birthdayYear": 1999,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Botafogo",
        "height": 1.80
    },
    {
        "name": "Alex Telles",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/alextellesPerson.webp",
        "position": "defensor",
        "number": 13,
        "birthdayYear": 1992,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Botafogo",
        "height": 1.81
    },
    {
        "name": "Bastos",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/bastosPerson.png",
        "position": "defensor",
        "number": 15,
        "birthdayYear": 1991,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/angolaFlag.png",
        "teamName": "Botafogo",
        "height": 1.84
    },
    {
        "name": "Alexander Barboza",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/barbozaPerson.png",
        "position": "defensor",
        "number": 20,
        "birthdayYear": 1995,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/argentinaFlag.png",
        "teamName": "Botafogo",
        "height": 1.93
    },
    {
        "name": "Cuiabano",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/cuiabanoPerson.png",
        "position": "defensor",
        "number": 66,
        "birthdayYear": 2003,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Botafogo",
        "height": 1.79
    },
    {
        "name": "Vitinho",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/vitinhoPerson.png",
        "position": "defensor",
        "number": 2,
        "birthdayYear": 1999,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Botafogo",
        "height": 1.75
    },
    {
        "name": "Marçal",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/mar%C3%A7alPerson.png",
        "position": "defensor",
        "number": 21,
        "birthdayYear": 1989,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Botafogo",
        "height": 1.78
    },
    {
        "name": "Jair",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/jairPerson.png",
        "position": "defensor",
        "number": 32,
        "birthdayYear": 2005,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Botafogo",
        "height": 1.98
    },
    {
        "name": "John Victor",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/johnvictorPerson.png",
        "position": "goleiro",
        "number": 12,
        "birthdayYear": 1996,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Botafogo",
        "height": 1.97
    },
    {
        "name": "Léo Linck",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/leolinckPerson.png",
        "position": "goleiro",
        "number": 24,
        "birthdayYear": 2001,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Botafogo",
        "height": 1.94
    },
    {
        "name": "Yuri Alberto",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/yurialbertoPerson.png",
        "position": "atacante",
        "number": 9,
        "birthdayYear": 2001,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Corinthians",
        "height": 1.83
    },
    {
        "name": "Memphis Depay",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/memphisdepayPerson.png",
        "position": "atacante",
        "number": 10,
        "birthdayYear": 1994,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/holandaFlag.png",
        "teamName": "Corinthians",
        "height": 1.76
    },
    {
        "name": "Ángel Romero",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/angelromeroPerson.png",
        "position": "atacante",
        "number": 11,
        "birthdayYear": 1992,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/paraguaiFlag.png",
        "teamName": "Corinthians",
        "height": 1.77
    },
    {
        "name": "Talles Magno",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/tallesmagnoPerson.png",
        "position": "atacante",
        "number": 43,
        "birthdayYear": 2002,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Corinthians",
        "height": 1.86
    },
    {
        "name": "Héctor Hernández",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/hectorhernandezPerson.png",
        "position": "atacante",
        "number": 22,
        "birthdayYear": 1995,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/espanhaFlag.png",
        "teamName": "Corinthians",
        "height": 1.80
    },
    {
        "name": "Rodrigo Garro",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/rodrigogarroPerson.png",
        "position": "meio-campista",
        "number": 8,
        "birthdayYear": 1998,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/argentinaFlag.png",
        "teamName": "Corinthians",
        "height": 1.74
    },
    {
        "name": "André Carrilo",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/andrecarrilloPerson.png",
        "position": "meio-campista",
        "number": 19,
        "birthdayYear": 1991,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/peruFlag.png",
        "teamName": "Corinthians",
        "height": 1.80
    },
    {
        "name": "Igor Coronado",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/igorcoronadoPerson.png",
        "position": "meio-campista",
        "number": 77,
        "birthdayYear": 1992,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Corinthians",
        "height": 1.70
    },
    {
        "name": "Breno Bidon",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/brenobidonPerson.png",
        "position": "meio-campista",
        "number": 27,
        "birthdayYear": 2005,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Corinthians",
        "height": 1.74
    },
    {
        "name": "José Martínez",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/josemartinezPerson.png",
        "position": "meio-campista",
        "number": 70,
        "birthdayYear": 1994,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/venezuelaFlag.png",
        "teamName": "Corinthians",
        "height": 1.77
    },
    {
        "name": "Raniele",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/ranielePerson.png",
        "position": "meio-campista",
        "number": 14,
        "birthdayYear": 1996,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Corinthians",
        "height": 1.84
    },
    {
        "name": "André Ramalho",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/andreramalhoPerson.png",
        "position": "defensor",
        "number": 5,
        "birthdayYear": 1992,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Corinthians",
        "height": 1.82
    },
    {
        "name": "Fabrizio Angileri",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/fabrizioangileriPerson.png",
        "position": "defensor",
        "number": 6,
        "birthdayYear": 1994,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/argentinaFlag.png",
        "teamName": "Corinthians",
        "height": 1.85
    },
    {
        "name": "Félix Torres",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/felixtorresPerson.png",
        "position": "defensor",
        "number": 3,
        "birthdayYear": 1997,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/equadorFlag.png",
        "teamName": "Corinthians",
        "height": 1.87
    },
    {
        "name": "Matheuzinho",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/matheuzinhoPerson.png",
        "position": "defensor",
        "number": 2,
        "birthdayYear": 2000,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Corinthians",
        "height": 1.71
    },
    {
        "name": "Gustavo Henrique",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/gustavohenriquePerson.png",
        "position": "defensor",
        "number": 13,
        "birthdayYear": 1993,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Corinthians",
        "height": 1.95
    },
    {
        "name": "Cacá",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/cacaPerson.png",
        "position": "defensor",
        "number": 25,
        "birthdayYear": 1999,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Corinthians",
        "height": 1.85
    },
    {
        "name": "Matheus Bidu",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/matheusbiduPerson.png",
        "position": "defensor",
        "number": 21,
        "birthdayYear": 1999,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Corinthians",
        "height": 1.72
    },
    {
        "name": "Hugo Souza",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/hugosouzaPerson.png",
        "position": "goleiro",
        "number": 1,
        "birthdayYear": 1999,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Corinthians",
        "height": 1.99
    },
    {
        "name": "Matheus Donelli",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/matheusdonelliPerson.png",
        "position": "goleiro",
        "number": 32,
        "birthdayYear": 2002,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Corinthians",
        "height": 1.87
    },
    {
        "name": "Tiquinho Soares",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/tiquinhosoaresPerson.png",
        "position": "atacante",
        "number": 9,
        "birthdayYear": 1991,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Santos",
        "height": 1.87
    },
    {
        "name": "Thaciano",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/thacianoPerson.png",
        "position": "atacante",
        "number": 16,
        "birthdayYear": 1995,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Santos",
        "height": 1.82
    },
    {
        "name": "Deivid Washington",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/deividwashigtonPerson.png",
        "position": "atacante",
        "number": 36,
        "birthdayYear": 2005,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Santos",
        "height": 1.86
    },
    {
        "name": "Julio Furch",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/juliofurchPerson.png",
        "position": "atacante",
        "number": 9,
        "birthdayYear": 1989,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/argentinaFlag.png",
        "teamName": "Santos",
        "height": 1.89
    },
    {
        "name": "Neymar Jr.",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/neymarPerson.person",
        "position": "meio-campista",
        "number": 10,
        "birthdayYear": 1992,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Santos",
        "height": 1.75
    },
    {
        "name": "Guilherme",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/guilhermePerson.png",
        "position": "meio-campista",
        "number": 11,
        "birthdayYear": 1995,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Santos",
        "height": 1.78
    },
    {
        "name": "Gabriel Veron",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/gabrielveronPerson.png",
        "position": "meio-campista",
        "number": 70,
        "birthdayYear": 2002,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Santos",
        "height": 1.76
    },
    {
        "name": "Zé Rafael",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/zerafaelPerson.png",
        "position": "meio-campista",
        "number": 6,
        "birthdayYear": 1993,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Santos",
        "height": 1.75
    },
    {
        "name": "Diego Pituca",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/diegopitucaPerson.png",
        "position": "meio-campista",
        "number": 21,
        "birthdayYear": 1992,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Santos",
        "height": 1.75
    },
    {
        "name": "João Schmidt",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/joaoschmidtPerson.png",
        "position": "meio-campista",
        "number": 5,
        "birthdayYear": 1993,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Santos",
        "height": 1.83
    },
    {
        "name": "Benjamín Rollheiser",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/benjaminrollheiserPerson.png",
        "position": "meio-campista",
        "number": 32,
        "birthdayYear": 2000,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/argentinaFlag.png",
        "teamName": "Santos",
        "height": 1.75
    },
    {
        "name": "Tomás Rincón",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/tomasrinconPerson.png",
        "position": "meio-campista",
        "number": 8,
        "birthdayYear": 1988,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/venezuelaFlag.png",
        "teamName": "Santos",
        "height": 1.75
    },
    {
        "name": "Zé Ivaldo",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/zeivaldoPerson.png",
        "position": "defensor",
        "number": 2,
        "birthdayYear": 1997,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Santos",
        "height": 1.85
    },
    {
        "name": "Gil",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/gilPerson.png",
        "position": "defensor",
        "number": 4,
        "birthdayYear": 1987,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Santos",
        "height": 1.91
    },
    {
        "name": "J.P. Chermont",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/jpchermontPerson.png",
        "position": "defensor",
        "number": 44,
        "birthdayYear": 2006,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Santos",
        "height": 1.81
    },
    {
        "name": "Luan Peres",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/luanperesPerson.png",
        "position": "defensor",
        "number": 14,
        "birthdayYear": 1994,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Santos",
        "height": 1.90
    },
    {
        "name": "Leonardo Godoy",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/leonardogodoyPerson.png",
        "position": "defensor",
        "number": 29,
        "birthdayYear": 1995,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/argentinaFlag.png",
        "teamName": "Santos",
        "height": 1.74
    },
    {
        "name": "João Basso",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/joaobassoPerson.png",
        "position": "defensor",
        "number": 3,
        "birthdayYear": 1997,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Santos",
        "height": 1.89
    },
    {
        "name": "Gabriel Brazão",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/gabrielbrazaoPerson.png",
        "position": "goleiro",
        "number": 77,
        "birthdayYear": 2000,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Santos",
        "height": 1.91
    },
    {
        "name": "João Paulo",
        "image": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/players/jo%C3%A3opauloPerson.png",
        "position": "goleiro",
        "number": 1,
        "birthdayYear": 1995,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Santos",
        "height": 1.88
    },
    {
        "name": "Vitor Roque",
        "image": "",
        "position": "atacante",
        "number": 8,
        "birthdayYear": 2005,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Palmeiras",
        "height": 1.74
    },
    {
        "name": "Paulinho",
        "image": "",
        "position": "atacante",
        "number": 10,
        "birthdayYear": 2000,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Palmeiras",
        "height": 1.75
    },
    {
        "name": "José López",
        "image": "",
        "position": "atacante",
        "number": 42,
        "birthdayYear": 2000,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/argentinaFlag.png",
        "teamName": "Palmeiras",
        "height": 1.88
    },
    {
        "name": "Estevão",
        "image": "",   
        "position": "meio-campista",
        "number": 41,
        "birthdayYear": 2007,
        "nacionalityImage": "",
        "teamName": "Palmeiras",
        "height": 1.76
    },
    {
        "name": "Richard Rios",
        "image": "",
        "position": "meio-campista",
        "number": 8,
        "birthdayYear": 2000,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Palmeiras",
        "height": 1.85
    },
    {
        "name": "Raphael Veiga",
        "image": "",
        "position": "meio-campista",
        "number": 23,
        "birthdayYear": 1995,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Palmeiras",
        "height": 1.76
    },
    {
        "name": "Felipe Anderson",
        "image": "",
        "position": "meio-campista",
        "number": 7,
        "birthdayYear": 1993,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Palmeiras",
        "height": 1.75
    },
    {
        "name": "Facundo Torres",
        "image": "",
        "position": "meio-campista",
        "number": 17,
        "birthdayYear": 2000,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Palmeiras",
        "height": 1.77
    },
    {
        "name": "Maurício",
        "image": "",
        "position": "meio-campista",
        "number": 18,
        "birthdayYear": 2001,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Palmeiras",
        "height": 1.74
    },
    {
        "name": "Aníbal Moreno",
        "image": "",
        "position": "meio-campista",
        "number": 5,
        "birthdayYear": 1999,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/argentinaFlag.png",
        "teamName": "Palmeiras",
        "height": 1.77
    },
    {
        "name": "Lucas Evangelista",
        "image": "",
        "position": "meio-campista",
        "number": 30,
        "birthdayYear": 1995,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Palmeiras",
        "height": 1.81
    },
    {
        "name": "Gustavo Gómez",
        "image": "",
        "position": "defensor",
        "number": 15,
        "birthdayYear": 1993,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/paraguaiFlag.png",
        "teamName": "Palmeiras",
        "height": 1.85
    },
    {
        "name": "Joaquín Piquerez",
        "image": "",
        "position": "defensor",
        "number": 22,
        "birthdayYear": 1998,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/uruguaiFlag.png",
        "teamName": "Palmeiras",
        "height": 1.83
    },
    {
        "name": "Murilo",
        "image": "",
        "position": "defensor",
        "number": 26,
        "birthdayYear": 1997,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Palmeiras",
        "height": 1.88
    },
    {
        "name": "Micael",
        "image": "",
        "position": "defensor",
        "number": 13,
        "birthdayYear": 2000,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Palmeiras",
        "height": 1.83
    },
    {
        "name": "Marcos Rocha",
        "image": "",
        "position": "defensor",
        "number": 2,
        "birthdayYear": 1988,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Palmeiras",
        "height": 1.76
    },
    {
        "name": "Agustín Giay",
        "image": "",
        "position": "defensor",
        "number": 4,
        "birthdayYear": 2004,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/argentinaFlag.png",
        "teamName": "Palmeiras",
        "height": 1.80
    },
    {
        "name": "Mayke",
        "image": "",
        "position": "defensor",
        "number": 12,
        "birthdayYear": 1992,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Palmeiras",
        "height": 1.78
    },
    {
        "name": "Weverton",
        "image": "",
        "position": "goleiro",
        "number": 21,
        "birthdayYear": 1987,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Palmeiras",
        "height": 1.89
    },
    {
        "name": "Marcelo Lomba",
        "image": "",
        "position": "defensor",
        "number": 14,
        "birthdayYear": 1986,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Palmeiras",
        "height": 1.87
    },
    {
        "name": "Gabriel Barbosa",
        "image": "",
        "position": "atacante",
        "number": 9,
        "birthdayYear": 1996,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.78
    },
    {
        "name": "Kaio Jorge",
        "image": "",
        "position": "atacante",
        "number": 19,
        "birthdayYear": 2002,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.82
    },
    {
        "name": "Yannick Bolasie",
        "image": "",
        "position": "atacante",
        "number": 11,
        "birthdayYear": 1989,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.85
    },
    {
        "name": "Lautaro Díaz",
        "image": "",
        "position": "atacante",
        "number": 26,
        "birthdayYear": 1998,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/argentinaFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.81
    },
    {
        "name": "Matheus Pereira",
        "image": "",
        "position": "meio-campista",
        "number": 10,
        "birthdayYear": 1996,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.75
    },
    {
        "name": "Marquinhos",
        "image": "",
        "position": "meio-campista",
        "number": 7,
        "birthdayYear": 2003,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.75
    },
    {
        "name": "Matheus Henrique",
        "image": "",
        "position": "meio-campista",
        "number": 8,
        "birthdayYear": 1997,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.75
    },
    {
        "name": "Eduardo",
        "image": "",
        "position": "meio-campista",
        "number": 21,
        "birthdayYear": 1989,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.84
    },
    {
        "name": "Lucas Romero",
        "image": "",
        "position": "meio-campista",
        "number": 29,
        "birthdayYear": 1994,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/argentinaFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.67
    },
    {
        "name": "Christian",
        "image": "",
        "position": "meio-campista",
        "number": 88,
        "birthdayYear": 2000,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.78
    },
    {
        "name": "Lucas Silva",
        "image": "",
        "position": "meio-campista",
        "number": 16,
        "birthdayYear": 1993,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.82
    },
    {
        "name": "Walace",
        "image": "",
        "position": "meio-campista",
        "number": 5,
        "birthdayYear": 1995,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.88
    },
    {
        "name": "Fabrício Bruno",
        "image": "",
        "position": "defensor",
        "number": 15,
        "birthdayYear": 1996,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.92
    },
    {
        "name": "Fagner",
        "image": "",
        "position": "defensor",
        "number": 23,
        "birthdayYear": 1989,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.68
    },
    {
        "name": "William",
        "image": "",
        "position": "defensor",
        "number": 12,
        "birthdayYear": 1995,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.76
    },
    {
        "name": "Lucas Villalba",
        "image": "",
        "position": "defensor",
        "number": 25,
        "birthdayYear": 1994,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/argentinaFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.77
    },
    {
        "name": "Mateo Gamarra",
        "image": "",
        "position": "defensor",
        "number": 14,
        "birthdayYear": 2000,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/paraguaiFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.85
    },
    {
        "name": "Kaiki",
        "image": "",
        "position": "defensor",
        "number": 6,
        "birthdayYear": 2003,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.72
    },
    {
        "name": "Cássio",
        "image": "",
        "position": "goleiro",
        "number": 1,
        "birthdayYear": 1987,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.95
    },
    {
        "name": "Léo Aragão",
        "image": "",
        "position": "goleiro",
        "number": 41,
        "birthdayYear": 2002,
        "nacionalityImage": "https://github.com/giovannig10/The20BraziliansStars_WEB/blob/main/public/images/nacionality/brasilFlag.png",
        "teamName": "Cruzeiro",
        "height": 1.92
    }




];

//Objetos de usuários
const users = [
    {

    }
];

//Objetos de Partidas
const games = [ 
    {

    }
];

//Objetos de Títulos
const titles = [
    {

    }
];

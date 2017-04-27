const mongoose = require('mongoose');
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;
const League = require('../models/league');

mongoose.connect("mongodb://localhost/footballapi");



const league = [
  {
    name: 'Liga Santander',
    leagueLogo: '',
    country: 'Spain',
    teams: [
      {
        name: 'Alavés',
        teamLogo: '',
      },
      {
        name: 'Athletic de Bilbao',
        teamLogo: '',
      },
      {
        name: 'Atlético de Madrid',
        teamLogo: '',
      },
      {
        name: 'Barcelona',
        teamLogo: '',
      },
      {
        name: 'Celta de Vigo',
        teamLogo: '',
      },
      {
        name: 'Deportivo de la Coruña',
        teamLogo: '',
      },
      {
        name: 'Eibar',
        teamLogo: '',
      },
      {
        name: 'Espanyol',
        teamLogo: '',
      },
      {
        name: 'Granada',
        teamLogo: '',
      },
      {
        name: 'Las Palmas',
        teamLogo: '',
      },
      {
        name: 'Leganés',
        teamLogo: '',
      },
      {
        name: 'Málaga',
        teamLogo: '',
      },
      {
        name: 'Osasuna',
        teamLogo: '',
      },
      {
        name: 'Real Betis',
        teamLogo: '',
      },
      {
        name: 'Real Madrid',
        teamLogo: '',
      },
      {
        name: 'Real Sociedad',
        teamLogo: '',
      },
      {
        name: 'Sevilla',
        teamLogo: '',
      },
      {
        name: 'Sporting de Gijón',
        teamLogo: '',
      },
      {
        name: 'Valencia',
        teamLogo: '',
      },
      {
        name: 'Villarreal',
        teamLogo: '',
      }
    ]
  },
  {
    name: 'Premier League',
    leagueLogo: '',
    country: 'UK',
    teams: [
      {
        name: 'Arsenal',
        teamLogo: '',
      },
      {
        name: 'Bournemouth',
        teamLogo: '',
      },
      {
        name: 'Burnley',
        teamLogo: '',
      },
      {
        name: 'Chelsea',
        teamLogo: '',
      },
      {
        name: 'Crystal Palace',
        teamLogo: '',
      },
      {
        name: 'Everton',
        teamLogo: '',
      },
      {
        name: 'Hull City',
        teamLogo: '',
      },
      {
        name: 'Leicester',
        teamLogo: '',
      },
      {
        name: 'Liverpool',
        teamLogo: '',
      },
      {
        name: 'Manchester City',
        teamLogo: '',
      },
      {
        name: 'Manchester United',
        teamLogo: '',
      },
      {
        name: 'Middlesbrough',
        teamLogo: '',
      },
      {
        name: 'Southampton',
        teamLogo: '',
      },
      {
        name: 'Stoke City',
        teamLogo: '',
      },
      {
        name: 'Sunderland',
        teamLogo: '',
      },
      {
        name: 'Swansea City',
        teamLogo: '',
      },
      {
        name: 'Tottenham',
        teamLogo: '',
      },
      {
        name: 'Watford',
        teamLogo: '',
      },
      {
        name: 'West Bromwich Albion',
        teamLogo: '',
      },
      {
        name: 'West Ham',
        teamLogo: '',
      }
    ]
  },
  {
    name: 'Serie A',
    leagueLogo: '',
    country: 'Spain',
    teams: [
      {
        name: 'Atalanta',
        teamLogo: '',
      },
      {
        name: 'Bolonia',
        teamLogo: '',
      },
      {
        name: 'Cagliari',
        teamLogo: '',
      },
      {
        name: 'Chievo',
        teamLogo: '',
      },
      {
        name: 'Crotone',
        teamLogo: '',
      },
      {
        name: 'Empoli',
        teamLogo: '',
      },
      {
        name: 'Fiorentina',
        teamLogo: '',
      },
      {
        name: 'Genoa',
        teamLogo: '',
      },
      {
        name: 'Inter Milan',
        teamLogo: '',
      },
      {
        name: 'Juventus',
        teamLogo: '',
      },
      {
        name: 'Lazio',
        teamLogo: '',
      },
      {
        name: 'AC Milan',
        teamLogo: '',
      },
      {
        name: 'Napoli',
        teamLogo: '',
      },
      {
        name: 'Palermo',
        teamLogo: '',
      },
      {
        name: 'Pescara',
        teamLogo: '',
      },
      {
        name: 'Roma',
        teamLogo: '',
      },
      {
        name: 'Sampdoria',
        teamLogo: '',
      },
      {
        name: 'Sassuolo',
        teamLogo: '',
      },
      {
        name: 'Torino',
        teamLogo: '',
      },
      {
        name: 'Udinese',
        teamLogo: '',
      },
    ]
  },
  {
    name: 'Bundesliga',
    leagueLogo: '',
    country: 'Germany',
    teams: [
      {
        name: 'Augsburgo',
        teamLogo: '',
      },
      {
        name: 'Borussia Dortmund',
        teamLogo: '',
      },
      {
        name: 'Borussia Mönchengladbach',
        teamLogo: '',
      },
      {
        name: 'Bayern München',
        teamLogo: '',
      },
      {
        name: 'Köln',
        teamLogo: '',
      },
      {
        name: 'Darmstadt 98',
        teamLogo: '',
      },
      {
        name: 'Eintracht',
        teamLogo: '',
      },
      {
        name: 'Freiburg',
        teamLogo: '',
      },
      {
        name: 'Hamburguer SV',
        teamLogo: '',
      },
      {
        name: 'Hertha Berlin',
        teamLogo: '',
      },
      {
        name: 'Hoffenheim',
        teamLogo: '',
      },
      {
        name: 'Ingolstadt 04',
        teamLogo: '',
      },
      {
        name: 'Bayer Leverkusen',
        teamLogo: '',
      },
      {
        name: 'Mainz 05',
        teamLogo: '',
      },
      {
        name: 'RB Leipzig',
        teamLogo: '',
      },
      {
        name: 'Schalke 04',
        teamLogo: '',
      },
      {
        name: 'Werder Bremen',
        teamLogo: '',
      },
      {
        name: 'Wolfsburgo',
        teamLogo: '',
      }
    ]
  },
  {
    name: 'Eredivise',
    leagueLogo: '',
    country: 'Holland',
    teams: [
      {
        name: 'Ajax',
        teamLogo: '',
      },
      {
        name: 'AZ Alkmaar',
        teamLogo: '',
      },
      {
        name: 'Den Haag',
        teamLogo: '',
      },
      {
        name: 'Excelsior',
        teamLogo: '',
      },
      {
        name: 'Feyenoord',
        teamLogo: '',
      },
      {
        name: 'G.A.Eagles',
        teamLogo: '',
      },
      {
        name: 'Groningen',
        teamLogo: '',
      },
      {
        name: 'Heerenveen',
        teamLogo: '',
      },
      {
        name: 'Heracles',
        teamLogo: '',
      },
      {
        name: 'Nijmegen',
        teamLogo: '',
      },
      {
        name: 'PSV Eindhoven',
        teamLogo: '',
      },
      {
        name: 'Roda',
        teamLogo: '',
      },
      {
        name: 'Sparta Rotterdam',
        teamLogo: '',
      },
      {
        name: 'Twente',
        teamLogo: '',
      },
      {
        name: 'Utrecht',
        teamLogo: '',
      },
      {
        name: 'Vitesse',
        teamLogo: '',
      },
      {
        name: 'Willem II',
        teamLogo: '',
      },
      {
        name: 'Zwolle',
        teamLogo: '',
      }
    ]
  }

];




League.create(league, (err, docs)=>{
  if (err) { throw err };
    docs.forEach( (league) => {
      console.log(league.name)
    })
    mongoose.connection.close();
});

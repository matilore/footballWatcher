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
        teamLogo: '/images/spain/alaves.svg',
      },
      {
        name: 'Athletic de Bilbao',
        teamLogo: '/images/spain/atletico-bilbao.svg',
      },
      {
        name: 'Atlético de Madrid',
        teamLogo: '/images/spain/atletico-madrid.svg',
      },
      {
        name: 'Barcelona',
        teamLogo: '/images/spain/barcelona.svg',
      },
      {
        name: 'Celta de Vigo',
        teamLogo: '/images/spain/celta.svg',
      },
      {
        name: 'Deportivo de la Coruña',
        teamLogo: '/images/spain/deportivo-coruna.svg',
      },
      {
        name: 'Eibar',
        teamLogo: '/images/spain/eibar.svg',
      },
      {
        name: 'Espanyol',
        teamLogo: '/images/spain/espanyol.svg',
      },
      {
        name: 'Granada',
        teamLogo: '/images/spain/granada.svg',
      },
      {
        name: 'Las Palmas',
        teamLogo: '/images/spain/palmas.svg',
      },
      {
        name: 'Leganés',
        teamLogo: '/images/spain/leganes.png',
      },
      {
        name: 'Málaga',
        teamLogo: '/images/spain/malaga.svg',
      },
      {
        name: 'Osasuna',
        teamLogo: '/images/spain/osasuna.svg',
      },
      {
        name: 'Real Betis',
        teamLogo: '/images/spain/betis.svg',
      },
      {
        name: 'Real Madrid',
        teamLogo: '/images/spain/real-madrid.svg',
      },
      {
        name: 'Real Sociedad',
        teamLogo: '/images/spain/real-sociedad.svg',
      },
      {
        name: 'Sevilla',
        teamLogo: '/images/spain/sevilla.png',
      },
      {
        name: 'Sporting de Gijón',
        teamLogo: '/images/spain/sporting-gijon.svg',
      },
      {
        name: 'Valencia',
        teamLogo: '/images/spain/valencia.svg',
      },
      {
        name: 'Villarreal',
        teamLogo: '/images/spain/villarreal.svg',
      }
    ]
  },
  {
    name: 'Premier League',
    leagueLogo: '',
    country: 'England',
    teams: [
      {
        name: 'Arsenal',
        teamLogo: '/images/england/arsenal.png',
      },
      {
        name: 'Bournemouth',
        teamLogo: '/images/england/bournemouth.png',
      },
      {
        name: 'Burnley',
        teamLogo: '/images/england/burnley.png',
      },
      {
        name: 'Chelsea',
        teamLogo: '/images/england/chelsea.png',
      },
      {
        name: 'Crystal Palace',
        teamLogo: '/images/england/cristal-palace',
      },
      {
        name: 'Everton',
        teamLogo: '/images/england/everton.png',
      },
      {
        name: 'Hull City',
        teamLogo: '/images/england/hull-city.png',
      },
      {
        name: 'Leicester',
        teamLogo: '/images/england/leicester.png',
      },
      {
        name: 'Liverpool',
        teamLogo: '/images/england/liverpool.png',
      },
      {
        name: 'Manchester City',
        teamLogo: '/images/england/manchester-city.png',
      },
      {
        name: 'Manchester United',
        teamLogo: '/images/england/manchester-united.png',
      },
      {
        name: 'Middlesbrough',
        teamLogo: '/images/england/middlesbrough.png',
      },
      {
        name: 'Southampton',
        teamLogo: '/images/england/southampton.png',
      },
      {
        name: 'Stoke City',
        teamLogo: '/images/england/stoke-city.png',
      },
      {
        name: 'Sunderland',
        teamLogo: '/images/england/sunderland.png',
      },
      {
        name: 'Swansea City',
        teamLogo: '/images/england/swansea.svg',
      },
      {
        name: 'Tottenham',
        teamLogo: '/images/england/tottenham.svg',
      },
      {
        name: 'Watford',
        teamLogo: '/images/england/watford.png',
      },
      {
        name: 'West Bromwich Albion',
        teamLogo: '/images/england/west-bromwich.svg',
      },
      {
        name: 'West Ham',
        teamLogo: '/images/england/west-ham.svg',
      }
    ]
  },
  {
    name: 'Serie A',
    leagueLogo: '',
    country: 'Italy',
    teams: [
      {
        name: 'Atalanta',
        teamLogo: '/images/italy/atalanta.svg',
      },
      {
        name: 'Bolonia',
        teamLogo: '/images/italy/bologna.svg',
      },
      {
        name: 'Cagliari',
        teamLogo: '/images/italy/cagliari.svg',
      },
      {
        name: 'Chievo',
        teamLogo: '/images/italy/chievo-verona.svg',
      },
      {
        name: 'Crotone',
        teamLogo: '/images/italy/crotone.svg',
      },
      {
        name: 'Empoli',
        teamLogo: '/images/italy/empoli.svg',
      },
      {
        name: 'Fiorentina',
        teamLogo: '/images/italy/fiorentina.png',
      },
      {
        name: 'Genoa',
        teamLogo: '/images/italy/genoa.svg',
      },
      {
        name: 'Inter Milan',
        teamLogo: '/images/italy/inter-milano.png',
      },
      {
        name: 'Juventus',
        teamLogo: '/images/italy/juventus.svg',
      },
      {
        name: 'Lazio',
        teamLogo: '/images/italy/lazio.png',
      },
      {
        name: 'AC Milan',
        teamLogo: '/images/italy/milano.svg',
      },
      {
        name: 'Napoli',
        teamLogo: '/images/italy/napoli.svg',
      },
      {
        name: 'Palermo',
        teamLogo: '/images/italy/palermo.svg',
      },
      {
        name: 'Pescara',
        teamLogo: '/images/italy/pescara.svg',
      },
      {
        name: 'Roma',
        teamLogo: '/images/italy/roma.svg',
      },
      {
        name: 'Sampdoria',
        teamLogo: '/images/italy/sampdoria.svg',
      },
      {
        name: 'Sassuolo',
        teamLogo: '/images/italy/sassuolo.svg',
      },
      {
        name: 'Torino',
        teamLogo: '/images/italy/torino.svg',
      },
      {
        name: 'Udinese',
        teamLogo: '/images/italy/udinese.svg',
      }
    ]
  },
  {
    name: 'Bundesliga',
    leagueLogo: '',
    country: 'Germany',
    teams: [
      {
        name: 'Augsburg',
        teamLogo: '/images/germany/augsburg.svg',
      },
      {
        name: 'Borussia Dortmund',
        teamLogo: '/images/germany/borussia-dortmund.svg',
      },
      {
        name: 'Borussia Mönchengladbach',
        teamLogo: '/images/germany/borussia-monchengladbach.svg',
      },
      {
        name: 'Bayer Leverkusen',
        teamLogo: '/images/germany/bayer-leverkusen.png',
      },
      {
        name: 'Bayern München',
        teamLogo: '/images/germany/bayern-munchen',
      },
      {
        name: 'Darmstadt 98',
        teamLogo: '/images/germany/darmstadt.svg',
      },
      {
        name: 'Eintracht',
        teamLogo: '/images/germany/eintracht.svg',
      },
      {
        name: 'Freiburg',
        teamLogo: '/images/germany/freiburg.svg',
      },
      {
        name: 'Hamburguer SV',
        teamLogo: '/images/germany/hamburg.svg',
      },
      {
        name: 'Hertha Berlin',
        teamLogo: '/images/germany/hertha-berlin.svg',
      },
      {
        name: 'Hoffenheim',
        teamLogo: '/images/germany/hoffenheim.png',
      },
      {
        name: 'Ingolstadt 04',
        teamLogo: '/images/germany/ingolstadt.svg',
      },
      {
        name: 'Köln',
        teamLogo: '/images/germany/koln.png',
      },
      {
        name: 'Mainz 05',
        teamLogo: '/images/germany/mainz.svg',
      },
      {
        name: 'RB Leipzig',
        teamLogo: '/images/germany/leipzig.svg',
      },
      {
        name: 'Schalke 04',
        teamLogo: '/images/germany/schalke.png',
      },
      {
        name: 'Werder Bremen',
        teamLogo: '/images/germany/werder-bremen.svg',
      },
      {
        name: 'Wolfsburgo',
        teamLogo: '/images/germany/wolfsburg.svg',
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
        teamLogo: '/images/holland/ajax.svg',
      },
      {
        name: 'AZ Alkmaar',
        teamLogo: '/images/holland/az-alkmar.png',
      },
      {
        name: 'Den Haag',
        teamLogo: '/images/holland/den-haag.svg',
      },
      {
        name: 'Excelsior',
        teamLogo: '/images/holland/excelsior.svg',
      },
      {
        name: 'Feyenoord',
        teamLogo: '/images/holland/feyenoord.png',
      },
      {
        name: 'G.A.Eagles',
        teamLogo: '/images/holland/deventer.svg',
      },
      {
        name: 'Groningen',
        teamLogo: '/images/holland/groningen.svg',
      },
      {
        name: 'Heerenveen',
        teamLogo: '/images/holland/heerenveen.svg',
      },
      {
        name: 'Heracles',
        teamLogo: '/images/holland/heracles.svg',
      },
      {
        name: 'Nijmegen',
        teamLogo: '/images/holland/nijmegen.svg',
      },
      {
        name: 'PSV Eindhoven',
        teamLogo: '/images/holland/psv-eindhoven.svg',
      },
      {
        name: 'Roda',
        teamLogo: '/images/holland/roda.svg',
      },
      {
        name: 'Sparta Rotterdam',
        teamLogo: '/images/holland/rotterdam.png',
      },
      {
        name: 'Twente',
        teamLogo: '/images/holland/twente.svg',
      },
      {
        name: 'Utrecht',
        teamLogo: '/images/holland/utrecht.svg',
      },
      {
        name: 'Vitesse',
        teamLogo: '/images/holland/vitesse.svg',
      },
      {
        name: 'Willem II',
        teamLogo: '/images/holland/willem-2.svg',
      },
      {
        name: 'Zwolle',
        teamLogo: '/images/holland/zwolle.svg',
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

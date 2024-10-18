import React from 'react';
import './LastComments.styles.css';

const commenti = [
  {
    id: 1,
    autore: "Maria Rossi",
    ricetta: "Pasta al Pomodoro",
    contenuto: "Questa ricetta è fantastica! L'ho provata ieri sera e tutti l'hanno adorata.",
    avatar: "https://i.pravatar.cc/40?img=1",
    data: "2 ore fa"
  },
  {
    id: 2,
    autore: "Luca Bianchi",
    ricetta: "Tiramisù",
    contenuto: "Il miglior tiramisù che abbia mai fatto! Grazie per la ricetta dettagliata.",
    avatar: "https://i.pravatar.cc/40?img=2",
    data: "5 ore fa"
  },
  {
    id: 3,
    autore: "Giulia Verdi",
    ricetta: "Risotto ai Funghi",
    contenuto: "Ho sostituito i funghi porcini con quelli champignon e il risultato è stato comunque ottimo!",
    avatar: "https://i.pravatar.cc/40?img=3",
    data: "1 giorno fa"
  },
  {
    id: 4,
    autore: "Marco Neri",
    ricetta: "Insalata Caprese",
    contenuto: "Semplice ma deliziosa. Ho aggiunto un po' di origano e il sapore è esploso!",
    avatar: "https://i.pravatar.cc/40?img=4",
    data: "2 giorni fa"
  },
  {
    id: 5,
    autore: "Marco Neri",
    ricetta: "Insalata Caprese",
    contenuto: "Semplice ma deliziosa. Ho aggiunto un po' di origano e il sapore è esploso!",
    avatar: "https://i.pravatar.cc/40?img=4",
    data: "2 giorni fa"
  },
  {
    id: 6,
    autore: "Marco Neri",
    ricetta: "Insalata Caprese",
    contenuto: "Semplice ma deliziosa. Ho aggiunto un po' di origano e il sapore è esploso!",
    avatar: "https://i.pravatar.cc/40?img=4",
    data: "2 giorni fa"
  }
];

const LastComments = () => {
  return (
    <div className="ultimi-commenti">
      <h2 className='gradient-text'>Ultimi Commenti</h2>
      <hr className='hr-blue' />
      <div className="commenti-lista">
        {commenti.map((commento) => (
          <div key={commento.id} className="commento">
            <div className="commento-header">
              <img src={commento.avatar} alt={`Avatar di ${commento.autore}`} className="avatar" />
              <div className="commento-info">
                <p className="autore">{commento.autore}</p>
                <p className="ricetta">su <span className='title-ricetta'>{commento.ricetta}</span></p>
              </div>
              <p className="data">{commento.data}</p>
            </div>
            <p className="contenuto">{commento.contenuto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastComments;
import './Portfolio.css';

import myJournal from './myjournal.png';
import craneMaintenace from './craneMaintenace.png';
import sunriseEggsFarm from './sunriseEggsFarm.png';
import reddit from './reddit.png';
import periodTracker from './periodTracker.png';

let work = [
  {
    screenshot: myJournal,
    title: 'My Journal App',
    desciption: 'A web app that lets users to note down thier daily work.',
    link: 'https://journal-cf0q.onrender.com/',
  },
  {
    screenshot: periodTracker,
    title: 'Period  Tracker',
    desciption: 'Here, the user can track and predict their period.',
    link: 'https://period-tracker.onrender.com/',
  },
  {
    screenshot: reddit,
    title: 'Reddit',
    desciption: 'Reddit clone application.',
    link: 'https://reddit.onrender.com/sign_up',
  },
  {
    screenshot: craneMaintenace,
    title: 'Crane Maintenance',
    desciption: 'To manage crane operation details and log their records.',
    link: 'https://jai-work.onrender.com/',
  },
  {
    screenshot: sunriseEggsFarm,
    title: 'Sunrise Eggs Farm',
    desciption:
      'This web application is to record and manage payment details in the farm near Odissa.',
    link: 'https://sun-rise-egg-farm.onrender.com/',
  },
];

function Porfolio() {
  return (
    <div className="portfolio">
      <p>My Recent Work</p>
      {work.map((w) => {
        return (
          <div className="workConatiner">
            <div className="work">
              <div className="screenshot">
                <img src={w.screenshot} alt={w.title} />
                <div className="website">
                  <a href={w.link} target="_blank">
                    view website
                  </a>
                </div>
              </div>
              <div className="description">
                <h4>{w.title}</h4>
                <p>{w.desciption}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Porfolio;

import "./Portfolio.css";

import myJournal from "./images/myjournal.png";
import reddit from "./images/reddit.png";
import periodTracker from "./images/periodTracker.png";
import whileIEat from "./images/whileIEat.png";
import vocab from "./images/vocab.png";
import pinnacles from "./images/pinnacles.png"

let work = [
  {
    screenshot: pinnacles,
    title: "Pinnacles Infotech",
    link: "https://pinnacles-test.netlify.app/",
  },

  {
    screenshot: whileIEat,
    title: "While I Eat",
    desciption:
      "This web application is to view popular movies and tv shows and their streamimg platform.",
    link: "https://while-i-eat.onrender.com/",
    git: "https://github.com/sarvani1997/WhileIEat",
  },
  {
    screenshot: reddit,
    title: "Reddit",
    desciption: "Reddit clone application.",
    link: "https://reddit.onrender.com/sign_up",
    git: "https://github.com/sarvani1997/reddit",
  },
  {
    screenshot: periodTracker,
    title: "Period  Tracker",
    desciption: "Here, the user can track and predict their period.",
    link: "https://period-tracker.onrender.com/",
    git: "https://github.com/sarvani1997/period-tracker",
  },
  {
    screenshot: myJournal,
    title: "My Journal App",
    desciption: "A web app that lets users to note down thier daily work.",
    link: "https://journal-cf0q.onrender.com/",
    git: "https://github.com/sarvani1997/journal-app",
  },
];

function Porfolio() {
  return (
    <div>
      <div className="portfolio-title">My Recent Work</div>
      <div className="portfolio">
        <div className="screenshot">
          {work.map((w) => {
            return (
              <div className="image">
                <div className="overlap">
                  <img src={w.screenshot} alt={w.title} />
                
                
                <h3 className="title">{w.title}</h3>
                <div className="links">
                 {w.git && <a className="btn-link-2" href={w.git}>
                    Source Code
                  </a>}
                  <a className="btn-link-2" href={w.link}>
                    Website
                  </a>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Porfolio;

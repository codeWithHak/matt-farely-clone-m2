import Image from "next/image";
import "./skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills grid grid-cols-3">
        <div className="flex flex-col skills-card flex-item">
          <Image
            src="/images/designer.png"
            alt="designer"
            width={70}
            height={70}
            quality={100}
          ></Image>
          <h2>Designer</h2>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <div>
            <p id="text-purple">Things I enjoy designing:</p>
            <p>UX, UI, Web, Apps, Logos</p>
          </div>
          <div>
            <p id="text-purple">Design Tools:</p>
            <p>Affinity Designer</p>
            <p>Figma</p>
            <p>Pen & Paper</p>
            <p>Sketch</p>
          </div>
        </div>
        <div className="flex flex-col skills-card flex-item skill-border">
          <Image
            src="/images/developer1.png"
            alt="frontend developer"
            width={70}
            height={70}
            quality={100}
          />
          <h2>Frontend Developer</h2>
          <p>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <div>
            <p id="text-purple">Languages I speak:</p>
            <p>HTML, Pug, Slim, CSS, Sass, Git</p>
          </div>
          <div>
            <p id="text-purple">Dev Tools:</p>
            <p>Astro JS</p>
            <p>Bitbucket</p>
            <p>Bootstrap</p>
            <p>Bulma</p>
            <p>Codekit</p>
            <p>Github</p>
            <p>Netlify</p>
            <p>Tailwind CSS</p>
            <p>VS Code</p>
          </div>
        </div>
        <div className="flex flex-col skills-card flex-item">
          <Image
            src="/images/mentor.png"
            alt="mentor"
            width={70}
            height={70}
            quality={100}
          />
          <h2>Mentor</h2>
          <p>
            I genuinely care about people, and enjoy helping them work on their
            craft.
          </p>
          <div>
            <p id="text-purple">Experiences I draw from:</p>
            <p>UX/UI, Product design, Freelancing</p>
          </div>
          <div>
            <p id="text-purple">Mentor Stats:</p>
            <p>9+ years experience</p>
            <p>30+ short courses</p>
            <p>65+ bootcamps</p>
            <p>250+ students</p>
            <p>2,500+ mentor sessions</p>
            <p>60+ group critiques</p>
            <p>18,000+ bits of feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

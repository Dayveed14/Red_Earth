import logo from './redEarthLogo.png'
import fixer from './fixer.png'
import DA from './DA.png'

function Strata() {
  return (
    <div className="strata" aria-hidden="true">
      <span></span><span></span><span></span><span></span>
    </div>
  )
}

function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="nav-mark" href="#top">
          <img src={logo} alt="Red Earth Tech" />
        </a>
        <ul className="nav-links">
          <li><a href="#ventures">Ventures</a></li>
          <li><a href="#origin">Origin</a></li>
          <li><a href="#founder">Founder</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <p className="hero-eyebrow">A holding company out of Abuja, Nigeria</p>
        <h1>The ground everything else gets built on.</h1>
        <p className="lede">
          Red Earth Tech sits underneath Fixer and every product that follows it —
          one company, named for the laterite soil of Edo State, carrying the
          services and software David builds for other people.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#ventures">See what's built on it</a>
          <a className="btn btn-ghost" href="#origin">Why "Red Earth"</a>
        </div>
      </div>
    </section>
  )
}

function Origin() {
  return (
    <section className="origin" id="origin">
      <div className="wrap origin-grid">
        <h2>Where the name comes from</h2>
        <div className="origin-body">
          <p>
            Edo State's soil runs a deep, iron-rich red — the kind that stains
            your shoes and doesn't wash out easily. It's the ground David grew up
            on, and it's the name for the company now sitting underneath his
            work: a single legal entity that holds Fixer, his freelance and
            contract services, and whatever software he builds for clients next.
          </p>
          <p>
            Rather than each project living as its own loose thing, Red Earth Tech
            is the fixed point — the entity that signs contracts, owns the code,
            and gives every product a shared home to grow out of.
          </p>
          <p className="status-note">
            <span className="status-dot"></span>
            Registered with Nigeria's Corporate Affairs Commission REGISTRATION NO. 9911611
          </p>
        </div>
      </div>
    </section>
  )
}

function Ventures() {
  return (
    <section className="ventures" id="ventures">
      <div className="wrap">
        <div className="section-head">
          <h2>What's built on it</h2>
          <p>Fixer is the first product to sit under Red Earth Tech. More are in the works.</p>
        </div>

        <div className="venture">
          <div>
            <p className="venture-flag">Flagship product</p>
            <h3>Fixer</h3>
            <p>
              A repair shop management platform that gives admins, technicians,
              and customers their own dashboards — booking flows wired to real
              data, a notifications system, and remote support sessions handled
              through MeshCentral.
            </p>
            <div className="venture-stack">
              <span>React</span><span>Vite</span><span>Node / Express</span><span>MySQL</span>
            </div>
            <a className="venture-link" href="https://fixerng.app" target="_blank" rel="noreferrer">
              Visit Fixer
            </a>
          </div>
          <div className="venture-">
            <img src={fixer} alt="Fixer" />
          </div>
        </div>

        <div className="venture venture-next">
          <div>
            <p className="venture-flag">In progress</p>
            <h3>The next one's still forming</h3>
            <p>
              New services and products get added here as they're built. If you've
              got something you want built under Red Earth Tech, get in touch below.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Founder() {
  return (
    <section className="founder" id="founder">
      <div className="wrap founder-grid">
        <div>
          <h2>Built by one full-stack engineer</h2>
          <p>
            Red Earth Tech is David Aigbovbiosa's company. Full-stack developer
            and Profit Center Manager at UBA by day, he's spent the last several
            years moving from React frontends into backend systems, DevOps
            tooling, and security-aware engineering — the same instincts now
            going into Fixer and everything after it.
          </p>
          <a className="venture-link" href="https://davidaig.netlify.app" target="_blank" rel="noreferrer">
            View the full portfolio
          </a>
        </div>
        <div className="ventur">
          <img src={DA} alt="David Aigbovbiosa" />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="footer-row">
          <div className="footer-mark">
            <img src={logo} alt="Red Earth Tech" />
          </div>
          <ul className="footer-links">
            <li><a href="mailto:redearthtech2026@gmail.com">redearthtech2026@gmail.com</a></li>
            <li><a href="tel:+2348093625430">+234 809 362 5430</a></li>
            <li><a href="https://github.com/Dayveed14" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/david-aigbovbiosa-018268207/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <p className="copyright">Red Earth Tech — REGISTRATION NO. 9911611, Abuja, Nigeria.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Strata />
      <main>
        <Hero />
        <Origin />
        <Ventures />
        <Founder />
      </main>
      <Strata />
      <Footer />
    </>
  )
}

"use client";

import { FormEvent, useState } from "react";

const ASSETS = {
  heroVideo: "https://www.pexels.com/download/video/5618560/",
  detailsTopLeft:
    "https://images.pexels.com/photos/6061882/pexels-photo-6061882.jpeg?cs=srgb&dl=pexels-nicole-michalou-6061882.jpg&fm=jpg",
  detailsTopRight:
    "https://images.pexels.com/photos/14579005/pexels-photo-14579005.jpeg?cs=srgb&dl=pexels-valeriya-14579005.jpg&fm=jpg",
  detailsBottomCenter:
    "https://c.pxhere.com/photos/4c/c8/blur_bokeh_candle_christmas_decoration_christmas_tree_close_up_decoration_dining-910969.jpg!d",
};

type FormState = {
  name: string;
  email: string;
  message: string;
};

function FormPanel() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField =
    (key: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [key]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="footer-message" role="status" aria-live="polite">
        <p className="footer-message__title">Thank you</p>
        <p className="footer-message__body">
          Your note was received. We will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="footer-form" onSubmit={handleSubmit}>
      <label className="footer-form__field">
        <span className="footer-form__label">Name</span>
        <input
          autoComplete="name"
          className="footer-form__input"
          name="name"
          onChange={updateField("name")}
          required
          value={form.name}
        />
      </label>
      <label className="footer-form__field">
        <span className="footer-form__label">Email</span>
        <input
          autoComplete="email"
          className="footer-form__input"
          name="email"
          onChange={updateField("email")}
          required
          type="email"
          value={form.email}
        />
      </label>
      <label className="footer-form__field footer-form__field--message">
        <span className="footer-form__label">Message</span>
        <textarea
          className="footer-form__input footer-form__textarea"
          name="message"
          onChange={updateField("message")}
          rows={5}
          value={form.message}
        />
      </label>
      <button className="footer-form__submit" type="submit">
        Send
      </button>
    </form>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="holiday-page" id="top">
      <header className="site-header">
        <div className="site-header__inner">
          <nav aria-label="Primary" className="site-nav site-nav--desktop">
            <a className="site-nav__link" href="#top">
              HOME
            </a>
            <a className="site-nav__link" href="#event">
              EVENT
            </a>
          </nav>
          <div className="site-nav site-nav--mobile">
            <button
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              aria-label="Open menu"
              className="mobile-toggle"
              onClick={() => setMenuOpen((current) => !current)}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
            {menuOpen ? (
              <div className="mobile-panel" id="mobile-menu">
                <a className="mobile-panel__link" href="#top" onClick={() => setMenuOpen(false)}>
                  HOME
                </a>
                <a className="mobile-panel__link" href="#event" onClick={() => setMenuOpen(false)}>
                  EVENT
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-stage">
          <div className="hero-backgrounds" aria-hidden="true">
            <video
              aria-hidden="true"
              autoPlay
              className="hero-video"
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src={ASSETS.heroVideo} type="video/mp4" />
            </video>
            <div className="hero-video-overlay" />
          </div>

          <div className="hero-frame">
            <div className="hero-content">
              <p className="hero-kicker">YOU&apos;RE INVITED!</p>

              <div className="hero-card">
                <h1 className="hero-card__title">HOLIDAY PARTY</h1>
                <p className="hero-card__meta">Dec 25, 2035, 6:00 PM - 11:00 PM</p>
                <a className="outline-button outline-button--hero" href="#contact">
                  RSVP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="details-section" id="event">
        <div className="details-row details-row--top">
          <div
            aria-hidden="true"
            className="details-photo details-photo--reindeer"
            style={{ backgroundImage: `url(${ASSETS.detailsTopLeft})` }}
          />
          <div className="details-copy details-copy--wide">
            <p className="details-copy__label">WHAT</p>
            <div className="details-copy__divider" />
            <p className="details-copy__title">
              JOIN US TO CELEBRATE
              <br />
              THE HOLIDAYS
            </p>
          </div>
          <div
            aria-hidden="true"
            className="details-photo details-photo--drinks"
            style={{ backgroundImage: `url(${ASSETS.detailsTopRight})` }}
          />
        </div>

        <div className="details-row details-row--bottom">
          <div className="details-copy details-copy--narrow">
            <p className="details-copy__label">WHEN</p>
            <div className="details-copy__divider" />
            <p className="details-copy__title">DECEMBER 25th</p>
            <p className="details-copy__text">6:00 - 11:00 pm</p>
          </div>
          <div
            aria-hidden="true"
            className="details-photo details-photo--glasses"
            style={{ backgroundImage: `url(${ASSETS.detailsBottomCenter})` }}
          />
          <div className="details-copy details-copy--narrow">
            <p className="details-copy__label">WHERE</p>
            <div className="details-copy__divider" />
            <p className="details-copy__title">SNOW BAR</p>
            <p className="details-copy__text">Gravesend Town Center</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-frame">
          <p className="cta-text">GET TIPSY &amp; STAY WARM</p>
          <a className="outline-button outline-button--cta" href="#contact">
            RSVP
          </a>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="site-footer__inner">
          <h2 className="site-footer__heading">ANY QUESTIONS?</h2>
          <p className="site-footer__subheading">Please Contact George Cristinel A</p>
          <div className="site-footer__form-wrap">
            <FormPanel />
          </div>
          <p className="site-footer__copyright">
            &copy;2035 By Holiday Party. Designed by George Cristinel A
          </p>
        </div>
      </footer>
    </main>
  );
}

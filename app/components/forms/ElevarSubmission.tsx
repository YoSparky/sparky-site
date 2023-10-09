import { Form } from "@remix-run/react";

export default function ElevarSubmissionForm() {
  return (
    <section className="container ElevarSubmissionForm">
      <Form className="form form__wrapper">
        <div className="form__inputGroup">
          <label htmlFor="brand_name">What's your brand name?</label>
          <input
            type="text"
            placeholder="Brand Name"
            name="brand_name"
            id="brand_name"
          />
        </div>
        <div className="form__inputGroup">
          <label htmlFor="brand_site">What's your brand website?</label>
          <input
            type="text"
            placeholder="brandwebsite.com"
            name="brand_site"
            id="brand_site"
          />
        </div>
        <div className="form__inputGroup">
          <label htmlFor="name">What's your name?</label>
          <input
            type="text"
            placeholder="First Last"
            name="name"
            id="name"
          />
        </div>
        <div className="form__inputGroup">
          <label htmlFor="email">Where should we send your CRO Quick Wins?</label>
          <input
            type="text"
            placeholder="you@brand.com"
            name="email"
            id="email"
          />
        </div>
        <div className="text-center">
          <button className="button--secondary">Get My Free CRO Quick Wins</button>
        </div>
      </Form>
    </section>
  );
}
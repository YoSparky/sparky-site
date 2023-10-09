import { Form } from "@remix-run/react";
import { FormEvent, useCallback, useState } from "react";
import Arrow from '~/components/icons/Arrow';


export default function ElevarSubmissionForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    const form_data = new FormData(event.currentTarget as HTMLFormElement);
    await fetch(`https://usebasin.com/f/6d5879c9a3ba`, {
      method: `post`,
      body: form_data,
    });
    setSubmitting(false);
    setSubmitted(true);
  }, []);
  
  return (
    <section className="container ElevarSubmissionForm">
      {submitted ? (
        <div className="text-center">
          <span className="h2">Thank you for your submission!</span>
          <button className="button--secondary my-5" onClick={() => setSubmitted(false)}>Send Another</button>
        </div>
      ) : (
        <Form className="form form__wrapper" onSubmit={handleSubmit}>
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
          <div className="text-center justify-center flex">
            <button
              disabled={submitting}
              type="submit"
              className="button--secondary flex gap-5 items-center"
            >
              <span>Get My Free CRO Quick Wins</span>
              <Arrow className="w-3" />
            </button>
          </div>
        </Form>
      )}
    </section>
  );
}
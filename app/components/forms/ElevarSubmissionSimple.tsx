import { Form } from "@remix-run/react";
import { FormEvent, useCallback, useState } from "react";
import Arrow from '~/components/icons/Arrow';

export default function ElevarSubmissionSimpleForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    const form_data = new FormData(event.currentTarget as HTMLFormElement);
    form_data.append(`type`, `checklist`);
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
            <label htmlFor="name">What's your name?</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="First Last"
              required
            />
          </div>
          <div className="form__inputGroup">
            <label htmlFor="email">What's your email?</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@brand.com"
              required
            />
          </div>
          <div className="text-center justify-center flex">
            <button
              disabled={submitting}
              type="submit"
              className="button--secondary flex gap-5 items-center"
            >
              <span>Get the CRO Readiness Checklist</span>
              <Arrow className="w-3" />
            </button>
          </div>
        </Form>
      )}
    </section>
  );
}
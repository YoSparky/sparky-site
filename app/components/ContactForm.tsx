import { Arrow } from "~/components/icons";
import { FormEvent, useCallback, useRef, useState } from "react";
import { Form } from "@remix-run/react";
import contact_form_data from '~/data/contact';

export default function ContactForm() {
  const [form_state, setFormState] = useState<any>({});

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const first_name_ref = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    const form_data = new FormData(event.currentTarget as HTMLFormElement);
    
    await fetch(`https://usebasin.com/f/840caf1493b3`, {
      method: `post`,
      body: form_data,
    });
    setSubmitting(false);
    setSubmitted(true);
  }, []);

  const resetForm = useCallback(() => {
    setFormState({});
    setSubmitted(false);
  }, []);

  const makeSelection = useCallback((section: string, field_value: string) => {
    setFormState({
      ...form_state,
      [section]: field_value,
    });
  }, [form_state]);

  const checkCondition = useCallback((condition?: string) => {
    if (condition) {
      const [section, valid_values] = condition.split(`.`);
      return !valid_values.includes(form_state[section]);
    }
    return false;
  }, [form_state]);

  return (
   <div className="md:pl-16">
    <div className="pb-11">SLIDE INTO OUR CRMs</div>
    {submitted ? (
      <div className="text-center">
        <p className="h2">Thank you for your submission!</p>
        <button className="button--secondary my-5" onClick={resetForm}>Send Another</button>
      </div>
    ) : (
      <Form onSubmit={handleSubmit}>
        {contact_form_data.map((section) => {
          const is_hidden = checkCondition(section.condition);
          return (
            <div
              key={section.name}
              hidden={is_hidden}
            >
              <h3 className="text-3xl md:text-3xl font-black relative py-2 font-NeueHaasGroteskDisplay">{section.label}</h3>
              <div>
                {section.type === `radio` && section.options?.map((option, index) => {
                  return (
                    <label
                      key={`radio-${index}`}
                      className="radio-wrap"
                    >
                      <input
                        type="radio"
                        value={option.value}
                        name={!is_hidden ? section.name : ``}
                        onClick={() => makeSelection(section.name, option.id)}
                        required={section.required && !is_hidden}
                      />
                      <span className="tracking-wide">{option.label}</span>
                    </label>
                  );
                })}
                {section.type === `textarea` && (
                  <textarea
                    name={!is_hidden ? section.name : ``}
                    rows={section.rows}
                    className="w-full border border-current px-6 py-5"
                    required={section.required}
                  />
                )}
              </div>
            </div>
          );
        })}

        <div className="grid md:grid-cols-12 my-5">
          <input
            ref={first_name_ref}
            className="border border-current md:col-span-4 -mb-[1px] md:-mr-[1px]"
            type="text"
            id="fname"
            name="fname"
            placeholder="First Name"
            required
          />
          <input
            className="border border-current md:col-span-4 -mb-[1px] md:-mr-[1px]"
            type="text"
            id="lname"
            name="lname"
            placeholder="Last Name"
            required
          />
          <input
            className="border border-current md:col-span-4 -mb-[1px]"
            type="text"
            id="company"
            name="company"
            placeholder="Company"
            required
          />
          <input
            className="border border-current md:col-span-6 md:-mr-[1px]"
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            className="border border-current md:col-span-6"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
          />
        </div>

        <div>
          <button
            disabled={submitting}
            type="submit"
            name="submit"
            className="button--secondary bg-black flex tracking-wide items-center gap-5 uppercase"
          >
            <span>Submit</span>
            <Arrow className="w-3" />
          </button>
        </div>
      </Form>
    )}
   </div>
  );
}
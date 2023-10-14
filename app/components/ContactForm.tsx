import { Arrow } from "~/components/icons";
import { Accordion } from "~/components/Accordion";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { Form } from "@remix-run/react";
import contact_form_data from '~/data/contact';

export default function ContactForm() {
  const [currently_active, setCurrentlyActive] = useState(`brand`);
  const [brand_type, setBrandType] = useState(``);
  const [looking_to, setLookingTo] = useState(``);
  const [livesOn, setLivesOn] = useState(``);

  const section_map: { [key: string]: { value: string, action: Function } } = {
    brand: {
      value: brand_type,
      action: setBrandType,
    },
    "looking-to": {
      value: looking_to,
      action: setLookingTo,
    },
    "lives-on": {
      value: livesOn,
      action: setLivesOn,
    },
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const first_name_ref = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    const form_data = new FormData(event.currentTarget as HTMLFormElement);
    if (brand_type) { form_data.append(`brand_type`, brand_type); }
    if (looking_to) { form_data.append(`looking_to`, looking_to); }
    if (livesOn) { form_data.append(`livesOn`, livesOn); }
    
    await fetch(`https://usebasin.com/f/840caf1493b3`, {
      method: `post`,
      body: form_data,
    });
    setSubmitting(false);
    setSubmitted(true);
  }, [brand_type, looking_to, livesOn]);

  const advanceSection = useCallback((label: string) => {
    const sections = Object.keys(section_map);
    const section_index = sections.indexOf(currently_active);
    const next_section = sections[section_index+1];
    section_map[currently_active].action(label);

    if (next_section) {
      setCurrentlyActive(next_section);
    } else {
      setCurrentlyActive(``);
      first_name_ref.current?.focus();
    }
  }, [currently_active, section_map, first_name_ref]);

  const resetForm = useCallback(() => {
    setCurrentlyActive(``);
    setBrandType(``);
    setLookingTo(``);
    setLivesOn(``);
    setSubmitted(false);
  }, []);

  return (
   <div className="md:pl-16">
    <div className="title pb-11">SLIDE INTO OUR CRMs</div>
    {submitted ? (
      <div className="text-center">
        <p className="h2">Thank you for your submission!</p>
        <button className="button--secondary my-5" onClick={resetForm}>Send Another</button>
      </div>
    ) : (
      <Form onSubmit={handleSubmit}>
        {contact_form_data.map((section) => (
          <Accordion
            id={section.section}
            isOpen={section.section === currently_active}
            label={section.label.replace(section.label_replace, section_map[section.section].value || section.label_replace)}
            toggleAccordion={setCurrentlyActive}
          >
            <ul className="options pt-6 pb-11">
              {section.options.map((option) => (
                <li>
                  <label className="radio-wrap">
                    <input
                      type="radio"
                      value={option.value}
                      name={section.section}
                      onClick={() => advanceSection(option.label)}
                      defaultChecked={section_map[section.section].value === option.label}
                    />
                    <span>{option.value}</span>
                  </label>
                </li>
              ))}
            </ul>
          </Accordion>
        ))}

        <div className="grid md:grid-cols-3 my-5">
          <input
            ref={first_name_ref}
            className="border border-current -mb-[1px] md:-mr-[1px]"
            type="text"
            id="fname"
            name="fname"
            placeholder="First Name"
            required
          />
          <input className="border border-current -mb-[1px] md:-mr-[1px]" type="text" id="lname" name="lname" placeholder="Last Name" required />
          <input className="border border-current -mb-[1px]" type="text" id="company" name="company" placeholder="Company" required />
          <input className="border border-current md:col-span-3" type="email" id="email" name="email" placeholder="Email Address" required />
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
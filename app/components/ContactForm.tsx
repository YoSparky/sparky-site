import { Arrow } from "~/components/icons";
import { Accordion } from "~/components/Accordion";
import { FormEvent, useCallback, useState } from "react";
import { Form } from "@remix-run/react";

export default function ContactForm() {
  const [currentlyActive, setCurrentlyActive] = useState(null);
  const [brand_type, setBrandType] = useState<null | string>(null);
  const [looking_to, setLookingTo] = useState<null | string>(null);
  const [platform, setPlatform] = useState<null | string>(null);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
    setCurrentlyActive(null);
    setBrandType(null);
    setLookingTo(null);
    setPlatform(null);
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
        <Accordion
          id="brand"
          isOpen={'brand' === currentlyActive}
          label={`I am ${brand_type || `a ...`} brand`}
          toggleAccordion={setCurrentlyActive}
        >
          <ul className="options pt-6 pb-11">
            <li>
              <label className="radio-wrap">
                <input type="radio" value="Start-up" name="brand" onClick={() => setBrandType(`a start-up`)} defaultChecked={brand_type === `a start-up`} />
                <span>Start-up</span>
              </label>
            </li>
            <li>
              <label className="radio-wrap">
                <input type="radio" value="Early Stage" name="brand" onClick={() => setBrandType(`an early stage`)} defaultChecked={brand_type === `an early stage`} />
                <span>Early Stage</span>
              </label>
            </li>
            <li>
              <label className="radio-wrap">
                <input type="radio" value="Established" name="brand" onClick={() => setBrandType(`an established`)} defaultChecked={brand_type === `an established`} />
                <span>Established</span>
              </label>
            </li>
          </ul>
        </Accordion>
        <Accordion
          id="looking-to"
          toggleAccordion={setCurrentlyActive}
          isOpen={'looking-to' === currentlyActive}
          label={`looking to ${looking_to || `...`} site`}
        >
          <ul className="options pt-6 pb-11">
            <li>
              <label className="radio-wrap">
                <input type="radio" name="goal" value="Launch a new" onClick={() => setLookingTo(`launch a new`)} defaultChecked={looking_to === `launch a new`} />
                <span>Launch a new</span>
              </label>
            </li>
            <li>
              <label className="radio-wrap">
                <input type="radio" name="goal" value="Re-design my current" onClick={() => setLookingTo(`redesign my current`)} defaultChecked={looking_to === `redesign my current`} />
                <span>Re-design my current</span>
              </label>
            </li>
            <li>
              <label className="radio-wrap">
                <input type="radio" name="goal" value="Re-platform my" onClick={() => setLookingTo(`re-platform my`)} defaultChecked={looking_to === `re-platform my`} />
                <span>Re-platform my</span>
              </label>
            </li>
            <li>
              <label className="radio-wrap">
                <input type="radio" name="goal" value="Optimize my" onClick={() => setLookingTo(`optimize my`)} defaultChecked={looking_to === `optimize my`} />
                <span>Optimize my</span>
              </label>
            </li>
            <li>
              <label className="radio-wrap">
                <input type="radio" name="goal" value="Add something to my" onClick={() => setLookingTo(`add something to my`)} defaultChecked={looking_to === `add something to my`} />
                <span>Add something to my</span>
              </label>
            </li>
            <li>
              <label className="radio-wrap">
                <input type="radio" name="goal" value="Create a headless" onClick={() => setLookingTo(`create a headless`)} defaultChecked={looking_to === `create a headless`} />
                <span>Create a headless</span>
              </label>
            </li>
          </ul>
        </Accordion>
        <Accordion
          toggleAccordion={setCurrentlyActive}
          id="lives-on"
          isOpen={'lives-on' === currentlyActive}
          label={`that lives on ${platform || `...`}`}
        >
          <ul className="options pt-6 pb-11">
            <li>
              <label className="radio-wrap">
                <input type="radio" name="platform" value="Shopify" onClick={() => setPlatform(`Shopify`)} defaultChecked={platform === `Shopify`} />
                <span>Shopify</span>
              </label>
            </li>
            <li>
              <label className="radio-wrap">
                <input type="radio" name="platform" value="Salesforce Commerce Cloud" onClick={() => setPlatform(`Salesforce Commerce Cloud`)} defaultChecked={platform === `Salesforce Commerce Cloud`} />
                <span>Salesforce Commerce Cloud</span>
              </label>
            </li>
            <li>
              <label className="radio-wrap">
                <input type="radio" name="platform" value="Magento" onClick={() => setPlatform(`Magento`)} defaultChecked={platform === `Magento`} />
                <span>Magento</span>
              </label>
            </li>
            <li>
              <label className="radio-wrap">
                <input type="radio" name="platform" value="Hybrid" onClick={() => setPlatform(`Hybrid`)} defaultChecked={platform === `Hybrid`} />
                <span>Hybrid</span>
              </label>
            </li>
            <li>
              <label className="radio-wrap">
                <input type="radio" name="platform" value="WooCommerce" onClick={() => setPlatform(`WooCommerce`)} defaultChecked={platform === `WooCommerce`} />
                <span>WooCommerce</span>
              </label>
            </li>
            <li>
              <label className="radio-wrap">
                <input type="radio" name="platform" value="a different platform" onClick={() => setPlatform(`a different platform`)} defaultChecked={platform === `a different platform`} />
                <span>a different platform</span>
              </label>
            </li>
          </ul>
        </Accordion>

        <div className="grid md:grid-cols-3 my-5">
          <input className="border border-current -mb-[1px] md:-mr-[1px]" type="text" id="fname" name="fname" placeholder="First Name" required />
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
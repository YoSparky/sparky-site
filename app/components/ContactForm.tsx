import { Arrow } from "./icons";
import { Accordion } from "./Accordion";
import { useState } from "react";

export default function ContactForm() {
  const [currentlyActive, setCurrentlyActive] = useState(null);
  const [brand_type, setBrandType] = useState<null | string>(null);
  const [looking_to, setLookingTo] = useState<null | string>(null);
  const [platform, setPlatform] = useState<null | string>(null);

  return (
   <div className="md:pl-16">
    <div className="title pb-11">SLIDE INTO OUR CRMs</div>
    <form method="post" action="https://usebasin.com/f/840caf1493b3" data-action="https://www.sparky.us/work">
      <Accordion
        id="brand"
        isOpen={'brand' === currentlyActive}
        label={`I am ${brand_type || `a ...`} brand`}
        toggleAccordion={setCurrentlyActive}
      >
        <ul className="options pt-6 pb-11">
          <li>
            <label className="radio-wrap">
              <input type="radio" value="Start-up" name="brand" onClick={() => setBrandType(`a start-up`)} />
              <span>Start-up</span>
            </label>
          </li>
          <li>
            <label className="radio-wrap">
              <input type="radio" value="Early Stage" name="brand" onClick={() => setBrandType(`an early stage`)} />
              <span>Early Stage</span>
            </label>
          </li>
          <li>
            <label className="radio-wrap">
              <input type="radio" value="Established" name="brand" onClick={() => setBrandType(`an established`)} />
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
              <input type="radio" name="goal" value="Launch a new" onClick={() => setLookingTo(`launch a new`)} />
              <span>Launch a new</span>
            </label>
          </li>
          <li>
            <label className="radio-wrap">
              <input type="radio" name="goal" value="Re-design my current" onClick={() => setLookingTo(`redesign my current`)} />
              <span>Re-design my current</span>
            </label>
          </li>
          <li>
            <label className="radio-wrap">
              <input type="radio" name="goal" value="Re-platform my" onClick={() => setLookingTo(`re-platform my`)} />
              <span>Re-platform my</span>
            </label>
          </li>
          <li>
            <label className="radio-wrap">
              <input type="radio" name="goal" value="Optimize my" onClick={() => setLookingTo(`optimize my`)} />
              <span>Optimize my</span>
            </label>
          </li>
          <li>
            <label className="radio-wrap">
              <input type="radio" name="goal" value="Add something to my" onClick={() => setLookingTo(`add something to my`)} />
              <span>Add something to my</span>
            </label>
          </li>
          <li>
            <label className="radio-wrap">
              <input type="radio" name="goal" value="Create a headless" onClick={() => setLookingTo(`create a headless`)} />
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
              <input type="radio" name="platform" value="Shopify" onClick={() => setPlatform(`Shopify`)} />
              <span>Shopify</span>
            </label>
          </li>
          <li>
            <label className="radio-wrap">
              <input type="radio" name="platform" value="Salesforce Commerce Cloud" onClick={() => setPlatform(`Salesforce Commerce Cloud`)} />
              <span>Salesforce Commerce Cloud</span>
            </label>
          </li>
          <li>
            <label className="radio-wrap">
              <input type="radio" name="platform" value="Magento" onClick={() => setPlatform(`Magento`)} />
              <span>Magento</span>
            </label>
          </li>
          <li>
            <label className="radio-wrap">
              <input type="radio" name="platform" value="Hybrid" onClick={() => setPlatform(`Hybrid`)} />
              <span>Hybrid</span>
            </label>
          </li>
          <li>
            <label className="radio-wrap">
              <input type="radio" name="platform" value="WooCommerce" onClick={() => setPlatform(`WooCommerce`)} />
              <span>WooCommerce</span>
            </label>
          </li>
          <li>
            <label className="radio-wrap">
              <input type="radio" name="platform" value="a different platform" onClick={() => setPlatform(`a different platform`)} />
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
        <button type="submit" name="submit" className="button--secondary bg-black flex tracking-wide items-center gap-5 uppercase">
          <span>Submit</span>
          <Arrow className="w-3" />
        </button>
      </div>
    </form>
   </div>
  );
}
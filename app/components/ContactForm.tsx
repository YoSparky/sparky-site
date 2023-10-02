import { Arrow } from "./icons";
import { Accordion } from "./Accordion";
import { useState } from "react";

export default function ContactForm() {
  const [currentlyActive, setCurrentlyActive] = useState(null);

  return (
   <div className="md:pl-16">
    <div className="title pb-11">SLIDE INTO OUR CRMs</div>
    <form method="post" action="https://usebasin.com/f/840caf1493b3" data-action="https://www.sparky.us/work">
      <Accordion toggleAccordion={setCurrentlyActive} id="brand" isOpen={'brand' === currentlyActive} label="I am a ... brand">
        <ul className="options pt-6 pb-11">
          <li>
            <label className="radio-wrap">
              <input type="radio" value="Start-up" name="brand" /> 
              <span>Start-up</span>
            </label>
          </li>
          <li>
            <label className="radio-wrap">
              <input type="radio" value="Early Stage" name="brand" /> 
              <span>Early Stage</span>
            </label>
          </li>
          <li>
            <label className="radio-wrap">
              <input type="radio" value="Established" name="brand" /> 
              <span>Established</span>
            </label>
          </li>
        </ul>
      </Accordion>
      <Accordion toggleAccordion={setCurrentlyActive} id="looking-to" isOpen={'looking-to' === currentlyActive} label="looking to... site">
        <ul className="options pt-6 pb-11">
          <li>
            <label className="radio-wrap"><input type="radio" name="goal" value="Launch a new" /> <span>Launch a new</span></label>
          </li>
          <li>
            <label className="radio-wrap"><input type="radio" name="goal" value="Re-design my current" /> <span>Re-design my current</span></label>
          </li>
          <li>
            <label className="radio-wrap"><input type="radio" name="goal" value="Re-platform my" /> <span>Re-platform my</span></label>
          </li>
          <li>
            <label className="radio-wrap"><input type="radio" name="goal" value="Optimize my" /> <span>Optimize my</span></label>
          </li>
          <li>
            <label className="radio-wrap"><input type="radio" name="goal" value="Add something to my" /> <span>Add something to my</span></label>
          </li>
          <li>
            <label className="radio-wrap"><input type="radio" name="goal" value="Create a headless" /> <span>Create a headless</span></label>
          </li>
        </ul>
      </Accordion>
      <Accordion toggleAccordion={setCurrentlyActive} id="lives-on" isOpen={'lives-on' === currentlyActive} label="that lives on...">
        <ul className="options pt-6 pb-11">
          <li>
            <label className="radio-wrap"><input type="radio" name="platform" value="Shopify" /> <span>Shopify</span></label>
          </li>
          <li>
            <label className="radio-wrap"><input type="radio" name="platform" value="Salesforce Commerce Cloud" /> <span>Salesforce Commerce Cloud</span></label>
          </li>
          <li>
            <label className="radio-wrap"><input type="radio" name="platform" value="Magento" /> <span>Magento</span></label>
          </li>
          <li>
            <label className="radio-wrap"><input type="radio" name="platform" value="Hybrid" /> <span>Hybris</span></label>
          </li>
          <li>
            <label className="radio-wrap"><input type="radio" name="platform" value="WooCommerce" /> <span>WooCommerce</span></label>
          </li>
          <li>
            <label className="radio-wrap"><input type="radio" name="platform" value="a different platform" /> <span>a different platform</span></label>
          </li>
        </ul>
      </Accordion>

      <div className="grid grid-cols-3 border border-current my-5 md:my-10">
        <input className="border-r border-current" type="text" id="fname" name="fname" placeholder="First Name" required />
        <input className="border-r border-current" type="text" id="lname" name="lname" placeholder="Last Name" required />
        <input type="text" id="company" name="company" placeholder="Company" required />
        <input className="col-span-3 border-t border-current" type="email" id="email" name="email" placeholder="Email Address" required />
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
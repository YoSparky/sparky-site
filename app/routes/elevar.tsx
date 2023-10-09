import ContentArea from "~/components/ContentArea";
import quickWinsImage from '~/assets/quick_wins.png';
import sparkyDudeImage from '~/assets/sparkydude.png';
import personalizedLoginTouchesImage from '~/assets/personalized_login_touches.png';
import ElevarSubmissionForm from "~/components/forms/ElevarSubmission";
import Footer from "~/components/Footer/Footer";
import ElevarSubmissionSimpleForm from "~/components/forms/ElevarSubmissionSimple";

export default function ElevarPage() {
  return (
    <>
      <ContentArea
        layout="standard"
        topComponent={true}
        image={quickWinsImage}
        textVerticalPosition='middle'
      >
        <h2>CRO Readiness Checklist</h2>
        <p className='h4 leading-8 font-normal'>Send us your site and we’ll give you 3 brand-specific ideas to level up this holiday season.</p>
      </ContentArea>
      <ElevarSubmissionSimpleForm />
      <ContentArea
        layout="standard"
        image={personalizedLoginTouchesImage}
        textVerticalPosition='middle'
      >
        <img
          src={sparkyDudeImage}
          className="w-[144px]"
        />
        <h2>Get 3 CRO Quick Wins</h2>
        <p className='h4 leading-8 font-normal'>Send us your site and we’ll give you 3 brand-specific ideas to level up this holiday season.</p>
      </ContentArea>
      <ElevarSubmissionForm />
      <Footer />
    </>
  );
}
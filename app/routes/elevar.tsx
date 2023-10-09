import ContentArea from "~/components/ContentArea";
import quickWinsImage from '../assets/quick_wins.png';
import sparkyDudeImage from '../assets/sparkydude.png';
import personalizedLoginTouchesImage from '../assets/personalized_login_touches.png';

export default function ElevarPage() {
  return (
    <>
      <ContentArea
        layout="standard"
        topComponent={true}
        image={quickWinsImage}
        textVerticalPosition='middle'
      >
        <h2>CRO Quick Wins</h2>
        <p className='font-title'>Lorem ipsum makes lightweight, comfortable, casual shoes for adventurers of all varieties. When Crocs purchased HEYDUDE (one of the largest and fastest-growing Shopify Plus brands) for $2.5b in early 2022, they immediately called Sparky to level-up the site.</p>
      </ContentArea>
      <ContentArea
        layout="standard"
        image={personalizedLoginTouchesImage}
        textVerticalPosition='middle'
      >
        <img
          src={sparkyDudeImage}
          className="w-[144px]"
        />
        <h2>Headline</h2>
        <p className='font-title'>Lorem ipsum makes lightweight, comfortable, casual shoes for adventurers of all varieties. When Crocs purchased HEYDUDE (one of the largest and fastest-growing Shopify Plus brands) for $2.5b in early 2022, they immediately called Sparky to level-up the site.</p>
      </ContentArea>
    </>
  );
}
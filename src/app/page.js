import CookieConsentPopup from "@/components/CookieConsentPopup";
import If from "../components/If.jsx";

export default function Home() {
  const cookieIsAccepted = true;
  return (
    <div>
      <If condition={cookieIsAccepted}>
        <CookieConsentPopup />
      </If>
    </div>
  );
}

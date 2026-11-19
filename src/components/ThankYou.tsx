import { Button } from "./ui/button";

const ThankYou = ({ onReturn }: { onReturn: () => void }) => {
  return (
    <div className="text-center py-8">
      <div className="mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
        <p className="text-foreground">Thank you for your message. I'll get back to you soon.</p>
      </div>
      <Button
        onClick={onReturn}
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
      >
        Send Another Message
      </Button>
    </div>
  );
};

export default ThankYou;

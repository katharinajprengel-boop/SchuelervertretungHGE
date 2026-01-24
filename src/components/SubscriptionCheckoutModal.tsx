import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Receipt, XCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface SubscriptionCheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const benefits = [
  "Unbegrenzte Angebotserstellung",
  "Einwand- und Follow-up-Funktionen",
  "PDF-, E-Mail- und WhatsApp-Export",
];

const trustAnchors = [
  { icon: Shield, text: "Keine versteckten Kosten" },
  { icon: XCircle, text: "Kündigung jederzeit möglich" },
  { icon: Receipt, text: "Rechnung für Unternehmen" },
];

export function SubscriptionCheckoutModal({
  open,
  onOpenChange,
}: SubscriptionCheckoutModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const paymentLink =
    import.meta.env.VITE_STRIPE_PAYMENT_LINK ||
    "https://buy.stripe.com/test_00wdRa9Iv4ft2Ppfz4bEA00";

  const handleCheckout = async () => {
    setIsLoading(true);

    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const accessToken = sessionData.session?.access_token;
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout`;
      const apiKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 15000);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: apiKey,
          ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        },
        body: JSON.stringify({ email: sessionData.session?.user?.email }),
        signal: controller.signal,
      });

      window.clearTimeout(timeoutId);

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || `Checkout fehlgeschlagen (${response.status})`);
      }

      const data = await response.json();
      if (data?.url) {
        window.location.href = data.url;
        onOpenChange(false);
      } else {
        throw new Error("Keine Checkout-URL erhalten");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      const message =
        error instanceof Error && error.name === "AbortError"
          ? "Checkout hat zu lange gedauert. Wir öffnen den Zahlungslink."
          : "Checkout ist gerade nicht erreichbar. Wir öffnen den Zahlungslink.";
      window.location.href = paymentLink;
      toast({
        variant: "destructive",
        title: "Fehler beim Checkout",
        description: message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-foreground">
            Abo starten
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            29 € / Monat · Jederzeit kündbar
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Benefits */}
          <div className="space-y-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Trust Anchors */}
          <div className="border-t border-border pt-4">
            <div className="grid grid-cols-1 gap-2">
              {trustAnchors.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Icon className="w-4 h-4" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Button
            variant="cta"
            size="lg"
            className="w-full"
            onClick={handleCheckout}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Wird geladen...
              </>
            ) : (
              "Abo jetzt starten"
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Du wirst zu unserem sicheren Zahlungsanbieter Stripe weitergeleitet.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

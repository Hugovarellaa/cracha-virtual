import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";
import { getSession } from "next-auth/client";

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "POST") {
    const session = await getSession({ req: request });

    const stripeCustomer = await stripe.customers.create({
      email: session.user.email,
    });

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      line_items: [{ price: "price_1JwtdnLKV0dvLEEhv3Z8ENhq", quantity: 1 }],
      mode: "subscription",
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });
    response.status(200).json({ sessionId: stripeCheckoutSession.id });
  } else {
    response.setHeader("Allow", "POST");
    response.status(405).end("Method not allowed");
  }
};

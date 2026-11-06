import arcjet, { shield, tokenBucket, detectBot } from "@arcjet/next";

// Base Arcjet instance with global protections
export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    // Shield WAF - protect against common attacks
    shield({
      mode: "LIVE", // Use "DRY_RUN" during development to test
    }),

    // Bot protection - allow search engines only
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
  ],
});

// Apply the same daily safeguard to AI features for every user.
export const aiFeatureLimit = aj.withRule(
  tokenBucket({
    mode: "LIVE",
    characteristics: ["userId"],
    refillRate: 1000,
    interval: "1d",
    capacity: 1000,
  })
);

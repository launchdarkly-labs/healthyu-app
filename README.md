# Welcome to HealthyU! 

We're releasing a new payment system and want to measure how effective it is! Let's go! 

## Setup

* Clone this repo `git clone https://github.com/launchdarkly-labs/healthyu-app`
* Switch into its directory `cd healthyu-app`
* Create a `.env` file in the root directory with the following item in it - `NEXT_PUBLIC_LD_CLIENT_KEY='<Your ClientID>'` - add your LaunchDarkly Client Side ID to it 
* Run `npm i; npm run dev`
* Create a Multi-Variate, String feature flag with the following values 

```
Name: New payment method for sign up flow
Key: newPaymentMethods
Type: String
Check Client Side SDK availability

Variations: 

Variation 1
-------------------
Name: Old Flow
Value: sign-up-flow


Variation 2
-------------------
Name: Dropdown select
Value: sign-up-dropdown-options

Variation 3
-------------------
Name: Radio Select
Value: sign-up-radio-cards
```
## Intro

I would generally prefer to use React + Vite given the complexity of the application, but as I preferred to follow the role tech stack as much as possible, I opted for Next.js.

I implemented all the multi-step onboarding logic, with localStorage persistence as described in the assessment documentation, and there's a redirect in home to check if the user has already completed the onboarding.

On the home page, in addition to what was expected, I also tried to deliver a slightly more complete experience, using the scroll to decide which card the details modal will open. By far not ideal, I usually use a carousel lib for this kind of scenario, but since the assessment documentation instructed to keep dependencies minimal, I tried to create something similar.

Overall, I believe I spent about 6 hours on the project.

Point of attention: Figma texts do not have the line-height set correctly, so it is likely that there is some spacing related to the text that is inaccurate on the project.

## Quick Start

```bash
# Install dependencies
pnpm i

# Start all apps in development mode
pnpm run dev

# Start all apps in production mode
pnpm run start
```

## Base Structure

- `@/app`: app routing configuration and _page components_:
  - `@/app/[route]/_page`: organization of page specific sub components, specific hooks, utils...;
- `@/ui`: app specific ui components (also known as _Presentational Components_, _Dumb Components_ or _UI Components_);
- `@/styles`: app styles configuration;
- `@/config`: app general configurations, like .d.ts definitions, bootstrap scripts, routing constant...;
  - `@/config/routing.ts`: handle the paths of the app in a more centralized way.
- `@/utils`: app specific utils/constants;

- `/prompts`: prompts that we can to boost cursor;

## Troubleshooting

- `pnpm run script:gen-theme-config`: generate theme.ts styles;
- `pnpm run clean-up`: delete all apps/packages cache files and npm modules;
- `pnpm run clean-install`: run clean-up and then install;

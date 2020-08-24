import { addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { contexts } from "./context";

addParameters({
  backgrounds: [
    { name: "Default theme", value: "blue", default: true },
    { name: "Dark theme", value: "#050449" },
  ],
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs(contexts));
addDecorator(withA11y);

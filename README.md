# MeteoLuxe

## Overview
MeteoLuxe is a weather CLI tool that provides real-time weather information. Stay informed about the weather conditions with just a command.

## Installation
To install MeteoLuxe globally, run the following command:
```bash
git clone git@github.com:v-zdorovcev/meteoluxe.git
cd meteoluxe
npm i -g .
```

## Usage
After installation, you can use MeteoLuxe by running any of the following commands:
- `meteoluxe`
- `ml`
- `weather`

For example:
```bash
weather
```

## Arguments
MeteoLuxe supports the following command-line arguments:
- `--state`, `-s`, `-S`: Set the name of your city.
- `--token`, `-t`, `-T`: Set your API key. You can obtain a key by registering at [Weather API](https://www.weatherapi.com/my/).

Example:
```bash
weather -s Paris -t YOUR_API_KEY
```

## Scripts
- `npm start`: Builds the project, installs it globally, and runs the `ml` command.
- `npm run lint`: Lints the code using ESLint.
- `npm run lint:fix`: Lints and automatically fixes code style issues.
- `npm run build`: Unbuilds the project.
- `npm run dev`: Unbuilds the project with stub data for development.
- `npm run typecheck`: Runs TypeScript type checking without emitting files.

# Singlish to Sinhala Transliteration Test Suite

This project contains an automated test suite for verifying Singlish to Sinhala transliteration accuracy, specifically targeting the [SwiftTranslator](https://www.swifttranslator.com/) web application. It uses **Playwright** for end-to-end testing.

## Project Overview

The test suite is designed to validate the accuracy and robustness of the transliteration engine. It includes 35 optimized test cases covering:
- **Positive Functional Scenarios (1-24):** Validating correct transliteration for common phrases, simple/medium sentences, and mixed numeric/English inputs.
- **Negative Functional Scenarios (25-34):** Testing robustness against messy inputs, typos, and edge cases.
- **UI Validation:** Basic UI responsiveness checks.

The tests run against `https://www.swifttranslator.com/` and use a fuzzy matching logic (60% word match threshold) to account for minor engine variations.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (v14 or higher is recommended).
- **npm**: Comes with Node.js.

## Installation

1. Clone the repository (if you haven't already):
   ```bash
   git clone <repository-url>
   cd it23554122
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Usage

To run the entire test suite:

```bash
npx playwright test
```

To run a specific test file:

```bash
npx playwright test tests/it23554122.spec.ts
```

To view the test report:

```bash
npx playwright show-report
```

## Structure

- **`tests/it23554122.spec.ts`**: The main test file containing the 35 test cases and logic.
- **`IT23554122.xlsx`**: Excel file containing test data (if applicable/used in other contexts).
- **`playwright.config.ts`**: Configuration for Playwright (browsers, timeouts, etc.).

## Test Logic

The test suite enters Singlish text into the input area and captures the generated Sinhala output. It then cleans both the actual and expected strings and performs a word-by-word comparison. A match rate of **60% or higher** is considered a pass to allow for minor transliteration differences.

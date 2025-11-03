# Playwright Bug: Misleading Error Message

This repository contains a **minimal reproducible example** demonstrating a **misleading error message** in Playwright.

The test titled **“misleading error message”** intentionally triggers the problematic scenario.

---

### ⚠️ The Issue

When the test times out, Playwright currently reports:

```
Test timeout of 10000ms exceeded.
Error: locator.click: Target page, context or browser has been closed
```

This message is **misleading**, as the test does **not** close the page or browser.
The actual cause is that the locator could not find the expected element in time, so the error message should be:

```
Test timeout of 10000ms exceeded.
Error: locator.click: Test timeout of 10000ms exceeded
```
There are a couple of tests to show cases where the error message is correct.

---

### 🧩 Background

This behavior was first discussed in the following issue on **playwright-bdd**:
👉 [vitalets/playwright-bdd#344](https://github.com/vitalets/playwright-bdd/issues/344)
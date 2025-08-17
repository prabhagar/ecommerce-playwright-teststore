import { Locator } from '@playwright/test';

export class TestUtils {
    static async waitAndFill(locator: Locator, text: string) {
        await locator.waitFor({ state: 'visible' });
        await locator.fill(text);
    }
}
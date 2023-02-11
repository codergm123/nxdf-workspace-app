import { device, element, by, expect } from 'detox';

describe('Staking4u', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display welcome message', async () => {
    await expect(element(by.id('heading'))).toHaveText('Welcome Staking4u 👋');
  });
});

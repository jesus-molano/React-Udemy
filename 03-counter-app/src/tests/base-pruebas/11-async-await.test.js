import { getImage } from "../../base-pruebas/11-async-await"


describe('11-async-await tests', () => {
  test('should return the img url', async () => {
    const url = await getImage();
    expect(url.includes('https://')).toBe(true);
  })
})

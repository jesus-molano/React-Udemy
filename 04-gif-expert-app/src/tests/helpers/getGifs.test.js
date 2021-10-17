import {getGifs} from '../../helpers/getGifs';

describe('getGifs helper tests', () => {
  test('should show 20 elements', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(20)
  })
  test('should return [] if there arent props',async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0)
  })
  
})

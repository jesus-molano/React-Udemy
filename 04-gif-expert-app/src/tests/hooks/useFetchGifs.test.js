import useFetchGifs from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks'

describe('useFetchGifs Hook tests', () => {
  test('should return the initial state', async () => {
    const { result,  waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
    const { gifs, loading } = result.current;

    await waitForNextUpdate();

    expect(gifs).toEqual([]);
    expect(loading).toBe(true);
  })
  test('should return an array of images and loading: false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));

    await waitForNextUpdate();

    const { gifs, loading } = result.current;

    expect(gifs.length).toBe(20);
    expect(loading).toBe(false);
  })
  
})

import { useSelector } from 'example/node_modules/@types/react-redux';
import { globalStylesSelector } from './selectors';
import type { ThemeSliceState } from './types';

export function useGlobalStyles<T = {}>(): ThemeSliceState<T>['globalStyles'] {
  return useSelector(globalStylesSelector);
}

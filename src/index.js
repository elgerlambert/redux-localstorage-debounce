import _debounce from 'lodash.debounce';

export default function debounce(wait, options) {
  const finalOptions = typeof options === 'number'
    ? {maxWait: options}
    : options;

  return (storage) => ({
    ...storage,
    put: _debounce(storage.put, wait, finalOptions),
  });
}

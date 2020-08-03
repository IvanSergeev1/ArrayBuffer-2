import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../classes/ArrayBufferConverter';

test('toString method of ArrayBufferConverter should turn buffer to string', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const result = converter.toString();
  expect(result).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

import { Messaging } from '../../services/messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    //act
    const sut = createSut();
    //assert
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log with "Mensagem enviada:" and msg', () => {
    //arrange
    const sut = createSut();
    //act
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    //assert
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });

  it('should call console.log once', () => {
    //arrange
    const sut = createSut();
    //act
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    //assert
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});

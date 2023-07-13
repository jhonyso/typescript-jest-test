import { Persistency } from '../../services/persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('Espero que retorne undefined', () => {
    //act
    const sut = new Persistency();
    //assert
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('deve chamar console.log uma vez', () => {
    //arrange
    const sut = new Persistency();
    //act
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    //assert
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('deve chamar console.log uma vez', () => {
    //arrange
    const sut = new Persistency();
    //act
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    //assert
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso..."', () => {
    //arrange
    const sut = new Persistency();
    //act
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    //assert
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});

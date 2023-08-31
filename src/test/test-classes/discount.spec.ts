import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from '../../classes/discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    //act
    const sut = createSut(NoDiscount);
    //assert
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should apply 50% discount on price', () => {
    //act
    const sut = createSut(FiftyPercentDiscount);
    //assert
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('should apply 10% discount on price', () => {
    //act
    const sut = createSut(TenPercentDiscount);
    //assert
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});

import { IndividualCustomer, EnterpriseCustomer } from '../classes/customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    //act
    const sut = createIndividualCustomer('Jhony', 'Soares', '111.111');
    //assert
    expect(sut).toHaveProperty('firstName', 'Jhony');
    expect(sut).toHaveProperty('lastName', 'Soares');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('should have methods to get name and idn for individual customers', () => {
    //act
    const sut = createIndividualCustomer('Jhony', 'Soares', '111.111');
    //assert
    expect(sut.getName()).toBe('Jhony Soares');
    expect(sut.getIDN()).toBe('111.111');
  });
});

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    //act
    const sut = createEnterpriseCustomer('Udemy', '222222222');
    //assert
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '222222222');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    //act
    const sut = createEnterpriseCustomer('Udemy', '222');
    //assert
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('222');
  });
});

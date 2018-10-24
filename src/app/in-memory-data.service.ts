export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', "E-mail Address":'bkarambe' },
      { id: 12, name: 'Narco', "E-mail Address":'bkarambe2' },
      { id: 13, name: 'Bombasto', "E-mail Address":'bkarambe3' },
      { id: 14, name: 'Celeritas', "E-mail Address":'bkarambe4' },
      { id: 15, name: 'Magneta', "E-mail Address":'bkarambe5' },
      { id: 16, name: 'RubberMan', "E-mail Address":'bkarambe6' },
      { id: 17, name: 'Dynama', "E-mail Address":'bkarambe7' },
      { id: 18, name: 'Dr IQ', "E-mail Address":'bkarambe8' },
      { id: 19, name: 'Magma', "E-mail Address":'bkarambe9' },
      { id: 20, name: 'Tornado', "E-mail Address":'bkarambe10' }
    ];
    return { heroes };
  }
}

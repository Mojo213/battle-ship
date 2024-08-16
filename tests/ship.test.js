const createShip = require('../src/ship');

describe('Ship', () => {
  test('ship object has been created with the correct length', () => {
    const ship = createShip(3);
    expect(ship.length).toBe(3); 
  });

  test('hit method increases hit count', () => {
    const ship = createShip(3);
    expect(ship.hit()).toBe('Ship has been hit! Hits: 1'); 
    expect(ship.hit()).toBe('Ship has been hit! Hits: 2'); 
  });

  test('isSunk method returns false when not all hits have been made', () => {
    const ship = createShip(3);
    ship.hit(); 
    ship.hit(); 
    expect(ship.isSunk()).toBe(false); 
  });

  test('isSunk method returns true when all hits have been made', () => {
    const ship = createShip(3);
    ship.hit(); 
    ship.hit(); 
    ship.hit(); 
    expect(ship.isSunk()).toBe(true); 
  });
});

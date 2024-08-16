function createShip(length) {
    let hitCount = 0;
    return {
      length: length,
      hit: function () {
        hitCount++;
        return `Ship has been hit! Hits: ${hitCount}`;
      },
      isSunk: function () {
        return hitCount >= length;
      }
    };
  }
module.exports = createShip;
  
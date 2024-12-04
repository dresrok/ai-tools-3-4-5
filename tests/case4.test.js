const { slots, reserveEarliestAvailableSlot } = require('../src/case4');

describe('reserveEarliestAvailableSlot', () => {
  beforeEach(() => {
    // Reset the slots before each test
    slots.forEach((slot) => (slot.reserved = false));
  });

  it('test1', () => {
    const slot = reserveEarliestAvailableSlot(
      new Date('2023-09-15T10:00:00'),
      new Date('2023-09-23T11:00:00')
    );

    expect(slot).toMatchObject({
      date: new Date('2023-09-15T10:00:00'),
      reserved: true,
    });
  });

  it('test2', () => {
    // Reserve all slots
    slots.forEach((slot) => (slot.reserved = true));

    const slot = reserveEarliestAvailableSlot(
      new Date('2023-09-15T10:00:00'),
      new Date('2023-09-23T11:00:00')
    );

    expect(slot).toBeNull();
  });

  it('test3', () => {
    expect(() =>
      reserveEarliestAvailableSlot(
        new Date('2023-09-24T10:00:00'), // endDate is before startDate
        new Date('2023-09-23T11:00:00')
      )
    ).toThrowError('The end date cannot be earlier than the start date.');
  });
});

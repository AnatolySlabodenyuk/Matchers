import sortHeroes from '../sorting';

test('should sort heroes by health in descending order', () => {
    const heroes = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];

    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];

    const result = sortHeroes(heroes);

    expect(result).toEqual(expected);
});

test('should fail with toBe for deep equality', () => {
    const heroes = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];

    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];

    const result = sortHeroes(heroes);


    // toBe работать не будет, но будет работать toEqual
    expect(result).not.toBe(expected); // Ожидаемый результат — новый массив с правильным содержимым. Это разные ссылки.
    expect(result).toEqual(expected);
});

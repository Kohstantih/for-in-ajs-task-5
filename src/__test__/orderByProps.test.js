import orderByProps from "../js/orderByProps";

test.each ([
    [
        {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40},
        ["name", "level"],
        [
            {key: "name", value: "мечник"},
            {key: "level", value: 2},
            {key: "attack", value: 80},
            {key: "defence", value: 40},
            {key: "health", value: 10}
        ]     
    ],
    [
        {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40},
        ["name", "level", "health"],
        [
            {key: "name", value: "мечник"},
            {key: "level", value: 2},
            {key: "health", value: 10},
            {key: "attack", value: 80},
            {key: "defence", value: 40}            
        ]     
    ],
    [
        {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40},
        ["name", "level", "type"],
        [
            {key: "name", value: "мечник"},
            {key: "level", value: 2},
            {key: "type", value: undefined},
            {key: "attack", value: 80},
            {key: "defence", value: 40},
            {key: "health", value: 10}            
        ]     
    ]
])(
    ('conformity check'), (obj, given, expected) => {
        const received = orderByProps(obj, given);
        expect(received).toEqual(expected);
    }
);

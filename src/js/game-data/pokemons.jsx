let a = require('../../imgs/bulba-attack.gif');
let aa = require('../../imgs/bulba-calm.gif');
let aaa = require('../../imgs/Bulbasaur_Back.gif');
let b = require('../../imgs/char-attack.gif');
let bb = require('../../imgs/char-calm.gif');
let bbb = require('../../imgs/Charmander_Back.gif');
let c = require('../../imgs/squil-attack.gif');
let cc = require('../../imgs/squil-calm.gif');
let d = require('../../imgs/pika-attack.gif');
let dd = require('../../imgs/pika-calm.gif');
let e = require('../../imgs/toge-attack.gif');
let ee = require('../../imgs/toge-calm.gif');
let f = require('../../imgs/butterfly-calm.gif');
let ff = require('../../imgs/butterfly-calm.gif');
let fff = require('../../imgs/Butterfree_back.gif');
let g = require('../../imgs/Donphan-F_XY.gif');
let gg = require('../../imgs/Donphan-F_XY.gif');
let ggg = require('../../imgs/Donphan_Back_XY.gif');
let h = require('../../imgs/shelgon.gif');
let hh = require('../../imgs/shelgon.gif');
let hhh = require('../../imgs/Shelgon_Back_XY.gif');


const pokemons =  [
        {
            id: "bulbasaur",
            lvl: 10,
            atk: 49,
            def: 49,
            specAtk: 65,
            specDef: 65,
            speed: 45,
            stamina: 45,
            gif_attack: a,
            gif_calm: aa,
            gif_back: aaa,
            type: ["grass", "poison"],
            description: "Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker green patches. It has red eyes with white pupils and scleras. It also has pointed, ear-like structures on top of its head. Its snout is short and blunt, and it has a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On its back is a green plant bulb, which is grown from a seed planted there at birth. The bulb provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.",
            attacks: [
                {
                    id: "Vine Whip",
                    power: 45,
                    nature: "grass",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "tackle",
                    power: 40,
                    nature: "normal",
                    type: "normal",
                    accuracy: 100
                },
                {
                    id: "growl",
                    power: 4,
                    nature: "normal",
                    target: "def",
                    targetName: "defense",
                    type: "modifying_enemy",
                    accuracy: 100
                },
                {

                    id: "leech seed",
                    power: 11,
                    nature: "grass",
                    target: "stamina",
                    targetName: "stamina",
                    type: "modifying_myself",
                    accuracy: 100

                }
            ]
        },
        {
            id: "charmander",
            lvl: 10,
            atk: 52,
            def: 43,
            specAtk: 60,
            specDef: 50,
            speed: 65,
            stamina: 39,
            gif_attack: b,
            gif_calm: bb,
            gif_back: bbb,
            type: ["fire"],
            description: "Charmander is a bipedal, reptilian Pokémon with a primarily orange body. Its underside from the chest down and soles are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. Charmander has blue eyes. Its arms and legs are short with four fingers and three clawed toes. A fire burns at the tip of this Pokémon's slender tail, and has blazed there since Charmander's birth. The flame can be used as an indication of Charmander's health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged. It is said that Charmander dies if its flame goes out. However, if the Pokémon is healthy, the flame will continue to burn if gets a bit wet and is said to steam in the rain.",
            attacks: [
                {
                        id: "ember",
                        power: 40,
                        nature: "fire",
                        type: "special",
                        accuracy: 100
                },
                {
                        id: "scratch",
                        power: 40,
                        nature: "normal",
                        type: "normal",
                        accuracy: 100
                },
                {
                        id: "growl",
                        power: 3,
                        nature: "normal",
                        target: "def",
                        targetName: "defense",
                        type: "modifying_enemy",
                        accuracy: 100
                },
                {

                        id: "smoke screen",
                        power: 5,
                        nature: "normal",
                        target: "specAtk",
                        targetName: "spec-attack",
                        type: "modifying_enemy",
                        accuracy: 100

                }
              ]
        },
        {
            id: "Squirtle",
            lvl: 10,
            atk: 48,
            def: 65,
            specAtk: 50,
            specDef: 64,
            speed: 43,
            stamina: 44,
            gif_attack: c,
            gif_calm: cc,
            type: ["water"],
            description: "quirtle is a small Pokémon that resembles a light blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large eyes and a slightly hooked upper lip. Each of its hands and feet have three pointed digits. The end of its long tail curls inward. Its body is encased by a tough shell that forms and hardens after birth. This shell is brown on the top, pale yellow on the bottom, and has a thick white ridge between the two halves.",
            attacks: [
                {
                    id: "Water gun",
                    power: 40,
                    nature: "water",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "tackle",
                    power: 40,
                    nature: "normal",
                    type: "normal",
                    accuracy: 100
                },
                {
                    id: "tail whip",
                    power: 4,
                    nature: "normal",
                    target: "specAtk",
                    targetName: "spec-Attack",
                    type: "modifying_myself",
                    accuracy: 100
                },
                {

                    id: "withdraw",
                    power: 4,
                    nature: "water",
                    target: "def",
                    targetName: "defence",
                    type: "modifying_myself",
                    accuracy: 100

                }
            ]
        },
        {
            id: "Pikachu",
            lvl: 10,
            atk: 55,
            def: 30,
            specAtk: 50,
            specDef: 40,
            speed: 90,
            stamina: 35,
            gif_attack: d,
            gif_calm: dd,
            description: "Pikachu is a short, chubby rodent Pokémon. It is covered in yellow fur with two horizontal brown stripes on its back. It has a small mouth, long, pointed ears with black tips, brown eyes, and two red circles on its cheeks. There are pouches inside its cheeks where it stores electricity. It has short forearms with five fingers on each paw, and its feet each have three toes. At the base of its lightning bolt-shaped tail is patch of brown fur at the base. A female will have a V-shaped notch at the end of its tail, which looks like the top of a heart. It is classified as a quadruped, but it has been known to stand and walk on its hind legs.",
            type: ["electric"],
            attacks: [
                {
                    id: "thunder shock",
                    power: 40,
                    nature: "electric",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "Quick attack",
                    power: 40,
                    nature: "normal",
                    type: "normal",
                    accuracy: 100
                },
                {
                    id: "play nice",
                    power: 4,
                    nature: "normal",
                    target: "atk",
                    targetName: "attack",
                    type: "modifying_enemy",
                    accuracy: 100
                },
                {

                    id: "electro ball",
                    power: 50,
                    nature: "electric",
                    type: "special",
                    accuracy: 90

                }
            ]
        },
        {
            id: "Butterfree",
            atk: 45,
            def: 50,
            specAtk: 90,
            specDef: 80,
            speed: 60,
            stamina: 60,
            gif_attack: f,
            gif_calm: ff,
            gif_back: fff,
            description: "Butterfree resembles a vaguely anthropomorphic butterfly with a purple body. Unlike true insects, it only has two body segments and four light blue legs. The upper pair of legs resemble small, three-fingered hands, while the lower pair resemble long, digit-less feet. Butterfree has two black antennae, a light blue snout with two fangs underneath, and large, red compound eyes. Its two pairs of veined wings are white with black accents. The oval scales of a female Butterfree's lower wings are black, but white in males.",
            type: ["bug", "flying"],
            attacks: [
                {
                    id: "gust",
                    power: 40,
                    nature: "flying",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "confusion",
                    power: 50,
                    nature: "psychic",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "poison powder",
                    power: 4,
                    nature: "poison",
                    target: "specAtk",
                    targetName: "spec-attack",
                    type: "modifying_enemy",
                    accuracy: 100
                },
                {

                    id: "wing powder",
                    power: 4,
                    nature: "grass",
                    target: "specDef",
                    targetName: "spec-defense",
                    type: "modifying_myself",
                    accuracy: 100

                }
            ]
        },
        {
            id: "jigglypuff",
            atk: 45,
            def: 20,
            specAtk: 45,
            specDef: 25,
            speed: 20,
            stamina: 115,
            gif_attack: e,
            gif_calm: ee,
            description: "Jigglypuff is a round, pink ball with pointed ears and large, blue eyes. It has rubbery, balloon-like skin and small, stubby arms and somewhat long feet.Jigglypuff uses its eyes to mesmerize opponents. Once it achieves this, it will inflate its lungs and begin to sing a soothing lullaby. If the opponent resists falling asleep, Jigglypuff will endanger its own life by continuing to sing until it runs out of air.",
            type: ["normal","fairy"],
            attacks: [
                {
                    id: "sing",
                    power: 13,
                    nature: "normal",
                    target: "specDef",
                    targetName: "spec-defense",
                    type: "modifying_enemy",
                    accuracy: 80
                },
                {
                    id: "defense curl",
                    power: 7,
                    nature: "normal",
                    target: "def",
                    targetName: "defense",
                    type: "modifying_myself",
                    accuracy: 100
                },
                {
                    id: "disarming voice",
                    power: 50,
                    nature: "fairy",
                    type: "special",
                    accuracy: 90
                },
                {
                    id: "play nice",
                    power: 4,
                    nature: "normal",
                    target: "atk",
                    targetName: "attack",
                    type: "modifying_enemy",
                    accuracy: 100
                }
            ]
        },
        {
            id: "donphan",
            atk: 120,
            def: 120,
            specAtk: 60,
            specDef: 60,
            speed: 50,
            stamina: 90,
            gif_attack: g,
            gif_calm: gg,
            gif_back: ggg,
            description: "Donphan is a gray, elephant-like Pokémon with a thick, black band of hide running down the length of its back and extending to the tip of its long trunk. When this Pokémon curls up, the band resembles a car tire. This tough hide prevents regular attacks from inflicting even a scratch. A pair of white tusks, which are smaller on the female, extend from the corners of its mouth. It has thin, elongated ears held out almost perpendicular to its body. Its four short legs are each encircled with a broken, black band and have three toes.",
            type: ["ground"],
            attacks: [
                {
                    id: "fire fang",
                    power: 65,
                    nature: "fire",
                    type: "special",
                    accuracy: 75
                },
                {
                    id: "thunder fang",
                    power: 65,
                    nature: "electric",
                    type: "special",
                    accuracy: 75
                },
                {
                    id: "horn attack",
                    power: 60,
                    nature: "normal",
                    type: "normal",
                    accuracy: 70
                },
                {
                    id: "defense curl",
                    power: 7,
                    nature: "normal",
                    target: "def",
                    targetName: "defense",
                    type: "modifying_myself",
                    accuracy: 100
                },
            ]
        },
        {
            id: "shelgon",
            atk: 95,
            def: 100,
            specAtk: 60,
            specDef: 50,
            speed: 50,
            stamina: 65,
            gif_attack: h,
            gif_calm: hh,
            gif_back: hhh,
            description: "Shelgon is a quadruped Pokémon that resembles a pupal stage. There are bone structures covering its body, which form a shell with two openings and three ridges on top. One opening is in front, revealing two yellow eyes, while the other opening is in the back. This bony covering repels enemy attacks, but it makes Shelgon heavy. As a result, this Pokémon moves sluggishly and hardly eats. Inside the shell, its body is busy forming for its next evolution. The moment this Pokémon evolves, its shell peels away. Its grey legs are visible protruding from underneath the shell, each with a short red stripe on the inner surface. It can be found in caverns.",
            type: ["dragon"],
            attacks: [
                {
                    id: "ember",
                    power: 40,
                    nature: "fire",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "leer",
                    power: 8,
                    nature: "normal",
                    target: "specef",
                    targetName: "spec-defense",
                    type: "modifying_enemy",
                    accuracy: 85
                },
                {
                    id: "bite",
                    power: 60,
                    nature: "dark",
                    type: "special",
                    accuracy: 90
                },
                {
                    id: "protect",
                    power: 8,
                    nature: "normal",
                    target: "specDef",
                    targetName: "spec-defense",
                    type: "modifying_myself",
                    accuracy: 90
                }
            ]
        },
    ];

export default pokemons;
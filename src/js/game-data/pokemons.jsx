let a = require('../../imgs/bulba-attack.gif');
let aa = require('../../imgs/bulba-calm.gif');
let aaa = require('../../imgs/Bulbasaur_Back.gif');
let b = require('../../imgs/char-attack.gif');
let bb = require('../../imgs/char-calm.gif');
let bbb = require('../../imgs/Charmander_Back.gif');
let c = require('../../imgs/squil-attack.gif');
let cc = require('../../imgs/squil-calm.gif');
let ccc = require("../../imgs/Squirtle-back.gif");
let d = require('../../imgs/pika-attack.gif');
let dd = require('../../imgs/pika-calm.gif');
let ddd = require("../../imgs/Pikachu_Back_XY.gif");
let e = require('../../imgs/toge-attack.gif');
let ee = require('../../imgs/toge-calm.gif');
let eee = require('../../imgs/Jigglypuff-back.gif');
let f = require('../../imgs/butterfly-calm.gif');
let ff = require('../../imgs/butterfly-calm.gif');
let fff = require('../../imgs/Butterfree_back.gif');
let g = require('../../imgs/smalldog.gif');
let gg = require('../../imgs/smalldog.gif');
let ggg = require('../../imgs/Eevee-back.gif');
let h = require('../../imgs/shelgon.gif');
let hh = require('../../imgs/shelgon.gif');
let hhh = require('../../imgs/Shelgon_Back_XY.gif');
let i = require('../../imgs/doduo.gif');
let ii = require('../../imgs/doduo.gif');
let iii = require('../../imgs/doduo_back.png');
let j = require('../../imgs/goldeen.gif');
let jj = require('../../imgs/goldeen.gif');
let jjj = require('../../imgs/goldeen-back.png');
let k = require('../../imgs/lickitung.gif');
let kk = require('../../imgs/lickitung.gif');
let kkk = require('../../imgs/licktung_back.png');
let o= require('../../imgs/psyduck.gif');
let oo = require('../../imgs/psyduck.gif');
let ooo = require('../../imgs/psyduck-back.png');
let p = require('../../imgs/mondog.gif');
let pp = require('../../imgs/mondog.gif');
let ppp = require('../../imgs/espeon_back.gif');
let r = require('../../imgs/magikarp.gif');
let rr = require('../../imgs/magikarp.gif');
let rrr = require('../../imgs/magikarp-back.png');
let s = require('../../imgs/firedog.gif');
let ss = require('../../imgs/firedog.gif');
let sss = require('../../imgs/flareon-back.png');
let t = require('../../imgs/Vaporeon-Attack.gif');
let tt = require('../../imgs/vaporeon-calm.gif');
let ttt = require('../../imgs/vapreon-back.png');
let u = require('../../imgs/Fletchling.gif');
let uu = require('../../imgs/Fletchling.gif');
let uuu = require('../../imgs/fletching.png');



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
            weakTo: ["flying", "fire", "psychic", "ice"],
            resistantTo: ["fighting", "water", "grass", "electric", "fairy"],
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
            weakTo: ["ground", "rock", "water"],
            resistantTo: ["bug", "steel", "fire", "grass", "ice", "fairy"],
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
            weakTo: ["grass", "electric"],
            resistantTo: ["steel", "fire", "water", "ice"],
            gif_attack: c,
            gif_calm: cc,
            gif_back: ccc,
            type: ["water"],
            description: "Squirtle is a small Pokémon that resembles a light blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large eyes and a slightly hooked upper lip. Each of its hands and feet have three pointed digits. The end of its long tail curls inward. Its body is encased by a tough shell that forms and hardens after birth. This shell is brown on the top, pale yellow on the bottom, and has a thick white ridge between the two halves.",
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
            weakTo: ["ground"],
            resistantTo: ["flying", "steel", "electric"],
            gif_attack: d,
            gif_calm: dd,
            gif_back: ddd,
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
            lvl: 10,
            atk: 45,
            def: 50,
            specAtk: 90,
            specDef: 80,
            speed: 60,
            stamina: 60,
            weakTo: ["flying", "fire", "rock", "electric", "ice"],
            resistantTo: ["fighting", "bug", "grass"],
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
            lvl: 10,
            atk: 45,
            def: 20,
            specAtk: 45,
            specDef: 25,
            speed: 20,
            stamina: 115,
            weakTo: ["poison", "steel"],
            resistantTo: ["bug", "dark"],
            gif_attack: e,
            gif_calm: ee,
            gif_back: eee,
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
            id: "eevee",
            lvl: 10,
            atk: 55,
            def: 50,
            specAtk: 45,
            specDef: 65,
            speed: 55,
            stamina: 55,
            weakTo: ["fighting"],
            resistantTo: [],
            gif_attack: g,
            gif_calm: gg,
            gif_back: ggg,
            description: "Eevee is a mammalian, quadruped creature with primarily brown fur. The tip of its bushy tail and its large furry collar are cream-colored. It has short, slender legs with three small toes and a pink paw pad on each foot. Eevee has brown eyes, long pointed ears, and a small black nose. This Pokémon is rarely found in the wild, and is mostly only found in cities and towns. However, Eevee is said to have an irregularly shaped genetic structure that allows it to adapt to many different kinds of environments.",
            type: ["normal"],
            attacks: [
                {
                    id: "covet",
                    power: 60,
                    nature: "normal",
                    type: "normal",
                    accuracy: 90
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
                    id: "bite",
                    power: 60,
                    nature: "dark",
                    type: "special",
                    accuracy: 90
                },
                {
                    id: "sand attack",
                    power: 5,
                    nature: "ground",
                    target: "atk",
                    targetName: "attack",
                    type: "modifying_enemy",
                    accuracy: 100
                },
            ]
        },
        {
            id: "doduo",
            lvl: 10,
            atk: 85,
            def: 45,
            specAtk: 35,
            specDef: 35,
            speed: 75,
            stamina: 35,
            weakTo: ["rock", "ice", "electric"],
            resistantTo: ["bug", "grass"],
            gif_attack: i,
            gif_calm: ii,
            gif_back: iii,
            description: "Doduo is a two-headed, bipedal avian Pokémon. Each head has a long sharp beak and two beady black eyes with no discernible sclerae. It has a soft but bristly, down-like covering of brown feathers on its body and both heads. The males of the species have black flexible necks, whereas females have brown necks; both genders have brown coloring on their legs. It has two feet, each with four digits ending in a sharp claw.",
            type: ["normal", "flying"],
            attacks: [
                {
                    id: "peck",
                    power: 35,
                    nature: "flying",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "pursuit",
                    power: 40,
                    nature: "dark",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "quick-attack",
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
                }
            ]
        },
        {
            id: "glodeen",
            lvl: 10,
            atk: 67,
            def: 60,
            specAtk: 35,
            specDef: 50,
            speed: 63,
            stamina: 45,
            weakTo: ["electric", "grass"],
            resistantTo: ["steel", "fire", "water", "ice"],
            gif_attack: j,
            gif_calm: jj,
            gif_back: jjj,
            description: "Goldeen is a white, fish-like Pokémon with orange markings on its tail, back, and fins. It has a thin dorsal fin and long pectoral fins. Its dorsal and pectoral fins are quite strong, allowing it to maintain a steady speed of five knots while swimming upstream. Goldeen's caudal fin is admired by many for its beauty as it billows very much like a ballroom dress. Its circular eyes are blue, and it has pink lips. On its forehead is a large horn, which is larger on the male than on the female.",
            type: ["water"],
            attacks: [
                {
                    id: "peck",
                    power: 35,
                    nature: "flying",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "water pulse",
                    power: 65,
                    nature: "water",
                    type: "special",
                    accuracy: 90
                },
                {
                    id: "horn attack",
                    power: 65,
                    nature: "normal",
                    type: "normal",
                    accuracy: 85
                },
                {
                    id: "tail whip",
                    power: 4,
                    nature: "normal",
                    target: "specAtk",
                    targetName: "spec-Attack",
                    type: "modifying_myself",
                    accuracy: 100
                }
            ]
        },
        {
            id: "lickitung",
            lvl: 10,
            atk: 55,
            def: 75,
            specAtk: 60,
            specDef: 75,
            speed: 30,
            stamina: 90,
            weakTo: ["fighting"],
            resistantTo: [],
            gif_attack: k,
            gif_calm: kk,
            gif_back: kkk,
            description: "Lickitung is a bipedal Pokémon with a round body and a thick, powerful tail. It has soft, pink skin with curved yellow lines on its belly and yellow ring markings on its knees. It has a thumb-like claw on each hand, and a single large nail on each foot. There is a yellow spot on its palms and the soles of its feet. It has beady eyes and a long, prehensile tongue. The tongue is likely connected to its tail, which twitches when the tongue is pulled.",
            type: ["normal"],
            attacks: [
                {
                    id: "lick",
                    power: 30,
                    nature: "dark",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "knock off",
                    power: 65,
                    nature: "dark",
                    type: "special",
                    accuracy: 85
                },
                {
                    id: "stomp",
                    power: 65,
                    nature: "normal",
                    type: "normal",
                    accuracy: 85
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
            id: "psyduck",
            lvl: 10,
            atk: 52,
            def: 48,
            specAtk: 65,
            specDef: 50,
            speed: 55,
            stamina: 50,
            weakTo: ["grass", "electric"],
            resistantTo: ["steel", "fire", "water", "ice"],
            gif_attack: o,
            gif_calm: oo,
            gif_back: ooo,
            description: "Psyduck is a yellow Pokémon that resembles a duck or bipedal platypus. Three tufts of black hair grow on top of its head, and it has a wide, flat, cream-colored beak and vacant eyes. Its legs, arms, and tail are stubby and its webbed feet are cream-colored. There are three claws on both of its hands.",
            type: ["water"],
            attacks: [
                {
                    id: "Water gun",
                    power: 40,
                    nature: "water",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "confusion",
                    power: 50,
                    nature: "psychic",
                    type: "special",
                    accuracy: 90
                },
                {
                    id: "scratch",
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
                }
            ]
        },
        {
            id: "shelgon",
            lvl: 10,
            atk: 95,
            def: 100,
            specAtk: 60,
            specDef: 50,
            speed: 50,
            stamina: 65,
            weakTo: ["dragon", "fairy", "ice"],
            resistantTo: ["fire", "water", "grass", "electric"],
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
                    target: "specDef",
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
        {
            id: "espeon",
            lvl: 10,
            atk: 65,
            def: 60,
            specAtk: 130,
            specDef: 95,
            speed: 110,
            stamina: 65,
            weakTo: ["bug", "ghost", "dark"],
            resistantTo: ["fighting","psychic"],
            gif_attack: p,
            gif_calm: pp,
            gif_back: ppp,
            description: "Espeon is a quadruped, mammalian Pokémon with slender legs and dainty paws. It is covered in fine, lilac fur. This velvety fur is sensitive for Espeon to sense minute shifts in the air, thus allowing it to predict the weather. Its ears are large, and it has purple eyes with white pupils. There are tufts of fur near its eyes, and a small, red gem embedded in its forehead. The gem boosts the psychic powers that it gained to protect its Trainer from harm. It also has a thin, forked tail that quivers when it predicts its opponent's moves. Espeon is rare in the wilderness, and is more commonly found in urban areas.",
            type: ["psychic"],
            attacks: [
                {
                    id: "confusion",
                    power: 50,
                    nature: "psychic",
                    type: "special",
                    accuracy: 90
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
                    id: "sand attack",
                    power: 5,
                    nature: "ground",
                    target: "atk",
                    targetName: "attack",
                    type: "modifying_enemy",
                    accuracy: 100
                },
            ]
        },
        {
            id: "magikarp",
            lvl: 10,
            atk: 30,
            def: 70,
            specAtk: 35,
            specDef: 40,
            speed: 90,
            stamina: 40,
            weakTo: ["electric", "grass"],
            resistantTo: ["steel", "fire", "water", "ice"],
            gif_attack: r,
            gif_calm: rr,
            gif_back: rrr,
            description: "Magikarp is a medium-sized fish Pokémon with large, heavy reddish-orange scales. It has large, vacant eyes and pink lips. Its pectoral and tail fins are white, but it has a stiff, three-peaked fin on its back and stomach that are both yellow. It also has long barbels. The barbels are white on a female and tan on a male.",
            type: ["water"],
            attacks: [
                {
                    id: "tackle",
                    power: 40,
                    nature: "normal",
                    type: "normal",
                    accuracy: 100
                },
                {
                    id: "splash",
                    power: 8,
                    nature: "normal",
                    target: "atk",
                    targetName: "attack",
                    type: "modifying_enemy",
                    accuracy: 100
                },
                {
                    id: "water spit",
                    power: 60,
                    nature: "water",
                    type: "special",
                    accuracy: 85
                },
                {
                    id: "tail whip",
                    power: 4,
                    nature: "normal",
                    target: "specAtk",
                    targetName: "spec-Attack",
                    type: "modifying_myself",
                    accuracy: 100
                }
            ]
        },
        {
            id: "flareon",
            lvl: 10,
            atk: 130,
            def: 60,
            specAtk: 95,
            specDef: 110,
            speed: 65,
            stamina: 65,
            weakTo: ["ground", "rock", "water"],
            resistantTo: ["bug", "steel", "fire", "grass", "ice", "fairy"],
            gif_attack: s,
            gif_calm: ss,
            gif_back: sss,
            description: "Flareon is a mammalian, quadruped Pokémon covered in short, reddish-orange fur. It has long ears, dark eyes, and a small black nose. There are three small toes and a yellow paw pad on each foot. Fluffy yellow fur forms a small tuft on its head, as well as its bushy tail and a mane around its chest and neck. It will fluff out its collar to cool down its high body temperature. This high temperature is caused by its internal flame sac. Flareon stores and heats inhaled air in this sac, and then exhales it as fire. Flareon is mostly found in populated areas, and is rarely seen in the wilderness.",
            type: ["fire"],
            attacks: [
                {
                    id: "ember",
                    power: 40,
                    nature: "fire",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "fire fang",
                    power: 65,
                    nature: "fire",
                    type: "special",
                    accuracy: 80
                },
                {
                    id: "bite",
                    power: 60,
                    nature: "dark",
                    type: "special",
                    accuracy: 90
                },
                {
                    id: "helping hand",
                    power: 8,
                    nature: "normal",
                    target: "specAtk",
                    targetName: "spec-attack",
                    type: "modifying_myself",
                    accuracy: 80
                }
            ]
        },
        {
            id: "vaporeon",
            lvl: 10,
            atk: 65,
            def: 60,
            specAtk: 110,
            specDef: 95,
            speed: 65,
            stamina: 130,
            weakTo: ["electric", "grass"],
            resistantTo: ["steel", "fire", "water", "ice"],
            gif_attack: t,
            gif_calm: tt,
            gif_back: ttt,
            description: "Vaporeon is a composite creature sharing physical traits of aquatic and land animals. It is a quadruped with three small toes on each foot and dark blue paw pads on the hind feet. Vaporeon's body is light blue with dark blue marking around its head and a ridge down its back. This Pokémon has a split tailfin that has been mistaken for a mermaid's in the past. It has a white ruff around its neck, and three fins around its head made of cream-colored webbing. It is said that rain will come within a few hours if Vaporeon's fins begin to vibrate.",
            type: ["water"],
            attacks: [
                {
                    id: "water gun",
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
                    id: "sand attack",
                    power: 5,
                    nature: "ground",
                    target: "atk",
                    targetName: "attack",
                    type: "modifying_enemy",
                    accuracy: 100
                },
                {
                    id: "baby-doll eyes",
                    power: 7,
                    nature: "fairy",
                    target: "specDef",
                    targetName: "spec-defense",
                    type: "modifying_enemy",
                    accuracy: 90
                }
            ]
        },
        {
            id: "flechling",
            lvl: 10,
            atk: 50,
            def: 50,
            specAtk: 40,
            specDef: 40,
            speed: 62,
            stamina: 50,
            weakTo: ["rock","electric", "ice"],
            resistantTo: ["bug", "grass"],
            gif_attack: u,
            gif_calm: uu,
            gif_back: uuu,
            description: "Fletchling are small, avian Pokémon similar in appearance to robins. They have a reddish-orange head with a triangular yellow mark on the back of each eye. Their body and wings are gray, and there are white tips on the wings. They have long, black tail with a white 'v'-shaped marking near the tip. The tail ends in two points, and has two feathers sticking out at the base, giving the impression of the fletching on the end of an arrow. Their legs, beak, and eyes are black. The legs are thin and spindly, with two toes facing forward and one pointing backward on each foot.",
            type: ["normal", "flying"],
            attacks: [
                {
                    id: "tackle",
                    power: 40,
                    nature: "normal",
                    type: "normal",
                    accuracy: 100
                },
                {
                    id: "peck",
                    power: 35,
                    nature: "flying",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "quick-attack",
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
                }
            ]
        },
    ];

export default pokemons;
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

    await prisma.species.upsert({
        where: { name: "African Pygmy Angelfish" },
        update: {},
        create: {
            name: "African Pygmy Angelfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Bar Goby" },
        update: {},
        create: {
            name: "Bar Goby",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Bicolored Toby" },
        update: {},
        create: {
            name: "Bicolored Toby",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Bigeye Snapper" },
        update: {},
        create: {
            name: "Bigeye Snapper",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Black Pyramid Butterflyfish" },
        update: {},
        create: {
            name: "Black Pyramid Butterflyfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Blackstripe Cardinalfish" },
        update: {},
        create: {
            name: "Blackstripe Cardinalfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Bluestriped Fangblenny" },
        update: {},
        create: {
            name: "Bluestriped Fangblenny",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Broad-striped Cardinalfish" },
        update: {},
        create: {
            name: "Broad-striped Cardinalfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Comb Wrasse" },
        update: {},
        create: {
            name: "Comb Wrasse",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Fire Dartfish" },
        update: {},
        create: {
            name: "Fire Dartfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Floral Wrasse" },
        update: {},
        create: {
            name: "Floral Wrasse",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Forktail Blenny" },
        update: {},
        create: {
            name: "Forktail Blenny",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Freckled Hawkfish" },
        update: {},
        create: {
            name: "Freckled Hawkfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Geometric Moral Eel" },
        update: {},
        create: {
            name: "Geometric Moral Eel",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Goldbelly Cardinalfish" },
        update: {},
        create: {
            name: "Goldbelly Cardinalfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Humpback Snapper" },
        update: {},
        create: {
            name: "Humpback Snapper",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Indo-Pacific Sergeant" },
        update: {},
        create: {
            name: "Indo-Pacific Sergeant",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Longfin Spadefish" },
        update: {},
        create: {
            name: "Longfin Spadefish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Mandarin Goby" },
        update: {},
        create: {
            name: "Mandarin Goby",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Mesothorax Hogfish" },
        update: {},
        create: {
            name: "Mesothorax Hogfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Monogrammed Monocle Bream" },
        update: {},
        create: {
            name: "Monogrammed Monocle Bream",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Moustache Triggerfish" },
        update: {},
        create: {
            name: "Moustache Triggerfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Onespot Snapper" },
        update: {},
        create: {
            name: "Onespot Snapper",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Orbicular batfish" },
        update: {},
        create: {
            name: "Orbicular batfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Ornate Wrasse" },
        update: {},
        create: {
            name: "Ornate Wrasse",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Palette Surgeonfish" },
        update: {},
        create: {
            name: "Palette Surgeonfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Queen Coris Wrasse" },
        update: {},
        create: {
            name: "Queen Coris Wrasse",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Raccoon Butterflyfish" },
        update: {},
        create: {
            name: "Raccoon Butterflyfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Sandy Prawn Goby" },
        update: {},
        create: {
            name: "Sandy Prawn Goby",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Schwenk's Sweeper" },
        update: {},
        create: {
            name: "Schwenk's Sweeper",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Scissor-tailed Fusilier" },
        update: {},
        create: {
            name: "Scissor-tailed Fusilier",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Shrimpfish" },
        update: {},
        create: {
            name: "Shrimpfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Sixline Soapfish" },
        update: {},
        create: {
            name: "Sixline Soapfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Spotted Toby" },
        update: {},
        create: {
            name: "Spotted Toby",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Sunset Wrasse" },
        update: {},
        create: {
            name: "Sunset Wrasse",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Tubelip Wrasse" },
        update: {},
        create: {
            name: "Tubelip Wrasse",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Vanikoro Sweeper" },
        update: {},
        create: {
            name: "Vanikoro Sweeper",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Yellow Boxfish" },
        update: {},
        create: {
            name: "Yellow Boxfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Yellow Tang" },
        update: {},
        create: {
            name: "Yellow Tang",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Yellow-striped Cardinalfish" },
        update: {},
        create: {
            name: "Yellow-striped Cardinalfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Yellowback Anthias" },
        update: {},
        create: {
            name: "Yellowback Anthias",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Yellowback Fusilier" },
        update: {},
        create: {
            name: "Yellowback Fusilier",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Yellowtail Fangblenny" },
        update: {},
        create: {
            name: "Yellowtail Fangblenny",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Bigfin Reef Squid" },
        update: {},
        create: {
            name: "Bigfin Reef Squid",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Cone Snail" },
        update: {},
        create: {
            name: "Cone Snail",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Durban Dancing Shrimp" },
        update: {},
        create: {
            name: "Durban Dancing Shrimp",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Glass Anemone Shrimp" },
        update: {},
        create: {
            name: "Glass Anemone Shrimp",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Gymnodoris" },
        update: {},
        create: {
            name: "Gymnodoris",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Leopard Sea Cucumber" },
        update: {},
        create: {
            name: "Leopard Sea Cucumber",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Mitra Papalis" },
        update: {},
        create: {
            name: "Mitra Papalis",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Multi-armed Seastar" },
        update: {},
        create: {
            name: "Multi-armed Seastar",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Nassa Mud Snail" },
        update: {},
        create: {
            name: "Nassa Mud Snail",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Top Shell" },
        update: {},
        create: {
            name: "Top Shell",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Trapezium Horse Conch" },
        update: {},
        create: {
            name: "Trapezium Horse Conch",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "White Spotted Octopus" },
        update: {},
        create: {
            name: "White Spotted Octopus",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 1,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Acropora Encrusting - ACE" },
        update: {},
        create: {
            name: "Acropora Encrusting - ACE",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 1,
            details: "The most common coral genus in the Western Indian Ocean. ~Acropora can be easily identified by the distinctive protruding, cup-like corallites and \'\'axial\'\' growing points.~Thin colonies that adhere closely to and are attached to the underlying substrate."
        },
    })

    await prisma.species.upsert({
        where: { name: "Acropora Laminar - ACL" },
        update: {},
        create: {
            name: "Acropora Laminar - ACL",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 1,
            details: "The most common coral genus in the Western Indian Ocean. ~Acropora can be easily identified by the distinctive protruding, cup-like corallites and \'\'axial\'\' growing points.~Flat, plate like coral structure attached to the substrate by a base coming from the side of the colony; can form layers."
        },
    })

    await prisma.species.upsert({
        where: { name: "Other (Gorgonian) - OG" },
        update: {},
        create: {
            name: "Other (Gorgonian) - OG",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 1,
            details: "Flexible tree or fan-like structures.~Often aligned perpendicular to the prevailing current to filter out food.~Actually a soft coral, but for surveying purposes we record as OG."
        },
    })

    await prisma.species.upsert({
        where: { name: "Other (Hydroid) - OH" },
        update: {},
        create: {
            name: "Other (Hydroid) - OH",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 1,
            details: "Hydroids are related to coral. They look like feathers or ferns and are often called stinging hydroids because they STING! Don\'t touch!"
        },
    })

    await prisma.species.upsert({
        where: { name: "Rock (no Coralline Algae) - RCN" },
        update: {},
        create: {
            name: "Rock (no Coralline Algae) - RCN",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 1,
            details: "Hard structure.~Not obviously coralline in origin.~Consolidated rubble is classified as rock."
        },
    })

    await prisma.species.upsert({
        where: { name: "Oxypora" },
        update: {},
        create: {
            name: "Oxypora",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 1,
            details: "Only one species found here (O. lacera).~Easily confused with Echinopora; however, Oxypora has fewer septo-costae, forming an even more poorly defined wall."
        },
    })

    await prisma.species.upsert({
        where: { name: "Dusky Surgeonfish" },
        update: {},
        create: {
            name: "Dusky Surgeonfish",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 2,
            details: "Lighter body than A. thompsoni~Light head with some speckles~Dark spot on dorsal fin~Size: 21cm~Lagoon and seaward reefs~Often in large schools~Feeds on filamentous algae"
        },
    })

    await prisma.species.upsert({
        where: { name: "Spotted Toby" },
        update: {},
        create: {
            name: "Spotted Toby",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 2,
            details: "Longitudinal lines on nape and upper CP~More orange on snout and tail~Blue spots on sides~Reef flats, lagoon and seaward reefs to 36m~Feeds primarily on filamentous and coralline algae, to a lesser extent on corals and benthic invertebrates"
        },
    })

    await prisma.species.upsert({
        where: { name: "Arc-eye Hawkfish" },
        update: {},
        create: {
            name: "Arc-eye Hawkfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Barracuda" },
        update: {},
        create: {
            name: "Barracuda",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Beaufort's Crocodilefish" },
        update: {},
        create: {
            name: "Beaufort's Crocodilefish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Black and White Snapper" },
        update: {},
        create: {
            name: "Black and White Snapper",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Black Snapper" },
        update: {},
        create: {
            name: "Black Snapper",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Black-saddled Toby" },
        update: {},
        create: {
            name: "Black-saddled Toby",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Blackedge Thicklip Wrasse" },
        update: {},
        create: {
            name: "Blackedge Thicklip Wrasse",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Blackspot Snapper" },
        update: {},
        create: {
            name: "Blackspot Snapper",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Bloch's Bigeye" },
        update: {},
        create: {
            name: "Bloch's Bigeye",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Blue-streak Goby" },
        update: {},
        create: {
            name: "Blue-streak Goby",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Bluespotted Ribbontail Ray" },
        update: {},
        create: {
            name: "Bluespotted Ribbontail Ray",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Clown Triggerfish" },
        update: {},
        create: {
            name: "Clown Triggerfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Crescent Wrasse" },
        update: {},
        create: {
            name: "Crescent Wrasse",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Crocodilefish" },
        update: {},
        create: {
            name: "Crocodilefish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Crown Butterflyfish" },
        update: {},
        create: {
            name: "Crown Butterflyfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Devil Wray" },
        update: {},
        create: {
            name: "Devil Wray",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Flaming Prawn Goby" },
        update: {},
        create: {
            name: "Flaming Prawn Goby",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Harptail Blenny" },
        update: {},
        create: {
            name: "Harptail Blenny",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Honeycomb Grouper" },
        update: {},
        create: {
            name: "Honeycomb Grouper",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Leaf Scorpionfish" },
        update: {},
        create: {
            name: "Leaf Scorpionfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Leopard Ray" },
        update: {},
        create: {
            name: "Leopard Ray",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Lyretail Anthias" },
        update: {},
        create: {
            name: "Lyretail Anthias",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Malabar Grouper" },
        update: {},
        create: {
            name: "Malabar Grouper",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Masked Moral Eel" },
        update: {},
        create: {
            name: "Masked Moral Eel",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Oriental Sweetlips" },
        update: {},
        create: {
            name: "Oriental Sweetlips",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Pixy Hawkfish" },
        update: {},
        create: {
            name: "Pixy Hawkfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Plaintail Lionfish" },
        update: {},
        create: {
            name: "Plaintail Lionfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Randall's Prawn Goby" },
        update: {},
        create: {
            name: "Randall's Prawn Goby",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Red Lionfish" },
        update: {},
        create: {
            name: "Red Lionfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Seagrass Parrotfish" },
        update: {},
        create: {
            name: "Seagrass Parrotfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Semicircle Angelfish" },
        update: {},
        create: {
            name: "Semicircle Angelfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Spotted Eagle Ray" },
        update: {},
        create: {
            name: "Spotted Eagle Ray",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Spotted Snake Eel" },
        update: {},
        create: {
            name: "Spotted Snake Eel",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Spotted Sweetlips" },
        update: {},
        create: {
            name: "Spotted Sweetlips",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Striped Catfish" },
        update: {},
        create: {
            name: "Striped Catfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Teardrop Butterflyfish" },
        update: {},
        create: {
            name: "Teardrop Butterflyfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Three-spot Angelfish" },
        update: {},
        create: {
            name: "Three-spot Angelfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Twinspot Red Snapper" },
        update: {},
        create: {
            name: "Twinspot Red Snapper",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Yellow Prawn Goby" },
        update: {},
        create: {
            name: "Yellow Prawn Goby",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Yellowfin Goatfish" },
        update: {},
        create: {
            name: "Yellowfin Goatfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Zigzag Wrasse" },
        update: {},
        create: {
            name: "Zigzag Wrasse",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Anemone Crab" },
        update: {},
        create: {
            name: "Anemone Crab",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Blunt Slipper Lobster" },
        update: {},
        create: {
            name: "Blunt Slipper Lobster",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Coral Clam" },
        update: {},
        create: {
            name: "Coral Clam",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Coral Crab" },
        update: {},
        create: {
            name: "Coral Crab",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Flower Sea Urchin" },
        update: {},
        create: {
            name: "Flower Sea Urchin",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Gomphia Seastar" },
        update: {},
        create: {
            name: "Gomphia Seastar",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Green Mantis Shrimp" },
        update: {},
        create: {
            name: "Green Mantis Shrimp",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Horned Chocolate Chip Seastar" },
        update: {},
        create: {
            name: "Horned Chocolate Chip Seastar",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Magnificent Partner Shrimp" },
        update: {},
        create: {
            name: "Magnificent Partner Shrimp",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Nardoa Starfish" },
        update: {},
        create: {
            name: "Nardoa Starfish",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Necklace Seastar" },
        update: {},
        create: {
            name: "Necklace Seastar",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "White-banded Cleaner Shrimp" },
        update: {},
        create: {
            name: "White-banded Cleaner Shrimp",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 2,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Other (Bryozoan) - OB" },
        update: {},
        create: {
            name: "Other (Bryozoan) - OB",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 2,
            details: "Also known as sea mats and lace corals, they are unrelated to true corals.~Colonies of independent units make up lace or sheet-like structures."
        },
    })

    await prisma.species.upsert({
        where: { name: "Other (Tubeworm) - OT" },
        update: {},
        create: {
            name: "Other (Tubeworm) - OT",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 2,
            details: "These worm-like molluscs grow inside a shell tube, up to 15cm long, firmly cemented to live coral, dead coral or rock.~Some species have coiled tubes, often covered by coralline algae or coral.~Tubeworms will retract rapidly if you approach or waft them."
        },
    })

    await prisma.species.upsert({
        where: { name: "Sargassum - SA" },
        update: {},
        create: {
            name: "Sargassum - SA",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 2,
            details: "Leaf-like blades with air bladders.~Grows fast in the cooler months and shades all other flora and fauna.~Only a few species eat this plant."
        },
    })

    await prisma.species.upsert({
        where: { name: "Turf Algae - AT" },
        update: {},
        create: {
            name: "Turf Algae - AT",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 2,
            details: "Hairy filaments, often cover dead coral, rock, and rubble.~Like wiry turf, no more than a few millimetres long."
        },
    })

    await prisma.species.upsert({
        where: { name: "Zooanthids & Corallimorphs - ZC" },
        update: {},
        create: {
            name: "Zooanthids & Corallimorphs - ZC",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 2,
            details: "Zoanthids look like little cogs of about 1cm diameter, that have a mouth in their centre and are surrounded by little \'\'teeth-like\'\' tentacles.~Zoanthids can live separately or in colonies where they are connected to each other just like most corals.~To avoid confusion with some massive and encrusting corals whose corallites resemble zooanthids\'\' polyps; perform the \'\'waft test\'\'. The zooanthid polyps close."
        },
    })

    await prisma.species.upsert({
        where: { name: "Caulastrea" },
        update: {},
        create: {
            name: "Caulastrea",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 2,
            details: "Phaceloid.~Fleshy walls with septa of alternating prominence and colour, and the phaceloid character give the corallites an appearance of vases.~Paliform lobes are not noticeable.~Tentacles are rarely extended during the day."
        },
    })

    await prisma.species.upsert({
        where: { name: "Cycloseris" },
        update: {},
        create: {
            name: "Cycloseris",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 2,
            details: "All of the Fungidae can move to some extent, but Cycloseris are particularly known for being able to right themselves if overturned and being able to move over obstacles. This ability also makes them able to extract themselves from sediment, making them very successful in areas of high sedimentation where others may not survive.~Solitary.~Usually don\'\'t grow larger than 8cm.~Septa have fine teeth and the underside is almost smooth."
        },
    })

    await prisma.species.upsert({
        where: { name: "Diploastrea" },
        update: {},
        create: {
            name: "Diploastrea",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 2,
            details: "Massive and dome shaped, attaining huge sizes (up to 2m high and 5m across) due to its very dense skeleton which is rarely attacked by boring organisms or grazed by fish. May form large flat colonies.~Corallites are plocoid.~Corallites are slightly raised and have a very distinctive shape. ~Septa are even and become thinner from the wall to the centre.~Polyps are extended only at night.~Only one species, Diploastrea heliopora."
        },
    })

    await prisma.species.upsert({
        where: { name: "Favia" },
        update: {},
        create: {
            name: "Favia",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 2,
            details: "Encrusting to massive with plocoid corallites.~At times the corallites are highly compacted and may appear to be almost cerioid with only a groove running along the wall.~Tentacles are only extended at night.~Budding takes place via intratentacular budding, and distinctively, the cells subdivide equally."
        },
    })

    await prisma.species.upsert({
        where: { name: "Herpolithia" },
        update: {},
        create: {
            name: "Herpolithia",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 2,
            details: "Free-living, elongate with a central (axial) furrow.~They are colonial, with many mouths."
        },
    })

    await prisma.species.upsert({
        where: { name: "Merulina" },
        update: {},
        create: {
            name: "Merulina",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 2,
            details: "Colonies are laminar with thickened, contorted branches rising from the plates in well developed colonies.~Colonies are meandroid which is more easily discernable on the plates. ~Usually pale brown or blue, which can photograph as pink. ~The valleys tend to fan out from the centre. ~Colonies can be composed almost exclusively of branches with an encrusting base although this is usually limited to shallow water."
        },
    })

    await prisma.species.upsert({
        where: { name: "Cymodocea Serrulata - CS" },
        update: {},
        create: {
            name: "Cymodocea Serrulata - CS",
            category: "Seagrass",
            uvcLevel: "NA",
            imageCount: 2,
            details: "Leaves 4-9 mm wide and 6-15 cm long. Distinguished by the serrated leaf margins (both in younger and older plants)~Triangular shaped leaf sheaths are shed, leaving a visible scar on the stem.~Rhizomes pale coloured with shoots evenly spaced."
        },
    })

    await prisma.species.upsert({
        where: { name: "Bluespine Unicornfish" },
        update: {},
        create: {
            name: "Bluespine Unicornfish",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 3,
            details: "Can grow to 70cm~Can be found from 1-80m~Usually in groups~Herbivorous fish, brown macroalgae (Sargassum, Turbinaria and Dictyota) Leafy brown algae~Susceptible to fishing pressure due to being a long-live species~Look for blue caudal spines~Thin, oval elongate bodies~Long, continuous dorsal and anal fins~Small, pointed terminal mouths"
        },
    })

    await prisma.species.upsert({
        where: { name: "Yellowfin Surgeonfish" },
        update: {},
        create: {
            name: "Yellowfin Surgeonfish",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 3,
            details: "Can grow to 56cm~Can be found from 0-90m~Ovate to elongate, compressed body~Continuous dorsal & anal fins~Small pointed mouth~Retractable blades located on the caudal peduncle~Feed on algae film on compact sand as well as filamentous algae on hard surfaces"
        },
    })

    await prisma.species.upsert({
        where: { name: "Yellowstripe Goatfish" },
        update: {},
        create: {
            name: "Yellowstripe Goatfish",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 3,
            details: "Can grow to 43cm~Can be found down to 35m~Black blotch on yellow stripe beneath dorsal fin (this can be turned on and off so is not always visible)~Single pair of chemosensory barbels on the lower jaw~Often over sand; sometimes mixed with other species~Two dorsal fins~Forked tail~Feeds alone or in small groups by day and night"
        },
    })

    await prisma.species.upsert({
        where: { name: "Barred Thicklip Wrasse" },
        update: {},
        create: {
            name: "Barred Thicklip Wrasse",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "Dark body with 4 vertical white bars~Pale head with orange markings~Lagoon and seaward reefs to 18m+~Adults in areas of mixed sand, rubble and coral and feed on benthic invertebrates~Juveniles usually among branching corals and feed on demersal planktonic crustaceans"
        },
    })

    await prisma.species.upsert({
        where: { name: "Manyspined Angelfish" },
        update: {},
        create: {
            name: "Manyspined Angelfish",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "Compressed ovoid body~Dark brown with bright blue dorsal and anal fin margins~Black spot behind operculum~Coral-rich and rubbly areas of lagoon and seaward reefs to 30m"
        },
    })

    await prisma.species.upsert({
        where: { name: "Scissor-tail Sergeant" },
        update: {},
        create: {
            name: "Scissor-tail Sergeant",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "Oval silvery fish (17cm)~4 vertical black bars~Forked tail with black stripes~Coral rich areas of lagoon and seaward reefs to 15m~Feeds on zooplankton and benthic algae"
        },
    })

    await prisma.species.upsert({
        where: { name: "Striped Bristletooth" },
        update: {},
        create: {
            name: "Striped Bristletooth",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "Yellow spots on face and horizontal stripes along body~Size: 26cm~Reef flats, lagoon & seaward reefs down to 30m. Coral, rocky and rubble habitats~Herbivores: feed on detritus and algae films on the surface of seagrass and algae"
        },
    })

    await prisma.species.upsert({
        where: { name: "Thompson's Surgeonfish" },
        update: {},
        create: {
            name: "Thompson's Surgeonfish",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "Dark body colour~May have white or white-banded caudal fin~Size: 27cm~Steep outer reef slopes and dropoffs~Feeds on zooplankton~Often found in loose aggregations"
        },
    })

    await prisma.species.upsert({
        where: { name: "Yellowbreasted Wrasse" },
        update: {},
        create: {
            name: "Yellowbreasted Wrasse",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "Elongate brown fish~Pale tail~Dorsal and anal fin spots~Blue specks~Yellow breast~Areas of mixed coral, rubble or rock and sand to 30m"
        },
    })

    await prisma.species.upsert({
        where: { name: "Yellowtop Fusilier" },
        update: {},
        create: {
            name: "Yellowtop Fusilier",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "Yellow tail and top of head and back, rest of body silver~Slim, forked tail, uniform body~In schools in mid-water in deep lagoons and along seaward reefs~Spawns in large numbers near the surface in the entrance of deep channels during outgoing tides on a lunar cycle"
        },
    })

    await prisma.species.upsert({
        where: { name: "Blackspotted Pufferfish" },
        update: {},
        create: {
            name: "Blackspotted Pufferfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Bluelined Snapper" },
        update: {},
        create: {
            name: "Bluelined Snapper",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Cigar Wrasse" },
        update: {},
        create: {
            name: "Cigar Wrasse",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Emperor Angelfish" },
        update: {},
        create: {
            name: "Emperor Angelfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Lizardfish" },
        update: {},
        create: {
            name: "Lizardfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Longfin Bannerfish" },
        update: {},
        create: {
            name: "Longfin Bannerfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Longnose Butterflyfish" },
        update: {},
        create: {
            name: "Longnose Butterflyfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Madagascar Anemonefish" },
        update: {},
        create: {
            name: "Madagascar Anemonefish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Porcupinefish" },
        update: {},
        create: {
            name: "Porcupinefish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Rockmover Wrasse" },
        update: {},
        create: {
            name: "Rockmover Wrasse",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Scorpionfish" },
        update: {},
        create: {
            name: "Scorpionfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Spotfin Lionfish" },
        update: {},
        create: {
            name: "Spotfin Lionfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Tripletail Wrasse" },
        update: {},
        create: {
            name: "Tripletail Wrasse",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Twoline Spinecheek" },
        update: {},
        create: {
            name: "Twoline Spinecheek",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Pencil Urchin" },
        update: {},
        create: {
            name: "Pencil Urchin",
            category: "Invertebrate",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "The pencil urchin has spines up to 8 - 12cm in length and about 1cm thick~Like Diadema, pencil urchins are important for keeping the reef\'\'s algae in check, but they do not tend to occur in such high abundances~Not considered keystone species with regards to algae control~Often found in cracks and crevices~The depletion of pencil urchins on coral reefs is an indication of overfishing ~Targeted by the curio trade"
        },
    })

    await prisma.species.upsert({
        where: { name: "Sculptured Slipper Lobster" },
        update: {},
        create: {
            name: "Sculptured Slipper Lobster",
            category: "Invertebrate",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "Greyish-brown in colour~Numerous white-tipped spines along edge of carapace and antennae~Found in reef areas and deeper sites"
        },
    })

    await prisma.species.upsert({
        where: { name: "Glossodoris Nudibranch" },
        update: {},
        create: {
            name: "Glossodoris Nudibranch",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Graeffe's Sea Cucumber" },
        update: {},
        create: {
            name: "Graeffe's Sea Cucumber",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Granulated Seastar" },
        update: {},
        create: {
            name: "Granulated Seastar",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Hermit Crab" },
        update: {},
        create: {
            name: "Hermit Crab",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Shingle Oyster" },
        update: {},
        create: {
            name: "Shingle Oyster",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Thorny Oyster" },
        update: {},
        create: {
            name: "Thorny Oyster",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 3,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Acropora Tabulate - ACT" },
        update: {},
        create: {
            name: "Acropora Tabulate - ACT",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "The most common coral genus in the Western Indian Ocean. ~Acropora can be easily identified by the distinctive protruding, cup-like corallites and \'\'axial\'\' growing points.~Flat, table like coral structure attached to the substrate by a large base."
        },
    })

    await prisma.species.upsert({
        where: { name: "Coral Submassive - CS" },
        update: {},
        create: {
            name: "Coral Submassive - CS",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "\'Sub-\' is a prefix meaning \'less\' or \'not quite\'.~Not quite the boulder-like mass of a massive coral."
        },
    })

    await prisma.species.upsert({
        where: { name: "Halimeda - HA" },
        update: {},
        create: {
            name: "Halimeda - HA",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "Halimeda is a green algae that excretes a calcium carbonate \'\'skeleton\'\', which makes it difficult to digest by many herbivores and so serves as protection from many algae-eating organisms."
        },
    })

    await prisma.species.upsert({
        where: { name: "Millepora - MI" },
        update: {},
        create: {
            name: "Millepora - MI",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "Fire coral is not a real hard coral, but a hydroid. It nevertheless builds a skeleton, so contributes to the reef formation.~Can be recognised by smooth, flattened branches and covering of fine hairs (nematocysts)."
        },
    })

    await prisma.species.upsert({
        where: { name: "Other (Clam) - OC" },
        update: {},
        create: {
            name: "Other (Clam) - OC",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "Clams are sessile molluscs. They filter-feed small animals from the water and, like corals contain zooxanthellae algae with which they share a \'\'food-sharing\'\' symbiotic relationship.~If the transect covers the fleshy part of the clam it is classed as OC. If the transect covers the shell then the classification will be rock (RCN or RCC)."
        },
    })

    await prisma.species.upsert({
        where: { name: "Rock (with Coralline Algae) - RCC" },
        update: {},
        create: {
            name: "Rock (with Coralline Algae) - RCC",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "Coralline algae is a photosynthetic marine plant with calcareous skeleton.~May exhibit different growth forms including encrusting and branching. Often looks like lichen.~Hard algae covering the surface of old/dead coral. Can be smooth or bumpy, but always rounded.~Colors vary from pink/purple to white and yellow."
        },
    })

    await prisma.species.upsert({
        where: { name: "Seagrass - SG" },
        update: {},
        create: {
            name: "Seagrass - SG",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "Seagrasses are flowering plants that mostly occur in large meadows. They provide nurseries, shelter and food to a variety of marine species. They are not common on reefs but are around, so you might come across them if a part of your transect is led over sand.~Some of the species around in Ifaty are: Halodule uninervis, Thalassia hemprichii, Syringodium isoetifolium."
        },
    })

    await prisma.species.upsert({
        where: { name: "Sponge - SP" },
        update: {},
        create: {
            name: "Sponge - SP",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "Stiff tissue with a skeleton similar to that of soft corals but with a matrix of hard elements called spicules.~Patterns of these spicules can often be seen from the surface like splinters in the tissue or irregular lumps over the surface.~Sponges can be encrusting, small protruding structures, or massive, stocky structures securely attached to the bottom."
        },
    })

    await prisma.species.upsert({
        where: { name: "Turbinaria - TUR" },
        update: {},
        create: {
            name: "Turbinaria - TUR",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 3,
            details: "Bushy plants, blades are shield shaped \'\'holly leaves\'\'.~Grows fast and shades all other flora and fauna.~Only a few species eat this plant."
        },
    })

    await prisma.species.upsert({
        where: { name: "Octopus" },
        update: {},
        create: {
            name: "Octopus",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 3,
            details: "Umbrella-like skin that connects the eight arms~By day they hide in a permanent home (a crevice in the reef), the entrance of which is marked by empty mollusc and crab shells, leftovers of meals~Highly fished for food in Bay of Ranobe"
        },
    })

    await prisma.species.upsert({
        where: { name: "Sweeper" },
        update: {},
        create: {
            name: "Sweeper",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 3,
            details: "Pempheridae: Thin hatchet shaped bodies~Upside down appearance~Large aggregations in caves or under overhangs by day~Nocturnal feeding - zooplankton at reef\'s periphery"
        },
    })

    await prisma.species.upsert({
        where: { name: "Trumpetfish" },
        update: {},
        create: {
            name: "Trumpetfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 3,
            details: "Aulostomidae: Very elongated fish~Trumpet like snout with small flaps on the nostrils~Different variations: brown, green or yellow phases~Ambush predators - lie in wait in an upright position waiting for unsuspecting prey"
        },
    })

    await prisma.species.upsert({
        where: { name: "Physogyra" },
        update: {},
        create: {
            name: "Physogyra",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 3,
            details: "Colonies are encrusting to massive and meandroid with short valleys.~Only one species in this genus (P. lictensteini).~Colonies are meandroid, although, like Plerogyra, this is hard to distinguish as they are covered throughout the day by the small grape-like vesicles distinctive to this genus. "
        },
    })

    await prisma.species.upsert({
        where: { name: "African White Spotted Rabbitfish" },
        update: {},
        create: {
            name: "African White Spotted Rabbitfish",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 4,
            details: "Can grow to 50cm~Oval shaped~Small terminal mouths~Target species for the artisanal fishery~Grazers/detritivores~Play an important role in coral reef resilience by  - intensely grazing on the epilithic algal matrix, which can limit the establishment and growth of macroalgae."
        },
    })

    await prisma.species.upsert({
        where: { name: "Picasso Triggerfish" },
        update: {},
        create: {
            name: "Picasso Triggerfish",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 4,
            details: "Can grow to 25cm~Can be found down to 4-5m~Related to high abundances of the sea urchin~Two-part dorsal fins~Eyes set high on the head~Abundant in sandy areas with rubble"
        },
    })

    await prisma.species.upsert({
        where: { name: "Black-saddled Toby" },
        update: {},
        create: {
            name: "Black-saddled Toby",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "White body~2 black saddles~Small dorsal and anal fins~Lagoon and seaward reefs to 55m~Feeds on algae and sessile and mobile benthic invertebartes~Territorial and haremic"
        },
    })

    await prisma.species.upsert({
        where: { name: "Blackstreak Surgeonfish" },
        update: {},
        create: {
            name: "Blackstreak Surgeonfish",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "Black stripe behind eye~Yellow margin to pectoral fin~Locally it often has blue margins on caudal fin~Capable of rapidly changing colour between light and dark~Clear lagoon and seaward reefs~Open sandy areas near coral or rocky outcrops"
        },
    })

    await prisma.species.upsert({
        where: { name: "Bronze Soldierfish" },
        update: {},
        create: {
            name: "Bronze Soldierfish",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "The only bronze coloured soldierfish~Broad black margins on vertical fins~Found on reef and channel slopes with rich coral growth from 1-25m"
        },
    })

    await prisma.species.upsert({
        where: { name: "Desjardin's Sailfin Tang" },
        update: {},
        create: {
            name: "Desjardin's Sailfin Tang",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "Elongate dorsal & ventral fins with semi-circle yellow lines~Exact colourings varies greatly~White vertical yellow (thin) and white (thicker) stripes~Adults dark face, juv lighter~Size: 40cm~On coral rich areas of lagoon and seaward reefs – 1 -60m~Herbivorous browser"
        },
    })

    await prisma.species.upsert({
        where: { name: "Dusky Parrotfish" },
        update: {},
        create: {
            name: "Dusky Parrotfish",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "Purple body to 35cm~Green stripe behind eye~Coral rich areas of clear lagoons, channels and outer reef slopes to 15m~Usually solitary except during courtship"
        },
    })

    await prisma.species.upsert({
        where: { name: "False-eye Sergeant" },
        update: {},
        create: {
            name: "False-eye Sergeant",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "Ovoid silvery fish~Black “false eye” on CP~Coral and rocky outcrops with moderate wave action to 12m~Solitary or in loose aggregations"
        },
    })

    await prisma.species.upsert({
        where: { name: "Goldbar Wrasse" },
        update: {},
        create: {
            name: "Goldbar Wrasse",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "Blue-green body~Blue and orange markings on head~Crescent tail~Vertical gold bar behind operculum~Lagoon and seaward reefs to 30m"
        },
    })

    await prisma.species.upsert({
        where: { name: "Goldring Bristletooth" },
        update: {},
        create: {
            name: "Goldring Bristletooth",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "Yellow ring around eye, yellow tips to pectoral fins~Yellow spots around face and pale white keel~Size: 18cm~Lagoon & seaward reefs down to 46m. Coral, rocky and rubble habitats~Herbivores"
        },
    })

    await prisma.species.upsert({
        where: { name: "Indian Ocean Bird Wrasse" },
        update: {},
        create: {
            name: "Indian Ocean Bird Wrasse",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "Extended snout~Large pectoral fins used for swimming~Females tan, males blue-green~Coral rich areas of lagoon and seaward reefs to 30m"
        },
    })

    await prisma.species.upsert({
        where: { name: "Sixline Wrasse" },
        update: {},
        create: {
            name: "Sixline Wrasse",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "Small fish 7cm~Purple background with 6 horizontal orange stripes~Seaward reefs 2-35m~Hides among branches of live corals"
        },
    })

    await prisma.species.upsert({
        where: { name: "Spotted Butterflyfish" },
        update: {},
        create: {
            name: "Spotted Butterflyfish",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "Spotted body, more spotted towards dorsal and tail fins~Yellow dorsal and anal fins~Size: 12cm~Found in lagoon and seaward reefs to 25m~In pairs or small groups~Feeds on polychaetes, coral polyps and algae"
        },
    })

    await prisma.species.upsert({
        where: { name: "Sulphur Damsel" },
        update: {},
        create: {
            name: "Sulphur Damsel",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "Yellow body with black spot on underside of pectoral fin~Size: 11cm~Inshore coral reefs in areas of rich coral growth~Depth range 0.5 - 15m"
        },
    })

    await prisma.species.upsert({
        where: { name: "Ternate Chromis" },
        update: {},
        create: {
            name: "Ternate Chromis",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "Silvery body~Forked caudal fin with black margins~Upper margins of clear lagoon and seaward reefs to 36m~Aggregations above branching corals"
        },
    })

    await prisma.species.upsert({
        where: { name: "Trumpetfish" },
        update: {},
        create: {
            name: "Trumpetfish",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "Two variations - block yellow and green striped~Slow moving fish, camouflaged predator~Size: 30cm~Rocky and coral areas of protected and seaward reefs~Feeds on small fishes and shrimps"
        },
    })

    await prisma.species.upsert({
        where: { name: "Weber's Chromis" },
        update: {},
        create: {
            name: "Weber's Chromis",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "Similar to Chromis ternatensis~Black tips to forked caudal fin~Channels and seaward reef slopes to 25m~Solitary or in small groups"
        },
    })

    await prisma.species.upsert({
        where: { name: "Cornetfish" },
        update: {},
        create: {
            name: "Cornetfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 4,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Goggle-eye" },
        update: {},
        create: {
            name: "Goggle-eye",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 4,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Vagabond Butterflyfish" },
        update: {},
        create: {
            name: "Vagabond Butterflyfish",
            category: "Fish",
            uvcLevel: "NA",
            imageCount: 4,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Red Rhino Seastar" },
        update: {},
        create: {
            name: "Red Rhino Seastar",
            category: "Invertebrate",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "Bright red pattern and spines on pale grey or white body~Large, spike-like spines on arm tips project sideways~Found on sand and among seagrasses"
        },
    })

    await prisma.species.upsert({
        where: { name: "Feather Seastar" },
        update: {},
        create: {
            name: "Feather Seastar",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 4,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Ornate Spiny Lobster" },
        update: {},
        create: {
            name: "Ornate Spiny Lobster",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 4,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Dead Coral - DC" },
        update: {},
        create: {
            name: "Dead Coral - DC",
            category: "Benthic",
            uvcLevel: "Indicator",
            imageCount: 4,
            details: "Killed during the last year. This means that corallites will not be very eroded and you can tell which genus it belongs to. If the corallites have been eroded down and are covered in encrusting organisms or coralline algae, then it is classified as rock.~The skeleton may still be white if very recently killed because it is made out of limestone. It may be slightly overgrown by algae as this may not take long to settle. Look under the algae for corallites that are not eroded and/or whiteish skeleton."
        },
    })

    await prisma.species.upsert({
        where: { name: "Sand - SD" },
        update: {},
        create: {
            name: "Sand - SD",
            category: "Benthic",
            uvcLevel: "Indicator",
            imageCount: 4,
            details: "Sand is a natural component of coral reefs. This category helps us to see when the transect hits a sandy patch in-between the reef area. If you are unsure as to whether it is sand or silt, pick a bit up and drop it. If it falls straight to the ground, it is sand. If it forms a cloud in the water column, it is silt.~Sand doesn\'\'t provide us with much information on a survey - so we try to avoid sand on the surveys. However it will still happen that we come across some patches of sand."
        },
    })

    await prisma.species.upsert({
        where: { name: "Acropora Branching - ACB" },
        update: {},
        create: {
            name: "Acropora Branching - ACB",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 4,
            details: "The most common coral genus in the Western Indian Ocean. ~Acropora can be easily identified by the distinctive protruding, cup-like corallites and \'\'axial\'\' growing points.~From the base the stem branches off into secondary stems.~Note axial corallites on branch tips."
        },
    })

    await prisma.species.upsert({
        where: { name: "Boxfish & Trunkfish" },
        update: {},
        create: {
            name: "Boxfish & Trunkfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 4,
            details: "Square/triangular/rounded - boney carapace (armoured plates)~Includes Cowfish - sharp spines/ horns above eyes~Small Protruding mouths~No pelvic fins - swim using sculling actions of small anal, dorsal, pectoral fins"
        },
    })

    await prisma.species.upsert({
        where: { name: "Catfish" },
        update: {},
        create: {
            name: "Catfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 4,
            details: "Plotosus: Torpedo shaped bodies~Second dorsal and anal fins joined at the tail~Barbels around mouth~Venomous spines at front of pelvic and 1st dorsal fin~Under ledges by day"
        },
    })

    await prisma.species.upsert({
        where: { name: "Moorish idol" },
        update: {},
        create: {
            name: "Moorish idol",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 4,
            details: "Zanclus cornutus: Oval, laterally compressed, bodies.~Only one species in the family~Black caudal fin, orange strip over the nose~Long filamentous dorsal fin ~Omnivores "
        },
    })

    await prisma.species.upsert({
        where: { name: "Rudderfish" },
        update: {},
        create: {
            name: "Rudderfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 4,
            details: "Kyphosidae: Moderate large bodies / slightly forked tails~Small heads, terminal mouths~Silvery body, bronze lateral lines~Found in seaward reefs in small aggregations/schools~Grazing herbivores"
        },
    })

    await prisma.species.upsert({
        where: { name: "Alveopora" },
        update: {},
        create: {
            name: "Alveopora",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 4,
            details: "Massive to branching-submassive with corallites 1mm - 7mm.~Similar to Goniopora, it is easily recognisable by large fleshy polyps and tentacles which are extended day and night.~The tentacle tips are often swollen.~Alveopora has 12 tentacles as opposed to Goniopora\'\'s 24."
        },
    })

    await prisma.species.upsert({
        where: { name: "Cymodocea Rotundata - CR" },
        update: {},
        create: {
            name: "Cymodocea Rotundata - CR",
            category: "Seagrass",
            uvcLevel: "NA",
            imageCount: 4,
            details: "Rounded leaf tip with smooth margin (or minutely serrated in younger plants)~2-7 leaves per shoot, blades up to 15 cm, 2-4 mm wide with 9-15 veins~Well developed leaf sheaths up to 5 cm long forming a characteristic shaggy mass around base of shoot~Rhizomes pale pink; internodes 1-4 cm long, bearing a single shoot at each node"
        },
    })

    await prisma.species.upsert({
        where: { name: "Halodule Uninervis - HU" },
        update: {},
        create: {
            name: "Halodule Uninervis - HU",
            category: "Seagrass",
            uvcLevel: "NA",
            imageCount: 4,
            details: "Thin, narrow and flat leaves, usually < 1cm width~Trident tip~Leaves with 3 parallel veins; one central vein~Clean black leaf scars~Rhizomes pale or translucent; internodes 0.5-4 cm long; each node with 1-6 roots and a leafy shoot"
        },
    })

    await prisma.species.upsert({
        where: { name: "Thalassia Hemprichii - TH" },
        update: {},
        create: {
            name: "Thalassia Hemprichii - TH",
            category: "Seagrass",
            uvcLevel: "NA",
            imageCount: 4,
            details: "Shoots with up to 6 leaves, 10-40 cm long and up to 1cm wide~Distinctive by the presence of old sheaths forming a noticeable shaggy mass around the base of shoots~Rhizomes pale yellow, 3-5mm thick, internodes 4-7mm long partly covered by brown scales~Roots and shoots arising in an irregular manner from the rhizome, usually separated by four or more internodes~Slightly curved, speckled leaves"
        },
    })

    await prisma.species.upsert({
        where: { name: "Bicolor Parrotfish" },
        update: {},
        create: {
            name: "Bicolor Parrotfish",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 5,
            details: "Can grow to 80cm~Can be found from 1-30m~Teeth fused into a beaklike plate~Often along upper reaches of coral slopes~Juveniles solitary, Adults in harems~Herbivores grazing on algae on rocks~Change sex during life; first ♀ or ♂; female is able to change in terminal ♂ phase (very colourful)"
        },
    })

    await prisma.species.upsert({
        where: { name: "Lowfin Rudderfish" },
        update: {},
        create: {
            name: "Lowfin Rudderfish",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 5,
            details: "Can grow to 61cm~Small heads~Slightly forked tails~Silvery grey with narrow bronzy stripes (adult phase)~Often in groups~Dominant browsers of Sargassum algae~Can be confused with Highfin Rudderfish"
        },
    })

    await prisma.species.upsert({
        where: { name: "Onespot Snapper" },
        update: {},
        create: {
            name: "Onespot Snapper",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 5,
            details: "Can grow to 53cm~Found at depths between 1-60m ~Nocturnal predator of small fish~Continuous dorsal fin~Usually yellow on its fins~One black spot on its side~Can be confused with Emperors"
        },
    })

    await prisma.species.upsert({
        where: { name: "Klein's Butterflyfish" },
        update: {},
        create: {
            name: "Klein's Butterflyfish",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 5,
            details: "Orange / brown body, white stripes either side of black eye stripe~May have second white band in centre of body (as shown)~Size: 14cm~Lagoons and seawards reefs, 4-61m, usually below 10m~Feeds on soft corals, algae and zooplankton~Solitary, paired, or often in groups"
        },
    })

    await prisma.species.upsert({
        where: { name: "Tailspot Squirrelfish" },
        update: {},
        create: {
            name: "Tailspot Squirrelfish",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 5,
            details: "Deep bodied fish~Forked caudal tail~Bright red with silvery rear and white spot on upper tail base~Found in outer reef slopes and drop-offs in areas of rich coral growth 6- 40+m~Feed on invertebrates and small fishes at night"
        },
    })

    await prisma.species.upsert({
        where: { name: "Twospot Bristletooth" },
        update: {},
        create: {
            name: "Twospot Bristletooth",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 5,
            details: "Blue ring around eye, spots on face and stripy body~Size: 22cm~Coral and rubble areas of deep lagoon and seaward reefs~Herbivores: feed on detritus and unicellular algal films"
        },
    })

    await prisma.species.upsert({
        where: { name: "Whitespotted Boxfish" },
        update: {},
        create: {
            name: "Whitespotted Boxfish",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 5,
            details: "Up to 16cm~Males blue with yellow spots~Females brown with white spots~Clear lagoon and seaward reefs to 30m~Feeds on sponges and benthic invertebrates"
        },
    })

    await prisma.species.upsert({
        where: { name: "Green Turbo Snail" },
        update: {},
        create: {
            name: "Green Turbo Snail",
            category: "Invertebrate",
            uvcLevel: "Expert",
            imageCount: 5,
            details: "Has blunt tubercles, especially strong on shoulders~Colour greyish-green~Large, circular, golden, pearly aperture~Found in crevices on the reef crest and outer slope~Widely collected for use in button and jewellery trade~Size: up to 18cm "
        },
    })

    await prisma.species.upsert({
        where: { name: "Spider Conch" },
        update: {},
        create: {
            name: "Spider Conch",
            category: "Invertebrate",
            uvcLevel: "Expert",
            imageCount: 5,
            details: "Thick shells with expanded outer lip and a notch at the front for the head of the animal, through which one of the conspicuous stalked eyes protrudes~They are herbivorous, feeding by sifting through sand~Horny, long, pointed, curved and often serrated operculum used as a lever to assist locomotion~Size: up to 40cm"
        },
    })

    await prisma.species.upsert({
        where: { name: "Long-legged Spiny Lobster" },
        update: {},
        create: {
            name: "Long-legged Spiny Lobster",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 5,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Phyllidia Nudibranch" },
        update: {},
        create: {
            name: "Phyllidia Nudibranch",
            category: "Invertebrate",
            uvcLevel: "NA",
            imageCount: 5,
            details: ""
        },
    })

    await prisma.species.upsert({
        where: { name: "Ascidian - AS" },
        update: {},
        create: {
            name: "Ascidian - AS",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 5,
            details: "Ascidians (or tunicates or sea squirts) can easily be confused with encrusting sponges because of their irregular growth. They are also filter feeders and so are covered in inhalant and exhalent holes.~However, they are much more complex organisms than sponges and the holes will CLOSE if you waft your hand over them. Sponges will not do this!~Ascidians also tend to have a more shiny surface than sponges (which are matt/dull colored).~Can be solitary or colonial."
        },
    })

    await prisma.species.upsert({
        where: { name: "Cardinalfish" },
        update: {},
        create: {
            name: "Cardinalfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 5,
            details: "Apongonidae: Small nocturnal fish with large eyes~Short snouts and 2 widely spaced dorsal fins ~Reddish colours, stripes common~Shelter by day, feed on zooplankton/crustacean by night~Often have disguised eyes"
        },
    })

    await prisma.species.upsert({
        where: { name: "Flounder" },
        update: {},
        create: {
            name: "Flounder",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 5,
            details: "Scombridae: Flatfish hide in sand~Only eyes exposed~Camouflaged (changes pattern)~Shallow tropical flounders eyes tend to be on left side"
        },
    })

    await prisma.species.upsert({
        where: { name: "Halodule Wrightii - HW" },
        update: {},
        create: {
            name: "Halodule Wrightii - HW",
            category: "Seagrass",
            uvcLevel: "NA",
            imageCount: 5,
            details: "Leaf tip with 2-3 points~Thin, narrow and flat leaves, usually 1cm in width and 2-22cm in length~Whitish rhizome"
        },
    })

    await prisma.species.upsert({
        where: { name: "Halophila Stipulacea - HS" },
        update: {},
        create: {
            name: "Halophila Stipulacea - HS",
            category: "Seagrass",
            uvcLevel: "NA",
            imageCount: 5,
            details: "Blades elongate and leaf-like: 8 cm long, 2.5-8 mm wide~Leaves have serrated edges, especially toward the apex~Pairs of leaves distributed on short petioles (2cm) along rhizome~Cross veins arising from an obvious mid-vein~One root at each node~Opaque, lopsided leaf sheaths"
        },
    })

    await prisma.species.upsert({
        where: { name: "Syringodium Isoetifolium - SI" },
        update: {},
        create: {
            name: "Syringodium Isoetifolium - SI",
            category: "Seagrass",
            uvcLevel: "NA",
            imageCount: 5,
            details: "Distinctive plant with 2-4 cylindrical leaves per shoot~Rhizomes pinkish-orange~Leaf blade up to 45 cm (usually 15-20 cm) 1-3 mm wide~2-4 cm long leaf sheath~Internodes 1.5-3.5 cm long, each node usually supports up to 3 roots"
        },
    })

    await prisma.species.upsert({
        where: { name: "Jewelled Damselfish" },
        update: {},
        create: {
            name: "Jewelled Damselfish",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 6,
            details: "Can grow to 10cm~Can be found from 1-40m~Small terminal mouths~Continuous dorsal fin & forked tail~Look for the electric blue ”jewells”~Can be found in mixed coral rubble areas. Often hiding in the rubble in algae covered areas"
        },
    })

    await prisma.species.upsert({
        where: { name: "Peacock Grouper" },
        update: {},
        create: {
            name: "Peacock Grouper",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 6,
            details: "Can grow to 40cm~Depths 1-40m – esp. in coral rich areas~Target species for artisanal fisheries~Strong bodies~Large mouths with more than one row of teeth~Typically rounded tail~Lots of green/blue spots"
        },
    })

    await prisma.species.upsert({
        where: { name: "Bloodspot Squirrelfish" },
        update: {},
        create: {
            name: "Bloodspot Squirrelfish",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 6,
            details: "More elongated body than Myripristis murdjan with dark horizontal stripes along lighter body~Dark red spot at front of spinous dorsal fin~Size: 25cm~Reef flats to 46m~Often found amongst acropora branches~Feeds primarily on crabs"
        },
    })

    await prisma.species.upsert({
        where: { name: "Bullethead Parrotfish" },
        update: {},
        create: {
            name: "Bullethead Parrotfish",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 6,
            details: "Up to 40 cm~Females brown, may or may not have white spots or lighter CP~Males green-blue with green CP~Reef flats, lagoon and seaward reefs to 25+m~Coral rich and open pavement areas~Juveniles and IP may aggregate in large groups"
        },
    })

    await prisma.species.upsert({
        where: { name: "Dick's Damsel" },
        update: {},
        create: {
            name: "Dick's Damsel",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 6,
            details: "May be confused with Plectroglyphidodon lacrymatus~No electric blue “jewels”~Dark eye~Dorsal fin does not extent as far towards caudal fin~Often found close to reef surface, hiding amongst the structure"
        },
    })

    await prisma.species.upsert({
        where: { name: "Humbug Dascyllus" },
        update: {},
        create: {
            name: "Humbug Dascyllus",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 6,
            details: "White disc-like fish (8cm)~3 vertical black bars fused along tip of dorsal fin~White caudal fin and CP~Sheltered waters to 20m~Among branching corals on submerged reefs flats~Feeds on zooplankton, benthic invertebrates and crustaceans"
        },
    })

    await prisma.species.upsert({
        where: { name: "Red Soldierfish" },
        update: {},
        create: {
            name: "Red Soldierfish",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 6,
            details: "Large scales, body deep red~Outer portion of spinous dorsal fin red~White edges to anal and tail fins~Size: 27cm~Subtidal reef flats to 37m~In loose aggregations in or near shelter (usually under table coral, in holes or caves) during day~Nocturnal feeders (on large zooplankton)"
        },
    })

    await prisma.species.upsert({
        where: { name: "Sixbar Wrasse" },
        update: {},
        create: {
            name: "Sixbar Wrasse",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 6,
            details: "6 vertical stripes~Brightly coloured head~Colour pattern changes little with growth and sex~Territorial males may have brighter colours~Shallow lagoon and seaward reefs to 15m~Feeds on benthic and planktonic crustaceans, small fish and foraminifera"
        },
    })

    await prisma.species.upsert({
        where: { name: "Threadfin Butterflyfish" },
        update: {},
        create: {
            name: "Threadfin Butterflyfish",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 6,
            details: "Thick black band below and across eyes~Diagonal dark stripes across body~Black spot at rear of dorsal fin with �Threadfin� dorsal extension~Size: 23cm~Reef flats, lagoons, and seaward reefs to 30m~Mixed sand, coral and rubble~Feeds by tearing pieces from polychaetes, anemones, coral polyps and algae"
        },
    })

    await prisma.species.upsert({
        where: { name: "Whitebelly Damsel" },
        update: {},
        create: {
            name: "Whitebelly Damsel",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 6,
            details: "Silvery-green ovoid body~Spiny dorsal fin~Elongate pelvic fin~White or yellow ventral surface~Singly or small groups~Coral rich areas of deep clear lagoons and seaward reefs to 34m"
        },
    })

    await prisma.species.upsert({
        where: { name: "Green Spiky Sea Cucumber" },
        update: {},
        create: {
            name: "Green Spiky Sea Cucumber",
            category: "Invertebrate",
            uvcLevel: "Expert",
            imageCount: 6,
            details: "Distinctive rectangular body with rows of blunt papillae along the margins~Colour uniformly dark green~Found in shallow sand and reef areas~Some commercial value for the Beche-de-mer trade"
        },
    })

    await prisma.species.upsert({
        where: { name: "Acropora Digitate - ACD" },
        update: {},
        create: {
            name: "Acropora Digitate - ACD",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 6,
            details: "The most common coral genus in the Western Indian Ocean. ~Acropora can be easily identified by the distinctive protruding, cup-like corallites and \'\'axial\'\' growing points.~Short, finger-like, branches extending from a central base."
        },
    })

    await prisma.species.upsert({
        where: { name: "Coral Branching - CB" },
        update: {},
        create: {
            name: "Coral Branching - CB",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 6,
            details: "Does not have the cup-like axial polyps associated with branching Acropora colonies.~From the base the stem branches off into secondary stems."
        },
    })

    await prisma.species.upsert({
        where: { name: "Fleshy Macroalgae - AFM" },
        update: {},
        create: {
            name: "Fleshy Macroalgae - AFM",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 6,
            details: "Photosynthetic marine plant.~Weedy/fleshy algae.~Very structured. Visible leaves."
        },
    })

    await prisma.species.upsert({
        where: { name: "Cornetfish" },
        update: {},
        create: {
            name: "Cornetfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 6,
            details: "Very elongated fish~Extended snout and a whip like tail filament~Can change patterns for disguise~Similar to trumpet fish but do not have a tail fin"
        },
    })

    await prisma.species.upsert({
        where: { name: "Lizardfish" },
        update: {},
        create: {
            name: "Lizardfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 6,
            details: "Synodontidae: Voracious, lie in wait predators~Pointed snouts and cylindrical elongated bodies~Mean looking jaws, full of teeth~High first dorsal and tiny second dorsal~Camouflaged - ambush predator~Species ID difficult - similar markings"
        },
    })

    await prisma.species.upsert({
        where: { name: "Fungia" },
        update: {},
        create: {
            name: "Fungia",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 6,
            details: "Usually solitary and free living individuals, except for juveniles which develop on a stalk.~Usually circular and dome shaped to varying degrees, ranging between 15 and 30cm.~Have central mouths with septa radiating outward, and costa which radiate outwards from the centre of the underside.~Short, widely spaced tentacles may be extended during the day."
        },
    })

    await prisma.species.upsert({
        where: { name: "Halophila Ovalis - HO" },
        update: {},
        create: {
            name: "Halophila Ovalis - HO",
            category: "Seagrass",
            uvcLevel: "NA",
            imageCount: 6,
            details: "Small oval to elliptical leaves in pairs; 1-4 cm length and 0.5-2.0 cm widthSmall oval to elliptical leaves in pairs; 1-4 cm length and 0.5-2.0 cm width~Pairs of leaves distributed on petioles along rhizome~Rhizomes pale cream up to 2 mm wide~Cross veins (>10) arising from an obvious mid-vein~One root at each node"
        },
    })

    await prisma.species.upsert({
        where: { name: "Meyer's Butterflyfish" },
        update: {},
        create: {
            name: "Meyer's Butterflyfish",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 7,
            details: "Can grow to 18cm~Can be found down to 2-25m~Feeds exclusively on coral polyps~Black, white and yellow~Typically travel alone, or in pairs~Juveniles usually among branching corals"
        },
    })

    await prisma.species.upsert({
        where: { name: "Thumbprint Emperor" },
        update: {},
        create: {
            name: "Thumbprint Emperor",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 7,
            details: "Can grow to 50cm~Can be found down to 20m~Target species for the artisanal fishery~Black ‘splodge’ on its side – looks like a thumbprint. May be pale and indistinct~Forked tail~One continuous dorsal fin~Found mainly on seagrass beds, and sandy shallow rubble areas~Solitary or in small groups"
        },
    })

    await prisma.species.upsert({
        where: { name: "Checkerboard Wrasse" },
        update: {},
        create: {
            name: "Checkerboard Wrasse",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 7,
            details: "Black margins on scales creates chequerboard pattern~Sand patches of clear lagoon and seaward reefs 1-30+m~Feed on small invertebrates~Sleep buried in sand"
        },
    })

    await prisma.species.upsert({
        where: { name: "Slingjaw Wrasse" },
        update: {},
        create: {
            name: "Slingjaw Wrasse",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 7,
            details: "Deep fish~Unique protractible jaw forms tube half length of body~Males yellow to brown, females with white head~Lagoon and seaward reefs in coral rich areas 1-42m~Tubular mouth used to catch small coral-dwelling crustaceans and fish"
        },
    })

    await prisma.species.upsert({
        where: { name: "Long Spine Urchin" },
        update: {},
        create: {
            name: "Long Spine Urchin",
            category: "Invertebrate",
            uvcLevel: "Indicator",
            imageCount: 7,
            details: "Primary spines usually long, cylindrical, hollow and easily broken"
        },
    })

    await prisma.species.upsert({
        where: { name: "Cushion Seastar" },
        update: {},
        create: {
            name: "Cushion Seastar",
            category: "Invertebrate",
            uvcLevel: "Expert",
            imageCount: 7,
            details: "Unmistakable inflated, cushion-like, pentagonal body~Feeds on small coral colonies and detritus~Found in seagrass beds or shallow reef areas in the lower eulittoral"
        },
    })

    await prisma.species.upsert({
        where: { name: "Cuttlefish" },
        update: {},
        create: {
            name: "Cuttlefish",
            category: "Invertebrate",
            uvcLevel: "Expert",
            imageCount: 7,
            details: "Head with ten tentacles or arms, 2 of which are longer than the rest and have suckers only on the spoon-shaped ends for catching prey~Found in shallow reefs"
        },
    })

    await prisma.species.upsert({
        where: { name: "Long Sticky Sea Cucumber" },
        update: {},
        create: {
            name: "Long Sticky Sea Cucumber",
            category: "Invertebrate",
            uvcLevel: "Expert",
            imageCount: 7,
            details: "Very long, snake-like, soft body with thin, grainy skin~Colour white or cream with conspicuous pattern of black and grey blotches~Mouth surrounded by 15-26 long, pinnate tentacles for gathering sand particles~Found in shallow sand and seagrass beds"
        },
    })

    await prisma.species.upsert({
        where: { name: "Pineapple Sea Cucumber" },
        update: {},
        create: {
            name: "Pineapple Sea Cucumber",
            category: "Invertebrate",
            uvcLevel: "Expert",
            imageCount: 7,
            details: "Colour dark reddish-brown~Long, firm loaf-shaped body covered in soft, irregular papillae giving a shaggy appearance~Found in shallow reefs and rubble~Highly valuable Beche-de-mer species"
        },
    })

    await prisma.species.upsert({
        where: { name: "Barracuda" },
        update: {},
        create: {
            name: "Barracuda",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 7,
            details: "Long elongated bodies~Long jaws, teeth~2 widely spaced dorsal fins~Solitary or schooling~Tend to hunt below the surface"
        },
    })

    await prisma.species.upsert({
        where: { name: "Coral breams & Spinecheek" },
        update: {},
        create: {
            name: "Coral breams & Spinecheek",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 7,
            details: "Nemipteridae: Monocle Breams and Spinecheeks ~Tapered bodies with sloping heads~Inhabit sandy bottoms/ rubble slopes ~Small terminal mouths / continuous dorsal fin~Solitary~Opportunistic bottom feeders"
        },
    })

    await prisma.species.upsert({
        where: { name: "Hawkfish" },
        update: {},
        create: {
            name: "Hawkfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 7,
            details: "Cirrhitidae: Small, stout bodied bottom dwellers~Without swim bladders~Territorial (establish territories with branches)~Perch in exposed position (observing activity around)~If approached will dart for cover~Series of cirri on their dorsal spines"
        },
    })

    await prisma.species.upsert({
        where: { name: "Pufferfish" },
        update: {},
        create: {
            name: "Pufferfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 7,
            details: "Tetraodontidae~Oval shaped - tough scaleless skin - greatly expand when agitate~\'Puff\' - draws water in ~Deadly poison in the tissues~Usually solitary~Includes Tobies (smaller puffers/swim in pairs)"
        },
    })

    await prisma.species.upsert({
        where: { name: "Shrimpfish" },
        update: {},
        create: {
            name: "Shrimpfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 7,
            details: "Centriscidae: Extremely laterally compressed fish, transparent ~Swim upright / heads down in pairs / small groups~Dorsal fin length of body - hinge allowing the rear half to angle in different directions for turning"
        },
    })

    await prisma.species.upsert({
        where: { name: "Snapper" },
        update: {},
        create: {
            name: "Snapper",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 7,
            details: "Lutjanidae: Tapered bodies with sloping heads~Shallow notched tails with slightly superior mouths ~Nocturnal carnivorous predators (fish)~Fisheries Target~Schools - just above reef~Yellow colouring common"
        },
    })

    await prisma.species.upsert({
        where: { name: "Seriatopora" },
        update: {},
        create: {
            name: "Seriatopora",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 7,
            details: "Colonies are compact bushes with thin, anastomosing branches.~Most species common here have branches that taper to a point. ~Corallites are immersed and arranged in neat rows along the branches. ~Like Pocillopora, the septa seem to form a slightly darker ring around the corallite."
        },
    })

    await prisma.species.upsert({
        where: { name: "Symphyllia" },
        update: {},
        create: {
            name: "Symphyllia",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 7,
            details: "Colonies are massive and either dome-shaped or flat topped.~Corallites are meandroid.~Polyp walls usually have a groove along the top.~No paliform lobes.~Walls and valleys are usually different colours."
        },
    })

    await prisma.species.upsert({
        where: { name: "Turbinaria" },
        update: {},
        create: {
            name: "Turbinaria",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 7,
            details: "Submassive or laminar.~Tentacles mainly only extended at night.~Corallites are small and round and vary greatly from only slightly exsert to tubular.~Septa short and neat.~Coenosteum seems smooth and is often darker than the corallites."
        },
    })

    await prisma.species.upsert({
        where: { name: "Thalassodendron Cilliatum - TC" },
        update: {},
        create: {
            name: "Thalassodendron Cilliatum - TC",
            category: "Seagrass",
            uvcLevel: "NA",
            imageCount: 7,
            details: "Leaf blade up to 15 cm long, 6-13 mm wide, with serrated margins~3-10 leaves per shoot, clustered at the top of a long stem (up to 60 cm) ~Leaf sheath 15-30 mm long, leaving visible scars on the stem~\'\'Woody\'\' rhizomes cream-coloured with internodes 1.5-3cm long, and with roots and stems arising at every fourth internode."
        },
    })

    await prisma.species.upsert({
        where: { name: "Bluebarred Parrotfish" },
        update: {},
        create: {
            name: "Bluebarred Parrotfish",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 8,
            details: "Can grow to 75cm~Can be found down to 30m~Often near sandy areas in silty environments~Usually solitary, but juveniles in groups"
        },
    })

    await prisma.species.upsert({
        where: { name: "Chevron Butterflyfish" },
        update: {},
        create: {
            name: "Chevron Butterflyfish",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 8,
            details: "Can grow to 18cm~Shallow lagoon and semi-protected seaward reefs to 30m~Associated with tabular and branching Acropora corals : feed exclusively on their polyps and mucus~Solitary or paired and highly territorial"
        },
    })

    await prisma.species.upsert({
        where: { name: "Convict Surgeonfish" },
        update: {},
        create: {
            name: "Convict Surgeonfish",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 8,
            details: "Can grow to 26cm~Can be found from 0-90m~Ovate to elongate, compressed body~Continuous dorsal & anal fins~Small pointed mouth~Retractable blades located on the caudal peduncle~Often found in areas of hard substratum~Feeds on filamentous algae"
        },
    })

    await prisma.species.upsert({
        where: { name: "Two-tone Chromis" },
        update: {},
        create: {
            name: "Two-tone Chromis",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 8,
            details: "Ovoid body~Dark head and body~White tail~Lagoon and seaward reefs to 36m~Abundant in large aggregation over reef tops and upper edges of reefs"
        },
    })

    await prisma.species.upsert({
        where: { name: "Burnt Sausage" },
        update: {},
        create: {
            name: "Burnt Sausage",
            category: "Invertebrate",
            uvcLevel: "Indicator",
            imageCount: 8,
            details: "Distinctive colouration with dark grey on dorsal surface and pink ventrally"
        },
    })

    await prisma.species.upsert({
        where: { name: "Triton Snail" },
        update: {},
        create: {
            name: "Triton Snail",
            category: "Invertebrate",
            uvcLevel: "Indicator",
            imageCount: 8,
            details: "The triton trumpet shell, Charonia tritonis, is one of the few known predators of the Crown of Thorns starfish~This mollusc has been overfished worldwide for the curio trade~It is believed that triton shells aggregate near to reefs with Crown of Thorns outbreaks"
        },
    })

    await prisma.species.upsert({
        where: { name: "Filefish" },
        update: {},
        create: {
            name: "Filefish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 8,
            details: "Monacanthidae: Kite shape, thinner body than trigger~2 dorsal fins: 1st is elongated spine - resembles a wood-workers file~File cannot be locked into place like the triggerfish, single spine~Change colour for camouflage~Very shy - usually difficult to spot"
        },
    })

    await prisma.species.upsert({
        where: { name: "Needlefish" },
        update: {},
        create: {
            name: "Needlefish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 8,
            details: "Belonidae: Elongated extremely slender fish~Jaw filled with needle-like teeth~Forked tail~Elongated mouth & pointed nose~Solitary or in groups"
        },
    })

    await prisma.species.upsert({
        where: { name: "Rabbitfish" },
        update: {},
        create: {
            name: "Rabbitfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 8,
            details: "Siganidae: Oval body, small terminal mouth~Venomous dorsal, anal and ventral spines~Herbivorous fish which eat seagrasses and algae ~Very shy, usually in loose aggregations~Fisheries target"
        },
    })

    await prisma.species.upsert({
        where: { name: "Triggerfish" },
        update: {},
        create: {
            name: "Triggerfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 8,
            details: "Balistidae: Large laterally compressed bodies (diamond)~2 dorsal fins: 1st can be held erect and locked in place (trigger)~3 dorsal spines on trigger~Aggressively guard nests~Titan/Moustache - aggressive nature~Undulating motion of second dorsal and anal fin "
        },
    })

    await prisma.species.upsert({
        where: { name: "Goniopora" },
        update: {},
        create: {
            name: "Goniopora",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 8,
            details: "Usually encrusting to massive here, but can be branching or submassive.~Corallites range in size from 2mm - 10mm and polygonal, but are usually obscured by extended, long fleshy polyps and tentacles.~Polyps have 24 tentacles which are extended day and night.~Extendable pharynx and well developed oral cones.~The polyps are long and tubular an retract rapidly when disturbed."
        },
    })

    await prisma.species.upsert({
        where: { name: "Lobophyllia" },
        update: {},
        create: {
            name: "Lobophyllia",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 8,
            details: "Massive to encrusting, with corallites phaceloid to flabello-meandroid.~Large corallites and valleys.~Large septa with long septal teeth and thick fleshy mantle.~Polyps and tentacles are only extended at night."
        },
    })

    await prisma.species.upsert({
        where: { name: "Redfin Butterflyfish" },
        update: {},
        create: {
            name: "Redfin Butterflyfish",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 9,
            details: "Can grow to 15cm~Can be found down 20m~Feeds exclusively on coral polyps~Disk shape body with continuous dorsal & anal fin~Black, white and yellow~Typically travel alone, or in pairs"
        },
    })

    await prisma.species.upsert({
        where: { name: "Bigeye Emperor" },
        update: {},
        create: {
            name: "Bigeye Emperor",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 9,
            details: "Continuous Dorsal~Emarginated to forked tail~Thickened lips ~Juveniles have distinctive black bands & one streak over eye ~1 to 100m~Nocturnal feeder of hard shelled invertebrates ~Juveniles solitary~Adults form aggregations"
        },
    })

    await prisma.species.upsert({
        where: { name: "Bean Turd" },
        update: {},
        create: {
            name: "Bean Turd",
            category: "Invertebrate",
            uvcLevel: "Indicator",
            imageCount: 9,
            details: "Firm, loaf-shaped body~Colour variable, usually uniformly pale cream or grey"
        },
    })

    await prisma.species.upsert({
        where: { name: "Teat Fish" },
        update: {},
        create: {
            name: "Teat Fish",
            category: "Invertebrate",
            uvcLevel: "Indicator",
            imageCount: 9,
            details: "Colour black with scattered golden patches~Surface sometimes covered with sand~One of the most valuable species for the Beche-de-mer industry"
        },
    })

    await prisma.species.upsert({
        where: { name: "Jack-O-Lantern Clam" },
        update: {},
        create: {
            name: "Jack-O-Lantern Clam",
            category: "Invertebrate",
            uvcLevel: "Expert",
            imageCount: 9,
            details: "Conspicuous thick, heavy shell with broad zigzag aperture~Colour variable, dark brown to black at margin, paler inside~Found on rock or coral in the shallow sublittoral"
        },
    })

    await prisma.species.upsert({
        where: { name: "Linkia spp" },
        update: {},
        create: {
            name: "Linkia spp",
            category: "Invertebrate",
            uvcLevel: "Expert",
            imageCount: 9,
            details: "Large, smooth-armed starfish with long, cylindrical arms~Found on coral rubble or among seagrasses in shallow lagoons and reef areas"
        },
    })

    await prisma.species.upsert({
        where: { name: "Anthias" },
        update: {},
        create: {
            name: "Anthias",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 9,
            details: "Small colourful sub-family ~Large aggregations on outer reef slopes/ledges~Brightly coloured plankton pickers~Elongate bodies~<10 cm length"
        },
    })

    await prisma.species.upsert({
        where: { name: "Bat & Spadefish" },
        update: {},
        create: {
            name: "Bat & Spadefish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 9,
            details: "Ephippidae: Round, laterally compressed, enlarged dorsal and anal fins~Spade shape (pack of cards)~Juveniles mimic floating dead leaves~Initial phase: XL, extended dorsal/anal fins (adults reduce in size)~Swim in schools~Inquisitive / curious with divers"
        },
    })

    await prisma.species.upsert({
        where: { name: "Soldierfish" },
        update: {},
        create: {
            name: "Soldierfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 9,
            details: "Holocentridae: Nocturnal Feeders~Red colour / large eyes~Hide under ledges by day~Feed on large zooplankton~Blunter snouts than squirrelfish and no gill operculum spine"
        },
    })

    await prisma.species.upsert({
        where: { name: "Sole" },
        update: {},
        create: {
            name: "Sole",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 9,
            details: "Soleidae: Eyes on upper side of body (migration of eyes through age)~Continuous dorsal/anal fins - join the caudal fin~Camouflaged ~Sandy areas"
        },
    })

    await prisma.species.upsert({
        where: { name: "Astreopora" },
        update: {},
        create: {
            name: "Astreopora",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 9,
            details: "Plocoid corallites, can be massive, encrusting, or laminar (the laminar form is rare here).~Small corallites can be immerserd or conical~Corallites are evenly distributed. ~Coenosteum is coarse/ granular, and the septa are evenly spaced."
        },
    })

    await prisma.species.upsert({
        where: { name: "Gardineroseris" },
        update: {},
        create: {
            name: "Gardineroseris",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 9,
            details: "Colonies are massive to encrusting, sometimes laminar margins.~There is only one species, Gardineroseris planulata.~Acute, geometric walls with fine, even septo-costae.~Corallites are shallow and rounded.~Can be confused with certain Goniastrea, but Gardineroseris has far finer septa, also, watch for the laminar edge (the edge is slightly lifted)."
        },
    })

    await prisma.species.upsert({
        where: { name: "Leptoria" },
        update: {},
        create: {
            name: "Leptoria",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 9,
            details: "Range from encrusting to submassive, with long, sinuous, meandroid valleys.~Colonies have very uniform valleys of often astounding length and sinuous complexity.~Septa are neat and evenly sized.~No paliform lobes.~The tentacles are only extended at night."
        },
    })

    await prisma.species.upsert({
        where: { name: "Pachyseris" },
        update: {},
        create: {
            name: "Pachyseris",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 9,
            details: "Colonies are laminar to frond-like branching.~Corallite centres not easily noticeable.~Walls form long valleys of concentric ridges, parallel to the edge of the colony.~Septo-costae are fine and even; are visible running up and down the walls."
        },
    })

    await prisma.species.upsert({
        where: { name: "Plerogyra" },
        update: {},
        create: {
            name: "Plerogyra",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 9,
            details: "Colonies are encrusting to massive.~Only one species is found here (P. sinuosa). ~The flabello-meandroid structure is hard to distinguish as they are usually covered with the large grape-like vesicles distinctive to this genus. ~Vesicles inflated with water when tentacles are retracted during the day~The vesicles (which contain nematocysts) will retract slowly if it is disturbed to reveal large, solid septa."
        },
    })

    await prisma.species.upsert({
        where: { name: "Stylophora" },
        update: {},
        create: {
            name: "Stylophora",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 9,
            details: "Submassive to branching.~Branches are short with blunt ends. ~Branches are covered with fine spicules that can give them a fuzzy appearance. ~Part of the corallite extends slightly on some species giving it a hooded appearance."
        },
    })

    await prisma.species.upsert({
        where: { name: "Bull-mouth Helmet" },
        update: {},
        create: {
            name: "Bull-mouth Helmet",
            category: "Invertebrate",
            uvcLevel: "Indicator",
            imageCount: 10,
            details: "Solid, heavy shell up to 17cm with a narrow aperture~Dorsally reddish with 3 or 4 broad spiral bands bearing rounded nodules~Thick outer lip light orange with strong, lighter teeth, and columella orange with white ridges~An important predator of sea urchins~Collected for the curio trade"
        },
    })

    await prisma.species.upsert({
        where: { name: "Edible Sea Urchin" },
        update: {},
        create: {
            name: "Edible Sea Urchin",
            category: "Invertebrate",
            uvcLevel: "Indicator",
            imageCount: 10,
            details: "Spine colour variable, often white but also brown, reddish and grey~Ten dark blue or black bands of tiny pedicellariae radiate between the anal and mouth areas~Known for its edible roe which is eaten in Madagascar"
        },
    })

    await prisma.species.upsert({
        where: { name: "Rock Boring Urchin" },
        update: {},
        create: {
            name: "Rock Boring Urchin",
            category: "Invertebrate",
            uvcLevel: "Indicator",
            imageCount: 10,
            details: "Feeds on coralline and other algae on limestone rocks~Has short, strong tapering spines~Bio-eroder of limestone rock and coral, with population outbreaks possibly due to removal of fish predators caused by fishing"
        },
    })

    await prisma.species.upsert({
        where: { name: "Rubble - RB" },
        update: {},
        create: {
            name: "Rubble - RB",
            category: "Benthic",
            uvcLevel: "Indicator",
            imageCount: 10,
            details: "As rubble is unattached to the reef, wave action will make it tumble around, which may knock off any new corals that have settled.~When rubble has been \'\'cemented\'\' together by coralline algae, we call it rock as it is no longer unstable - this can cause confusion among surveyors.~If it is loose or free to roll around it is rubble. If it is no longer loose and is cemented together it is rock."
        },
    })

    await prisma.species.upsert({
        where: { name: "Coral Encrusting - CE" },
        update: {},
        create: {
            name: "Coral Encrusting - CE",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 10,
            details: "Thin colonies that adhere closely to and are attached to the underlying substrate."
        },
    })

    await prisma.species.upsert({
        where: { name: "Coral Massive - CMA" },
        update: {},
        create: {
            name: "Coral Massive - CMA",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 10,
            details: "Solid boulders of coral that are typically spherical in shape i.e. approximately the same dimensions in all directions."
        },
    })

    await prisma.species.upsert({
        where: { name: "Soft Coral - SC" },
        update: {},
        create: {
            name: "Soft Coral - SC",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 10,
            details: "Soft corals do not build reefs as their skeleton is made from soft tissues that is supported internally like re-enforced concrete by a matrix of calcareous elements.~Waft the water column and the structure will move (flexible skeleton).~Regular corallites visible ; occasionally with polyps extended during the day (tentacles in multiples of 8)."
        },
    })

    await prisma.species.upsert({
        where: { name: "Butterflyfish" },
        update: {},
        create: {
            name: "Butterflyfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 10,
            details: "Chaetondonitae: Round, laterally compressed, relatively small bodies~Pairs / groups of 2 (mate for life)~Diet: Tiny worms, coral polyps, other invertebrates~Black, white, yellow~Bars across eyes / ocellus spots"
        },
    })

    await prisma.species.upsert({
        where: { name: "Remora" },
        update: {},
        create: {
            name: "Remora",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 10,
            details: "Echeneidae: Elongated fish - suction cup on the head~Attaches to underside of megafauna (whales, sharks, turtles, rays or large fish)~Hitch a ride/scavenge on remains of the hosts food~Attempts to attach to divers (if they attach just push forward)"
        },
    })

    await prisma.species.upsert({
        where: { name: "Sandperch" },
        update: {},
        create: {
            name: "Sandperch",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 10,
            details: "Pinguipedidae: Lie in wait predators, perch on their pectoral fins~Similar to lizardfish but less camouflaged~Eyes can move independently from each other~Found on sand and rubble bottoms near the edge of reefs"
        },
    })

    await prisma.species.upsert({
        where: { name: "Brushtail Tang" },
        update: {},
        create: {
            name: "Brushtail Tang",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 11,
            details: "Juvenile to right, adults darker green~Elongate dorsal and ventral fins~Bright white keel~Size: 20cm~On coral rich areas of lagoon and seaward reefs – 1-60m depth~Herbivores – mainly plants and detritus"
        },
    })

    await prisma.species.upsert({
        where: { name: "Skunk Anemonefish" },
        update: {},
        create: {
            name: "Skunk Anemonefish",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 11,
            details: "Elongate anemone fish (11cm)~Solid orange body~White dorsal stripe~Found up to 25m~Inhabits anemones"
        },
    })

    await prisma.species.upsert({
        where: { name: "Crown of Thorns" },
        update: {},
        create: {
            name: "Crown of Thorns",
            category: "Invertebrate",
            uvcLevel: "Indicator",
            imageCount: 11,
            details: "Feed by emptying their stomach and digestive juices onto the coral then absorbing the digestive material~Crown of Thorns damage can be recognised by dead patches (scars) on the coral colony~Characterised by a covering of sharp spines which contain venom that can cause a painful reaction in humans"
        },
    })

    await prisma.species.upsert({
        where: { name: "Painted Spiny Lobster" },
        update: {},
        create: {
            name: "Painted Spiny Lobster",
            category: "Invertebrate",
            uvcLevel: "Indicator",
            imageCount: 11,
            details: "Nocturnal scavengers, will hide in cracks during the day~Easily confused with Banded Spiny Lobster which has horizontal banding on the legs"
        },
    })

    await prisma.species.upsert({
        where: { name: "Cowrie" },
        update: {},
        create: {
            name: "Cowrie",
            category: "Invertebrate",
            uvcLevel: "Expert",
            imageCount: 11,
            details: "Distinctive rounded to oval, flat-based shells with shining surfaces~Cowries hide among corals during the day, and hunt at night on the bottom (sponges and benthic organisms)~Normally the conch and its porcelain surface are covered by its extended mantle"
        },
    })

    await prisma.species.upsert({
        where: { name: "Silt - SI" },
        update: {},
        create: {
            name: "Silt - SI",
            category: "Benthic",
            uvcLevel: "Indicator",
            imageCount: 11,
            details: "Silt is sediment that remains in suspension if disturbed. Often, silt is present on top of other indicators such as rock. In these instances, silt is recorded if the silt layer is thicker than 1mm or covers the underlying substratum such that you cannot observe the colour.~If the colour of the underlying substrate can be discerned, then the code recorded will be that of the underlying substrate NOT silt."
        },
    })

    await prisma.species.upsert({
        where: { name: "Other (Tubastrea) - OTU" },
        update: {},
        create: {
            name: "Other (Tubastrea) - OTU",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 11,
            details: "Tubastrea is a type of hard coral however it is not hermatipic as it does not have the mutualistic relationship with zooxanthellae.~Tubastrea can grow at depth as it does not require light."
        },
    })

    await prisma.species.upsert({
        where: { name: "Crocodilefish & Flathead" },
        update: {},
        create: {
            name: "Crocodilefish & Flathead",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 11,
            details: "Platycephalidae: Close relatives of scorpionfish~Dorsally compressed bodies~2 dorsal fins / flattened heads~Resemble small crocodiles waiting on sand~Eyes curtain with tassels - expand/contract (sunlight/disguise)"
        },
    })

    await prisma.species.upsert({
        where: { name: "Dartfish" },
        update: {},
        create: {
            name: "Dartfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 11,
            details: "Ptereleotrinae: elongated goby-like bodies"
        },
    })

    await prisma.species.upsert({
        where: { name: "Jack & Trevally" },
        update: {},
        create: {
            name: "Jack & Trevally",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 11,
            details: "Carangidae: Large silver~Strong open water swimmers - large schools~Torpedo shaped bodies~Forked tails"
        },
    })

    await prisma.species.upsert({
        where: { name: "Mojarra" },
        update: {},
        create: {
            name: "Mojarra",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 11,
            details: "Oblong silver bodies ~Young often have dusky markings ~Solitary or in loose aggregations~Very obvious scales and defined lateral lines~Obvious indent just below mouth~Inhabit sandy areas near reefs"
        },
    })

    await prisma.species.upsert({
        where: { name: "Porcupinefish" },
        update: {},
        create: {
            name: "Porcupinefish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 11,
            details: "Diodontidae: Similar to puffers (ability to expand)~Unlike puffers - skin covered with short spines like porcupine spines~Spines erect but lay flat on species in the Diodon genus~Plated mouth for crushing shells / gastropods~Usually very shy"
        },
    })

    await prisma.species.upsert({
        where: { name: "Squirrelfish" },
        update: {},
        create: {
            name: "Squirrelfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 11,
            details: "Holocentridae: Nocturnal Feeders~Red colour / large eyes~Hide under ledges by day~Feed on large crabs, shrimps, small fishes~Spine on the gill operculum which is venomous in a few species~Large upright second dorsal (like a squirrels tail)"
        },
    })

    await prisma.species.upsert({
        where: { name: "Echinophyllia" },
        update: {},
        create: {
            name: "Echinophyllia",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 11,
            details: "Encrusting or branching.~Corallites are immersed or tubular and tend to incline towards the colony margins.~Round or oval calice.~Coenosteum is pitted."
        },
    })

    await prisma.species.upsert({
        where: { name: "Moorish Idol" },
        update: {},
        create: {
            name: "Moorish Idol",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 12,
            details: "Opportunistic feeders that particularly love sponges~Sponges are an indicator of nutrient loaded waters~Also feed on coral polyps and tunicates~Easily confused with butterflyfish, but are actually in an entirely separate family!~Derive their name from the Moors who believe the fish to be a bringer of happiness"
        },
    })

    await prisma.species.upsert({
        where: { name: "Big Red Octopus" },
        update: {},
        create: {
            name: "Big Red Octopus",
            category: "Invertebrate",
            uvcLevel: "Indicator",
            imageCount: 12,
            details: "Two more or less prominent ringed dark blotches in front of the eyes on the umbrella-like skin that connects the eight arms~By day they hide in a permanent home (a crevice in the reef), the entrance of which is marked by empty mollusc and crab shells, leftovers of meals~Highly fished for food in Bay of Ranobe"
        },
    })

    await prisma.species.upsert({
        where: { name: "Rock - RC" },
        update: {},
        create: {
            name: "Rock - RC",
            category: "Benthic",
            uvcLevel: "Indicator",
            imageCount: 12,
            details: "Coral that has been dead for over a year is classified as rock.~Rubble that has been \'\'cemented\'\' together by coralline algae is also counted in this category.~It is still classified as rock if it is covered in turf algae, less than a few centimeters long or if it is covered in coralline algae.~Any type of clams shell is also included."
        },
    })

    await prisma.species.upsert({
        where: { name: "Coral Foliacious - CF" },
        update: {},
        create: {
            name: "Coral Foliacious - CF",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 12,
            details: "Coral sheets that grow from a central point in a cabbage/ rose formation."
        },
    })

    await prisma.species.upsert({
        where: { name: "Emperor" },
        update: {},
        create: {
            name: "Emperor",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 12,
            details: "Lethrinidae: Tapered bodies with sloping heads~Higher set eyes (compared to snappers)~Inhabit reef fringe~Diet: sand dwelling inverts~Dull colours~Switch dark patches on/off"
        },
    })

    await prisma.species.upsert({
        where: { name: "Fusilier" },
        update: {},
        create: {
            name: "Fusilier",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 12,
            details: "Caesio: Torpedo shaped bodies (Christian fish symbol)~Small terminal mouths with protrusible upper jaws~Deeply forked tails~Large schools above reefs (>1 spp.)"
        },
    })

    await prisma.species.upsert({
        where: { name: "Goatfish" },
        update: {},
        create: {
            name: "Goatfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 12,
            details: "Mullidae: Goatfish have long slender tapered bodies~2 barbels - chemo-receptors / mechano-receptors~Barbels sometimes tucked away~Kick up sand clouds / alter markings~Groups of various species~Patterns change or turn on / off"
        },
    })

    await prisma.species.upsert({
        where: { name: "Grouper" },
        update: {},
        create: {
            name: "Grouper",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 12,
            details: "Epinephelinae: Ambush predator~Strong stout bodies~Upturned mouths, teeth~Sit on rocks at cleaning stations~Grow large - up to 2m~Shy"
        },
    })

    await prisma.species.upsert({
        where: { name: "Parrotfish" },
        update: {},
        create: {
            name: "Parrotfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 12,
            details: "Scaridae: Large heavy bodied fish~Swim with pectoral fins~Teeth fused - beak like mouth (Excavators)~Change sex: smaller/less colourful & brightly coloured male"
        },
    })

    await prisma.species.upsert({
        where: { name: "Pipefish & Sea horse" },
        update: {},
        create: {
            name: "Pipefish & Sea horse",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 12,
            details: "Syngnathinae: Small slender, elongated fish~Body- encircling bony segments~Elongated snouts / single bony dorsal fin~Seahorses: heads angle down from the main body axis and have curled tails used to cling  ~Pipefish: straight bodies with small rounded tails~Males carry eggs - babies swim out once hatched"
        },
    })

    await prisma.species.upsert({
        where: { name: "Ray" },
        update: {},
        create: {
            name: "Ray",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 12,
            details: "Stingrays, guitar fish, eagle rays, manta rays, skates, and cownose rays~Enlarged pectoral fins, and dorso-ventrally compressed bodies ~Long pointed tails ~Some hide on/in the sand well camouflaged~Others are pelagic open water swimmers and filter feeders like mantas and devil rays"
        },
    })

    await prisma.species.upsert({
        where: { name: "Slipper lobster" },
        update: {},
        create: {
            name: "Slipper lobster",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 12,
            details: "Greyish-brown in colour~Numerous white-tipped spines along edge of carapace and antennae~Found in reef areas and deeper sites"
        },
    })

    await prisma.species.upsert({
        where: { name: "Soapfish" },
        update: {},
        create: {
            name: "Soapfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 12,
            details: "Large mouth with protruding lower jaw.~Varied coloration, but there is usually a brown stripe from the mouth to the front of the dorsal fin.~Dorsal fin can have 2 - 4 spines."
        },
    })

    await prisma.species.upsert({
        where: { name: "Sweetlips" },
        update: {},
        create: {
            name: "Sweetlips",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 12,
            details: "Haemulidae: Closely related to snappers BUT undulating dorsal fin~Small but prominent pouted thick lips~Grunts - rubs flat teeth together~Nocturnal predators of crustaceans~Alone or small groups~Distinct juvenile phases / swimming patterns"
        },
    })

    await prisma.species.upsert({
        where: { name: "Galaxea" },
        update: {},
        create: {
            name: "Galaxea",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 12,
            details: "Massive, submassive (dome, cushion shamed) laminar, or encrusting.~Each corallite is composed of spiny, exsert septa that give an prickly aspect to the colonies.~Granulated coensteoum.~Corallites are cylindrical (phaceloid)."
        },
    })

    await prisma.species.upsert({
        where: { name: "Leptastrea" },
        update: {},
        create: {
            name: "Leptastrea",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 12,
            details: "Thick encrusting plates to massive.~Corallites are small, 2mm - 5mm and are cerioid to sub-plocoid.~Corallites are very closely packed, and in some species may protrude unevenly.~Costae are very poorly developed (or non-existent) and as such the outside of the corallite, and the coenosteum if it is visible, often appears smooth.~Septa project strongly inwards and paliform lobes are rarely visible.~The surface of the corallites is usually pale and whitish, giving them an eroded appearance."
        },
    })

    await prisma.species.upsert({
        where: { name: "Montipora" },
        update: {},
        create: {
            name: "Montipora",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 12,
            details: "Submassive, laminar, (often foliose in character) encrusting, or branching. ~Smallest corallites of any genus. ~Corallite walls and coenosteum are very elaborate seeming like waxy droplets."
        },
    })

    await prisma.species.upsert({
        where: { name: "Bluestreak Cleaner Wrasse" },
        update: {},
        create: {
            name: "Bluestreak Cleaner Wrasse",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 13,
            details: "Can grow to 11cm~Found on nearly all coral reef habitats from inner lagoons, reef flats to seaward reefs as deep as 40m~Have terminal mouths, thick lips, and a single, continuous dorsal fin~Feed on external parasites, disease, damaged tissue of reef fish"
        },
    })

    await prisma.species.upsert({
        where: { name: "Three-spot Dascyllus" },
        update: {},
        create: {
            name: "Three-spot Dascyllus",
            category: "Fish",
            uvcLevel: "Expert",
            imageCount: 13,
            details: "Disc shaped body~Juveniles are black with three spots ~Adults  have two spots and may appear whitish~Lagoon and seaward reefs to 55m~Juveniles share large anemones with Amphiprion spp.~Adults aggregate around coral heads or rocks"
        },
    })

    await prisma.species.upsert({
        where: { name: "Banded Cleaner Shrimp" },
        update: {},
        create: {
            name: "Banded Cleaner Shrimp",
            category: "Invertebrate",
            uvcLevel: "Indicator",
            imageCount: 13,
            details: "Distinctive red and white banding~Often seeen in pairs at cleaning stations"
        },
    })

    await prisma.species.upsert({
        where: { name: "Drupella" },
        update: {},
        create: {
            name: "Drupella",
            category: "Invertebrate",
            uvcLevel: "Indicator",
            imageCount: 13,
            details: "Drupella snails feed on live coral - frequently branching Acropora sp. and Pocillopora sp. corals.~The snail\'\'s shell is often coated with coralline algae and therefore appears to have a matt, purple finish.~Drupella have a tongue that has little teeth on it to form a sandpaper-like surface, called a radula~During feeding they scrape away the tissue from the limestone skeleton with their radula, and the scars left behind from Drupella are therefore ragged or messy with bits of tissue hanging off"
        },
    })

    await prisma.species.upsert({
        where: { name: "Hard Coral (Bleached) - HCB" },
        update: {},
        create: {
            name: "Hard Coral (Bleached) - HCB",
            category: "Benthic",
            uvcLevel: "Indicator",
            imageCount: 13,
            details: "Bleached coral is white in colour.~Corallites are still visible.~Do not mistake the white growing tips for bleached coral.~No green-tinge of algae."
        },
    })

    await prisma.species.upsert({
        where: { name: "Coral Mushroom - CMU" },
        update: {},
        create: {
            name: "Coral Mushroom - CMU",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 13,
            details: "Free living (unattached) coral.~Single polyp rather than colonial."
        },
    })

    await prisma.species.upsert({
        where: { name: "Other (Anemone) - OA" },
        update: {},
        create: {
            name: "Other (Anemone) - OA",
            category: "Benthic",
            uvcLevel: "Expert",
            imageCount: 13,
            details: "The crown of an anemone is covered in tentacles. The base, pedal disc, is usually attached to a hard substrate which is sometimes buried beneath the sand.~Anemones are related to coral. They frequently have anemone fish living in them."
        },
    })

    await prisma.species.upsert({
        where: { name: "Frogfish" },
        update: {},
        create: {
            name: "Frogfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 13,
            details: "Anthennariidae: Globular irregular shapes~Large, extremely superior mouth (to engulf prey)~Pectoral and ventral fins are webbed~Hand like appendages ~First dorsal fin is stalk like (tipped with  lure which is wriggled to attract prey)~Camouflage (look like a sponge or algae)~Strongest jaws in the marine kingdom"
        },
    })

    await prisma.species.upsert({
        where: { name: "Scorpionfish" },
        update: {},
        create: {
            name: "Scorpionfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 13,
            details: "Scorpaenidae: Venomous spines (not as deadly as stonefish)~Similar body shape (less superior mouths/smaller)~Cirri and many extensions, tassels and attachments for disguise"
        },
    })

    await prisma.species.upsert({
        where: { name: "Tuna & Mackerel" },
        update: {},
        create: {
            name: "Tuna & Mackerel",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 13,
            details: "Scombridae: Streamlined spindle shaped bodies~2 dorsal fins, forked tails, finlets, scutes~Pelagic fast open water swimmers~Worldwide fisheries target ~Voracious predators of squids/fish"
        },
    })

    await prisma.species.upsert({
        where: { name: "Wrasse" },
        update: {},
        create: {
            name: "Wrasse",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 13,
            details: "Labridae: Diverse group (size /form)~Elongated, smaller and less broad than parrotfish~Swim with pectoral fins and compress caudal fin~Large noticeable scales~Often very colourful and can change sex~Always on the move, very busy fish"
        },
    })

    await prisma.species.upsert({
        where: { name: "Coscinaraea" },
        update: {},
        create: {
            name: "Coscinaraea",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 13,
            details: "Colonies are encrusting to laminar or massive and are rarely larger than 30 cm in diameter. Calices are 2 to 7 mm in diameter.~Corallites are ceroid or meandroid in short valleys.~Septa have serrated to heavily granulated margins and clearly visible. Large numbers of septa meet at the calice.~Walls may be flattened on top."
        },
    })

    await prisma.species.upsert({
        where: { name: "Montastrea" },
        update: {},
        create: {
            name: "Montastrea",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 13,
            details: "Thick encrusting to flat or dome shaped massive structures.~Corallites range from 3mm - 15mm and are very clearly plocoid.~Septa are very neatly arranged and long and short alternate in a distinctive pattern in most species.~Corallite walls are very clearly defined.~Small paliform lobes are usually visible.~Septa are minutely toothed, often giving them a serrated edge visible on close inspection underwater.~New corallites are usually formed by extratentacular budding, although some species display both forms of budding."
        },
    })

    await prisma.species.upsert({
        where: { name: "Oulophyllia" },
        update: {},
        create: {
            name: "Oulophyllia",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 13,
            details: "Colonies are massive with meandroid valleys or sub-meandroid.~Colonies have broad, short, V-shaped valleys (up to 20mm from mid-wall to mid-wall).~Septa have a slightly toothed appearance (may appear \'\'bumpy\'\' underwater).~The tops of the walls tend to be sharp.~May have paliform lobes."
        },
    })

    await prisma.species.upsert({
        where: { name: "Pocillopora" },
        update: {},
        create: {
            name: "Pocillopora",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 13,
            details: "Submassive to branching. Morphology is highly variable due to exposure of wave action. Ranging from fine, widely spaced branches to small compact clumps. The latter is more prominent here.~Corallites immersed.~Wart-like structures (verrucae).~The neatly arranged septa form a darker or different colored ring around the corallites."
        },
    })

    await prisma.species.upsert({
        where: { name: "Blackspotted Sweetlips" },
        update: {},
        create: {
            name: "Blackspotted Sweetlips",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 14,
            details: "Can grow to 45cm~Feeds nocturnally on benthic invertebrate~Low set mouths~Thickened lips, especially the upper lip~Continuous dorsal fins~Foreheads slope more steeply than groupers~Relatively shy~Sweetlips are common food fish, and targeted by the artisanal fishery"
        },
    })

    await prisma.species.upsert({
        where: { name: "Orangestriped Triggerfish" },
        update: {},
        create: {
            name: "Orangestriped Triggerfish",
            category: "Fish",
            uvcLevel: "Indicator",
            imageCount: 14,
            details: "Can grow to 30cm~Can be found from 2-50m~Related to high abundances of the sea urchin~Two-part dorsal fins~Eyes set high on the head~Orange stripes on the body~Mature females lose most of the orange stripes on the snout"
        },
    })

    await prisma.species.upsert({
        where: { name: "Giant Clam" },
        update: {},
        create: {
            name: "Giant Clam",
            category: "Invertebrate",
            uvcLevel: "Indicator",
            imageCount: 14,
            details: "Very large, heavy shell with curved aperture~Clam will retreat into its shell when wafted"
        },
    })

    await prisma.species.upsert({
        where: { name: "Short Spine Urchin" },
        update: {},
        create: {
            name: "Short Spine Urchin",
            category: "Invertebrate",
            uvcLevel: "Indicator",
            imageCount: 14,
            details: "Diadema are typically present in large numbers on reefs and are particularly important in controlling algae growth."
        },
    })

    await prisma.species.upsert({
        where: { name: "Peacock Mantis Shrimp" },
        update: {},
        create: {
            name: "Peacock Mantis Shrimp",
            category: "Invertebrate",
            uvcLevel: "Expert",
            imageCount: 14,
            details: "Dark greyish-green with reddish-orange pereopods and uropods~The claws have an inflate terminal segment, an adaptation to crush prey with a strong blow~Fast moving and common in eulittoral rock and coral areas~Feeds on shrimps, fishes, and worms~Burrow dweller, with the opening of these burrows occurring on sand bottoms"
        },
    })

    await prisma.species.upsert({
        where: { name: "Bigeye" },
        update: {},
        create: {
            name: "Bigeye",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 14,
            details: "Priacanthus: Nocturnal zooplankton feeders~Feed on large crabs, shrimps, small fishes~Deep, compressed bodies~Projecting lower jaws and large ventral fins~Shelter near reef by day ~Patterns can change rapidly (turn on blotched pattern by night)"
        },
    })

    await prisma.species.upsert({
        where: { name: "Damselfish" },
        update: {},
        create: {
            name: "Damselfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 14,
            details: "Pomacentridae: Small oval bodies / forked, lunate tails~Extremely energetic, common and territorial (aggressive)~Hides in reef or in schools~Anemonefish, chromis, sergeant, dascyllus~Planktivores or herbivores~Grazing herbivores"
        },
    })

    await prisma.species.upsert({
        where: { name: "Shark" },
        update: {},
        create: {
            name: "Shark",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 14,
            details: "Many different genera: requiem, nurse, bamboo, hammerheads~Sleek and powerful~Pointed snouts, 2 separate dorsal fins, forked tails~Top predator, sadly over-fished here~Only a few species are aggressive and most avoid any contact with humans at all"
        },
    })

    await prisma.species.upsert({
        where: { name: "Surgeonfish" },
        update: {},
        create: {
            name: "Surgeonfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 14,
            details: "Acanthuridae: Round, laterally compressed~Continuous dorsal/anal fin~Small pointed mouths~Spine at base of caudal tail (used for territorial disputes/protection)~Unicornfish, tangs, bristletooths~Loose aggregations, feed on algae, detritus, plankton "
        },
    })

    await prisma.species.upsert({
        where: { name: "Acanthastrea" },
        update: {},
        create: {
            name: "Acanthastrea",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 14,
            details: "Massive to encrusting with ceroid or subplocoid corallites.~The most common distinguishing feature is the tall septal teeth, giving the walls a sharp, bumpy appearance.~Thick fleshy walls.~Corallite shapes range from circular to large and elongated, often having different coloured walls and calices.~Tentacles are only extended at night."
        },
    })

    await prisma.species.upsert({
        where: { name: "Goniastrea" },
        update: {},
        create: {
            name: "Goniastrea",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 14,
            details: "Massive or encrusting forming thick plates.~Corallites are cerioid to meandroid, with cerioid corallites generally quite small, 3.5mm - 10mm.~Commonly called honeycomb corals due to the angular shape of the colonies with cerioid corallites.~Well developed paliform crown visible underwater (Favities doesn\'\'t have this).~Fine, neat septa."
        },
    })

    await prisma.species.upsert({
        where: { name: "Hydnophora" },
        update: {},
        create: {
            name: "Hydnophora",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 14,
            details: "Colonies are massive, branching or encrusting to submassive.~Colonies are cerioid and almost uniquely, common walls intersect, thicken and form prominent conical mounds called monticules or hydnophores.~Tentacles will be extended from around the base of the monticules and the polyps in the pseudo valleys."
        },
    })

    await prisma.species.upsert({
        where: { name: "Leptoseris" },
        update: {},
        create: {
            name: "Leptoseris",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 14,
            details: "Colonies are laminar (unifacial) or encrusting.~Corallites are small shallow depressions.~Interconnected by fine septo-costae."
        },
    })

    await prisma.species.upsert({
        where: { name: "Mycedium" },
        update: {},
        create: {
            name: "Mycedium",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 14,
            details: "Colonies are encrusting to laminar.~Lines formed by the costae radiating outward from the centre are distinct. ~Corallites are usually large (up to 15mm in diameter).~Corallites form a nose like shape which faces towards the exterior of the colony."
        },
    })

    await prisma.species.upsert({
        where: { name: "Platygyra" },
        update: {},
        create: {
            name: "Platygyra",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 14,
            details: "Colonies are massive, ranging from flat to large and dome-shaped.  ~Most species are meandroid with valleys of varying lengths.~Famously known as the large massive domes of \'\'brain coral\'\' due to the convoluted valleys of mature colonies.~Paliform lobes are usually not developed.~Tentacles are only extended at night."
        },
    })

    await prisma.species.upsert({
        where: { name: "Porites" },
        update: {},
        create: {
            name: "Porites",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 14,
            details: "Porites shows enormous variety within the genus, displaying encrusting, laminar-branching, simple branching, submassive and massive growth forms.~Corallites are extremely small (1-1.5mm) and cerioid.~Corallites are small, immersed and filled with septa and other structures.~At a distance, massive colonies can take on a smooth, velvety appearance."
        },
    })

    await prisma.species.upsert({
        where: { name: "Psammocora" },
        update: {},
        create: {
            name: "Psammocora",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 14,
            details: "Colonies are massive, submassive, laminar, or encrusting.~Calices are very small 1-2 mm in diameter.~Corallites are immersed, small and shallow, sometimes forming a valley.~Calice forms a distinctive black pit.~Septo-costae have granulated/serrated margins, which resolves any possible confusion with Pavona which have smooth (or at least only minutely ridged) septo-costae."
        },
    })

    await prisma.species.upsert({
        where: { name: "Algae - AG" },
        update: {},
        create: {
            name: "Algae - AG",
            category: "Benthic",
            uvcLevel: "Indicator",
            imageCount: 15,
            details: "Algae can be green, red or brown in colour but for indicator survey you do not need to differentiate.~Turf algae is a fast growing algae frequently covering rock. For the survey you only record AG when your tape comes across turf algae if the algae is more than a few centimeters long.~Halimeda is a green algae that excretes a calcium carbonate \'\'skeleton\'\', which makes it difficult to digest by many herbivores and so serves as protection from many algae-eating organisms."
        },
    })

    await prisma.species.upsert({
        where: { name: "Ascidian - AS" },
        update: {},
        create: {
            name: "Ascidian - AS",
            category: "Benthic",
            uvcLevel: "Indicator",
            imageCount: 15,
            details: "Solitary, social, and colonial ascidians exist. Solitary ascidians are often easier to recognize as they look like little bells. These solitary ascidians can occur in groups but their tissue is not joined (similar to the zoanthids).~Look for two holes: an inhalant and exhalant aperture."
        },
    })

    await prisma.species.upsert({
        where: { name: "Hard Coral - HC" },
        update: {},
        create: {
            name: "Hard Coral - HC",
            category: "Benthic",
            uvcLevel: "Indicator",
            imageCount: 15,
            details: "Calcium carbonate skeleton that will not move when wafted.~Visible corallites (the skeleton deposited by each polyp). Polyps are mostly out at night, therefore only corallites are visible during the day.~A sandpaper-like or knobby surface (all the corallites of the colony).~Polyps have 6 or multiple of 6 tentacles (EXCEPT: blue coral, and organ pipe coral which have 8, and fire coral which is \'\'fuzzy\'\' looking).~Different morphologies exist - encrusting hard corals are sometimes overlooked.~Hard corals that feed during the day exist. Don\'\'t be thrown off by those that does and can look like soft corals at first glance."
        },
    })

    await prisma.species.upsert({
        where: { name: "Other - OT" },
        update: {},
        create: {
            name: "Other - OT",
            category: "Benthic",
            uvcLevel: "Indicator",
            imageCount: 15,
            details: "Hydroids are related to coral. They look like feathers or ferns and are often called stinging hydroids because they sting! DON\'\'T TOUCH!~Gorgonians are actually soft corals but don\'\'t come under the SC category. They are common in areas of high current where they position themselves against the current and filter out food from the water that travels across them.~Anemones are also related to coral. They frequently have anemone fish living in them, however, not always.~Any types of clams are counted as other, including the giant clam, boring clams or any other types. They are sessile so although they are invertebrates they are counted in the benthic section . The shell of the clam is counted as rock as it provides a surface for other organisms to grow on.~Also known as sea mats and lace corals, Bryozoans are unrelated to true corals. Colonies of independent units make up lace or sheet-like structures.~Seagrasses are not counted within the algae category as they are flowering plants rather than algae. The distribution is also different to algae as seagrass is usually found in meadows around reef systems but not on the reef itself. In this bay you can find eight species of seagrasses.~Tubastrea is a type of hard coral however it is not hermatipic as it does not have the mutualistic relationship with zooxanthellae. This means that Tubastrea can grow at depth as it does not require light.~Tubeworms are worm-like molluscs grow inside a shell tube, up to 15cm long, firmly cemented to live coral, dead coral or rock. They will retract if you come close."
        },
    })

    await prisma.species.upsert({
        where: { name: "Soft Coral - SC" },
        update: {},
        create: {
            name: "Soft Coral - SC",
            category: "Benthic",
            uvcLevel: "Indicator",
            imageCount: 15,
            details: "Soft corals do not build reefs as their skeleton is made from soft tissue that is supported internally by a matrix of individual calcareous elements.~Soft corals can be differentiated from hard corals by wafting the water column; soft corals\'\' superstructure will move. Many soft corals will also have their polyps out during the daytime and you can count their 8 tentacles (Octocorals).~Polyps always have 8 tentacles, which are hairy-looking.~Polyps are often day feeders.~Smooth texture with small, regular holes if polyps are retracted.~Surface of some soft corals can appear leathery or rubbery."
        },
    })

    await prisma.species.upsert({
        where: { name: "Sponge - SP" },
        update: {},
        create: {
            name: "Sponge - SP",
            category: "Benthic",
            uvcLevel: "Indicator",
            imageCount: 15,
            details: "Surface often matt or dull.~Simple organisms with no set shape. Think IRREGULAR!~Can assume a variety of shape and sizes from small encrusting animals to large tube, barrel foliose forms.~To tell these from hard corals, waft them, and they will sway. ~To tell them from soft corals, look closely at the surface for irregular texture, covered in different size holes. These hole will NOT close up if you waft your hand over them.~To tell them from ascidians perform the waft test again. The holes will close if it\'\'s an ascidian. Ascidians also often tend to have a more shiny colorful surface."
        },
    })

    await prisma.species.upsert({
        where: { name: "Zooanthids & Corallimorphs - ZC" },
        update: {},
        create: {
            name: "Zooanthids & Corallimorphs - ZC",
            category: "Benthic",
            uvcLevel: "Indicator",
            imageCount: 15,
            details: "Zoanthids are a small group of predominantly colonial, anemone-like forms (without a pedal disk) that are common on tropical reefs. They can potentially cover large areas and therefore be a competitor for space with reef-forming corals.~Corallimorphs are another small group closely related to the hard corals but lack a calcareous skeleton. Corallimorph tentacles are also generally in radial rows, more like an anemone."
        },
    })

    await prisma.species.upsert({
        where: { name: "Angelfish" },
        update: {},
        create: {
            name: "Angelfish",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 15,
            details: "Pomacanthidae: Round, laterally compressed, broader/larger~Spine on their gill operculum ~Shelter: rocks, boulders and coral crevices~Very colourful, huge juvenile variations~Diet: algae, sponge, benthic invertebrates or some feed on pelagic zooplankton"
        },
    })

    await prisma.species.upsert({
        where: { name: "Blenny" },
        update: {},
        create: {
            name: "Blenny",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 15,
            details: "Bottom dwellers (similar to gobies)~Small elongate body~One dorsal fin~Blunt head, long anal fin (cirri above eyes)~Blennies perch with curved bodies (gobies straight)~Highly adaptable - found in most marine environments"
        },
    })

    await prisma.species.upsert({
        where: { name: "Eel" },
        update: {},
        create: {
            name: "Eel",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 15,
            details: "Elongated snake like bodies~Moray eels - no pectoral/ventral fins, dorsal + anal fins join~Aggressive, head showing out of crevices by day~Snake eels:  thinner, hunt by day, pointed snouts~Conger eels: similar fins to morays but they have pectoral and dorsal fins~Garden eels: hide in burrows in the sand poke heads out of the holes, very shy"
        },
    })

    await prisma.species.upsert({
        where: { name: "Goby" },
        update: {},
        create: {
            name: "Goby",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 15,
            details: "Gobiidae: Largest family of marine fish with over 1600 species ~Mainly small bottom dwelling carnivores~2 distinct dorsal fins which you can \'gobe-tween\'~Mutualistic relationship with burrowing shrimp"
        },
    })

    await prisma.species.upsert({
        where: { name: "Spiny lobster" },
        update: {},
        create: {
            name: "Spiny lobster",
            category: "FishFamily",
            uvcLevel: "NA",
            imageCount: 15,
            details: "Nocturnal scavengers, will hide in cracks during the day."
        },
    })

    await prisma.species.upsert({
        where: { name: "Acropora" },
        update: {},
        create: {
            name: "Acropora",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 15,
            details: "This genus displays all growth forms except massive~Colonies are most often branching or digitate~Polyps are usually extended at night~Cup-like corallites~One larger corallite cup at the growing point (axial)"
        },
    })

    await prisma.species.upsert({
        where: { name: "Cyphastrea" },
        update: {},
        create: {
            name: "Cyphastrea",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 15,
            details: "Massive or encrusting.~The most common species, Cyphastrea serailia, is often sub-massive. ~Corallites are well spaced, plocoid, sometimes slightly conical and have a very small calice, <3mm.~Septa are well developed and form a characteristic star pattern visible underwater.~Coenosteum heavily granulated.~Tentacles are only extended at night."
        },
    })

    await prisma.species.upsert({
        where: { name: "Echinopora" },
        update: {},
        create: {
            name: "Echinopora",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 15,
            details: "Wide variety of growth forms from encrusting through foliaceous and branching.~Corallite are plocoid and calices average 10mm with walls often the same size.~Coenosteum, septa and costae are toothed, giving colonies a very granulated appearance.~Paliform lobes can be well developed in some species.~Corallites may be oriented at odd angles, giving the colony an untidy appearance.~Tentacles are only extended at night.~Most similar to Cyphastrea, which is differentiated by smaller corallites, thinner walls, massive growth form, neater corallite orientation."
        },
    })

    await prisma.species.upsert({
        where: { name: "Pavona" },
        update: {},
        create: {
            name: "Pavona",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 15,
            details: "Colonies are massive, submassive, encrusting, laminar, or frond-like (bushes of flattened irregular branches).~Corallites have poorly defined walls and are small shallow depressions.~Prominent septo-costae that extend into distinctive patterns connecting the corallites."
        },
    })

    await prisma.species.upsert({
        where: { name: "Favites" },
        update: {},
        create: {
            name: "Favites",
            category: "Coral",
            uvcLevel: "NA",
            imageCount: 17,
            details: "Massive - flat or dome shaped.~Corallites are cerioid, occasionally subplocoid.~Paliform lobes are rarely developed.~Tentacles are only extended at night.~Unequal intratentacular budding."
        },
    })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
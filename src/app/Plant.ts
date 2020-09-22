export interface Plant {
    name: string;
    imageUrl?: string;
    description?: string;
    longDescription?: string;
    water?: number;
    placement?: string;
    cost?: number;
}

export const PLANTS: Plant[] = [
    {
        name: 'Aloe',
        imageUrl: 'https://i.imgur.com/B41Zgii.jpeg',
        description: 'A desert plant useful for healing sunburns',
        longDescription: 'Most Aloe species have a rosette of large, thick, fleshy leaves. Aloe flowers are tubular, frequently yellow, orange, pink, or red, and are borne, densely clustered and pendant, at the apex of simple or branched, leafless stems. Many species of Aloe appear to be stemless, with the rosette growing directly at ground level; other varieties may have a branched or unbranched stem from which the fleshy leaves spring. The plants can also be made into types of special soaps or used in other skin care products (see natural skin care). Numerous cultivars with mixed or uncertain parentage are grown. Of these, Aloe ‘Lizard Lips’ has gained the Royal Horticultural Society’s Award of Garden Merit. Historical use of various aloe species is well documented. Documentation of the clinical effectiveness is available, although relatively limited. Of the 500+ species, only a few were used traditionally as herbal medicines, Aloe vera again being the most commonly used species. Also included are A. perryi and A. ferox. The Ancient Greeks and Romans used Aloe vera to treat wounds. In the Middle Ages, the yellowish liquid found inside the leaves was favored as a purgative. Unprocessed aloe that contains aloin is generally used as a laxative, whereas processed juice does not usually contain significant aloin. Some species, particularly Aloe vera, are used in alternative medicine and first aid. Both the translucent inner pulp and the resinous yellow aloin from wounding the aloe plant are used externally for skin discomforts. As an herbal medicine, Aloe vera juice is commonly used internally for digestive discomfort. According to Cancer Research UK, a potentially deadly product called T-UP is made of concentrated aloe, and promoted as a cancer cure. They say "there is currently no evidence that aloe products can help to prevent or treat cancer in humans".',
        water: 0,
        placement: 'both',
        cost: 3,
    },
    {
        name: 'Basil',
        imageUrl: 'https://i.imgur.com/GFWUprU.jpg',
        description: 'A culinary herb useful for cooking and baking',
        longDescription: `Basil is native to tropical regions from central Africa to Southeast Asia. It is a tender plant, and is used in cuisines worldwide. Depending on the species and cultivar, the leaves may taste somewhat like anise, with a strong, pungent, often sweet smell. There are many varieties of basil, as well as several related species or hybrids also called basil. The type used commonly as a flavor is typically called sweet basil (or Genovese basil), as opposed to Thai basil (O. basilicum var. thyrsiflora), lemon basil (O. × citriodorum), and holy basil (Ocimum tenuiflorum). While most common varieties of basil are treated as annuals, some are perennial in warm, tropical climates, including holy basil and a cultivar known as "African blue basil". Basil is an annual, or sometimes perennial, herb used for its leaves. Depending on the variety, plants can reach between 30 cm (0.98 ft) and 150 cm (4.9 ft). Its leaves are richly green and ovate, but otherwise come in a wide variety of sizes and shapes depending on cultivar. Leaf sizes range from 3 cm (1.2 in) to 11 cm (4.3 in) long, and between 1 cm (0.39 in) and 6 cm (2.4 in) wide. Basil grows a thick, central taproot. Its flowers are small and white, and grow from a central inflorescence that emerges from the central stem atop the plant. The various basils have such different scents because the herb has a number of different essential oils in different proportions for various cultivars. The essential oil from European basil contains high concentrations of linalool and methyl chavicol (estragole), in a ratio of about 3:1. Other constituents include: 1,8-cineole, eugenol, and myrcene, among others. The clove scent of sweet basil is derived from eugenol. The aroma profile of basil includes 1,8-cineole and methyl eugenol.`,
        water: 1,
        placement: 'indoor',
        cost: 3,
    },
    {
        name: 'Rose',
        imageUrl: 'https://i.imgur.com/7TBW7hi.jpg',
        description: 'By other name would not sound as sweet',
        longDescription: 'A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars. They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles. Flowers vary in size and shape and are usually large and showy, in colours ranging from white through yellows and reds. Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa. Species, cultivars and hybrids are all widely grown for their beauty and often are fragrant. Roses have acquired cultural significance in many societies. Rose plants range in size from compact, miniature roses, to climbers that can reach seven meters in height. Different species hybridize easily, and this has been used in the development of the wide range of garden roses. The leaves are borne alternately on the stem. In most species they are 5 to 15 centimetres (2.0 to 5.9 in) long, pinnate, with (3–) 5–9 (–13) leaflets and basal stipules; the leaflets usually have a serrated margin, and often a few small prickles on the underside of the stem. Most roses are deciduous but a few (particularly from Southeast Asia) are evergreen or nearly so. The flowers of most species have five petals, with the exception of Rosa sericea, which usually has only four. Each petal is divided into two distinct lobes and is usually white or pink, though in a few species yellow or red. Beneath the petals are five sepals (or in the case of some Rosa sericea, four). These may be long enough to be visible when viewed from above and appear as green points alternating with the rounded petals. There are multiple superior ovaries that develop into achenes. Roses are insect-pollinated in nature.',
        water: 2,
        placement: 'outdoor',
        cost: 3
    }
];

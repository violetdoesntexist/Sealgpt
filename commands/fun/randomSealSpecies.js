const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");

const randomSpeciesImages = [
    "https://cdn.hackclub.com/01a14eb1-fe16-7e8e-bcf4-6b5965e37c4d/hooded-seal_JustinHofman_iNaturalist_featured.jpg",
    "https://cdn.hackclub.com/01a14eb6-af9b-7a86-b617-16da9fa8789f/Bearded_Seal_(Erignathus_barbatus),_Baltasound_marina_-_geograph.org.uk_-_2323394.jpg",
    "https://cdn.hackclub.com/01a14ec0-55da-75b9-b71e-b5f6aa844446/Grey_Seal_2_(Halichoerus_grypus).jpg",
    "https://cdn.hackclub.com/01a14f0c-8fc7-7983-81e1-152e1c055e13/750x500-adult-ribbon-seal-closeup-lindsay-afsc.jpg",
    "https://cdn.hackclub.com/01a14fad-1b19-79ee-a941-92c841a8719f/images.jpg",
    "https://cdn.hackclub.com/01a14fe6-2e00-770a-abfc-7da3befba485/harp-seal-pup.jpg",
    "https://cdn.hackclub.com/01a14fed-3098-71d4-88cc-2bfb4b947e32/resized-fu_disko_050812-075-1.jpg",
    "https://cdn.hackclub.com/01a14ff1-1a43-7fb7-ac5d-28f5b9c40ebb/Phoca_largha_Bering_Sea_3.jpg",
    "https://cdn.hackclub.com/01a14ff9-4ff1-7a23-9904-806bec02caee/baikalseal.jpg",
    "https://cdn.hackclub.com/01a14ffd-1ee9-746f-a76c-f7f34112e29c/127071-seal-874390.jpg",
    "https://cdn.hackclub.com/01a15002-e3b1-713e-aa38-d576244cf4e6/Leopard-Seal_Baylor-University.jpg",
    "https://cdn.hackclub.com/01a15009-079f-7161-9dd4-f8e3b439e1b5/Screenshot-2023-11-09-at-22.34.22-758x650.png",
    "https://cdn.hackclub.com/01a15011-3abf-7fd1-9a8e-e0d86716efb3/Crabeater-seal-and-pup-1-775x650.jpg",
    "https://cdn.hackclub.com/01a15017-5592-750e-9377-987d975064f3/2020-11_Kerguelen_Islands_-_Southern_elephant_seal_30.jpg",
    "https://cdn.hackclub.com/01a1501d-cc75-7c4f-acac-2ead10324ef7/norelephantseal.png",
    "https://cdn.hackclub.com/01a15022-3147-70d4-a872-ca3d73106965/Monachus_monachus_DSC_0274.jpg",
    "https://cdn.hackclub.com/01a15028-4256-7531-b990-f088c42af6ab/605295792_1398493124976201_6898648744924172286_n-768x512.jpg",
    "https://cdn.hackclub.com/01a1502d-ae7a-797e-8107-814b8f1306cb/hawaiian_monk_seal.jpg"
    

];

const randomSpeciesNames = [
    "Hooded seals(Cystophora cristata)",
    "Bearded Seal(Erignathus barbatus)",
    "Grey Seal(Halichoerus grypus)",
    "Ribbon Seal(Phoca fasciata)",
    "Caspian Seal(Phoca caspica)",
    "Harp Seal(Phoca groenlandica)",
    "Ringed Seal(Phoca hispida)",
    "Spotted Seal(Phoca largha)",
    "Baikal Seal(Phoca sibirica)",
    "Harbour Seal(Phoca vitulina)",
    "Leopard Seal(Hydrurga leptonyx)",
    "Weddell Seal(Leptonychotes weddellii)",
    "Crabeater Seal(Lobodon carcinophagus)",
    "Southern Elephant Seal(Mirounga leonina)",
    "Northern Elephant Seal(Mirounga angustirostris)",
    "Mediterranean Monk Seal(Monachus monachus)",
    "Ross Seal(Ommatophoca rossii)",
    "Hawaiian Monk Seal(Monachus schauinslandi)"


];

const randomSpeciesFacts = [
    "Adult male hooded seals can push a bright red nasal membrane out of their left nostril, inflating it into a soccer-ball-sized baloon to attract mates and scare off rivals!",
    "During the breeding season, male bearded seals sing complex underwater calls that can be heard up to 20 kilometers away!",
    "While other seals have rocounded, cat-like or dog-like faces, adult male grey seals develop a prominent, bulgy Roman nose. This creates a flat, horse-like profile unique to their species!",
    "Ribbon seals move across the ice like snakes by gripping the surface with one front flipper and swinging their head and hips from side to side. This unique slithering motion is completely different from other seals, which typically hump forward like caterpillars!",
    "Caspian seals are among the smallest earless seals in the world, with adults reaching only about 1.4 meters in length and weighing between 50 and 86 kg!",
    "Unlike other seal species that give birth in small, scattered groups or on land, harp seals gather simultaneously on shifting pack ice in colonies of hundreds of thousands to give birth and nurse their pups!",
    "Ringed Seals have claws more than 2.5 centimetres thick that they use to claw out breathing holes in the ice sheets. They have been known to dig these holes through ice as thick as 2 metres!",
    "Spotted seals are annually monogamous, forming strict three-member triad family units on the ice to protect the pup until weaning, after which the adults mate and part ways for the year!",
    "Unlike other seals that split their time between oceans and freshwater, the Baikal seal lives entirely in the deep waters and inflowing rivers of Lake Baikal!",
    "Unlike other social seals that huddle tightly together, harbor seals are fiercely anti-touch and will aggressively guard a three-foot personal bubble on land using vocal growls and warning flipper waves!",
    "They are the only true seals that regularly hunt warm-blooded prey, including penguins and the pups of other seal species(not the funnest fun fact)",
    "Weddell seals use a form of sonar and hyper-sensitive whiskers to navigate beneath solid Antarctic ice. By emitting unique acoustic clicks and sensing water vibrations with their whiskers, they create a precise mental map to locate critical breathing holes in pitch-black winter darkness!",
    "Crabeater seals are the only seals on Earth that practice toothed filter feeding, using highly intricate, multi-cusped interlocking teeth as a built-in sieve to strain tiny krill directly from the seawater!",
    "Southern elephant seal Males can reach up to 6 meters in length and weigh between 2,200 and 4,000 kg , making them the largest terrestrial carnivores on Earth (dwarfing even polar bears)!",
    "The southern elephant seal is much larger than the northern elephant seal, with southern males weighing up to 4,000+ kg compared to the northern male's 2,300 kg, making them the largest marine mammals outside of whales. The females of both species are similar in size, weighing between 400 and 800 kg!",
    "The Mediterranean monk seal (Monachus monachus) is one of the rarest marine mammals and pinnipeds in the world, with fewer than 700 to 1,000 individuals remaining(not a very fun one sorry)",
    " They have the shortest fur and shortest whiskers of any true (earless) seal species!",
    "The hawaiian monk seals Hawaiian name, ʻīlioholoikauaua, literally translates to dog running in rough water!"


];


module.exports = {
    data: new SlashCommandBuilder().setName('randomSpecies').setDescription('gives a fun fact and image of a random seal species.'),
    async execute(interaction) {
    const randomSpeciesImage = randomSpeciesImages[Math.floor(Math.random() * randomSpeciesImages.length)];
    let indexSpecies = randomSpeciesImages.indexOf(randomSpeciesImage);
    let randomSpeciesName = randomSpeciesNames[indexSpecies]
    let randomSpeciesFact = randomSpeciesFacts[indexSpecies]
    const embed = new EmbedBuilder().setImage(randomSpeciesImage).setTitle(randomSpeciesName).setDescription(randomSpeciesFact).setColor('Blurple').setFooter({ text: `Species Nr. ${indexSpecies}` });
    await interaction.reply({ embeds: [embed] })
    console.log("species fact triggered")
},
};
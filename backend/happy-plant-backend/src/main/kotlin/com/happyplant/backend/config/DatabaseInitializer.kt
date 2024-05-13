package com.happyplant.backend.config

import com.happyplant.backend.datatransfer.CoordinatesDtoRequest
import com.happyplant.backend.datatransfer.needs.NeedsDtoRequest
import com.happyplant.backend.datatransfer.plant.PlantDtoRequest
import com.happyplant.backend.model.*
import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.model.types.LightingType
import com.happyplant.backend.repository.PlantRepository
import com.happyplant.backend.repository.RoomRepository
import com.happyplant.backend.repository.SpeciesRepository
import com.happyplant.backend.repository.UserRepository
import com.happyplant.backend.service.PlantService
import com.happyplant.backend.service.RoomService
import com.happyplant.backend.service.SpeciesService
import jakarta.annotation.PostConstruct
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component
import java.util.*


@Component
class DatabaseInitializer {

    @Autowired
    private lateinit var roomRepository: RoomRepository

    @Autowired
    private lateinit var speciesRepository: SpeciesRepository

    @Autowired
    private lateinit var roomService: RoomService

    @Autowired
    private lateinit var plantRepository: PlantRepository

    @Autowired
    private lateinit var userRepository: UserRepository

    private var seederEnabled: Boolean = true

    @PostConstruct
    fun initializeDatabase() {
        if(!seederEnabled) return

        println("Seeding Database...")

        // Snake Plant
        speciesRepository.save(Species(
            name = "Snake Plant",
            latinName = "Sansevieria",
            picturePath = "snake_plant.jpg",
            family = "Asparagaceae",
            description = "Also known as Mother-in-Law's Tongue, snake plants are known for their durability and air purifying abilities.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 14,
                    AssignmentType.CUTTING to 365,
                    AssignmentType.FERTILIZING to 30,
                ),
                lightingType = LightingType.FULL_SHADE
            )
        ))

// Spider Plant
        speciesRepository.save(Species(
            name = "Spider Plant",
            latinName = "Chlorophytum comosum",
            picturePath = "spider_plant.jpg",
            family = "Asparagaceae",
            description = "Spider plants are known for their long, arching leaves adorned with white stripes. They are easy to grow and propagate.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 90,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Peace Lily
        speciesRepository.save(Species(
            name = "Peace Lily",
            latinName = "Spathiphyllum",
            picturePath = "peace_lily.jpg",
            family = "Araceae",
            description = "Peace lilies are popular for their elegant white flowers and dark green leaves. They thrive in low light conditions.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 180,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.FULL_SHADE
            )
        ))

// Aloe Vera
        speciesRepository.save(Species(
            name = "Aloe Vera",
            latinName = "Aloe vera",
            picturePath = "aloe_vera.jpg",
            family = "Asphodelaceae",
            description = "Aloe vera is a succulent plant known for its medicinal properties. It requires bright, indirect light and infrequent watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 21,
                    AssignmentType.CUTTING to 365,
                    AssignmentType.FERTILIZING to 60,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.FULL_SUN
            )
        ))

// Fiddle Leaf Fig
        speciesRepository.save(Species(
            name = "Fiddle Leaf Fig",
            latinName = "Ficus lyrata",
            picturePath = "fiddle_leaf_fig.jpg",
            family = "Moraceae",
            description = "Fiddle leaf figs are prized for their large, glossy leaves. They prefer bright, indirect light and regular watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 365,
                    AssignmentType.FERTILIZING to 30,
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// ZZ Plant
        speciesRepository.save(Species(
            name = "ZZ Plant",
            latinName = "Zamioculcas zamiifolia",
            picturePath = "zz_plant.jpg",
            family = "Araceae",
            description = "ZZ plants are known for their glossy, dark green leaves. They are drought-tolerant and can thrive in low light conditions.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 21,
                    AssignmentType.FERTILIZING to 60
                ),
                lightingType = LightingType.FULL_SHADE
            )
        ))

// Pothos
        speciesRepository.save(Species(
            name = "Pothos",
            latinName = "Epipremnum aureum",
            picturePath = "pothos.jpg",
            family = "Araceae",
            description = "Pothos plants are popular for their trailing vines and heart-shaped leaves. They are easy to care for and can thrive in low light.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 90,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Philodendron
        speciesRepository.save(Species(
            name = "Philodendron",
            latinName = "Philodendron",
            picturePath = "philodendron.jpg",
            family = "Araceae",
            description = "Philodendrons are versatile houseplants with various leaf shapes and sizes. They prefer indirect light and moderate watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 180,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Chinese Money Plant
        speciesRepository.save(Species(
            name = "Chinese Money Plant",
            latinName = "Pilea peperomioides",
            picturePath = "chinese_money_plant.jpg",
            family = "Urticaceae",
            description = "Chinese money plants have round, pancake-shaped leaves on long stems. They prefer bright, indirect light and regular watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 180,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Rubber Plant
        speciesRepository.save(Species(
            name = "Rubber Plant",
            latinName = "Ficus elastica",
            picturePath = "rubber_plant.jpg",
            family = "Moraceae",
            description = "Rubber plants have large, glossy leaves that add a tropical touch to indoor spaces. They prefer bright, indirect light and regular watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 14,
                    AssignmentType.FERTILIZING to 30,
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Devil's Ivy
        speciesRepository.save(Species(
            name = "Devil's Ivy",
            latinName = "Epipremnum aureum",
            picturePath = "devils_ivy.jpg",
            family = "Araceae",
            description = "Devil's ivy, also known as golden pothos, is a popular trailing houseplant with heart-shaped leaves. It thrives in low to moderate light.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 90,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Monstera Deliciosa
        speciesRepository.save(Species(
            name = "Monstera Deliciosa",
            latinName = "Monstera deliciosa",
            picturePath = "monstera_deliciosa.jpg",
            family = "Araceae",
            description = "Monstera deliciosa, also known as the Swiss cheese plant, is famous for its fenestrated leaves. It prefers bright, indirect light and moderate watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 365,
                    AssignmentType.FERTILIZING to 30,
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Spiderwort
        speciesRepository.save(Species(
            name = "Spiderwort",
            latinName = "Tradescantia",
            picturePath = "spiderwort.jpg",
            family = "Commelinaceae",
            description = "Spiderworts are easy-to-grow plants with long, strappy leaves and delicate flowers. They thrive in bright, indirect light and regular watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 90,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Lucky Bamboo
        speciesRepository.save(Species(
            name = "Lucky Bamboo",
            latinName = "Dracaena sanderiana",
            picturePath = "lucky_bamboo.jpg",
            family = "Asparagaceae",
            description = "Lucky bamboo is a popular indoor plant with straight stems and lush foliage. It grows well in low light conditions and requires minimal care.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 365,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.FULL_SHADE
            )
        ))

// Jade Plant
        speciesRepository.save(Species(
            name = "Jade Plant",
            latinName = "Crassula ovata",
            picturePath = "jade_plant.jpg",
            family = "Crassulaceae",
            description = "Jade plants are succulent houseplants with thick, fleshy leaves. They prefer bright, indirect light and infrequent watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 14,
                    AssignmentType.CUTTING to 365,
                    AssignmentType.FERTILIZING to 30,
                ),
                lightingType = LightingType.SUN
            )
        ))

// Parlor Palm
        speciesRepository.save(Species(
            name = "Parlor Palm",
            latinName = "Chamaedorea elegans",
            picturePath = "parlor_palm.jpg",
            family = "Arecaceae",
            description = "Parlor palms are compact palm trees with graceful, arching fronds. They thrive in low to moderate light and regular watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 180,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Bird of Paradise
        speciesRepository.save(Species(
            name = "Bird of Paradise",
            latinName = "Strelitzia reginae",
            picturePath = "bird_of_paradise.jpg",
            family = "Strelitziaceae",
            description = "Bird of paradise plants have large, banana-like leaves and vibrant, bird-shaped flowers. They require bright, indirect light and regular watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 365,
                    AssignmentType.FERTILIZING to 30,
                ),
                lightingType = LightingType.SUN
            )
        ))

// Cast Iron Plant
        speciesRepository.save(Species(
            name = "Cast Iron Plant",
            latinName = "Aspidistra elatior",
            picturePath = "cast_iron_plant.jpg",
            family = "Asparagaceae",
            description = "Cast iron plants have tough, leathery leaves that can tolerate low light and neglect. They are excellent low-maintenance houseplants.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 14,
                    AssignmentType.CUTTING to 365,
                    AssignmentType.FERTILIZING to 30,
                ),
                lightingType = LightingType.FULL_SHADE
            )
        ))

// English Ivy
        speciesRepository.save(Species(
            name = "English Ivy",
            latinName = "Hedera helix",
            picturePath = "english_ivy.jpg",
            family = "Araliaceae",
            description = "English ivy is a fast-growing vine with glossy, green leaves. It thrives in bright, indirect light and prefers consistently moist soil.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 30,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Boston Fern
        speciesRepository.save(Species(
            name = "Boston Fern",
            latinName = "Nephrolepis exaltata",
            picturePath = "boston_fern.jpg",
            family = "Polypodiaceae",
            description = "Boston ferns have feathery fronds and are excellent air purifiers. They require bright, indirect light and consistently moist soil.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 3,
                    AssignmentType.CUTTING to 90,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 180
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Schefflera
        speciesRepository.save(Species(
            name = "Schefflera",
            latinName = "Schefflera",
            picturePath = "schefflera.jpg",
            family = "Araliaceae",
            description = "Schefflera plants have compound leaves with up to 12 leaflets. They prefer bright, indirect light and regular watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 180,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Yucca Plant
        speciesRepository.save(Species(
            name = "Yucca Plant",
            latinName = "Yucca",
            picturePath = "yucca_plant.jpg",
            family = "Asparagaceae",
            description = "Yucca plants have sword-shaped leaves and can tolerate dry indoor environments. They prefer bright, indirect light and infrequent watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 21,
                    AssignmentType.CUTTING to 365,
                    AssignmentType.FERTILIZING to 30,
                ),
                lightingType = LightingType.SUN
            )
        ))

// Aglaonema
        speciesRepository.save(Species(
            name = "Aglaonema",
            latinName = "Aglaonema",
            picturePath = "aglaonema.jpg",
            family = "Araceae",
            description = "Aglaonemas, also known as Chinese evergreens, have colorful, patterned leaves. They thrive in low to moderate light and prefer evenly moist soil.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 180,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Calathea
        speciesRepository.save(Species(
            name = "Calathea",
            latinName = "Calathea",
            picturePath = "calathea.jpg",
            family = "Marantaceae",
            description = "Calatheas have striking foliage with intricate patterns. They require bright, indirect light and consistently moist soil.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 180,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Dieffenbachia
        speciesRepository.save(Species(
            name = "Dieffenbachia",
            latinName = "Dieffenbachia",
            picturePath = "dieffenbachia.jpg",
            family = "Araceae",
            description = "Dieffenbachias have large, variegated leaves and are easy to grow indoors. They prefer bright, indirect light and regular watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 180,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// African Violet
        speciesRepository.save(Species(
            name = "African Violet",
            latinName = "Saintpaulia",
            picturePath = "african_violet.jpg",
            family = "Gesneriaceae",
            description = "African violets have fuzzy leaves and vibrant, delicate flowers. They prefer bright, indirect light and consistently moist soil.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 3,
                    AssignmentType.CUTTING to 30,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 180
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Nerve Plant
        speciesRepository.save(Species(
            name = "Nerve Plant",
            latinName = "Fittonia",
            picturePath = "nerve_plant.jpg",
            family = "Acanthaceae",
            description = "Nerve plants have colorful, veined leaves and are perfect for terrariums. They require bright, indirect light and consistently moist soil.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 3,
                    AssignmentType.CUTTING to 30,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 180
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Wandering Jew
        speciesRepository.save(Species(
            name = "Wandering Jew",
            latinName = "Tradescantia zebrina",
            picturePath = "wandering_jew.jpg",
            family = "Commelinaceae",
            description = "Wandering Jews have purple-striped leaves and trailing growth habits. They prefer bright, indirect light and regular watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 30,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 180
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Baby Rubber Plant
        speciesRepository.save(Species(
            name = "Baby Rubber Plant",
            latinName = "Peperomia obtusifolia",
            picturePath = "baby_rubber_plant.jpg",
            family = "Piperaceae",
            description = "Baby rubber plants have thick, glossy leaves and a compact growth habit. They require bright, indirect light and infrequent watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 14,
                    AssignmentType.CUTTING to 90,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Maidenhair Fern
        speciesRepository.save(Species(
            name = "Maidenhair Fern",
            latinName = "Adiantum",
            picturePath = "maidenhair_fern.jpg",
            family = "Pteridaceae",
            description = "Maidenhair ferns have delicate, lacy leaves and a graceful appearance. They require bright, indirect light and consistently moist soil.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 3,
                    AssignmentType.CUTTING to 30,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 180
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// Anthurium
        speciesRepository.save(Species(
            name = "Anthurium",
            latinName = "Anthurium",
            picturePath = "anthurium.jpg",
            family = "Araceae",
            description = "Anthuriums have glossy, heart-shaped leaves and spathes that come in various colors. They require bright, indirect light and consistently moist soil.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 90,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

// String of Pearls
        speciesRepository.save(Species(
            name = "String of Pearls",
            latinName = "Senecio rowleyanus",
            picturePath = "string_of_pearls.jpg",
            family = "Asteraceae",
            description = "String of pearls are succulent plants with long, trailing stems and round leaves that resemble pearls. They prefer bright, indirect light and infrequent watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 21,
                    AssignmentType.CUTTING to 365,
                    AssignmentType.FERTILIZING to 30,
                ),
                lightingType = LightingType.FULL_SUN
            )
        ))

// String of Hearts
        speciesRepository.save(Species(
            name = "String of Hearts",
            latinName = "Ceropegia woodii",
            picturePath = "string_of_hearts.jpg",
            family = "Apocynaceae",
            description = "String of hearts are trailing succulents with heart-shaped leaves. They prefer bright, indirect light and infrequent watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 14,
                    AssignmentType.CUTTING to 365,
                    AssignmentType.FERTILIZING to 30,
                ),
                lightingType = LightingType.FULL_SUN
            )
        ))


        // Butterfly Orchid
        speciesRepository.save(Species(
            name = "Butterfly Orchid",
            latinName = "Phalaenopsis",
            picturePath = "butterfly_orchid.jpg",
            family = "Orchidaceae",
            description = "Butterfly orchids have elegant, arching sprays of flowers that resemble butterflies. They prefer bright, indirect light and regular watering.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 7,
                    AssignmentType.CUTTING to 90,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 365
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))

        userRepository.save(
            User(
                email = "example.user@test.com",
                passwordHash = "blablabla",
                emailVerified = true,
                emailVerificationToken = UUID.randomUUID().toString(),
                emailVerificationExpires = System.currentTimeMillis() + 600000,
                receivePushNotifications = false, // TODO
                pushNotificationsTime = null, // TODO
                plants = mutableListOf(),
                rooms = mutableListOf())
        )

        roomRepository.save(
            Room(
                name = "Living Room",
                user = userRepository.findAll()[0],
                ratioValueX = 3,
                ratioValueY = 4
            )
        )

        roomRepository.save(
            Room(
                name = "Kitchen",
                user = userRepository.findAll()[0],
                ratioValueX = 5,
                ratioValueY = 4
            )
        )

        roomRepository.save(
            Room(
                name = "Balcony",
                user = userRepository.findAll()[0],
                ratioValueX = 2,
                ratioValueY = 2
            )
        )

        plantRepository.save(
            Plant(
                name = "Gloria",
                picturePath = "gloria.jpg",
                notes = "Has some issues due to cold; only water if dry!",
                species = (speciesRepository.findByName("Butterfly Orchid") ?: throw Exception("Species not found")),
                needs = Needs(
                    intervals = mapOf(
                        AssignmentType.WATERING to 21,
                        AssignmentType.REPOTTING to 150
                    ),
                    lightingType = LightingType.PART_SHADE
                ),
                user = userRepository.findAll()[0]
            )
        )

        plantRepository.save(
            Plant(
                name = "Bob",
                picturePath = "bob.jpg",
                notes = "Present from my grandma",
                species = (speciesRepository.findByName("Aloe Vera") ?: throw Exception("Species not found")),
                needs = Needs(
                    intervals = mapOf(
                        AssignmentType.WATERING to 21,
                        AssignmentType.CUTTING to 365,
                        AssignmentType.FERTILIZING to 60,
                        AssignmentType.REPOTTING to 365
                    ),
                    lightingType = LightingType.FULL_SUN
                ),
                user = userRepository.findAll()[0],
            )
        )

        plantRepository.save(
            Plant(
                name = "Dieter",
                picturePath = "dieter.jpg",
                notes = "Dieter is a happy plant!",
                species = (speciesRepository.findByName("Snake Plant") ?: throw Exception("Species not found")),
                needs = Needs(
                    intervals = mapOf(
                        AssignmentType.WATERING to 14,
                        AssignmentType.CUTTING to 365,
                        AssignmentType.FERTILIZING to 30,
                    ),
                    lightingType = LightingType.FULL_SHADE
                ),
                user = userRepository.findAll()[0],
            )
        )

        println("Seeding completed!")
    }
}
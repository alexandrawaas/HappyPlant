package com.happyplant.backend.config

import com.happyplant.backend.model.*
import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.model.types.LightingType
import com.happyplant.backend.model.types.RoomCategory
import com.happyplant.backend.repository.PlantRepository
import com.happyplant.backend.repository.RoomRepository
import com.happyplant.backend.repository.SpeciesRepository
import com.happyplant.backend.repository.UserRepository
import jakarta.annotation.PostConstruct
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.util.*


@Component
class DatabaseInitializer {

    @Autowired
    private lateinit var roomRepository: RoomRepository

    @Autowired
    private lateinit var speciesRepository: SpeciesRepository

    @Autowired
    private lateinit var plantRepository: PlantRepository

    @Autowired
    private lateinit var userRepository: UserRepository

    private var seederEnabled: Boolean = true

    @PostConstruct
    fun initializeDatabase() {
        if(!seederEnabled) return

        // drop tables
        roomRepository.deleteAll()
        plantRepository.deleteAll()
        speciesRepository.deleteAll()
        userRepository.deleteAll()

        println("Seeding Database...")

        speciesRepository.save(Species(
            name = "Schlangenpflanze",
            latinName = "Sansevieria",
            picturePath = "snake_plant.jpg",
            family = "Spargelgewächse",
            description = "Auch bekannt als Schwiegermutterzunge, sind Schlangenpflanzen für ihre Robustheit und luftreinigenden Fähigkeiten bekannt.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 14,
                    AssignmentType.CUTTING to 365,
                    AssignmentType.FERTILIZING to 30,
                    AssignmentType.REPOTTING to 730,
                ),
                lightingType = LightingType.FULL_SHADE
            )
        ))

// Spider Plant
        speciesRepository.save(Species(
            name = "Grünlilie",
            latinName = "Chlorophytum comosum",
            picturePath = "spider_plant.jpg",
            family = "Spargelgewächse",
            description = "Grünlilien sind bekannt für ihre langen, bogenförmigen Blätter, die mit weißen Streifen geschmückt sind. Sie sind leicht zu züchten und zu vermehren.",
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
            name = "Friedenslilie",
            latinName = "Spathiphyllum",
            picturePath = "peace_lily.jpg",
            family = "Araceae",
            description = "Friedenslilien sind beliebt für ihre eleganten weißen Blüten und dunkelgrünen Blätter. Sie gedeihen in Bedingungen mit wenig Licht.",
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
            description = "Aloe vera ist eine Sukkulentenart, die für ihre medizinischen Eigenschaften bekannt ist. Sie bevorzugt einen hellen Standort und wenig Wasser.",
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
            name = "Geigenfeige",
            latinName = "Ficus lyrata",
            picturePath = "fiddle_leaf_fig.jpg",
            family = "Moraceae",
            description = "Geigenfeigen werden wegen ihrer großen, glänzenden Blätter geschätzt. Sie bevorzugen helles, indirektes Licht und regelmäßiges Gießen.",
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
            name = "Glücksfeder",
            latinName = "Zamioculcas zamiifolia",
            picturePath = "zz_plant.jpg",
            family = "Araceae",
            description = "Glücksfedern sind bekannt für ihre glänzenden, dunkelgrünen Blätter. Sie sind trockenheitstolerant und gedeihen in schlechten Lichtverhältnissen.",
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
            name = "Efeutute",
            latinName = "Epipremnum aureum",
            picturePath = "pothos.jpg",
            family = "Araceae",
            description = "Efeututen sind beliebt für ihre herabhängenden Ranken und herzförmigen Blätter. Sie sind pflegeleicht und gedeihen auch bei wenig Licht.",
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
            description = "Philodendren sind vielseitige Zimmerpflanzen mit verschiedenen Blattformen und -größen. Sie bevorzugen indirektes Licht und mäßiges Gießen.",
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
            name = "Chinesischer Geldbaum",
            latinName = "Pilea peperomioides",
            picturePath = "chinese_money_plant.jpg",
            family = "Urticaceae",
            description = "Ufopflanzen, auch bekannt als Chinesischer Geldbaum, haben runde, pfannkuchenförmige Blätter an langen Stielen. Sie bevorzugen helles, indirektes Licht und regelmäßiges Gießen.",
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
            name = "Gummibaum",
            latinName = "Ficus elastica",
            picturePath = "rubber_plant.jpg",
            family = "Moraceae",
            description = "Gummibäume haben große, glänzende Blätter, die Innenräumen einen tropischen Touch verleihen. Sie bevorzugen helles, indirektes Licht und regelmäßiges Gießen.",
            needs = Needs(
                intervals = mapOf(
                    AssignmentType.WATERING to 14,
                    AssignmentType.FERTILIZING to 30,
                ),
                lightingType = LightingType.PART_SHADE
            )
        ))


        // Monstera Deliciosa
        speciesRepository.save(Species(
            name = "Monstera",
            latinName = "Monstera deliciosa",
            picturePath = "monstera_deliciosa.jpg",
            family = "Araceae",
            description = "Monstera deliciosa, auch bekannt als Fensterblatt, ist berühmt für seine fenestrierten Blätter. Sie bevorzugt helles, indirektes Licht und mäßiges Gießen.",
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
            name = "Gitterblume",
            latinName = "Tradescantia",
            picturePath = "spiderwort.jpg",
            family = "Commelinaceae",
            description = "Gitterblumen sind leicht zu pflegende Pflanzen mit langen, bandförmigen Blättern und zarten Blüten. Sie gedeihen bei hellem, indirektem Licht und regelmäßigem Gießen.",
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
            name = "Glücksbambus",
            latinName = "Dracaena sanderiana",
            picturePath = "lucky_bamboo.jpg",
            family = "Asparagaceae",
            description = "Glücksbambus ist eine beliebte Zimmerpflanze mit geraden Stielen und üppigem Laub. Sie gedeiht gut bei schlechten Lichtverhältnissen und benötigt minimale Pflege.",
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
            name = "Jadebaum",
            latinName = "Crassula ovata",
            picturePath = "jade_plant.jpg",
            family = "Crassulaceae",
            description = "Jadebäume sind sukkulente Zimmerpflanzen mit dicken, fleischigen Blättern. Sie bevorzugen helles, indirektes Licht und seltenes Gießen.",
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
            name = "Schmuckaralie",
            latinName = "Chamaedorea elegans",
            picturePath = "parlor_palm.jpg",
            family = "Arecaceae",
            description = "Schmuckaralien sind kompakte Palmen mit anmutigen, bogigen Wedeln. Sie gedeihen bei wenig bis mäßigem Licht und regelmäßigem Gießen.",
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
            name = "Paradiesvogelblume",
            latinName = "Strelitzia reginae",
            picturePath = "bird_of_paradise.jpg",
            family = "Strelitziaceae",
            description = "Paradiesvogelblumen haben große, bananenähnliche Blätter und lebendige, vogelförmige Blüten. Sie benötigen helles, indirektes Licht und regelmäßiges Gießen.",
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
            name = "Gusseisenpflanze",
            latinName = "Aspidistra elatior",
            picturePath = "cast_iron_plant.jpg",
            family = "Asparagaceae",
            description = "Gusseisenpflanzen haben robuste, lederartige Blätter, die wenig Licht und Vernachlässigung tolerieren können. Sie sind ausgezeichnete pflegeleichte Zimmerpflanzen.",
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
            name = "Efeu",
            latinName = "Hedera helix",
            picturePath = "english_ivy.jpg",
            family = "Araliaceae",
            description = "Efeu ist eine schnell wachsende Kletterpflanze mit glänzenden, grünen Blättern. Sie gedeiht bei hellem, indirektem Licht und bevorzugt konstant feuchte Erde.",
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
            name = "Boston-Farn",
            latinName = "Nephrolepis exaltata",
            picturePath = "boston_fern.jpg",
            family = "Polypodiaceae",
            description = "Boston-Farne haben federartige Wedel und sind ausgezeichnete Luftreiniger. Sie benötigen helles, indirektes Licht und konstant feuchte Erde.",
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
            name = "Strahlenaralie",
            latinName = "Schefflera",
            picturePath = "schefflera.jpg",
            family = "Araliaceae",
            description = "Strahlenaralien haben zusammengesetzte Blätter mit bis zu 12 Fiederblättchen. Sie bevorzugen helles, indirektes Licht und regelmäßiges Gießen.",
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
            name = "Yucca-Palme",
            latinName = "Yucca",
            picturePath = "yucca_plant.jpg",
            family = "Spargelgewächse",
            description = "Yucca-Palmen haben schwertförmige Blätter und vertragen trockene Raumluft. Sie bevorzugen helles, indirektes Licht und seltenes Gießen.",
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
            name = "Chinesischer Liebesgruß",
            latinName = "Aglaonema",
            picturePath = "aglaonema.jpg",
            family = "Araceae",
            description = "Aglaonemas, auch bekannt als Chinesische Liebesgrüße, haben farbenfrohe, gemusterte Blätter. Sie gedeihen bei wenig bis mäßigem Licht und bevorzugen gleichmäßig feuchte Erde.",
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
            name = "Korbmarante",
            latinName = "Calathea",
            picturePath = "calathea.jpg",
            family = "Marantaceae",
            description = "Korbmaranten haben auffälliges Laub mit komplexen Mustern. Sie benötigen helles, indirektes Licht und konstant feuchte Erde.",
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
            name = "Dieffenbachie",
            latinName = "Dieffenbachia",
            picturePath = "dieffenbachia.jpg",
            family = "Araceae",
            description = "Dieffenbachien haben große, panaschierte Blätter und gedeihen leicht in Innenräumen. Sie bevorzugen helles, indirektes Licht und regelmäßiges Gießen.",
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
            name = "Usambaraveilchen",
            latinName = "Saintpaulia",
            picturePath = "african_violet.jpg",
            family = "Gesneriaceae",
            description = "Usambaraveilchen haben behaarte Blätter und lebendige, zarte Blüten. Sie bevorzugen helles, indirektes Licht und konstant feuchte Erde.",
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
            name = "Fächerblume",
            latinName = "Fittonia",
            picturePath = "nerve_plant.jpg",
            family = "Acanthaceae",
            description = "Fächerblumen haben farbenfrohe, geäderte Blätter und eignen sich hervorragend für Terrarien. Sie benötigen helles, indirektes Licht und konstant feuchte Erde.",
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
            name = "Götterpflanze",
            latinName = "Tradescantia zebrina",
            picturePath = "wandering_jew.jpg",
            family = "Commelinaceae",
            description = "Götterpflanzen haben blau-violett gestreifte Blätter und wachsen hängend. Sie bevorzugen helles, indirektes Licht und regelmäßiges Gießen.",
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
            name = "Peperomie",
            latinName = "Peperomia obtusifolia",
            picturePath = "baby_rubber_plant.jpg",
            family = "Piperaceae",
            description = "Peperomien haben dicke, glänzende Blätter und wachsen kompakt. Sie benötigen helles, indirektes Licht und seltenes Gießen.",
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
            name = "Jungfernhaar-Farn",
            latinName = "Adiantum",
            picturePath = "maidenhair_fern.jpg",
            family = "Pteridaceae",
            description = "Jungfernhaar-Farne haben zarte, filigrane Blätter und eine grazile Erscheinung. Sie benötigen helles, indirektes Licht und konstant feuchte Erde.",
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
            name = "Flamingoblume",
            latinName = "Anthurium",
            picturePath = "anthurium.jpg",
            family = "Araceae",
            description = "Flamingoblumen haben glänzende, herzförmige Blätter und Hochblätter in verschiedenen Farben. Sie benötigen helles, indirektes Licht und konstant feuchte Erde.",
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
            name = "Perlenkette",
            latinName = "Senecio rowleyanus",
            picturePath = "string_of_pearls.jpg",
            family = "Asteraceae",
            description = "Perlenketten sind Sukkulenten mit langen, herabhängenden Trieben und runden Blättern, die an Perlen erinnern. Sie bevorzugen helles, indirektes Licht und seltenes Gießen.",
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
            name = "Herzblatt",
            latinName = "Ceropegia woodii",
            picturePath = "string_of_hearts.jpg",
            family = "Apocynaceae",
            description = "Herzblätter sind hängende Sukkulenten mit herzförmigen Blättern. Sie bevorzugen helles, indirektes Licht und seltenes Gießen.",
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
            name = "Schmetterlingsorchidee",
            latinName = "Phalaenopsis",
            picturePath = "butterfly_orchid.jpg",
            family = "Orchidaceae",
            description = "Schmetterlingsorchideen haben elegante, sich bogenförmig erstreckende Blütentrauben, die Schmetterlingen ähneln. Sie bevorzugen helles, indirektes Licht und regelmäßiges Gießen.",
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

        val livingRoom = roomRepository.save(
            Room(
                name = "Wohnzimmer",
                user = userRepository.findAll()[0],
                ratioValueX = 3,
                ratioValueY = 4,
                category = RoomCategory.LIVING_ROOM
            )
        )

        val kitchen = roomRepository.save(
            Room(
                name = "Küche",
                user = userRepository.findAll()[0],
                ratioValueX = 5,
                ratioValueY = 4,
                category = RoomCategory.KITCHEN
            )
        )

        val balcony = roomRepository.save(
            Room(
                name = "Balkon",
                user = userRepository.findAll()[0],
                ratioValueX = 2,
                ratioValueY = 2,
                category = RoomCategory.BALCONY
            )
        )

        kitchen.storeWindows(listOf(Pixel(kitchen, 0,1), Pixel(kitchen, 0,2), Pixel(kitchen, 1,3), Pixel(kitchen, 2,3), Pixel(kitchen, 3,3)))
        roomRepository.save(kitchen)

        livingRoom.storeWindows(listOf(Pixel(livingRoom, 0,1), Pixel(livingRoom, 0,2)))
        roomRepository.save(livingRoom)

        balcony.storeWindows(listOf(Pixel(balcony, 0,0), Pixel(balcony, 1,0), Pixel(balcony, 0,1), Pixel(balcony, 1,1)))
        roomRepository.save(balcony)

        plantRepository.save(
            Plant(
                name = "Gloria",
                picturePath = "gloria.jpg",
                notes = "Hat einen Kälteschaden. Nur gießen wenn trocken!",
                species = (speciesRepository.findByName("Schmetterlingsorchidee") ?: throw Exception("Species not found")),
                needs = Needs(
                    intervals = mapOf(
                        AssignmentType.WATERING to 21,
                        AssignmentType.REPOTTING to 150
                    ),
                    lightingType = LightingType.PART_SHADE
                ),
                user = userRepository.findAll()[0],
                pixel = livingRoom.getPixel(0,0),
            )
        )

        plantRepository.save(
            Plant(
                name = "Bob",
                picturePath = "bob.jpg",
                notes = "Geschenk von meiner Oma",
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
                pixel = kitchen.getPixel(1,2)
            )
        )

        plantRepository.save(
            Plant(
                name = "Dieter",
                picturePath = "dieter.jpg",
                notes = "Hatte 2021 Spinnmilben",
                species = (speciesRepository.findByName("Schlangenpflanze") ?: throw Exception("Species not found")),
                needs = Needs(
                    intervals = mapOf(
                        AssignmentType.WATERING to 14,
                        AssignmentType.CUTTING to 365,
                        AssignmentType.FERTILIZING to 30,
                    ),
                    lightingType = LightingType.FULL_SHADE
                ),
                user = userRepository.findAll()[0]
            )
        )

        println("Seeding completed!")
    }
}
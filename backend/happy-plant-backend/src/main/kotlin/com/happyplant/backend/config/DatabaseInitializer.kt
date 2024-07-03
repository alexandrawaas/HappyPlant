package com.happyplant.backend.config

import com.happyplant.backend.model.*
import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.model.types.LightingType
import com.happyplant.backend.model.types.RoomCategory
import com.happyplant.backend.repository.*
import com.happyplant.backend.utility.ImageUtil
import jakarta.annotation.PostConstruct
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.io.File
import java.security.MessageDigest
import java.time.LocalTime
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

    @Autowired
    private lateinit var imageRepository: ImageDataRepository

    private var seederEnabled: Boolean = true

    fun saveImage(imageFileName: String): UUID {
        val imageBaseUrl = ".${File.separator}data${File.separator}speciesPictures${File.separator}"

        val file = File("${imageBaseUrl}${imageFileName}")
        val imageData = ImageUtil.compressImage(file.readBytes())
        val savedImage = imageRepository.save(
            Image(
                name = file.name,
                type = "image/" + file.extension,
                imageData = imageData,
            )
        )
        return savedImage.id
    }

    @PostConstruct
    fun initializeDatabase() {
        if(!seederEnabled) return

        // drop tables
        imageRepository.deleteAll()
        plantRepository.deleteAll()
        roomRepository.deleteAll()
        speciesRepository.deleteAll()
        userRepository.deleteAll()


        println("Seeding Database...")

        speciesRepository.save(Species(
            name = "Schlangenpflanze",
            latinName = "Sansevieria",
            imageId = saveImage("schlangenpflanze.jpg"),
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
            imageId = saveImage("gruenlilie.jpg"),
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
            imageId = saveImage("friedenslilie.jpg"),
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
            imageId = saveImage("aloevera.jpg"),
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
            imageId = saveImage("geigenfeige.jpg"),
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
            imageId = saveImage("gluecksfeder.jpg"),
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
            imageId = saveImage("efeutute.jpg"),
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
            imageId = saveImage("philodendron.jpg"),
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
            imageId = saveImage("chinesischergeldbaum.jpg"),
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
            imageId = saveImage("gummibaum.jpg"),
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
            imageId = saveImage("monstera.jpg"),
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
            imageId = saveImage("gitterblume.jpg"),
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
            imageId = saveImage("gluecksbambus.jpg"),
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
            imageId = saveImage("jadebaum.jpg"),
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
            imageId = saveImage("schmuckaralie.jpg"),
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
            imageId = saveImage("paradiesvogelblume.jpg"),
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
            imageId = saveImage("gusseisenpflanze.jpg"),
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
            imageId = saveImage("efeu.jpg"),
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
            imageId = saveImage("bostonfarn.jpg"),
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
            imageId = saveImage("strahlenaralie.jpg"),
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
            imageId = saveImage("yuccapalme.jpg"),
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
            imageId = saveImage("chinesischerliebesgruss.jpg"),
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
            imageId = saveImage("korbmarante.jpg"),
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
            imageId = saveImage("dieffenbachie.jpg"),
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
            imageId = saveImage("usambaraveilchen.jpg"),
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
            imageId = saveImage("faecherblume.jpg"),
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
            imageId = saveImage("goetterpflanze.jpg"),
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
            imageId = saveImage("peperomie.jpg"),
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
            imageId = saveImage("jungfernhaarfarn.jpg"),
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
            imageId = saveImage("flamingoblume.jpg"),
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
            imageId = saveImage("perlenkette.jpg"),
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
            imageId = saveImage("herzblatt.jpg"),
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
            imageId = saveImage("schmetterlingsorchidee.jpg"),
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

        fun hashPassword(password: String): String {
            val md = MessageDigest.getInstance("SHA-256")
            val hashBytes = md.digest(password.toByteArray())
            return hashBytes.joinToString("") { "%02x".format(it) }
        }
        userRepository.save(
            User(
                email = "example.user@test.com",
                passwordHash = hashPassword("s3cur3P455w0rd"),
                emailVerified = true,
                multiToken = UUID.randomUUID().toString(),
                multiExpires = System.currentTimeMillis() + 600000,
                multiOtp = null,
                receivePushNotifications = true,
                pushNotificationsTime = LocalTime.of(17, 46),
                pushNotificationToken = "ExponentPushToken[Wx9b-UKX5NSxWFpCb8ke4f]", //Ralf Handy for Testing
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
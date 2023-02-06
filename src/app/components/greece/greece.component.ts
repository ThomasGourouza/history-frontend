import { Component, OnInit } from '@angular/core';
export interface Period {
  name: string;
  dates: Dates;
  description: string;
  events: Event[];
  people: People[];
  hidden: boolean;
}
export interface Event {
  name: string;
  date: number | Dates;
  description: string;
  hidden: boolean;
}
export interface People {
  name: string;
  dates: Dates;
  description: string;
  works: Work[];
  hidden: boolean;
}
export interface Work {
  name: string;
  description: string;
  hidden: boolean;
}
export interface Dates {
  begin: number;
  end: number;
}

@Component({
  selector: 'app-greece',
  templateUrl: './greece.component.html',
  styleUrls: ['./greece.component.scss']
})
export class GreeceComponent implements OnInit {

  public periods: Period[];

  constructor() {
    this.periods = [
      {
        name: 'Néolithique',
        dates: {
          begin: -7000,
          end: -3200
        },
        description: 'Apparition des villages permanents, de l\'agriculture, de l\'élevage, de la céramique.',
        events: [],
        people: [],
        hidden: true
      },
      {
        name: 'Âge du bronze',
        dates: {
          begin: -3300,
          end: -2000
        },
        description: 'Premier développement des cultures de l\'âge du bronze grec (minoenne en Crète, cycladique dans les Cyclades, helladique en Grèce continentale méridionale), développement de l\'urbanisme, de l\'agriculture, de la métallurgie, des échanges.',
        events: [],
        people: [],
        hidden: true
      },
      {
        name: 'Civilisation minoenne',
        dates: {
          begin: -2000,
          end: -1450
        },
        description: 'Civilisation palatiale centrée sur la Crète, développement urbain, avec une expansion autour de l\'Égée, apparition de l\'écriture (linéaire A, hiéroglyphes crétois).',
        events: [
          {
            name: 'Éruption minoenne',
            date: 1600,
            description: 'L\'éruption minoenne désigne l\'explosion, au cours du IIe millénaire av. J.-C., du volcan de Santorin (Cyclades).',
            hidden: true
          }
        ],
        people: [
          {
            name: 'Minos',
            dates: {
              begin: -2000,
              end: -1950
            },
            description: 'Dans la mythologie grecque, Minos, fils de Zeus et d\'Europe (petite-fille de Poséidon), est un roi légendaire de Crète. Son nom a été donné à la civilisation minoenne.',
            works: [],
            hidden: true
          }
        ],
        hidden: true
      },
      {
        name: 'Civilisation mycénienne',
        dates: {
          begin: -1500,
          end: -1100
        },
        description: 'Civilisation palatiale centrée sur la moitié sud de la Grèce continentale, avec une expansion en Crète et autour de l\'Égée, pratique de l\'écriture (linéaire B) à des fins administratives, notant une langue grecque.',
        events: [
          {
            name: 'Guerre de Troie',
            date: 1250,
            description: 'La guerre de Troie est un conflit légendaire de la mythologie grecque, dont l\'historicité est controversée. C\'est le prince troyen Pâris qui la déclenche en enlevant Hélène, épouse du roi de Sparte, Ménélas. En rétorsion, Ménélas, l\'époux bafoué, lève avec son frère Agamemnon une expédition rassemblant la plupart des rois grecs et les héros Achille et Ulysse, qui assiège Troie et remporte finalement la victoire, notamment grâce à la ruse du cheval de Troie, événement décisif de la guerre de Troie. À l\'initiative d\'Ulysse, des guerriers grecs réussissent à pénétrer dans Troie, assiégée en vain depuis dix ans, en se cachant dans un grand cheval de bois, harnaché d\'or, offert aux Troyens. Cette ruse de guerre entraîne la chute de la ville et permet le dénouement de la guerre.',
            hidden: true
          }
        ],
        people: [],
        hidden: true
      },
      {
        name: 'Âges obscurs',
        dates: {
          begin: -1200,
          end: -750
        },
        description: 'Éffondrement de la civilisation mycénienne et de son organisation sociale et politique, puis reprise à partir du début du Ier millénaire av. J.-C., posant les bases de la culture grecque antique ; période essentiellement connue par l\'archéologie funéraire, présentant une diversité de pratiques, poterie de style "géométrique", construction de bâtiments (dont des sanctuaires), diffusion de la métallurgie du fer.',
        events: [],
        people: [],
        hidden: true
      },
      {
        name: 'Époque archaïque',
        dates: {
          begin: -750,
          end: -480
        },
        description: 'Période de formation des cités grecques, expansion coloniale dans la Méditerranée et la mer Noire, adoption de l\'alphabet, art orientalisant, poèmes de Homère et Hésiode, philosophes présocratiques. Les penseurs présocratiques sont considérés comme les fondateurs de la philosophie occidentale, et originaires des colonies grecques situées en Ionie et dans le Sud de l\'Italie.',
        events: [],
        people: [
          {
            name: 'Homère',
            dates: {
              begin: -750,
              end: -700
            },
            description: 'Homère est réputé avoir été un aède (poète) de la fin du VIIIe siècle av. J.-C. Les deux premières œuvres de la littérature occidentale que sont l\'Iliade et l\'Odyssée lui sont attribuées. Il est difficile de dire aujourd\'hui si Homère a été un individu historique ou bien un personnage conceptuel, et s\'il est bien l\'auteur des deux célèbres épopées qui sont au fondement de la littérature occidentale. Les savants modernes croient à un personnage inventé, bien que plusieurs villes ioniennes (Chios, Smyrne, Cymé ou encore Colophon) se disputaient l\'origine de l\'aède et que la tradition l\'individualisait en répétant qu\'Homère était aveugle.',
            works: [
              {
                name: 'Iliade',
                description: 'L\'Iliade est une épopée de la Grèce antique attribuée à l\'aède légendaire Homère. Ce nom provient de la périphrase "le poème d\'Ilion", Ilion étant l\'autre nom de la ville de Troie. L\'Iliade est composé de 15 6931, hexamètres dactyliques et, depuis l\'époque hellénistique, divisée en vingt-quatre chants. Le texte a probablement été composé plus de quatre siècles après la période à laquelle les historiens font correspondre la guerre mythique qu\'il relate. Il n\'a été fixé par écrit que sous Pisistrate, au VIe siècle av. J.-C. Dans l\'Antiquité, l\'Iliade faisait partie d\'un cycle épique, le cycle troyen, mais seules l\'Iliade et l\'Odyssée en ont été conservées.',
                hidden: true
              },
              {
                name: 'Odyssée',
                description: 'L\'Odyssée est une épopée grecque antique attribuée à l\'aède Homère, qui l\'aurait composée après l\'Iliade, vers la fin du VIIIe siècle av. J.-C. Elle est considérée, avec l\'Iliade, comme l\'un des deux "poèmes fondateurs" de la culture grecque antique et comme l\'un des plus grands chefs-d\'œuvre de la littérature mondiale. L\'Odyssée relate le retour chez lui du héros Ulysse (Odysseus en grec), qui, après la guerre de Troie dans laquelle il a joué un rôle déterminant, met dix ans à revenir dans son île d\'Ithaque, pour y retrouver son épouse Pénélope, qu\'il délivre des prétendants, et son fils Télémaque. Au cours de son voyage sur mer, rendu périlleux par le courroux du dieu Poséidon, Ulysse rencontre de nombreux personnages mythologiques, comme la nymphe Calypso, la princesse Nausicaa, les Cyclopes, la magicienne Circé et les sirènes. L\'épopée contient aussi un certain nombre d\'épisodes qui complètent le récit de la guerre de Troie, par exemple la construction du cheval de Troie et la chute de la ville, qui ne sont pas évoquées dans l\'Iliade. L\'Odyssée compte douze mille cent neuf hexamètres dactyliques, répartis en vingt-quatre chants, et peut être divisée en trois grandes parties : la Télémachie (chants I-IV), les Récits d\'Ulysse (chants V-XII) et la Vengeance d\'Ulysse (chants XIII-XXIV). L\'Odyssée a inspiré un grand nombre d\'œuvres littéraires et artistiques au cours des siècles, et le terme "odyssée" est devenu par antonomase un nom commun désignant un "récit de voyage plus ou moins mouvementé et rempli d\'aventures singulières".',
                hidden: true
              },
              {
                name: 'Hymnes homériques',
                description: 'Les Hymnes homériques sont une collection de trente-quatre (ou trente-deux, suivant les décomptes) courts poèmes épiques. Chacun des hymnes est dédié à un dieu, et est destiné à être chanté par l\'aède en guise de prélude ou proème, avant de passer à une œuvre plus longue. Les Hymnes homériques varient par leur sujet, leur taille (de cinq à cinq cent cinquante vers), leur époque de rédaction (entre le VIIe siècle av. J.-C. et le IVe siècle de notre ère). L\'épithète d\'"homérique", qui leur est attribuée, n\'est due qu\'à leur mètre commun, l\'hexamètre dactylique, vers de l\'épopée.',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Hésiode',
            dates: {
              begin: -700,
              end: -650
            },
            description: 'Les seuls faits authentiquement connus sur Hésiode sont les événements consignés dans ses poèmes. À trois reprises dans Les Travaux et les Jours, il donne quelques éléments biographiques. Il faut y ajouter quelques vers de la Théogonie.',
            works: [
              {
                name: 'Théogonie',
                description: 'La Théogonie est une œuvre du poète grec Hésiode écrite en hexamètres dactyliques. Elle joue un rôle fondateur dans la connaissance que nous avons de la mythologie grecque. Le terme "théogonie" vient du nom theós qui signifie "dieu" et du verbe gennáō qui signifie "engendrer". Il s\'agit donc d\'un récit de l\'origine des dieux.',
                hidden: true
              },
              {
                name: 'Les Travaux et les Jours',
                description: 'Les Travaux et les Jours est un poème grec d\'Hésiode écrit en hexamètres dactyliques et datant sans doute de la fin du VIIIe siècle av. J.-C. Il s\'agit du plus ancien texte de poésie didactique. L\'ouvrage concerne un différend entre l\'auteur et son frère, Persès. Le texte contient à trois reprises des éléments autobiographiques. Hésiode y aborde des thèmes fondamentaux pour la réflexion: - L\'histoire de Prométhée et de Pandore. - Les cinq races successives de l\'humanité (or, argent, bronze, race des héros puis fer). - La fable du faucon et du rossignol (le faucon représentant le roi, et le rossignol le poète). - La vision de deux cités : celle de la justice (Díkē) et la cité opposée, celle de la démesure (Húbris). - Il donne aussi une description des travaux agricoles sur les terres arides de son pays natal et il se présente comme un calendrier précis de l\'année d\'un agriculteur en incluant des conseils sur l\'agriculture : outils, soins des animaux, cultures, entre autres. Une section décrivant la rigueur de l\'hiver dans les montagnes de Grèce est particulièrement remarquable. Il termine le récit en prédisant qu\'à la fin, l\'homme de la justice devient riche, tandis que celui de la démesure perd tout. Hésiode est le prophète de la race de fer, qu\'il fait succéder à la race des Héros. - Il donne aussi les descriptions du Sirius et des Pléiades sur le printemps astronomique.',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Thalès',
            dates: {
              begin: -620,
              end: -548
            },
            description: 'Thalès de Milet est un philosophe et savant grec présocratique. C\'est l\'un des Sept sages de la Grèce antique et le fondateur présumé de l\'école milésienne. Philosophe de la nature, il passe pour avoir effectué un séjour en Égypte, où il aurait été initié aux sciences égyptienne et babylonienne. On lui attribue de nombreux exploits, comme le calcul de la hauteur de la grande pyramide ou la prédiction d\'une éclipse, ainsi que le théorème de Thalès. Il fut l\'auteur de nombreuses recherches mathématiques, notamment en géométrie. Personnage légendaire, qui semble n\'avoir rien écrit, sa méthode d\'analyse du réel en fait l\'une des figures majeures du raisonnement scientifique. Il sut s\'écarter des discours explicatifs délivrés par la mythologie pour privilégier une approche caractérisée par l\'observation et la démonstration.',
            works: [],
            hidden: true
          },
          {
            name: 'Anaximandre',
            dates: {
              begin: -610,
              end: -546
            },
            description: 'Anaximandre de Milet est un philosophe et savant grec présocratique. On suppose qu\'il succéda à Thalès comme maître de l\'école milésienne, et il aurait eu Xénophane, Pythagore et Anaximène parmi ses élèves. Anaximandre est le premier Grec connu à avoir tenté de décrire et expliquer l\'origine et l\'organisation de tous les aspects du monde d\'un point de vue que l\'on qualifie rétrospectivement de scientifique. Nombre de philosophes et commentateurs contemporains estiment pour cette raison que les théories d\'Anaximandre représentent une étape essentielle et révolutionnaire de l\'histoire des sciences. Anaximandre passe également pour le premier philosophe à avoir consigné ses travaux par écrit, mais seules quelques phrases sont parvenues jusqu\'à nous. Les témoignages antiques permettent de se faire une idée de leur nature et de leur étendue, qui couvre la philosophie, l\'astronomie, la physique, la biologie, la géométrie et la géographie.',
            works: [
              {
                name: 'Sur la nature',
                description: 'Dans ses Discours, Thémistios mentionne qu\'Anaximandre aurait été le premier des Grecs connus à publier un ouvrage écrit sur la nature et, par ce fait même, ses documents auraient été parmi les premiers textes grecs écrits en prose.',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Pythagore',
            dates: {
              begin: -580,
              end: -495
            },
            description: 'Pythagore est un réformateur religieux, thaumaturge et philosophe présocratique qui serait né à Samos. Il aurait été également mathématicien et scientifique selon une tradition tardive. La vie énigmatique de Pythagore permet difficilement d\'éclaircir son histoire. Il n\'a jamais rien écrit, et les soixante et onze lignes des Vers d\'Or qu\'on lui attribue sont apocryphes et sont le signe de l\'immense développement de la légende formée autour de son nom. Le néopythagorisme est néanmoins empreint d\'une mystique des nombres, déjà présente dans la pensée de Pythagore. Hérodote le mentionne comme "l\'un des plus grands esprits de la Grèce, le sage Pythagore". Il conserve un grand prestige; Hegel disait qu\'il était "le premier maître universel". D\'après un écho marquant d\'Héraclide du Pont évoqué par Cicéron, Pythagore serait le premier penseur grec à s\'être qualifié lui-même de "philosophos", dont le sens est "ami du savoir ou de la sagesse"',
            works: [],
            hidden: true
          },
          {
            name: 'Héraclite',
            dates: {
              begin: -544,
              end: -480
            },
            description: 'Héraclite d\'Éphèse est un des principaux philosophes grec présocratiques. Nous ne savons presque rien de sa vie, sinon qu\'il vécut à Éphèse vers 500 av. J.-C et ne connaissons sa philosophie qu\'à travers les auteurs anciens qui, du IVe siècle av. J.-C. jusqu\'à la fin de l\'Antiquité, l\'ont cité et notamment les plus éminents d\'entre eux, Platon, Aristote, Lucrèce, Sénèque, Plutarque, Sextus Empiricus, Marc-Aurèle, Diogène Laërce, Plotin et d\'autres. Ces citations, peu nombreuses, environ une centaine, le plus souvent des formules brèves, souvent de style énigmatique à la manière des oracles, ont été rassemblées sous le terme de Fragments par les érudits qui ont examiné le contexte des œuvres dans lesquelles le mot ou la phrase d\'Héraclite apparaissait, discuté leur authenticité et les ont classées. On retient généralement d\'Héraclite sa philosophie du devenir à travers ses citations devenues célèbres ("Panta rhei": "toutes choses s\'écoulent" et "On ne peut entrer deux fois dans le même fleuve"), son relativisme ("Le plus beau des singes est laid" en comparaison d\'une autre espèce) et sa théorie de la contrariété ("La contrariété est avantageuse", "La plus belle harmonie naît des différences", "Toutes choses naissent de la discorde").',
            works: [
              {
                name: 'Fragments',
                description: 'Les fragments de l\'ouvrage d\'Héraclite sont le plus souvent des formules brèves, des énigmes qui l\'ont fait désigner comme "l\'Obscur" par les auteurs anciens. Dès le IVe siècle avant J-C, la tradition fait de lui un solitaire, voire un misanthrope, qui ne veut pas satisfaire aux exigences de la vie en communauté. Dans la comédie de Lucien de Samosate, "les Philosophes à l\'encan (IIe siècle après J-C)", qui fait défiler tous les philosophes grecs sur l\'estrade d\'un marchand d\'esclaves, il est "l\'homme qui pleure" à côté de Démocrite qui est "l\'homme qui rit" et reste invendu. Il reste entre 140 et 152 fragments du texte d\'Héraclite, qui nous est connu à travers les citations qu\'on a trouvées chez divers auteurs, de Platon (IVe siècle av. J.-C.) à Albert le Grand (XIIIe siècle) en passant par Diogène Laërce (IIIe siècle). Et en 1903 Hermann Diels édite pour la première fois l\'ensemble des fragments, un travail qui sera revu dans les années 1930 par Walther Kranz. Une des principales questions qui continue à faire débat est de savoir si nous sommes en présence de fragments d\'un livre unique ou de véritables aphorismes. D\'après Diogène Laërce, l\'ouvrage d\'Héraclite aurait été composé de trois parties : Sur le tout ou Sur l\'univers, Sur la politique et Sur la théologie. Selon Jean-François Pradeau, cette division thématique devenue traditionnelle relève cependant d\'un anachronisme basé sur des divisions scolaires datant de la période hellénistique. Il se pourrait que cette répartition provienne partiellement d\'une source stoïcienne.',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Parménide',
            dates: {
              begin: -510,
              end: -450
            },
            description: 'Parménide d\'Élée est un philosophe grec présocratique, pythagoricien, puis éléate. Il est célèbre pour un poème en vers, "De la nature", qui eut une influence notable sur la pensée de son époque. Ses découvertes intellectuelles, en particulier l\'introduction de la logique dans la pensée hellénique, à côté de la philosophie milésienne de la nature et des théories arithmétiques de Pythagore, font de Parménide l\'un des philosophes les plus considérables dans l\'histoire de la philosophie grecque. Platon a consacré un dialogue qui porte son nom, "le Parménide", pour traiter la question de l\'Être, dont Parménide a inlassablement répété qu\'il est, tandis que le Non-Être n\'est pas.',
            works: [
              {
                name: 'De la Nature',
                description: 'Parménide a écrit en vers un traité De la nature dont il nous reste 152 vers (répartis sur 18 fragments) auxquels s\'ajoute un groupe de 6 vers issus d\'une traduction latine du texte de Parménide par Cælius Aurelianus (Ve siècle ap. J.-C.). Selon l\'encyclopédie médiévale grecque de la fin du Xe siècle, "la Souda", Parménide aurait également écrit des œuvres en prose, mais ce point est controversé. Parménide divisait la connaissance en deux parties, deux chemins de pensée, nettement opposées, la vérité et l\'opinion.',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Anaxagore',
            dates: {
              begin: -500,
              end: -428
            },
            description: 'Anaxagore de Clazomènes (Ionie) est un philosophe présocratique grec. Considéré comme "le plus grand penseur du milieu du Ve siècle av. J.-C.1", Anaxagore s\'est entièrement consacré à la recherche savante et à l\'explication rationnelle des phénomènes naturels. Il prolonge l\'esprit des penseurs ioniens: il a d\'abord adhéré à la philosophie d\'Anaximène dont il retient la recherche d\'un principe matériel qui soit en même temps illimité.',
            works: [
              {
                name: 'De la nature',
                description: 'Dans son traité "De la Nature", il décrit les étapes de la formation de l\'univers, selon un processus cosmogonique d\'où sont bannies toute naissance et toute destruction: puisque rien ne saurait naître du néant, ni non plus y retourner, Anaxagore affirme que "les choses qui sont" se réunissent ou se dissocient dans un processus sans fin. À l\'opposé de la physique de Leucippe et des atomistes, la physique d\'Anaxagore apporte une solution au problème de l\'origine du mouvement dans l\'univers et à la question de sa vie ou de sa mort, à une époque où les écoles philosophiques rivalisaient d\'ingéniosité pour inventer le dispositif sauveur qui garantît la permanence du devenir cosmique. Pour la première fois, le principe qui régit le monde est conçu à l\'image de l\'intelligence humaine: l\'Esprit universel, le Noûs cosmique, a pénétré la totalité de la matière originelle mêlée et y a introduit ordre et raison en lui imprimant un mouvement tourbillonnaire. À l\'intérieur de ce monde, tout se combine et se transforme dans un processus qui préfigure le principe physico-chimique de Lavoisier. Un tel univers régi par l\'Esprit ne laissait guère de place aux dieux traditionnels, et suscita contre Anaxagore un procès pour impiété. Son apport essentiel dans l\'histoire de la philosophie tient à cette cosmologie finaliste régie par l\'action d\'un Esprit omniprésent mais dont les impulsions annoncent les conceptions mécanistes de l\'univers.',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Empédocle',
            dates: {
              begin: -490,
              end: -430
            },
            description: 'Empédocle d\'Agrigente est un philosophe, poète, ingénieur et médecin grec de Sicile, du Ve siècle av. J.-C. Il fait partie des philosophes présocratiques, ces premiers penseurs qui ont tenté de découvrir l\'arkhè du cosmos, son "origine". L\'originalité d\'Empédocle est de poser deux principes qui règnent cycliquement sur l\'univers, l\'Amour et la Haine. Ces principes engendrent les quatre éléments dont sont composées toutes les choses matérielles : l\'eau, la terre, le feu et l\'éther (ou l\'air). L\'Amour est une force d\'unification et de cohésion qui fait tendre les choses vers l\'unité (par exemple les organismes vivants) ou même l\'Un quand il s\'agit du cosmos. La Haine est une force de division et de destruction qui fait tendre les choses vers le multiple.',
            works: [
              {
                name: 'De la nature; Purifications',
                description: 'Empédocle privilégie la forme poétique pour décrire sa philosophie dans deux poèmes dont il ne nous reste que des fragments : De la nature et les Purifications. Il est influencé par Parménide (auteur lui aussi d\'un poème De la nature) et de ce fait, parfois rattaché à l\'école éléatique. Il reçoit également l\'influence de Pythagore, notamment à propos de l\'un et du multiple. Diogène Laërce en fait un membre de l\'école pythagoricienne. Il passe pour un magicien, et parfois pour un mystique. La source principale des fragments conservés d\'Empédocle est l\'œuvre d\'Aristote. Il se peut que la doctrine de l\'Un et de l\'Amitié d\'Empédocle ait été influencée par le zoroastrisme d\'Orient. Les fragments d\'Empédocle ont été commentés avec enthousiasme par des poètes et des penseurs méditant sur le cosmos, comme Lucrèce, Hölderlin, Nietzsche et Bachelard. Romain Rolland, critique fervent d\'Empédocle, affirme qu\'Empédocle "représentait pour son temps l\'homme universel". Une légende, déjà réfutée dans l\'Antiquité, raconte qu\'il serait mort en se jetant dans le feu divin de l\'Etna, abandonnant à la terre, sur les bords du cratère, ses sandales. Cette légende alimente les rêveries sur sa vie et sa philosophie : Hölderlin en tire une tragédie, La mort d\'Empédocle, et Bachelard construit un "complexe d\'Empédocle" dans ses ouvrages sur le feu. Il s\'agit du désir inconscient d\'être consumé, détruit par les flammes. Dans les années 960, la philosophie d\'Empédocle est reconstruite et intégralement commentée par Jean Bollack.',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Zénon',
            dates: {
              begin: -490,
              end: -430
            },
            description: 'Zénon d\'Élée est un philosophe grec présocratique. Surnommé "le Palamède d\'Élée", selon une interprétation de Diogène Laërce qui voit en Zénon un palamède, c\'est-à-dire un habile dialecticien, dont parle Platon dans "le Phèdre". Il serait le principal disciple de Parménide, qui fut aussi son amant. Platon, dans le dialogue du Parménide, rapporte non sans complaisance, une rumeur ambiguë selon laquelle Zénon aurait été l\'amant de son maître. Zénon vécut comme Parménide à Élée, ville située dans le sud de l\'Italie. C\'est l\'un des représentants de l\'école d\'Élée. Périclès et Callias auraient été de ses élèves. Selon Diogène Laërce, Aristote attribue à Zénon d\'être l\'inventeur de la dialectique (méthode de raisonnement qui cherche à établir la vérité en défendant successivement des thèses opposées).',
            works: [
              {
                name: 'Paradoxes de Zénon',
                description: 'Les paradoxes de Zénon forment un ensemble de paradoxes imaginés par Zénon d\'Élée pour soutenir la doctrine de Parménide, selon laquelle toute évidence des sens est fallacieuse, et le mouvement est impossible. Ces paradoxes sont aussi interprétés par certains chercheurs comme des arguments dirigés contre l\'école de Pythagore qui affirmait la divisibilité du mouvement. Plusieurs des huit paradoxes de Zénon ont traversé le temps (rapportés par Aristote dans la Physique et par Simplicius dans un commentaire à ce sujet). Certains ont été considérés, même dans des périodes antiques, comme faciles à réfuter (en particulier par Aristote). Les paradoxes de Zénon représentaient un problème important pour les philosophes antiques et médiévaux, qui n\'ont trouvé aucune solution satisfaisante jusqu\'au XVIIe siècle, avec le développement en mathématiques de résultats sur les suites infinies et de l\'analyse.',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Gorgias',
            dates: {
              begin: -490,
              end: -430
            },
            description: 'Gorgias de Léontinoi est un philosophe présocratique Sophiste. Contemporain de Socrate, il apparaît dans plusieurs dialogues de Platon. ',
            works: [
              {
                name: 'Rhétorique',
                description: '"Rien n\'existe". Il ne reste que le discours, objet des sophistes : "Car le moyen que nous avons de révéler, c\'est le discours!" Mais un discours qui ne prétend pas, comme c\'est évidemment le cas de Platon, pouvoir atteindre la vérité. Un simple discours dans toute sa matérialité qui ne renvoie qu\'à lui-même nécessite un savoir technique pour produire son effet: la rhétorique, dont Gorgias serait le premier inventeur. À côté de la faiblesse de la vérité, Gorgias pose la force du langage, son pouvoir sur les esprits, par l\'argumentation, et sur les émotions, par le rythme et les effets sonores. Ce pouvoir peut être bien ou mal utilisé; la technè rhêtorikè ne garantit ni n\'élève la moralité de celui qui l\'emploie, il s\'agit d\'un instrument neutre. En cela, Gorgias est le fondateur du pragmatisme rhétoricien, opposé à l\'idéalisme philosophique à la manière de Platon (les leçons de Socrate conduisent ceux qui les écoutent à devenir meilleurs). Gorgias développe l\'idée que l\'orateur peut aider les États à faire des choix politiques, parce que sa technè lui permet d\'abord d\'analyser la situation, puis de convaincre en vue de l\'action.',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Protagoras',
            dates: {
              begin: -490,
              end: -420
            },
            description: 'Protagoras est un philosophe présocratique Sophiste. Renommé de son vivant, Protagoras est resté célèbre pour son agnosticisme avoué et un certain relativisme: "Des dieux, je ne sais ni s\'ils sont ni s\'ils ne sont pas", "Sur toutes choses il est toujours possible de formuler deux discours" et "L\'homme est la mesure de toute chose".',
            works: [
              {
                name: 'Relativisme',
                description: '"L\'homme est la mesure de toutes choses": Dans le Théétète de Platon, la doctrine de Protagoras est examinée dans la première tentative de définition de la science. Selon sa doctrine, c\'est du point de vue de ce que perçoit l\'homme que le bien et le mal, le vrai et le faux prendraient leur définition. La vérité, la justice ou la morale seraient alors relatives. L\'énoncé peut aussi signifier que c\'est l\'homme qui crée les différences en ce qui concerne le langage, le savoir, la sensibilité ou les perceptions. Alors toute affirmation faite par un homme n\'aurait de signification absolue que pour cet homme. Dans Protagoras, Platon lui consacre un dialogue qui décrit une discussion entre lui et Socrate ce dernier demande en quoi consiste son enseignement. Protagoras répond que son enseignement "porte sur la manière de bien délibérer dans les affaires privées, savoir comment administrer au mieux sa propre maison, ainsi que, dans les affaires de la cité, savoir comment devenir le plus à même de les traiter, en actes comme en paroles". Cela ne convainc pas Socrate qui doute que l\'art politique puisse s\'enseigner et qui regrette que, dans la cité, tout citoyen puisse prendre la parole sans qu\'aucun savoir puisse la justifier. Selon Protagoras, l\'enseignement de la vertu, au sein de la cité se fait par échange entre égaux tout au long de l\'existence tandis que l\'enseignement d\'un métier se passe entre un maître qui enseigne a ses disciples. Il distingue l\'enseignement vertical de la technique à l\'enseignement horizontal de la vertu. Dans sa pensée ce sont les rencontres entre citoyens, et la délibération constante inhérentes à la vie civique qui enseigne la vertu, sans qu\'aucun prérequis ne soit nécessaire.',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Démocrite',
            dates: {
              begin: -460,
              end: -370
            },
            description: 'Démocrite d\'Abdère est un philosophe grec présocratique considéré comme matérialiste en raison de sa conception d\'un Univers constitué d\'atomes et de vide. Il a été un disciple de Leucippe, le fondateur de l\'atomisme. Les contributions exactes de Démocrite sont difficiles à démêler de celles de son mentor Leucippe, car ils sont souvent mentionnés ensemble dans les textes des doxographes. Leurs spéculations sur les atomes se rapprochent de la compréhension du XIXe siècle de la structure atomique. C\'est pourquoi Démocrite est considéré a posteriori comme le plus scientifique des philosophes grecs, voire comme le "père de la science moderne", bien que ses idées reposent sur des bases très différentes de celle-ci.',
            works: [
              {
                name: 'Atomisme',
                description: 'Les ouvrages de Démocrite ont été perdus ou détruits. Ses pensées ainsi que quelques fragments de son œuvre nous ont été transmis par de nombreux doxographes dont Simplicius, Aristote, Diogène Laërce ou Plutarque. Les Anciens nous disent que Démocrite "avait écrit sur tout" : sur les mathématiques, il avait composé des traités remarquables, selon le témoignage d\'Archimède qui donne des exemples des découvertes mathématiques de Démocrite. Il avait aussi écrit sur la biologie, sur la physique, sur la philologie, l\'histoire littéraire et la musique, et formulé son système de la nature. Son œuvre sur la morale se trouve dans deux collections qui comptent plus de deux cents maximes et courts textes, citations ou extraits d\'anthologies publiées après sa mort.',
                hidden: true
              }
            ],
            hidden: true
          },
        ],
        hidden: true
      },
      {
        name: 'Époque classique',
        dates: {
          begin: -480,
          end: -323
        },
        description: 'Après avoir repoussé les assauts des Perses en sortant vainqueurs des guerres médiques, Athènes et Sparte sont les deux plus puissantes cités grecques, se confrontant avec leurs alliés respectifs dans la guerre du Péloponnèse (431-404). La confrontation des cités se poursuit au siècle suivant. Sparte ne parvient pas à asseoir sa primauté et le monde grec voit la rivalité de plusieurs puissances (Sparte, Athènes, Thèbes qui devient la troisième grande puissance grecque, aussi la Perse), jusqu\'à la mise en place de l\'hégémonie du royaume de Macédoine par son roi Philippe II (père d\'Alexandre le Grand). La période classique est avant tout documentée par des sources athéniennes, cette cité étant alors la plus vaste, la plus riche et celle où la vie culturelle est la plus dynamique: développement de la philosophie, la rhétorique, les sciences, etc. Cette période s\'achève par la conquête de l\'empire perse par Alexandre le Grand, roi de Macédoine (335-323 av. J.-C.). La philosophie grecque classique fleurit à Athènes, d\'abord avec Socrate, puis avec son disciple Platon et avec l\'élève de ce dernier, Aristote, ainsi que les quatre écoles qu\'on appelle "socratiques" (cyniques, cyrénaïques, mégariques, école d\'Élis).',
        events: [
          {
            name: 'Guerres médiques',
            date: {
              begin: -490,
              end: -479,
            },
            description: 'Les guerres médiques opposent les Grecs aux Perses de l\'Empire achéménide au début du Ve siècle av. J.-C. Elles sont déclenchées par la révolte des cités grecques asiatiques contre la domination perse, l\'intervention d\'Athènes en leur faveur entraînant des représailles. Les deux expéditions militaires des souverains achéménides Darius Ier et Xerxès Ier constituent les principaux épisodes militaires de ce conflit; il se conclut par la victoire spectaculaire des cités grecques européennes conduites par Athènes et Sparte. Les guerres médiques apparaissent comme le point de départ de l\'hégémonie athénienne en mer Égée, mais aussi comme la prise de conscience d\'une certaine communauté d\'intérêts du monde grec face à la Perse, idée que reprend, près de deux siècles plus tard, Alexandre le Grand.',
            hidden: true
          },
          {
            name: 'Pentécontaétie',
            date: {
              begin: -479,
              end: -431,
            },
            description: 'La pentécontaétie est l\'âge d\'or d\'Athènes, généralement situé sur une période de cinquante ans qui sépare la victoire des Grecs sur les Perses à l\'issue des guerres médiques et la guerre du Péloponnèse. Cette période est décrite par Thucydide et a pour figure principale Périclès.',
            hidden: true
          },
          {
            name: 'Guerre du Péloponnèse',
            date: {
              begin: -431,
              end: -404,
            },
            description: 'La guerre du Péloponnèse est le conflit qui oppose la ligue de Délos, menée par Athènes, et la ligue du Péloponnèse, sous l\'hégémonie de Sparte. Provoquée par trois crises successives en peu de temps, la guerre est cependant principalement causée par la crainte de l\'impérialisme athénien chez les alliés de Sparte. Ce conflit met fin à la pentécontaétie et s\'étend de 431 à 404 en trois périodes généralement admises: la période archidamique de 431 à 421, la guerre indirecte de 421 à 413, et la guerre de Décélie et d\'Ionie, de 413 à 404. Thucydide, avec son ouvrage Histoire de la Guerre du Péloponnèse, est la principale source des historiens modernes. Cet ouvrage est cependant inachevé, se terminant brutalement en 411, et le dénouement du conflit est relaté dans les Helléniques de Xénophon.',
            hidden: true
          },
          {
            name: 'Conquêtes d\'Alexandre le Grand',
            date: {
              begin: 0,
              end: 0,
            },
            description: '',
            hidden: true
          }
        ],
        people: [
          {
            name: 'Eschyle',
            dates: {
              begin: -525,
              end: -456
            },
            description: '',
            works: [
              {
                name: '',
                description: '',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Périclès',
            dates: {
              begin: -495,
              end: -429
            },
            description: '',
            works: [
              {
                name: '',
                description: '',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Sophocle',
            dates: {
              begin: -495,
              end: -406
            },
            description: '',
            works: [
              {
                name: '',
                description: '',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Euripide',
            dates: {
              begin: -483,
              end: -406
            },
            description: '',
            works: [
              {
                name: '',
                description: '',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Hérodote ',
            dates: {
              begin: -480,
              end: -425
            },
            description: '',
            works: [
              {
                name: '',
                description: '',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Socrate',
            dates: {
              begin: -470,
              end: -399
            },
            description: '',
            works: [
              {
                name: '',
                description: '',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Thucydide',
            dates: {
              begin: -460,
              end: -395
            },
            description: '',
            works: [
              {
                name: '',
                description: '',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Antisthène',
            dates: {
              begin: -440,
              end: -362
            },
            description: '',
            works: [
              {
                name: '',
                description: '',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Aristippe de Cyrène',
            dates: {
              begin: -435,
              end: -356
            },
            description: '',
            works: [
              {
                name: '',
                description: '',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Xénophon',
            dates: {
              begin: -430,
              end: -355
            },
            description: '',
            works: [
              {
                name: '',
                description: '',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Platon',
            dates: {
              begin: -428,
              end: -347
            },
            description: '',
            works: [
              {
                name: '',
                description: '',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Diogène de Sinope',
            dates: {
              begin: -413,
              end: -327
            },
            description: '',
            works: [
              {
                name: '',
                description: '',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Aristote',
            dates: {
              begin: -384,
              end: -322
            },
            description: '',
            works: [
              {
                name: '',
                description: '',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Philippe II',
            dates: {
              begin: -382,
              end: -336
            },
            description: '',
            works: [
              {
                name: '',
                description: '',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Ptolémée',
            dates: {
              begin: -366,
              end: -283
            },
            description: 'Royaume lagide',
            works: [
              {
                name: '',
                description: '',
                hidden: true
              }
            ],
            hidden: true
          },
          {
            name: 'Alexandre le grand',
            dates: {
              begin: -356,
              end: -323
            },
            description: '',
            works: [
              {
                name: '',
                description: '',
                hidden: true
              }
            ],
            hidden: true
          },
        ],
        hidden: true
      },
      {
        name: 'Époque hellénistique',
        dates: {
          begin: -323,
          end: -31
        },
        description: 'Les héritiers d\'Alexandre se partagent les pays conquis (Égypte pour les Lagides, Proche-Orient pour les Séleucides, Macédoine pour les Antigonides), coexistant avec de nombreuses dynasties grecques ou hellénisées. Processus d\'hellénisation, avec la diffusion de la culture grecque dans les régions conquises. Poursuite des traditions artistiques et intellectuelles grecques. La philosophie hellénistique (après la mort d\'Alexandre le Grand en 323 av. J.-C.), comporte trois principales écoles, qui poursuivront leur essor dans le monde romain : l\'épicurisme, le stoïcisme et le scepticisme.',
        events: [
          {
            name: 'Guerres des Diadoques',
            date: 0,
            description: '',
            hidden: true
          }
        ],
        people: [],
        hidden: true
      },
      {
        name: 'Grèce romaine',
        dates: {
          begin: -146,
          end: 330
        },
        description: 'Rome intervient en Grèce dès la fin du IIIe siècle av. J.-C., puis annexe la Grèce et les royaumes hellénistiques par étapes entre 146 av. J.-C., jusqu\'en 31 av. J.-C. La Grèce fait ensuite partie de l\'empire romain, dont la partie orientale est de culture dominante grecque, posant les bases de l\'Empire romain d\'Orient, dont l\'acte de naissance peut être situé lors de la fondation de Constantinople en 330.',
        events: [],
        people: [],
        hidden: true
      },
      {
        name: 'Antiquité tardive',
        dates: {
          begin: 284,
          end: 800
        },
        description: 'Mise en place progressive de la civilisation byzantine (on parle aussi de période "paléo-byzantine" à partir du IVe siècle), autour de l\'Empire romain d\'Orient dirigé depuis Constantinople, de langue grecque, christianisation des pays de culture grecque, fin des institutions civiques antiques.',
        events: [],
        people: [],
        hidden: true
      },
    ];
  }

  ngOnInit(): void {
  }

}

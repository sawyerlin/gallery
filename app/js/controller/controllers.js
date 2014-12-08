var galleryControllers = angular.module('galleryControllers', []);

var homeDatas = {
  "TopFive": [
    {
      "Id": 0,
      "Name": "Still Life：Vase with Fifteen Sunflowers",
      "Url": "vangogh/sunflower.jpg"
    },
    {
      "Id": 1,
      "Name": "la Jaconde",
      "Url": "Davinci/la Jaconde.jpg"
    },
    {
      "Id": 2,
      "Name": "Nymphéas",
      "Url": "monet/Nympheas.jpg"
    },
    {
      "Id": 3,
      "Name": "Autoportrait",
      "Url": "piccaso/Autoportrait.jpg"
    },
    {
      "Id": 4,
      "Name": "战马图",
      "Url": "xubeihong/战马图.jpg"
    }
  ],
  "Painters": ["davinci", "monet", "picasso", "vangogh", "xubeihong"],
  "Kind": ["Moderne", "Classique"]
},
datas = {
  "davinci" : {
    "Type": "Classique",
    "Oeuvre": [
      {
        "Id": 0,
        "Name": "la Jaconde",
        "Description": "C'est le portrait le plus célèbre au monde. L'identité du modèle est régulièrement remise en question, mais on admet généralement qu’il s’agit d’une dame florentine, prénommée Lisa, épouse de Francesco del Giocondo. ",
        "Url": "Davinci/la Jaconde.jpg"
      },
      {
        "Id": 1,
        "Name": "La Vierge aux rochers",
        "Description": "La Vierge aux rochers représente la Vierge Marie et l'enfant Jésus, accompagnés de l'ange Uriel, qui auraient rencontré le jeune saint Jean-Baptiste dans une caverne lors de la fuite en Egypte.",
        "Url": "Davinci/La Vierge aux rochers.jpg"
      },
      {
        "Id": 2,
        "Name": "La Cène",
        "Description": "La Cène par Léonard de Vinci est l'œuvre originale représentant le dernier repas du Christ et ses douze apôtres le soir du jeudi saint, juste avant d'être arrêté par les Romains. Soir, qui n'est autre que la veille du jour de sa crucifixion.",
        "Url": "Davinci/La Cène.jpg"
      },
      {
        "Id": 3,
        "Name": "La Dame à l’hermine",
        "Description": "Il représente Cecilia Gallerani, une jeune et belle poétesse italienne. Elle a 16-17 ans quand elle est représentée sur ce tableau, mais elle est surtout la maîtresse de Ludovic Sforza, qui est le duc de Milan, et qui est apparenté à la reine Bona Sforza de Pologne. ",
        "Url": "Davinci/La dame à l'hermine.jpg"
      },
      {
        "Id": 4,
        "Name": "La Vierge, l'Enfant Jésus et sainte Anne",
        "Description": "C'est l'une des œuvres phares du musée du Louvre, entrée dès 1797, et presque aussi célèbre que la Joconde. Signalons en passant que, selon la tradition, Anne ne vivait déjà plus à la naissance de Jésus...",
        "Url": "Davinci/La Vierge, l'Enfant Jésus et sainte Anne.jpg"
      },
      {
        "Id": 5,
        "Name": "Le Baptême du Christ",
        "Description": "Aujourd'hui, l'Eglise est unie à son Epoux : le Christ, au Jourdain, la purifie de ses fautes, les mages apportent leurs présents aux noces royales, l’eau est changée en vin, pour la joie des convives, Alléluia.",
        "Url": "Davinci/Le Baptême du Christ.jpg"
      },
      {
        "Id": 6,
        "Name": "Homme de Vitruve",
        "Description": "L'architecte Vitruve écrit dans son livre sur l’architecture que les mesures de l’homme sont ordonnées par la nature comme suit: 4 doigts font une paume, 4 paumes un pied, 6 paumes une coudée et 4 coudées font un double pas et 24 paumes une longueur d’homme. Ces mesures ont été utilisées dans ses édifices ",
        "Url": "Davinci/HommeDeVitruve.jpg"
      },
      {
        "Id": 7,
        "Name": "Ginevra de' Benci oeuvre",
        "Description": "Ce tableau est le premier point de repère véritable dans louvre picturale de Léonard. C’est en effet le premier tableau de sa main qui puisse être mis en rapport avec une situation documentée. ",
        "Url": "Davinci/Ginevra de' Benci.jpg"
      },
      {
        "Id": 8,
        "Name": "L'Annonciation",
        "Description": "L'Annonciation est une huile sur bois mesurant 98 centimètres de hauteur et 217 centimètres de largeur, peinte par Léonard de Vinci vers 1472-1475. Ce tableau est exposé à la Galerie des Offices de Florence. La scène représente l’Ange Gabriel saluant la Vierge Marie et l'interrompant dans sa lecture de la Bible pour lui annoncer qu’elle est destinée à donner naissance au fils de Dieu.",
        "Url": "Davinci/L'Annonciation.jpg"
      },
      {
        "Id": 9,
        "Name": "Saint Jean-Baptiste",
        "Description": "Dans la dernière œuvre de Léonard de Vinci et qu’il réalisa ayant le bras droit paralysé, entre 1513-1516.",
        "Url": "Davinci/Saint Jean-Baptiste.jpg"
      },
      {
        "Id": 10,
        "Name": "La Belle Ferronnière",
        "Description": "La Belle Ferronnière est un tableau peint de 1495 à 1497 sur un panneau en bois de noyer et exposé au Musée du Louvre à Paris. Il est attribué à Léonard de Vinci et à son atelier.",
        "Url": "Davinci/La Belle Ferronnière.jpg"
      }
    ]
  },
  "monet": {
    "Type": "Moderne",
    "Oeuvre": [
      {
        "Id": 0,
        "Name": "Nymphéas",
        "Description": "Nymphéas est en botanique le nom savant des nénuphars blancs. Monet les cultive dans le jardin d'eau qu'il fait aménager en 1893 dans sa propriété de Giverny. A partir des années 1910 et jusqu'à la mort du peintre en 1926, le jardin et son bassin, en particulier, deviennent son unique source d'inspiration. ",
        "Url": "monet/Nympheas.jpg"
      },
      {
        "Id": 1,
        "Name": "Impression soleil levant",
        "Description": "La toile qui a donné son nom à l'impressionnisme et qui est le fleuron des collections du musée Marmottan Monet, est l'une des  peintures les plus célèbres au monde. ",
        "Url": "monet/Impression soleil levant.jpg"
      },
      {
        "Id": 2,
        "Name": "La Promenade, la femme à l ombrelle",
        "Description": "Mise en scène à chaque fois,  il met en valeur la fragilité de la femme, sa grâce sous la lumière souvent très forte, un ciel d’un bleu profond en arrière plan.",
        "Url": "monet/La Promenade, la femme à l ombrelle.png"
      },
      {
        "Id": 3,
        "Name": "Bouquet de soleils",
        "Description": "Des tournesols épanouis, C Monet fait des zones vibrantes, des capteurs solaires. Touche douce et caressante, fond travaillé de rose, de mauve, de violet : malgré les couleurs vives des fleurs jaunes, des feuilles vertes, de la nappe rouge, l'ensemble exhale une beauté comme féminine.",
        "Url": "monet/Bouquet de soleils.jpg"
      },
      {
        "Id": 4,
        "Name": "Les Coquelicots à Argenteuil",
        "Description": "Ce tableau aujourd'hui célèbre dans le monde entier, qui est sans doute l'une des œuvres impressionnistes les plus appréciées, est l'une des quelque deux cent quarante toiles que Monet produisit durant les sept années de son séjour à Argenteuil. ",
        "Url": "monet/Les Coquelicots à Argenteuil.jpg"
      },
      {
        "Id": 5,
        "Name": "Le Pont d Argenteuil",
        "Description": "Le pont d'Argenteuil, peint à l'huile sur toile de 60,5 par 80 centimètres a été réalisée en 1874, l'année de la première exposition du groupe impressionniste. Ce paysage était particulièrement cher à son coeur, puisqu'il l'a représenté sept fois.",
        "Url": "monet/Le Pont d Argenteuil.jpg"
      },
      {
        "Id": 6,
        "Name": "Le Jardin de Monet, les iris",
        "Description": "C'est en 1883 que Monet s'installe dans une petite propriété à Giverny, dans la vallée de la Seine.",
        "Url": "monet/Le Jardin de Monet, les iris.jpg"
      },
      {
        "Id": 7,
        "Name": "Meules, fin de l été, effet du matin",
        "Description": "Le présent effet du matin est peint en regardant vers le sud-ouest, en direction des hauteurs de la rive gauche de la Seine, de Port-Villez au Grand Val dont le creux apparait ici à droite",
        "Url": "monet/Meules, fin de l été, effet du matin.jpg"
      },
      {
        "Id": 8,
        "Name": "La Pie",
        "Description": "Cette œuvre, refusée au Salon de 1869, sera très critiquée ; elle était sûrement trop innovante. De taille moyenne, 89 cm de hauteur et 130 cm de long, c’est une huile sur toile ; elle est aujourd’hui conservée au musé d’Orsay à Paris dans la collection permanente.",
        "Url": "monet/La Pie.jpg"
      },
      {
        "Id": 9,
        "Name": "Champs de tulipes, Hollande",
        "Description": "Champ de tulipes, Hollande (1886), Claude Monet - Legs de la princesse de Polignac au musée du Louvre en 1944",
        "Url": "monet/Champs de tulipes, Hollande.jpg"
      },
      {
        "Id": 10,
        "Name": "Reflets verts",
        "Description": "Cette reproduction d'une œuvre d'art offre une images nette et vibrante avec une grande précision des couleurs. ",
        "Url": "monet/Reflets verts.jpg"
      }
    ]
  },
  "picasso" : {
    "Type": "Moderne",
    "Oeuvre": [
      {
        "Id": 0,
        "Name": "Autoportrait",
        "Description": "L'Autoportrait peint par Picasso en 1901 fait partie de la période bleue du peintre de 1901 à 1903. Cette période est marquée par la disparition d’un ami très proche du peintre, Carlos Casagemas, après son suicide Picasso plonge dans un univers sombre et pesant. ",
        "Url": "piccaso/Autoportrait.jpg"
      },
      {
        "Id": 1,
        "Name": "Science et Charité",
        "Description": "Une grande maturité et un sens inné de la composition. La mise perspective du monde vivant (cf les murs et personnages) tranche avec le traitement axonométrique* du lit qui préfigure la mort.",
        "Url": "piccaso/Science et Charité.jpg"
      },
      {
        "Id": 2,
        "Name": "La Chambre bleue",
        "Description": "DÉCOUVERTE La National Gallery Of Art de Washington a révélé, à la lumière infrarouge, le portrait d'un homme derrière la toile du peintre espagnol.",
        "Url": "piccaso/La Chambre bleue.jpg"
      },
      {
        "Id": 3,
        "Name": "La Vie",
        "Description": "Cette œuvre marque un point culminant de la période bleue, la Vie constitue également un tableau capital dans l’œuvre de Picasso. Plusieurs tentations, pour être esthétiques, n’en reflètent pas moins l’état d’esprit de leur auteur, s’y retrouvent confrontés et de sa vision et de sa conception de la condition humaine. ",
        "Url": "piccaso/La Vie .jpg"
      },
      {
        "Id": 4,
        "Name": "Trois Danseurs",
        "Description": "Le tableau montre trois danseurs, l un à la droite étant à peine visible. Une danse macabre se déroule, avec la danseuse sur la gauche ayant la tête penchée à un angle quasi-impossible. ",
        "Url": "piccaso/Trois Danseurs.jpg"
      },
      {
        "Id": 5,
        "Name": "La femme qui pleure",
        "Description": "Il est en petits morceaux, c'est vrai, mais la forme des pièces est moins régulière que dans un jeu de puzzle. On dirait qu'elles ont été faites un peu n'importe comment, et l'on n'est pas sûr qu'elles soient bien mises à leur place.",
        "Url": "piccaso/La femme qui pleure.jpg"
      },
      {
        "Id": 6,
        "Name": "Deux femmes courant sur la plage",
        "Description": "Deux femmes courant sur la plage est un tableau de Picasso peint pendant sa période néoclassique en 1922. Deux femmes courant sur la plage représente deux femmes fortes, à moitié nues, courant le long de la berge.",
        "Url": "piccaso/Deux femmes courant sur la plage.jpg"
      },
      {
        "Id": 7,
        "Name": "Minotauromachie",
        "Description": "En 1935 dans une eau-forte intitulée : « La Minotaureaumachie », Picasso exécute une représentation du Minotaure emprunté à la mythologie grecque.",
        "Url": "piccaso/Minotauromachie .jpg"
      },
      {
        "Id": 8,
        "Name": "Les Demoiselles d'Avignon",
        "Description": "Les demoiselles d'Avignon est l'une des œuvres les plus célèbres de Picasso. Pour peindre cette œuvre, Picasso fait preuve d'innovation. Cette œuvre suscite des réactions passionnées, elle est caractérisée par un langage géométrique et par beaucoup de points de vue. C'est le point de départ du cubisme.",
        "Url": "piccaso/Les Demoiselles d'Avignon.gif"
      },
      {
        "Id": 9,
        "Name": "Les Baigneuses",
        "Description": "Picasso passe son voyage de noces avec Olga à Biarritz. Au bord de la mer où il ne manquera plus de venir passer les périodes estivales, Picasso retrouve le thème du bain et des baigneuses qu'il avait découvert chez Cézanne mais aussi dans l'œuvre d'Ingres. ",
        "Url": "piccaso/Les Baigneuses .jpg"
      },
      {
        "Id": 10,
        "Name": "Le Charnier",
        "Description": "Il a été réalisé entre 1944 et 1945 par Pablo Picasso un artistepeintre d'origine espagnole née en 1881 et décédé en 1973.",
        "Url": "piccaso/Le Charnier .jpg"
      }
    ]
  },
  "vangogh" : {
    "Type": "Classique",
    "Oeuvre": [
      {
        "Id": 0,
        "Name": "Still Life：Vase with Fifteen Sunflowers",
        "Description": "Les Tournesols est le nom attribué à chacun des sept tableaux peints à Arles par Vincent van Gogh en août 1888 pour les quatre premiers tableaux qui composent la série proprement dite et en janvier 1889 pour les trois derniers, appelés les Répétitions.",
        "Url": "vangogh/sunflower.jpg"
      },
      {
        "Id": 1,
        "Name": "Cafe Terrace at Night",
        "Description": "Dans cette peinture, Van Gogh a exprimé ses nouvelles impressions sur la France méridionale. L'œuvre dépeint un café situé dans le quartier de la Cité de la ville d'Arles, qui s'appelait alors la \"Terrasse\" et qui a, par la suite, été renommé \"Café van Gogh\".",
        "Url": "vangogh/Cafe Terrace at Night.jpg"
      },
      {
        "Id": 2,
        "Name": "Nuit étoilée sur le Rhône",
        "Description": "Nuit étoilée sur le Rhône est une peinture de Vincent Van Gogh, réalisée à la fin septembre 1888, représentant Arles la nuit, ville où le peintre vivait à l'époque.",
        "Url": "vangogh/Nuit_etoilee_sur_le_Rhone.jpg"
      },
      {
        "Id": 3,
        "Name": "Portrait de l'artiste",
        "Description": "Au cours de sa vie, l'artiste-peintre hollandais Vincent Van Gogh a réalisés plusieurs autoportraits. ",
        "Url": "vangogh/Portrait de l'artiste.jpg"
      },
      {
        "Id": 4,
        "Name": "La Vigne rouge",
        "Description": "La Vigne rouge à Montmajour, connu sous le nom La Vigne rouge, est une peinture à l'huile de l'artiste peintre hollandais Vincent Van Gogh, exécutée à Arles en novembre 1888. C'est le seul tableau qu'il ait vendu publiquement de son vivant.",
        "Url": "vangogh/La Vigne rouge.jpg"
      },
      {
        "Id": 5,
        "Name": "Portrait du docteur Rey",
        "Description": "Ce tableau représente l'interne Felix Rey d'Arles qui avait soigné Van Gogh à la suite de la crise d'épilepsie ou de démence au cours de laquelle le peintre s'était mutilé l'oreille. L'artiste lui a fait don de cette œuvre à titre de remerciement ou plus exactement de souvenir",
        "Url": "vangogh/Portrait du docteur Rey.jpg"
      },
      {
        "Id": 6,
        "Name": "Champ de blé aux corbeaux",
        "Description": "Champ de blé aux corbeaux est une peinture à l'huile réalisée par le peintre Vincent Van Gogh en juillet 1890.",
        "Url": "vangogh/Champ_de_ble_aux_corbeaux.jpg"
      },
      {
        "Id": 7,
        "Name": "Maison Jaune.",
        "Description": "Le tableau représente une maison du quartier de la Cavalerie située 2 place Lamartine à Arles, en France.",
        "Url": "vangogh/Maison Jaune.jpg"
      },
      {
        "Id": 8,
        "Name": "Les Mangeurs de pommes de terre.",
        "Description": "D'abord confiée à Théo Van Gogh pour une éventuelle vente, cette huile sur toile fait partie de l'exposition permanente du musée van Gogh à Amsterdam.",
        "Url": "vangogh/Les Mangeurs de pommes de terre.jpg"
      },
      {
        "Id": 9,
        "Name": "Portraits de la famille Roulin.",
        "Description": "Les Portraits de la famille Roulin forment un ensemble de portraits réalisés par le peintre hollandais Van Gogh à Arles entre 1888 et 1890.",
        "Url": "vangogh/Portraits de la famille Roulin.jpg"
      },
      {
        "Id": 10,
        "Name": "Boy Cutting Grass with a Sickle.",
        "Description": "Boy Cutting Grass with a Sickle is a watercolor painting created in 1881 by Vincent van Gogh. It is owned by the Kröller-Müller Museum.",
        "Url": "vangogh/Boy Cutting Grass with a Sickle.jpg"
      }
    ]
  },
  "xubeihong": {
    "Type": "Moderne",
    "Oeuvre": [
      {
        "Id": 0,
        "Name": "战马图",
        "Description": "作品无背景，画家以粗犷豪放的线条，在雪白的宣纸上绘一匹精神抖擞挺立的骏马。",
        "Url": "xubeihong/战马图.jpg"
      },
      {
        "Id": 1,
        "Name": "双喜图",
        "Description": "喜鹊是中国传统的吉祥题材，在徐悲鸿笔下，通常具有人格化的意义。",
        "Url": "xubeihong/双喜图.jpg"
      },
      {
        "Id": 2,
        "Name": "八骏图",
        "Description": "以周穆王八骏为题材，八匹马形态各异，飘逸灵动，为不可多得的珍品。",
        "Url": "xubeihong/八骏图.jpg"
      },
      {
        "Id": 3,
        "Name": "yu'gongyishan",
        "Description": "《愚公移山图》极具现实意义。它作于1940年，正值中国人民抗日的危急时刻，画家意在以形象生动的艺术语言表达抗日民众的决心和毅力，鼓舞人民大众去争取最后的胜利。",
        "Url": "xubeihong/yugongyishan.jpg"
      },
      {
        "Id": 4,
        "Name": "田横五百壮士",
        "Description": "画面选取了田横与五百壮士诀别的场面，着重刻划了不屈的激情，表现出富贵不能淫、威武不能屈的鲜明主题。",
        "Url": "xubeihong/田横五百壮士.jpg"
      },
      {
        "Id": 5,
        "Name": "双猫立轴",
        "Description": "猫是徐悲鸿特别喜爱的题材，如他画的马一样意气勃发，气韵生动。",
        "Url": "xubeihong/双猫立轴.jpg"
      },
      {
        "Id": 6,
        "Name": "鸡立轴",
        "Description": "徐悲鸿画竹鸡，凡数十幅，又大又精者此幅当属其一，且造型准确，洵为难得。图中雄鸡雄健形神兼备，惟妙惟肖，青竹坚毅挺拔，粗细交辉。雄鸡寓意吉祥如意，青竹象征长青平安，乃有吉祥平安之意。此画是徐悲鸿将自己的爱国情感堪托於动物之上的精品之作。",
        "Url": "xubeihong/鸡立轴.jpg"
      },
      {
        "Id": 7,
        "Name": "竹林仕女",
        "Description": "題作「君看竹搖處，猶有對影人，壬午之秋悲鴻作」",
        "Url": "xubeihong/竹林仕女.jpg"
      },
      {
        "Id": 8,
        "Name": "奔马图",
        "Description": "在此幅画中，徐悲鸿运用饱含奔放的墨色勾勒头、颈、胸、腿等大转折部位，并以干笔扫出鬃尾，使浓淡干湿的变化浑然天成。",
        "Url": "xubeihong/奔马图.jpg"
      },
      {
        "Id": 9,
        "Name": "梅花",
        "Description": "此图绘一株粗大的腊梅，繁枝密蕊；主干以粗笔直接画出，水墨淋漓，在以白粉点燃梅花，设色清新",
        "Url": "xubeihong/梅花.jpg"
      },
      {
        "Id": 10,
        "Name": "girl",
        "Description": "The girl with cat.",
        "Url": "xubeihong/girl.jpg"
      }
    ]
  }
};

galleryControllers.controller('HomeController', function($scope, $http) {
  
  $scope.TopFive = homeDatas.TopFive;
  $scope.Kind = homeDatas.Kind;
  $scope.Painters = [];
  $scope.Filter = "Moderne";
  $scope.ChangeFilter = function (filter) {
    $scope.Filter = filter;
  };
  $scope.Limits = [];
  $scope.ChangeLimit = function (name) {
    var painter = _.find($scope.Painters, function(painter) { return painter.Name === name; });

    painter.Limit = painter.Limit == 5 ? 100 : 5;
    painter.LimitName = painter.Limit == 5 ? 'Encore Plus': 'Moins';
  }

  angular.forEach (homeDatas.Painters, function (value, key) {
    var data = datas[value];

    var painter = {
      Name : value,
      Contents : data,
      Limit: 5,
      LimitName: 'Encore Plus'
    };
    $scope.Painters.push(painter);
  });
}).controller('DetailController', function($scope, $routeParams, $http) {
    var name = $routeParams.name,
        id = $routeParams.id;
    
    var data = datas[name];
    var oeuvre = _.find(data.Oeuvre, function(oeuvre) { return oeuvre.Id == id; });
    $scope.Oeuvre = oeuvre;
}).controller('ContactController', function($scope) {
  function setPosition(mapOptions) {
    console.log(mapOptions);
    console.log(google.maps);
    var map = new google.maps.Map($('#map-canvas')[0], mapOptions);
    console.log(map);
  }

  function initialize() {
    var mapOptions = {
        center: { lat: -34.397, lng: 150.644},
        zoom: 8
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          mapOptions.center.lat = position.coords.latitude;
          mapOptions.center.lng = position.coords.longitude;
          setPosition(mapOptions);
        });
    } else {
        setPosition(mapOptions);
    }
  }

  initialize();
});

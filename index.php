<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="description" content="Computer Science Engineering student"/>
        <title>David Delemotte</title>
        <link rel="icon" type="image/png" href="img/favicon.png" />
        <link rel="stylesheet" href="styles/bootstrap.min.css">
        <link rel="stylesheet" href="styles/main.min.css">
        <link rel="stylesheet" href="styles/fontello-885448a1/css/fontello.css">
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,500|Roboto:100,300,400,500" rel="stylesheet">
        <script src="scripts/jquery-3.3.1.min.js"></script>
        <script src="scripts/imakewebthings-waypoints-34d9f6d/lib/jquery.waypoints.min.js"></script>
        <script src="scripts/jquery.easing.1.3.js"></script>
        <script src="scripts/main.js"></script>
        
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-57283479-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-57283479-1');
        </script>
        
    </head>
    <body>
        
        <div class="hidden-elem traduction">
            <div  id="lang-fr" data-lang="fr" class="lang lang-selected"><span>FR</span></div>
            <div id="lang-en" data-lang="en" class="lang"><span>EN</span></div>
        </div>
        <div class="site-content">
            <img style="display: none" src="img/img1.PNG"/>
            <?php

                include('img/svg/my-svg.svg');
                include('img/svg/my-svg-suite.svg');
                include('img/svg/my-svg-suite2.svg');
                include('templates/header.html');
                include('templates/scolarity.html');
                include('templates/work.html');
                include('templates/skills.html');
                include('templates/projects.html');
                include('templates/interests.html');
//                include('templates/footer.html');
                include('templates/contact.html');
            ?>
        </div>

        <div class="site-popup">
            <div class="row">
                <div class="popup-elem-container" id="uqac">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <div class="popup-elem">
                            <p class="popup-title" data-translate="sc-modal-uqac-title"><span>UQAC</span> au Canada</p>
                            <p class="popup-subtitle" data-translate="sc-modal-uqac-sub">Maîtrise en informatique</p>
                            <p data-translate="sc-modal-uqac-desc">
                                Dernière année d'études au Canada en double diplôme en informatique.
                                Obtention du diplôme à l'issue du stage.
                            </p>
                            <ul>
                                <li data-translate="sc-modal-cpt1">Bases de données réparties <span>8INF803</span></li>
                                <li data-translate="sc-modal-cpt2">Forage de données <span>8INF954</span></li>
                                <li data-translate="sc-modal-cpt3">Gestion de projets informatiques <span>8INF847</span></li>
                                <li data-translate="sc-modal-cpt4">Génie logiciel <span>8INF851</span></li>
                                <li data-translate="sc-modal-cpt5">Intelligence artificielle <span>8INF846</span></li>
                                <li data-translate="sc-modal-cpt6">Programmation objet avancée <span>8INF957</span></li>
                                <li data-translate="sc-modal-cpt7">Structures de données avancées <span>8INF840</span></li>
                                <li data-translate="sc-modal-cpt8">Systèmes répartis <span>8INF843</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="popup-elem-container" id="isen">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <div class="popup-elem">
                            <p class="popup-title" data-translate="sc-modal-isen-title"><span>ISEN</span> en France</p>
                            <p class="popup-subtitle" data-translate="sc-modal-isen-sub">Diplôme d'ingénieur</p>
                            <p data-translate="sc-modal-isen-desc1">
                                Formation d'ingénieur avec spécialisation dans l'informatique et les réseaux. Obtention du diplôme à l'issue du stage.
                            </p>
                            <div class="row">
                                <div class="col-xs-6">
                                    <p data-translate="sc-modal-isen-tc">Tronc commun<br>ingénieur</p>
                                    <ul>
                                        <li data-translate="sc-modal-cpt9">Mathématiques</li>
                                        <li data-translate="sc-modal-cpt11">Probabilités</li>
                                        <li data-translate="sc-modal-cpt12">Électronique</li>
                                        <li data-translate="sc-modal-cpt13">Théorie de la décision</li>
                                        <li data-translate="sc-modal-cpt14">Codage canal</li>
                                        <li data-translate="sc-modal-cpt15">Traitement du signal</li>
                                        <li data-translate="sc-modal-cpt16">Gestion de projet</li>
                                    </ul>
                                </div>
                                <div class="col-xs-6">
                                    <p data-translate="sc-modal-isen-cir">Cycle informatique<br>et réseaux</p>
                                    <ul>
                                        <li data-translate="sc-modal-cpt17">C, C++, Java, Shell</li>
                                        <li data-translate="sc-modal-cpt18">Bases De Données</li>
                                        <li data-translate="sc-modal-cpt20">Développement web</li>
                                        <li data-translate="sc-modal-cpt21">Assembleur</li>
                                        <li data-translate="sc-modal-cpt22">Design Patterns, UML</li>
                                        <li data-translate="sc-modal-cpt23">Sécurité informatique</li>
                                        <li data-translate="sc-modal-cpt24">CISCO CCNA</li>
                                    </ul>
                                </div>
                            </div>
                            <p data-translate="sc-modal-isen-desc2"><br/>L'ISEN est une Grande École française habilitée par la CTI à délivrer le titre d'ingénieur.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="zone-detail-projet-container">
 
                <div class="col-md-3"></div>
                <div class="col-md-6" id="col-mouvement">
                    <div id="zone-detail-projet">
                        <div class="zone-detail-header">
                            <p class="popup-title">Titre</p>
<!--                            <p class="popup-subtitle"><span>CSS3</span><span>PHP</span><span>Javascript</span></p>-->
                        </div>
                        <div class="zone-detail-content">
                            <div class="zone-detail-slider">
                            </div>
                            <div class="slider-pagination">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>

    </body>
</html>
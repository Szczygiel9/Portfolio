(window["webpackJsonpsczygiels-portfolio"]=window["webpackJsonpsczygiels-portfolio"]||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/aws.d87ac8cd.jpg"},23:function(e,a,t){e.exports=t(35)},28:function(e,a,t){},29:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(11),r=t.n(o),l=(t(28),t(29),t(20)),s=t.n(l),c=function(){return i.a.createElement("div",{className:"item-list"},i.a.createElement("div",{className:"item"},i.a.createElement("h1",null,"SimpleSample"),i.a.createElement("p",null,"Github: ",i.a.createElement("a",{className:"link",href:"https://github.com/Szczygiel9/SimpleSample"},"link")),i.a.createElement("p",null,"Aplikacja pomagaj\u0105ca wype\u0142nia\u0107 baz\u0119 danych SQL testowymi danymi. Po podaniu struktury tabeli w postaci nazwy tabeli, nazw kolumn, typ\xf3w kolumn, opcjonalnych typ\xf3w instynktownych oraz potrzebnej liczby wierszy do wygenerowania u\u017cytkownik otrzymuje zapytanie INSERT, kt\xf3re wystarczy zaaplikowa\u0107 do swojej bazy danych."),i.a.createElement("p",null,"Projekt zosta\u0142 stworzony przy u\u017cyciu j\u0119zyka Java. Komunikacja zosta\u0142a zapewniona poprzez REST api. G\u0142\xf3wnym endpoint'em dla u\u017cytkownika jest '/processTable', kt\xf3ry przyjmuje w ciele zapytania struktur\u0119 tabeli oraz zwraca po\u017c\u0105dany kod SQL. Poza typem kolumny mo\u017cliwe jest podanie typu instynktowego. Jest jedna z warto\u015bci predefiniowanych typ\xf3w, dla kt\xf3rych zostanie wczytana warto\u015b\u0107 ze zbioru przyk\u0142adowych danych (np. Anna dla typu 'name', Microsoft dla typu 'company). W celu utrwalenia przyk\u0142adowych danych zosta\u0142a wykorzystana baza danych NoSQL MongoDB."),i.a.createElement("div",null,"Biblioteki wykorzystane w tym projekcie to:",i.a.createElement("div",null,i.a.createElement("ul",null,i.a.createElement("li",null,"Spring wraz z modu\u0142ami: Core, Rest, Data oraz Spring Boot"),i.a.createElement("li",null,"Lombok"),i.a.createElement("li",null,"Apache Commons"),i.a.createElement("li",null,"Swagger"),i.a.createElement("li",null,"JUnit"),i.a.createElement("li",null,"Jackson")))),i.a.createElement("p",null,"Start serwera mo\u017ce si\u0119 odby\u0107 z profilem data-init - \u0142aduje przyk\u0142adowe dane (np. imiona, miasta) do bazy, z kt\xf3r\u0105 komunikuje si\u0119 aplikacja serwerowa. Dane do za\u0142adowania s\u0105 wcze\u015bniej przygotowane w postaci plik\xf3w tekstowych. Utrwalenie tych danych zosta\u0142o zaimplementowane przy u\u017cyciu Spring\u2019owych auto-repozytor\xf3w, kt\xf3re dostarczaj\u0105 podstawowe operacje CRUD."),i.a.createElement("p",null,i.a.createElement("s",null,"Gotowa aplikacja zosta\u0142a wdro\u017cona na platform\u0119 AWS. W celu zbudowania aplikacji oraz jej deploymentu, zosta\u0142 u\u017cyty serwis AWS CodePipeline wraz z narz\u0119dziami CodeBuild oraz CodeDeploy. Ka\u017cdy wypchni\u0119ty commit do repozytorium GitHub wyzwala testy a nast\u0119pnie budow\u0119 paczki. Definicja pipeline'a zosta\u0142a zawarta w pliku buildspec.yml. Sama aplikacja zosta\u0142a wdro\u017cona na serwis ElasticBeanstalk. Istancja aplikacji SimpleSample potrzebuje do dzia\u0142ania bazy danych MongoDB. Jej instancja zosta\u0142a zainstalowana na wirtualnej maszynie w serwisie EC2, przy u\u017cyciu \u015brodowiska Docker oraz oficjalnego obrazu MongoDB. Ca\u0142o\u015b\u0107 tworzy dzia\u0142\u0105j\u0105c\u0105 struktur\u0119 CICD. Architektura zosta\u0142a przedstawiona poni\u017cej.",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("img",{src:s.a,className:"aws-image",alt:"aws img"}),i.a.createElement("br",null),i.a.createElement("br",null),"Publiczny adres wystawionego API to: ",i.a.createElement("a",{className:"link",href:"http://simple-sample.us-east-2.elasticbeanstalk.com"},"link"),". Testowanie jest r\xf3wnie\u017c mo\u017cliwe dzi\u0119ki narz\u0119dziu Swagger, link: ",i.a.createElement("a",{className:"link",href:"http://simple-sample.us-east-2.elasticbeanstalk.com/swagger-ui.html"},"swagger"),"."))),i.a.createElement("div",{className:"item"},i.a.createElement("h1",null,"Portfolio"),i.a.createElement("p",null,"Github: ",i.a.createElement("a",{className:"link",href:"https://github.com/Szczygiel9/Portfolio"},"link")),i.a.createElement("p",null,"Projekt tworzony w celu nauki JavaScript'u, CSS, React oraz HTML. Jest to statyczna strona internetowa b\u0119d\u0105ca odpowiednikiem CV.",i.a.createElement("br",null),"Strona zosta\u0142a zaprojektowana z dba\u0142o\u015bci\u0105 o czytelno\u015b\u0107 zar\xf3wno na urz\u0105dzeniach o szerokim jak i w\u0105skim ekranie. Do stworzenia nawigacji w g\xf3rnej belce zosta\u0142y u\u017cyte komponenty z pakietu 'react-router-dom'. Sama aplikacja zosta\u0142a wdro\u017cona na serwis GitHub Pages."),i.a.createElement("div",null,"Do zrobienia:",i.a.createElement("ul",null,i.a.createElement("li",null,"obs\u0142uga przycisku zmiany j\u0119zyka"),i.a.createElement("li",null,"uporz\u0105dkowanie styli CSS"),i.a.createElement("li",null,"poprawa responsywno\u015bci oraz stylowaniana na urz\u0105dzeniach mobilnych")))))},m=t(10),d=t(6),u="CHANGE_LANGUAGE";var p=Object(d.b)((function(e){return{aboutTitle:e.aboutTitle,projectsTitle:e.projectsTitle}}),(function(e){return{changeLanguage:function(){return e({type:u})}}}))((function(e){return i.a.createElement("div",{className:"nav"},i.a.createElement(m.b,{exact:!0,activeClassName:"active-link",to:"/"},e.aboutTitle),i.a.createElement(m.b,{activeClassName:"active-link",to:"/projects"},e.projectsTitle),i.a.createElement("button",{onClick:function(){e.changeLanguage()},className:"language-switcher"},"PL | EN"))})),w=t(7),z=Object(d.b)((function(e){return{sidebarData:e.sidebarData}}))((function(e){return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"image"}),i.a.createElement("div",{className:"sidebar-content"},i.a.createElement("div",{className:"under-lined"},e.sidebarData.personalData.title),i.a.createElement("div",{className:"sidebar-section"},i.a.createElement("div",null,e.sidebarData.personalData.name),i.a.createElement("div",null,e.sidebarData.personalData.email)),i.a.createElement("div",{className:"under-lined"},"Media"),i.a.createElement("div",{className:"sidebar-section"},i.a.createElement("div",null,e.sidebarData.mediaData.linkedin.fieldName,i.a.createElement("a",{className:"link",href:e.sidebarData.mediaData.linkedin.link},e.sidebarData.mediaData.linkedin.displayValue)),i.a.createElement("div",null,e.sidebarData.mediaData.github.fieldName," ",i.a.createElement("a",{className:"link",href:e.sidebarData.mediaData.github.link},e.sidebarData.mediaData.github.displayValue))),i.a.createElement("div",{className:"under-lined"},e.sidebarData.langData.title),i.a.createElement("div",{className:"sidebar-section"},e.sidebarData.langData.value)))})),y=function(e){var a=e.title,t=e.content;return i.a.createElement("div",{className:"section"},i.a.createElement("p",{className:"section-title"},a),t.map((function(e,a){return i.a.createElement("div",{key:a},i.a.createElement("p",{className:"experience-position"},e.position),i.a.createElement("p",{className:"experience-date"},e.dateFrom," - ",e.dateTo),i.a.createElement("div",{className:"experience-list"},e.content.map((function(e){return i.a.createElement("div",{className:"project-container",key:e.title},i.a.createElement("div",{className:"project-name"},e.title),i.a.createElement("ul",{className:"experience-list"},e.descriptionPoints.map((function(e,a){return i.a.createElement("li",{key:a},e)}))))}))))})))},k=function(e){var a=e.title,t=e.content;return i.a.createElement("div",{className:"section"},i.a.createElement("p",{className:"section-title"},a),i.a.createElement("div",null,i.a.createElement("ul",{className:"experience-list"},t.map((function(e,a){return i.a.createElement("li",{key:a},e)})))))},g=Object(d.b)((function(e){return{summary:e.summary}}))((function(e){return i.a.createElement("div",{className:"section"},i.a.createElement("p",{className:"summary"},e.summary))})),b=Object(d.b)((function(e){return{experienceTitle:e.experienceTitle,experienceItems:e.experienceItems,skillsTitle:e.skillsTitle,skillsContent:e.skillsContent,educationTitle:e.educationTitle,educationContent:e.educationContent}}))((function(e){return i.a.createElement("div",{className:"main-content"},i.a.createElement(g,null),i.a.createElement(y,{title:e.experienceTitle,content:e.experienceItems}),i.a.createElement(k,{title:e.skillsTitle,content:e.skillsContent}),i.a.createElement(k,{title:e.educationTitle,content:e.educationContent}))})),h=function(){return i.a.createElement("div",{className:"about"},i.a.createElement(z,null),i.a.createElement(b,null))};var j=function(){return i.a.createElement(m.a,{basename:"/Portfolio/"},i.a.createElement("div",{className:"App"},i.a.createElement(p,null),i.a.createElement("div",{className:"main-container"},i.a.createElement(w.a,{exact:!0,path:"/",component:h}),i.a.createElement(w.a,{path:"/projects",component:function(){return i.a.createElement(c,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=t(13),f={fieldName:"GitHub: ",link:"https://github.com/Szczygiel9",displayValue:"szczygiel9"},v={currentLang:"pl",aboutTitle:"O mnie",projectsTitle:"Projekty warte wspomnienia",sidebarData:{personalData:{title:"Dane osobowe",name:"Daniel Szczygielski",email:"szczygielski.daniel38@gmail.com"},mediaData:{title:"Media",linkedin:{fieldName:"LinkedIn: ",link:"https://www.linkedin.com/in/daniel-szczygielski-50b8a4154/",displayValue:"Profil"},github:f},langData:{title:"J\u0119zyk",value:"Angielski w stopniu umo\u017cliwiaj\u0105cym p\u0142ynn\u0105 komunikacje z cz\u0142onkami zespo\u0142u"}},summary:"Jestem programist\u0105 z ponad trzyletnim do\u015bwiadczeniem w technologiach z rodziny Java. Pracuj\u0119 w sektorze ubezpiecze\u0144 i bankowo\u015bci. Jestem zainteresowany rozwojem na stanowisku Java Developer z elementami zarz\u0105dzania zespo\u0142em.",experienceTitle:"Do\u015bwiadczenie zawodowe",experienceItems:[{dateFrom:"Listopad 2021",dateTo:"Obecnie",position:"Lider techniczny - Sollers Consulting",content:[{title:"System s\u0142u\u017c\u0105cy do sprzeda\u017cy oraz obs\u0142ugi polis ubezpieczeniowych",descriptionPoints:["Projektowanie rozwi\u0105zania Multitenancy w istniej\u0105cym systemie","Tworzenie i analizowanie zada\u0144 dla zespo\u0142u developerskiego","Przeprowadzanie spotka\u0144 wprowadzaj\u0105cych i wyja\u015bniaj\u0105cych zespo\u0142owi zadania techniczne","Uzgadnianie z klientem konfiguracji integracji mi\u0119dzy systemami","Wsparcie techniczne zespo\u0142u developerskiego sk\u0142adaj\u0105cego si\u0119 z pi\u0119ciu programist\xf3w","Wsparcie klienta w testach akceptacyjnych","Wsparcie we wdro\u017ceniach systemu na \u015brodowiska testowe, pre-produkcyjne oraz produkcyjne"]}]},{dateFrom:"Listopad 2018",dateTo:"Pa\u017adziernik 2021",position:"Developer - Sollers Consulting",content:[{title:"System s\u0142u\u017c\u0105cy do sprzeda\u017cy oraz obs\u0142ugi polis ubezpieczeniowych",descriptionPoints:["Implementacja, utrzymanie oraz konserwacja systemu w j\u0119zyku Java i framework'u Angular","Projektowanie rozwi\u0105za\u0144 na podstawie wymaga\u0144 biznesowych","Wprowadzanie nowych cz\u0142onk\xf3w zespo\u0142u do projektu"]},{title:"Narz\u0119dzie do wydobywania danych z systemu Guidewire na rzecz BI",descriptionPoints:["Przygotowanie zada\u0144 implementacyjnych na podstawie istniej\u0105cej aplikacji PoC","Implementacja cze\u015b\u0107i backendowej w jezyku Python na podstawie PoC, w tym REST API z wykorzystaniem Django","Implementacja cz\u0119\u015bci frontendowej w React"]},{title:"R&D",descriptionPoints:["Implementacja wymaga\u0144 biznesowych w technologii Guidewire","Analiza oraz projektowanie rozwi\u0105za\u0144 na podstawie dokumentacji oraz wymaga\u0144 klienta ko\u0144cowego","Implementacja us\u0142ug serwisowych typu SOAP"]}]},{dateFrom:"Maj 2018",dateTo:"Sierpie\u0144 2018",position:"Praktykant - Asseco Business Solutions",content:[{title:"Praktyki",descriptionPoints:["Tworzenie modelu dedykowanego do komunikacji typu REST","Tworzenie zaawansowanych serwis\xf3w typu REST oraz dokumentowanie go za pomoc\u0105 biblioteki Swagger","Tworzenie test\xf3w jednostkowych wraz z weryfikacj\u0105 przetwarzania r\xf3wnoleg\u0142ego"]}]}],skillsTitle:"Umiej\u0119tno\u015bci",skillsContent:["Zarz\u0105dzanie zespo\u0142em zgodnie z praktykami Servant Leadership","Znajomo\u015b\u0107 j\u0119zyka Java oraz framework'a Spring","Sprawne pos\u0142ugiwanie si\u0119 systemem kontroli wersji GIT","Praktyczna znajomo\u015b\u0107 projektowania oraz implementacji serwis\xf3w typu REST","Praca z narz\u0119dziami: IntelliJ, Jenkins, Jira, Kubernetes","Znajomo\u015b\u0107 zagadnie\u0144 mapowania obiektowo relacyjnego, w tym freamework'a Hibernate","Tworzenie test\xf3w jednostkowy przy u\u017cyciu biblioteki JUnit oraz Mockito","Znajomo\u015b\u0107 sk\u0142adni SQL","\u015awiadome wykorzystwyanie wzorc\xf3w projektowych, dobrych praktyk oraz refactoringu","W trakcie nauki: Docker, AWS, JavaScript, React"],educationTitle:"Wykszta\u0142cenie",educationContent:["2015-2019 Politechnika Lubelska, Informatyka, tytu\u0142: in\u017cynier"]},S={currentLang:"eng",aboutTitle:"About",projectsTitle:"Projects worth to mention",sidebarData:{personalData:{title:"Personal data",name:"Daniel Szczygielski",email:"szczygielski.daniel38@gmail.com"},mediaData:{title:"Media",linkedin:{fieldName:"LinkedIn: ",link:"https://www.linkedin.com/in/daniel-szczygielski-50b8a4154/",displayValue:"Profile"},github:f},langData:{title:"Language",value:"English at the level that allows fluent communication with team members"}},summary:"I'm developer with over three years of expirence in Java family technologies. I work in insurance and banking sectors. I'm interested in development as a Java Developer with team management responsibilities",experienceTitle:"Experience",experienceItems:[{dateFrom:"November 2021",dateTo:"Currently",position:"Technical leader - Sollers Consulting",content:[{title:"Core insurance system",descriptionPoints:["Multitenancy solution design in existing system","Creation and preparation tasks for development team","Conduction of meetings for technical tasks introduction and explanation for the team","Reconcilation the system integration configuration with the client","Support development team consisting of five developers","Support client in user acceptance tests","Support in test, pre-production and production deployments"]}]},{dateFrom:"November 2018",dateTo:"October 2021",position:"Developer - Sollers Consulting",content:[{title:"Core insurance system",descriptionPoints:["Implementation, maintenance and bugfixing in Java and Angular framework","Solutions design based on business requirements","New team members introduction into the project"]},{title:"Data extraction tool from Guidewire system for BI needs",descriptionPoints:["Implementation tasks preparation based on existing PoC application","Backend part implementation with Python and Django library","Frontend part implementation with React"]},{title:"R&D",descriptionPoints:["Business requirements implementation in Guidewire technology","Analysis and design of soludions based on business requirements and documentation","Implementation of SOAP services"]}]},{dateFrom:"May 2018",dateTo:"August 2018",position:"Intern - Asseco Business Solutions",content:[{title:"Intership",descriptionPoints:["Creation of dedicated model for REST communication","Creation of advanced REST services and documenting it with Swagger library","Unit test creation with parallel computing verification"]}]}],skillsTitle:"Skills",skillsContent:["Team management in accordance with Servant Leadership practices","Java and Spring framework knowledge","Efficient use of version control system GIT","Practical knowledge of design and implementation REST services","Work with tools: IntelliJ, Jenkins, Jira","Knowledge of  object-relation mapping with Hibernate framework","Unit test creation with JUnit and Mockito libraries","SQL syntax knowledge","Conscious usage of design patterns, good practices and refactoring","Under studying: Docker, AWS, JavaScript, React"],educationTitle:"Education",educationContent:["2015-2019 Lublin University of Technology, Combuter science, title: Bachelor of Science"]},D=v;var N=function(e){switch(console.log(e),e){case"pl":return v;case"eng":return S;default:return null}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;if((arguments.length>1?arguments[1]:void 0).type===u){var a="pl"===e.currentLang?"eng":"pl";return N(a)}return e},P=Object(E.b)(T);r.a.render(i.a.createElement(d.a,{store:P},i.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.df2c7d11.chunk.js.map
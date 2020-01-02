(window["webpackJsonpsczygiels-portfolio"]=window["webpackJsonpsczygiels-portfolio"]||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/aws.d87ac8cd.jpg"},18:function(e,a,t){e.exports=t(30)},23:function(e,a,t){},24:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(14),l=t.n(o),r=(t(23),t(24),t(15)),c=t.n(r),s=function(e){e.projects;return i.a.createElement("div",{className:"item-list"},i.a.createElement("div",{className:"item"},i.a.createElement("h1",null,"SimpleSample"),i.a.createElement("p",null,"Github: ",i.a.createElement("a",{className:"link",href:"https://github.com/Szczygiel9/SimpleSample"},"link")),i.a.createElement("p",null,"Aplikacja pomagaj\u0105ca wype\u0142nia\u0107 baz\u0119 danych SQL testowymi danymi. Po podaniu struktury tabeli w postaci nazwy tabeli, nazw kolumn, typ\xf3w kolumn, opcjonalnych typ\xf3w instynktownych oraz potrzebnej liczby wierszy do wygenerowania u\u017cytkownik otrzymuje zapytanie INSERT, kt\xf3re wystarczy zaaplikowa\u0107 do swojej bazy danych."),i.a.createElement("p",null,"Projekt zosta\u0142 stworzony przy u\u017cyciu j\u0119zyka Java. Komunikacja zosta\u0142a zapewniona poprzez REST api. G\u0142\xf3wnym endpoint'em dla u\u017cytkownika jest '/processTable', kt\xf3ry przyjmuje w ciele zapytania struktur\u0119 tabeli oraz zwraca po\u017c\u0105dany kod SQL. Poza typem kolumny mo\u017cliwe jest podanie typu instynktowego. Jest jedna z warto\u015bci predefiniowanych typ\xf3w, dla kt\xf3rych zostanie wczytana warto\u015b\u0107 ze zbioru przyk\u0142adowych danych (np. Anna dla typu 'name', Microsoft dla typu 'company). W celu utrwalenia przyk\u0142adowych danych zosta\u0142a wykorzystana baza danych NoSQL MongoDB."),i.a.createElement("p",null,"Biblioteki wykorzystane w tym projekcie to:",i.a.createElement("ul",null,i.a.createElement("li",null,"Spring wraz z modu\u0142ami: Core, Rest, Data oraz Spring Boot"),i.a.createElement("li",null,"Lombok"),i.a.createElement("li",null,"Apache Commons"),i.a.createElement("li",null,"Swagger"),i.a.createElement("li",null,"JUnit"),i.a.createElement("li",null,"Jackson"))),i.a.createElement("p",null,"Start serwera mo\u017ce si\u0119 odby\u0107 z profilem data-init - \u0142aduje przyk\u0142adowe dane (np. imiona, miasta) do bazy, z kt\xf3r\u0105 komunikuje si\u0119 aplikacja serwerowa. Dane do za\u0142adowania s\u0105 wcze\u015bniej przygotowane w postaci plik\xf3w tekstowych. Utrwalenie tych danych zosta\u0142o zaimplementowane przy u\u017cyciu Spring\u2019owych auto-repozytor\xf3w, kt\xf3re dostarczaj\u0105 podstawowe operacje CRUD."),i.a.createElement("p",null,"Gotowa aplikacja zosta\u0142a wdro\u017cona na platform\u0119 AWS. W celu zbudowania aplikacji oraz jej deploymentu, zosta\u0142 u\u017cyty serwis AWS CodePipeline wraz z narz\u0119dziami CodeBuild oraz CodeDeploy. Ka\u017cdy wypchni\u0119ty commit do repozytorium GitHub wyzwala testy a nast\u0119pnie budow\u0119 paczki. Definicja pipeline'a zosta\u0142a zawarta w pliku buildspec.yml. Sama aplikacja zosta\u0142a wdro\u017cona na serwis ElasticBeanstalk. Istancja aplikacji SimpleSample potrzebuje do dzia\u0142ania bazy danych MongoDB. Jej instancja zosta\u0142a zainstalowana na wirtualnej maszynie w serwisie EC2, przy u\u017cyciu \u015brodowiska Docker oraz oficjalnego obrazu MongoDB. Ca\u0142o\u015b\u0107 tworzy dzia\u0142\u0105j\u0105c\u0105 struktur\u0119 CICD. Architektura zosta\u0142a przedstawiona poni\u017cej.",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("img",{src:c.a,className:"aws-image",alt:"aws img"}),i.a.createElement("br",null),i.a.createElement("br",null),"Publiczny adres wystawionego API to: ",i.a.createElement("a",{className:"link",href:"http://simple-sample.us-east-2.elasticbeanstalk.com"},"link"),". Testowanie jest r\xf3wnie\u017c mo\u017cliwe dzi\u0119ki narz\u0119dziu Swagger, link: ",i.a.createElement("a",{className:"link",href:"http://simple-sample.us-east-2.elasticbeanstalk.com/swagger-ui.html"},"swagger"),".")),i.a.createElement("div",{className:"item"},i.a.createElement("h1",null,"Portfolio"),i.a.createElement("p",null,"Github: ",i.a.createElement("a",{className:"link",href:"https://github.com/Szczygiel9/Portfolio"},"link")),i.a.createElement("p",null,"Projekt tworzony w celu nauki JavaScript'u, CSS, React oraz HTML. Jest to statyczna strona internetowa b\u0119d\u0105ca odpowiednikiem CV.",i.a.createElement("br",null),"Strona zosta\u0142a zaprojektowana z dba\u0142o\u015bci\u0105 o czytelno\u015b\u0107 zar\xf3wno na urz\u0105dzeniach o szerokim jak i w\u0105skim ekranie. Do stworzenia nawigacji w g\xf3rnej belce zosta\u0142y u\u017cyte komponenty z pakietu 'react-router-dom'. Sama aplikacja zosta\u0142a wdro\u017cona na serwis GitHub Pages."),i.a.createElement("p",null,"Do zrobienia:",i.a.createElement("ul",null,i.a.createElement("li",null,"obs\u0142uga przycisku zmiany j\u0119zyka"),i.a.createElement("li",null,"uporz\u0105dkowanie styli CSS"),i.a.createElement("li",null,"poprawa responsywno\u015bci oraz stylowaniana na urz\u0105dzeniach mobilnych")))))},m=t(8),u=function(){return i.a.createElement("div",{className:"nav"},i.a.createElement(m.b,{exact:!0,activeClassName:"active-link",to:"/"},"O mnie"),i.a.createElement(m.b,{activeClassName:"active-link",to:"/projects"},"Projekty warte wspomnienia"),i.a.createElement("button",{className:"language-switcher"},"PL | EN"))},p=t(5),w={personalData:{title:"Dane osobowe",name:"Daniel Szczygielski",email:"szczygielski.daniel38@gmail.com"},mediaData:{title:"Media",linkedin:{fieldName:"LinkedIn: ",link:"https://www.linkedin.com/in/daniel-szczygielski-50b8a4154/",displayValue:"Profil"},github:{fieldName:"GitHub: ",link:"https://github.com/Szczygiel9",displayValue:"szczygiel9"}},langData:{title:"J\u0119zyk",value:"Angielski w stopniu umo\u017cliwiaj\u0105cym p\u0142ynn\u0105 komunikacje z cz\u0142onkami zespo\u0142u"}},z=function(){return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"image"}),i.a.createElement("div",{className:"sidebar-content"},i.a.createElement("div",{className:"under-lined"},w.personalData.title),i.a.createElement("div",{className:"sidebar-section"},i.a.createElement("div",null,w.personalData.name),i.a.createElement("div",null,w.personalData.email)),i.a.createElement("div",{className:"under-lined"},"Media"),i.a.createElement("div",{className:"sidebar-section"},i.a.createElement("div",null,w.mediaData.linkedin.fieldName,i.a.createElement("a",{className:"link",href:w.mediaData.linkedin.link},w.mediaData.linkedin.displayValue)),i.a.createElement("div",null,w.mediaData.github.fieldName," ",i.a.createElement("a",{className:"link",href:w.mediaData.github.link},w.mediaData.github.displayValue))),i.a.createElement("div",{className:"under-lined"},w.langData.title),i.a.createElement("div",{className:"sidebar-section"},w.langData.value)))},d=function(e){var a=e.title,t=e.content;return i.a.createElement("div",{className:"section"},i.a.createElement("p",{className:"section-title"},a),t.map((function(e){return i.a.createElement("div",null,i.a.createElement("p",{className:"experience-position"},e.position),i.a.createElement("p",{className:"experience-date"},e.dateFrom," - ",e.dateTo),i.a.createElement("ul",{className:"experience-list"},e.descriptionPoints.map((function(e){return i.a.createElement("li",null,e)}))))})))},y=[{dateFrom:"Listopad 2019",dateTo:"Obecnie",position:"Developer - Sollers Consulting",descriptionPoints:["Praca w metodyce Scrum","Praca w mi\u0119dzynarodowym zespole","Czynny udzia\u0142 w procesie code review","Implementacja wymaga\u0144 biznesowych w technologii Guidewire","Aktywne uczestnictwo w ceremoniach Agile prowadzonych w j\u0119zyku angielskim","Implementacja us\u0142ug serwisowych typu SOAP","Wyszukiwanie rozwi\u0105za\u0144 na podstawie dokumentacji","Tworzenie dokumentacji technicznej"]},{dateFrom:"Maj 2018",dateTo:"Sierpie\u0144 2019",position:"Praktykant - Asseco Business Solutions",descriptionPoints:["Tworzenie modelu dedykowanego do komunikacji typu REST","Tworzenie zaawansowanych serwis\xf3w typu REST","Hibernate - u\u017cycie biblioteki na potrzeby pobierania odpowiednich danych dziedzinowych","Spring - u\u017cycie biblioteki na potrzeby tworzenia serwis\xf3w dziedzinowych oraz typu REST","Swagger - konfiguracja i u\u017cycie biblioteki dokumentuj\u0105cej serwisy typu REST","Tworzenie test\xf3w jednostkowych wraz z weryfikacj\u0105 przetwarzania r\xf3wnoleg\u0142ego"]}],k=["Dobra znajomo\u015b\u0107 j\u0119zyka Java oraz framework'a Spring","Sprawne pos\u0142ugiwanie si\u0119 systemem kontroli wersji GIT","Praktyczna znajomo\u015b\u0107 projektowania oraz implementacji serwis\xf3w typu REST","Praca z narz\u0119dziami: IntelliJ, Jenkins, Jira","Znajomo\u015b\u0107 zagadnie\u0144 mapowania obiektowo relacyjnego, w tym freamework'a Hibernate","Tworzenie test\xf3w jednostkowy przy u\u017cyciu biblioteki JUnit oraz Mockito","Znajomo\u015b\u0107 sk\u0142adni SQL","\u015awiadome wykorzystwyanie wzorc\xf3w projektowych, dobrych praktyk oraz refactoringu","W trakcie nauki: Docker, AWS, JavaScript, React"],j=function(e){var a=e.title,t=e.content;return i.a.createElement("div",{className:"section"},i.a.createElement("p",{className:"section-title"},a),i.a.createElement("div",null,i.a.createElement("ul",{className:"experience-list"},t.map((function(e){return i.a.createElement("li",null,e)})))))},E=function(){return i.a.createElement("div",{className:"section"},i.a.createElement("p",{className:"summary"},"Jestem programist\u0105 z ponad rocznym do\u015bwiadczeniem w technologiach z rodziny Java. Pracuj\u0119 w sektorze ubezpiecze\u0144 oraz implementuj\u0119 rozwi\u0105zania systemu Guidewire. Jestem zainteresowany rozwojem na stanowisku Java developer z elementami funkcji DevOps."))},b=function(){return i.a.createElement("div",{className:"main-content"},i.a.createElement(E,null),i.a.createElement(d,{title:"Do\u015bwiadczenie zawodowe",content:y}),i.a.createElement(j,{title:"Umiej\u0119tno\u015bci",content:k}),i.a.createElement(j,{title:"Wykszta\u0142cenie",content:["2015-2019 Politechnika Lubelska, informatyka, tytu\u0142: in\u017cynier"]}))},g=function(){return i.a.createElement("div",{className:"about"},i.a.createElement(z,null),i.a.createElement(b,null))},h=[{title:"Simple sample",content:"Simple-sample Springowe modu\u0142y i biblioteki: Core, REST, Lombok, Apache Commons... Utrwalenie danych zosta\u0142o zaimplementowane przy u\u017cyciu Spring\u2019owych auto-repozytor\xf3w, kt\xf3re dostarczaj\u0105 podstawowe operacje CRUD. Przyk\u0142adowe dane do generowania wyj\u015bciowych zapyta\u0144 SQL s\u0105 \u0142adowane z plik\xf3w tekstowych przy uruchomieniu aplikacji.\u0141adowanie danych z pliku tekstowegoprofile z data init, mock i devNa podstawie zbudowanej paczki jar zosta\u0142 stworzony obraz Docker. W celu sprawniejszego budowania obrazu w trakcie rozwijania aplikacji zosta\u0142 u\u017cyty Dockerfile Maven plugin. Do poprawnego aplikacji dzia\u0142ania niezb\u0119dna jest baza MongoDB, kt\xf3ra zosta\u0142a dostarczona r\xf3wnie\u017c poprzez \u015brodowisko Docker. Kontener aplikacji i bazy danych zosta\u0142y skomponowane przy u\u017cyciu docker-compose, a nast\u0119pnie wdro\u017cone na platform\u0119 Amazon Web Services. Publiczny adres wystawionego api to: http://ec2-3-134-94-181.us-east-2.compute.amazonaws.com. Przyk\u0142adowe request\u2019y testuj\u0105ce mo\u017cna znale\u017c\u0107 <tutaj"},{title:"Portfolio",content:"Sample content2"}];var S=function(){return i.a.createElement(m.a,{basename:"/Portfolio/"},i.a.createElement("div",{className:"App"},i.a.createElement(u,null),i.a.createElement("div",{className:"main-container"},i.a.createElement(p.a,{exact:!0,path:"/",component:g}),i.a.createElement(p.a,{path:"/projects",component:function(){return i.a.createElement(s,{projects:h})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.06779730.chunk.js.map
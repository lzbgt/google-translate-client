"use strict";try{angular.module("wixAppTranslations")}catch(e){angular.module("wixAppTranslations",["pascalprecht.translate"])}angular.module("wixAppTranslations").config(["$translateProvider",function(a){var b={general:{YO:"¡Hola"}};a.translations("es",b),a.translations(b),a.preferredLanguage&&a.preferredLanguage("es")}]).value("preferredLanguage","es");
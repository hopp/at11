export class Config {
    public port: number = process.env.PORT as unknown as number || 54321;
    public cacheExpiration = 2 * 60 * 60 * 1000; // 2h
    public parserTimeout = 10 * 1000; // 10s
    public restaurants: Array<{ id: number, name: string, url: string, parserName: string}>  = [
        { id: 11, name: "Kaša", url: "https://restauracie.sme.sk/restauracia/kasa-2_8386-petrzalka_664/denne-menu", parserName: "kasa" },
        { id: 3, name: "ITB", url: "http://www.citycantina.sk/prevadzka/1", parserName: "itb" },
        { id: 4, name: "Alfa", url: "http://restauracie.sme.sk/restauracia/restauracia-alfa_2512-petrzalka_664/denne-menu", parserName: "alfa" },
        { id: 12, name: "Hall of Kings", url: "https://menucka.sk/denne-menu/bratislava/hall-of-kings", parserName: "hallofkings" },
        { id: 5, name: "Škôlka", url: "http://jedalen.vysnivany.sk/ukazka-strany", parserName: "skolka" },
        { id: 2, name: "Giuliano", url: "http://www.giuliano.sk/-denne-menu", parserName: "giuliano" },
        { id: 6, name: "Pizza Pazza", url: "https://www.pizzeriaviennagate.sk/", parserName: "pizzapazza" },
        { id: 7, name: "Kamenica - Corleone Pizza", url: "http://www.pizzacorleone.sk/obedove-menu.html", parserName: "kamenica" },
        { id: 9, name: "Engerau restaurant", url: "https://www.zomato.com/sk/bratislava/engerau-restaurant-petr%C5%BEalka-bratislava-v/denn%C3%A9-menu", parserName: "engerau" },
        { id: 10, name: "Lokálka", url: "http://www.lokalka.sk/kopcianska-2/", parserName: "lokalka" },
        // tslint:disable-next-line: max-line-length
        { id: 13, name: "Tiffany", url: "https://www.zomato.com/sk/bratislava/pizzeria-tiffany-petr%C5%BEalka-bratislava-v/denn%C3%A9-menu", parserName: "tiffany" }
    ];
}

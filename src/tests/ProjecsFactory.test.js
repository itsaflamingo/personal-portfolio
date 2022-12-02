import projects from "../components/ProjectsFactory";

describe('projects factory', () => {
    it('array length is equal to 4', () => {
        const length = projects.length;

        expect(length).toBe(4);
    })
    it('array contains wheres waldo project', () => {
        const waldo = projects[0];

        expect(waldo.name).toBe("Where's Waldo");
    })
    it('array contains battleship project', () => {
        const battleship = projects[1];

        expect(battleship.name).toBe("Battleship");
    })
    it('array contains shopping cart project', () => {
        const shoppingCart = projects[2];

        expect(shoppingCart.name).toBe("Shopping Cart");
    })
    it('array contains Weather App project', () => {
        const weatherApp = projects[3];

        expect(weatherApp.name).toBe("Weather App");
    })
})
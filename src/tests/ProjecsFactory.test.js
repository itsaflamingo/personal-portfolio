import projects from "../components/ProjectsFactory";

describe('projects factory', () => {
    it('array length is equal to 4', () => {
        let length = projects.length;

        expect(length).toBe(4);
    })
})